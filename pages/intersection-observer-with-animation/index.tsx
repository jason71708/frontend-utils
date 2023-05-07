import React from 'react';
import DefaultLayout from 'components/global/DefaultPageLayout';

const sectionIds = [
  's1',
  's2',
  's3',
  's4',
  's5',
  's6',
  's7',
];
const initialIntersectsStatus: { [key: string]: boolean; } = {};
sectionIds.forEach(id => initialIntersectsStatus[id] = false);

const IntersetionObserverWithAnimation = () => {
  const observerRef = React.useRef<IntersectionObserver | null>(null);
  const elementMap = React.useRef<Map<string, HTMLDivElement>>(new Map());
  const [intersectsStatus, setIntersectionsStatus] = React.useState(initialIntersectsStatus);

  const createIntersectionObeserverInstance = () => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        setIntersectionsStatus((intersectsStatus) => {
          return { ...intersectsStatus, [entry.target.id]: entry.isIntersecting };
        });
      });
    });
    elementMap.current.forEach((el) => {
      observerRef.current?.observe(el);
    });
  };

  const registerElement = React.useCallback((el: HTMLDivElement) => {
    if (el) {
      elementMap.current.set(el.id, el);
    }
  }, []);

  React.useEffect(() => {
    createIntersectionObeserverInstance();

    return () => {
      observerRef.current?.disconnect();
      observerRef.current = null;
    };
  }, []);

  return (
    <DefaultLayout
      title="Intersetion Observer With Animation"
      description="Use the Intersection Observer API to trigger some animations when scrolling the page."
    >
      <p className="my-2">Should check the compatibility if you want to support the old version browser.</p>
      <section className="h-screen bg-slate-800 grid place-items-center place-content-center">
        <div id={sectionIds[0]} ref={registerElement} className={`py-8 transition-all duration-700 ${intersectsStatus[sectionIds[0]] ? 'opacity-100' : 'opacity-0 -translate-x-full blur'}`}>
          <h2 className="text-6xl text-white">Hi, I am a software engineer!</h2>
        </div>
      </section>
      <section className="h-screen bg-slate-800 grid place-items-center place-content-center">
        <div id={sectionIds[1]} ref={registerElement} className={`py-8 transition-all duration-700 ${intersectsStatus[sectionIds[1]] ? 'opacity-100' : 'opacity-0 -translate-x-full blur'}`}>
          <h2 className="text-5xl text-white">I am proficent in frontend development.</h2>
          <p className="text-4xl text-white my-6">With building hundreds of web applications experience.</p>
        </div>
      </section>
      <section className="h-screen bg-slate-800 grid place-items-center place-content-center">
        <div id={sectionIds[2]} ref={registerElement} className={`py-8 transition-all duration-700 ${intersectsStatus[sectionIds[2]] ? 'opacity-100' : 'opacity-0 -translate-x-full blur'}`}>
          <h2 className="text-6xl text-white">My skills</h2>
        </div>
        <div className="flex justify-between align-middle">
          <div id={sectionIds[3]} ref={registerElement} className={`p-4 mx-8 bg-slate-500 flex justify-center rounded-md text-white transition-all duration-700 delay-100 ${intersectsStatus[sectionIds[3]] ? 'opacity-100' : 'opacity-0 -translate-x-full blur'}`}>TypScript</div>
          <div id={sectionIds[4]} ref={registerElement} className={`p-4 mx-8 bg-slate-500 flex justify-center rounded-md text-white transition-all duration-700 delay-200 ${intersectsStatus[sectionIds[4]] ? 'opacity-100' : 'opacity-0 -translate-x-full blur'}`}>React.js</div>
          <div id={sectionIds[5]} ref={registerElement} className={`p-4 mx-8 bg-slate-500 flex justify-center rounded-md text-white transition-all duration-700 delay-300 ${intersectsStatus[sectionIds[5]] ? 'opacity-100' : 'opacity-0 -translate-x-full blur'}`}>Next.js</div>
        </div>
      </section>
      <section className="h-screen bg-slate-800 grid place-items-center place-content-center">
        <div id={sectionIds[6]} ref={registerElement} className={`py-8 transition-all duration-700 ${intersectsStatus[sectionIds[6]] ? 'opacity-100' : 'opacity-0 -translate-x-full blur'}`}>
          <h2 className="text-6xl text-white">Thank you for reading!</h2>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default IntersetionObserverWithAnimation;