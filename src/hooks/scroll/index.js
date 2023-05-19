import { useState, useRef, useLayoutEffect } from 'react';

const isBrowser = typeof window !== 'undefined';

function getScrollPosition({ element, useWindow }) {
  if (!isBrowser) return { x: 0, y: 0 };
  if (useWindow) return { x: window.scrollX, y: window.scrollY };

  const target = element ? element.current : document.body;
  const position = target.getBoundingClientRect();

  return { x: position.left, y: position.top };
}

export function useScrollPosition(
  effect,
  deps,
  { element, useWindow, wait } = {}
) {
  const position = useRef(getScrollPosition({ useWindow }));

  const throttleTimeout = useRef(null);

  const callBack = () => {
    const currPos = getScrollPosition({ element, useWindow });
    effect({ prevPos: position.current, currPos });
    position.current = currPos;
    throttleTimeout.current = null;
  };

  useLayoutEffect(() => {
    const handleScroll = () => {
      if (!wait) callBack();

      if (throttleTimeout.current === null) {
        throttleTimeout.current = setTimeout(callBack, wait);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

export function useIsScrolled({ element, wait, offset = 0 } = {}) {
  const [isScrolled, setScrolled] = useState(false);

  useScrollPosition(
    ({ currPos }) => {
      const isShow = currPos.y > offset;
      if (isShow !== isScrolled) setScrolled(isShow);
    },
    [isScrolled],
    { element, useWindow: !element, wait }
  );

  return isScrolled;
}
