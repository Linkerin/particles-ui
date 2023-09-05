import { useCallback, useEffect, useReducer } from 'react';

import { ImageProps } from './Image.types';

export type UseImageLoadingHandlerParams = Pick<
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
  loading: boolean;
  src?: string;
}

interface FallbackAction {
  type: 'error' | 'loaded' | 'changeSrc';
  payload?: string;
}

function useImageLoadingHandlers({
  fallback,
  fallbackSrc,
  preloadFallbackSrc,
  onError,
  onLoad,
  src
}: UseImageLoadingHandlerParams) {
  const fallbackReducer = (state: FallbackState, action: FallbackAction) => {
    switch (action.type) {
      case 'error':
        return {
          ...state,
          loading: false,
          error: true
        };

      case 'loaded':
        return {
          ...state,
          loading: false,
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
    error: !src && !fallbackSrc,
    loading: !!fallback && (!!src || !!fallbackSrc),
    src: !!fallbackSrc && (preloadFallbackSrc || !src) ? fallbackSrc : src
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

export default useImageLoadingHandlers;
