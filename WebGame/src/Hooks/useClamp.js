const useClamp = () => {
  const clamp = (value, min, max) => {
    if (value < min) {
      return min;
    } else if (value > max) {
      return max;
    }
    return value;
  };

  return { clamp };
};

export default useClamp;
