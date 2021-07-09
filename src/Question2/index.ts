let prevValue = 0;

export const add = (value) => {
  prevValue = value + prevValue;
  return prevValue;
};
