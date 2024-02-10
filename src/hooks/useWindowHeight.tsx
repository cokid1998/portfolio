import { useEffect, useState } from "react";

const useWindowHeight = () => {
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    if (!window) return;
    else setWindowHeight(window.innerHeight);
  }, []);

  return [windowHeight, setWindowHeight];
};

export default useWindowHeight;
