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
    min: values[0],
    max: values[1],
    stepSize: 5,
  };
};
