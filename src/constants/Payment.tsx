import { StepsProps } from "@/interfaces/Payment.interface";
import { AiOutlineCheckCircle, AiOutlineShoppingCart } from "react-icons/ai";
import { MdOutlineLocalShipping, MdPayment } from "react-icons/md";
import { FaRegMap } from "react-icons/fa";

export const StepOptions: StepsProps = [
  {
    name: "My Cart",
    icon: <AiOutlineShoppingCart size="2rem" />,
  },
  {
    name: "Shipping Info",
    icon: <FaRegMap size="2rem" />,
  },
  {
    name: "Delivery Info",
    icon: <MdOutlineLocalShipping size="2rem" />,
  },
  {
    name: "Payment",
    icon: <MdPayment size="2rem" />,
  },
  {
    name: "Confirmation",
    icon: <AiOutlineCheckCircle size="2rem" />,
  },
];
