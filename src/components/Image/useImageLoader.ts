import { useCallback, useEffect, useReducer } from 'react';

import { ImageProps } from './Image.types';

export type UseImageLoaderParams = Pick<
  ImageProps,
  | 'fallback'
  | 'fallbackSrc'
  | 'preloadFallbackSrc'
  | 'onError'
  | 'onLoad'
  | 'src'
>;

interface FallbackState {
  error: boolean;
  pending: boolean;
  loaded: boolean;
  src?: string;
}

interface FallbackAction {
  type: 'error' | 'loaded' | 'changeSrc';
  payload?: string;
}

function useImageLoader({
  fallback,
  fallbackSrc,
  preloadFallbackSrc,
  onError,
  onLoad,
  src
}: UseImageLoaderParams) {
  const fallbackReducer = (state: FallbackState, action: FallbackAction) => {
    switch (action.type) {
      case 'error':
        return {
          ...state,
          loaded: false,
          pending: false,
          error: true
        };

      case 'loaded':
        return {
          ...state,
          loaded: true,
          pending: false,
          error: false
        };

      case 'changeSrc':
        return {
          ...state,
          src: action.payload
        };

      default:
        throw new Error('Unknown action.');
    }
  };

  const [loadingState, dispatch] = useReducer(fallbackReducer, {
    src: !!fallbackSrc && (preloadFallbackSrc || !src) ? fallbackSrc : src,
    pending: !!fallback && (!!src || !!fallbackSrc),
    loaded: false,
    error: !src && !fallbackSrc
  });

  const onErrorHandler: React.ReactEventHandler<HTMLImageElement> = useCallback(
    e => {
      const element = e.target as HTMLImageElement;
      element.onerror = null;

      if (fallbackSrc?.length && fallbackSrc.length > 0) {
        element.src = fallbackSrc;
      } else {
        dispatch({ type: 'error' });
      }

      onError?.(e);
    },
    [fallbackSrc, onError]
  );

  const onLoadHandler: React.ReactEventHandler<HTMLImageElement> = useCallback(
    e => {
      dispatch({ type: 'loaded' });

      onLoad?.(e);
    },
    [onLoad]
  );

  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (preloadFallbackSrc && !!fallbackSrc && !!src) {
      const img = new Image();
      img.src = src;
      img.onload = e => {
        dispatch({ type: 'changeSrc', payload: src });
      };

      return;
    }
  }, [fallbackSrc, preloadFallbackSrc, src]);

  return { loadingState, onLoadHandler, onErrorHandler };
}

export default useImageLoader;
