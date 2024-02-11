const useWindowHeight = () => {
  return typeof window !== "undefined" ? window.innerHeight : 0;
};

export default useWindowHeight;
