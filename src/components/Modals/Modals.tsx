import { useContext } from "react";
import { ModalContext } from "@/pages/_app";
import CartModal from "./CartModal";

function Modals() {
  const Context = useContext(ModalContext);
  if (Context?.state.modal)
    return (
      <div className="fixed z-50 top-0 left-0 min-w-[100vw] min-h-[100vh] bg-light-black flex items-center justify-center">
        <div className="bg-white p-4 rounded-md w-[768px] sm:w-[95%] sm:mx-auto max-h-[80vh] overflow-y-auto">
          {Context.state.cartModal && <CartModal />}
        </div>
      </div>
    );
}

export default Modals;
