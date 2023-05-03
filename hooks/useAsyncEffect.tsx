import React from "react";

/**
 * Still founding out usage scenarios...
 * @param effectFn
 * @param cleanEffectFn 
 * @param deps 
 */
const useAsyncEffect = (
  effectFn: () => (Promise<unknown> | void),
  cleanEffectFn: () => (Promise<unknown> | void),
  deps?: ReadonlyArray<unknown>,
) => {
  const isMounted = React.useRef(false);

  React.useEffect(() => {
    isMounted.current = true;
    console.log('useAsyncEffect: mounted')
    return () => {
      isMounted.current = false;
      console.log('useAsyncEffect: unmounted')
    };
  }, []);

  React.useEffect(() => {
    let ignore = false, effectComplete = false;
    console.log('useAsyncEffect: useEffect');

    (async () => {
      await effectFn()
      effectComplete = true;
      if (ignore || !isMounted.current) {
        cleanEffectFn()
      }
    })()

    return () => {
      ignore = true;
      console.log('useAsyncEffect: cleanEffect');
      if (effectComplete) {
        cleanEffectFn()
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}

export default useAsyncEffect;
