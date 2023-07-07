export interface actionInterface {
  type: "addToCart";
  payload: string;
}

export interface stateInterface {
  isOpen: boolean;
}

export type reducerInterface = actionInterface & stateInterface;
