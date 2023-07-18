import { actionProps, initialStateProps } from "@/interfaces/Modal.interface";

export const initialState: initialStateProps = {
  modal: false,
  cartModal: false,
};

export const modalReducer = (
  state: initialStateProps = initialState,
  action: actionProps
): initialStateProps => {
  switch (action.type) {
    case "cartModal":
      return {
        ...state,
        modal: !state.modal,
        cartModal: !state.cartModal,
      };
    default:
      return initialState;
  }
};
