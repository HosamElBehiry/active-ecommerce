import { Dispatch, SetStateAction } from "react";

export const AsideCat = {
  category: true,
  color: false,
  size: false,
  sleeve: false,
  febric: false,
  price: true,
};

export const Price = (
  values: number[],
  setValues: Dispatch<SetStateAction<number[]>>
) => {
  return {
    values,
    onChange: setValues,
    min: 0,
    max: 10000,
    stepSize: 5,
  };
};
