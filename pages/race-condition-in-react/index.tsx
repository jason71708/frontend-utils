import React from "react";
import PageTitle from "components/PageTitle";
import { unbalanceFetchItems } from "utils";

const LIMIT = 10;
const ReactRaceCondition = () => {
  const [items, setItems] = React.useState<string[]>([]);
  const [loading, setLoading] = React.useState(false)
  const [items2, setItems2] = React.useState<string[]>([]);
  const [loading2, setLoading2] = React.useState(false)
  const [page, setPage] = React.useState(0)

  React.useEffect(() => {
    setLoading(true);
    (async () => {
      const items = await unbalanceFetchItems(page * LIMIT, LIMIT)
      setItems(items)
      setLoading(false);
    })();
  }, [page])

  React.useEffect(() => {
    setLoading2(true);
    let abort = false;
    (async () => {
      const items = await unbalanceFetchItems(page * LIMIT, LIMIT)
      if (abort) return;
      setItems2(items)
      setLoading2(false);
    })();

    // If using fetch API, AbortController can also cancel the request.

    return () => {
      abort = true
    }
  }, [page])

  return (
    <div className="px-4">
      <PageTitle title="Race Condition In React" />
      <h1 className="text-3xl font-bold my-4">Race Condition In React</h1>
      <p className="my-2">The first API response may arrive after the second API response, so the final state would be the first API response. It should only mutate the state by the last API.</p>
      <button onClick={() => setPage(Math.max(page - 1, 0))} className="py-2 px-8">-</button>
      <span>Page: {page}</span>
      <button onClick={() => setPage(page + 1)} className="py-2 px-8">+</button>
      <div className="flex">
        <div className="flex-1">
          <h2 className="my-4">Problem</h2>
          {loading && <p className="mb-4">Loading...</p>}
          <ol>
            {items.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </div>
        <div className="flex-1">
          <h2 className="my-4">Solved</h2>
          {loading2 && <p className="mb-4">Loading...</p>}
          <ol>
            {items2.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  )
}

export default ReactRaceCondition;
