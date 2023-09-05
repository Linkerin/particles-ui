import { useCallback, useEffect, useState } from 'react';
import { ImageProps } from './Image';

export type UseImageLoadingHandlerParams = Pick<
  ImageProps,
  | 'fallback'
  | 'fallbackSrc'
  | 'preloadFallbackSrc'
  | 'onError'
  | 'onLoad'
  | 'src'
>;

function useImageLoadingHandlers({
  fallback,
  fallbackSrc,
  preloadFallbackSrc,
  onError,
  onLoad,
  src
}: UseImageLoadingHandlerParams) {
  const [showErrFallback, setShowErrFallBack] = useState(!src && !fallbackSrc);
  const [showLoadingFallback, setShowLoadingFallback] = useState(
    !!fallback && (!!src || !!fallbackSrc)
  );
  const [srcUrl, setSrcUrl] = useState(
    !!fallbackSrc && (preloadFallbackSrc || !src) ? fallbackSrc : src
  );

  const onErrorHandler: React.ReactEventHandler<HTMLImageElement> = useCallback(
    e => {
      const element = e.target as HTMLImageElement;
      element.onerror = null;

      if (fallbackSrc?.length && fallbackSrc.length > 0) {
        element.src = fallbackSrc;
      } else {
        setShowLoadingFallback(false);
        setShowErrFallBack(true);
      }

      onError?.(e);
    },
    [fallbackSrc, onError]
  );

  const onLoadHandler: React.ReactEventHandler<HTMLImageElement> = useCallback(
    e => {
      setShowLoadingFallback(false);

      onLoad?.(e);
    },
    [onLoad]
  );

  const preloadImage = useCallback(() => {
    if (preloadFallbackSrc && !!fallbackSrc && !!src) {
      const img = new Image();
      img.src = src;
      img.onload = e => {
        setSrcUrl?.(src);
      };

      return;
    }
  }, [fallbackSrc, preloadFallbackSrc, src, setSrcUrl]);

  useEffect(() => {
    preloadImage();
  }, [preloadImage]);

  return {
    showLoadingFallback,
    showErrFallback,
    srcUrl,
    onLoadHandler,
    onErrorHandler
  };
}

export default useImageLoadingHandlers;
