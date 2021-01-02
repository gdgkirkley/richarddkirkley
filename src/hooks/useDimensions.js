import { useLayoutEffect, useRef, useState } from "react";

function useDimensions() {
  const ref = useRef();
  const [dimensions, setDimensions] = useState({});
  useLayoutEffect(() => {
    if (!ref.current) return;
    setDimensions(ref.current.getBoundingClientRect().toJSON());
  }, []);

  return [ref, dimensions];
}

export default useDimensions;
