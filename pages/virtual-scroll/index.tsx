import React from "react";
import PageTitle from "components/PageTitle";
import { fetchItems } from "utils";

const LIMIT = 50;
const BUFFER = LIMIT * 3;
enum LoadingType {
  Prev,
  Next,
  Idle,
}
const loadingQueue: LoadingType[] = [];
const RowHeight = 40;

const VirtualScroll = () => {
  const [items, setItems] = React.useState<string[]>([]);
  const overlayRef = React.useRef<HTMLDivElement>(null);
  const [upperBoundary, setUpperBoundary] = React.useState(0);
  const [lowerBoundary, setLowerBoundary] = React.useState(BUFFER);
  const [isLoading, setIsLoading] = React.useState<LoadingType>(LoadingType.Idle);
  const currentScrollTopPosition = React.useRef(0);

  const fetchPrevItems = async (offset: number) => {
    setIsLoading(LoadingType.Prev);
    console.log('fetchPrevItems', offset);
    const res = await fetchItems(offset, LIMIT);
    loadingQueue.push(LoadingType.Prev);
    setItems([...res, ...items.slice(0, BUFFER - LIMIT)]);
    setIsLoading(LoadingType.Idle);
  };

  const fetchNextItems = async (offset: number) => {
    setIsLoading(LoadingType.Next);
    console.log('fetchNextItems', offset);
    const res = await fetchItems(offset, LIMIT);
    loadingQueue.push(LoadingType.Next);
    setItems([...items.slice(-(BUFFER - LIMIT)), ...res]);
    setIsLoading(LoadingType.Idle);
  };

  const handleScroll = (target: HTMLDivElement) => {
    if (isLoading !== LoadingType.Idle) return;

    const scrollTop = Math.round(target.scrollTop);
    const clientHeight = Math.round(target.clientHeight);
    const scrollHeight = Math.round(target.scrollHeight);

    const isUp = scrollTop < currentScrollTopPosition.current;

    if (isUp && scrollTop === 0) {
      if (upperBoundary - LIMIT < 0) return;
      fetchPrevItems(upperBoundary - LIMIT).then(() => {
        setUpperBoundary(upperBoundary - LIMIT);
        setLowerBoundary(lowerBoundary - LIMIT);
      });
    } else if (!isUp && scrollTop + clientHeight >= scrollHeight) {

      fetchNextItems(lowerBoundary).then(() => {
        setUpperBoundary(upperBoundary + LIMIT);
        setLowerBoundary(lowerBoundary + LIMIT);
      });
    }
    currentScrollTopPosition.current = scrollTop;
  };

  React.useEffect(() => {
    setIsLoading(LoadingType.Next);
    fetchItems(0, BUFFER)
      .then(res => {
        setItems(res);
        setIsLoading(LoadingType.Idle);
      });
  }, []);

  React.useEffect(() => {
    if (loadingQueue.length === 0) return;
    if (overlayRef.current === null) return;
    const loadType = loadingQueue.shift();
    if (loadType === LoadingType.Prev) {
      overlayRef.current.scrollTo(0, (LIMIT - 1) * RowHeight);
      console.log(`fetch complete: CurrentItem ${items[0]} ~ ${items[items.length - 1]}`);
    } else if (loadType === LoadingType.Next) {
      overlayRef.current.scrollTo(0, overlayRef.current.scrollTop + RowHeight);
      console.log(`fetch complete: CurrentItem ${items[0]} ~ ${items[items.length - 1]}`);
    }
  }, [items]);

  return (
    <div className="px-4">
      <PageTitle title="Virtual Scroll" />
      <h1 className="text-3xl font-bold my-4">Virtual Scroll</h1>
      <p className="my-2">Combining the best from pagination and infinite scroll to enhance user experience and performance</p>
      <div
        ref={overlayRef}
        className="border-black border-2"
        style={{ height: '80vh', overflow: 'auto' }}
        onScroll={e => handleScroll(e.target as HTMLDivElement)}
      >
        {isLoading === LoadingType.Prev && <h3>Loading</h3>}
        {items.map((item) => (
          <div key={item} className="py-2">
            {item}
          </div>
        ))}
        {isLoading === LoadingType.Next && <h3>Loading</h3>}
      </div>
    </div>
  );
};

export default VirtualScroll;