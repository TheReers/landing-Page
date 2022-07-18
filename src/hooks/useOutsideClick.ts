import React, { Dispatch, SetStateAction, useEffect } from 'react';

// eslint-disable-next-line import/prefer-default-export
export const useOnClickOutside = (
  ref: React.MutableRefObject<undefined>,
  handler: Dispatch<SetStateAction<any>>,
) => {
  useEffect(() => {
    const listener = (event: React.ChangeEvent<HTMLInputElement>): void => {
      if (!ref.current || (ref.current as any).contains(event.target)) {
        return;
      }
      handler(event);
    };
    // @ts-ignore
    document.addEventListener('mousedown', listener);

    return () => {
      // @ts-ignore
      document.removeEventListener('mousedown', listener);
    };
  }, [ref, handler]);
};
