import { useEffect, useState } from "react";
import { Blurhash } from "react-blurhash";

const ImageComponent = ({ src, className, hashStr, width, height }) => {
  const [isImgLoaded, setIsImgLoaded] = useState(false);
  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setIsImgLoaded(true);
    };
    img.src = src;
  }, [src]);

  return (
    <>
      {!isImgLoaded && (
        <Blurhash
          hash={hashStr}
          width={width}
          height={height}
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />
      )}
      {isImgLoaded && <img src={src} className={className} alt="fsda" />}
    </>
  );
};

export default ImageComponent;
