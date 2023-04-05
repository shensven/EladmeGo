const useData = () => {
  const data = Array(50)
    .fill(0)
    .map((_, index) => `index-${index}`);

  return data;
};

export default useData;
