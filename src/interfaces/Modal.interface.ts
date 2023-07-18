export interface initialStateProps {
  modal: boolean;
  cartModal: boolean;
}

export interface actionProps {
  type: "cartModal";
}

export interface ModalProps {
  state: initialStateProps;
  dispatch: React.Dispatch<actionProps>;
}
