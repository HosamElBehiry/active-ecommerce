import { UserAsideProps } from "@/interfaces/User.interface";
import {
  AiFillHeart,
  AiOutlineHome,
  AiOutlineMinusCircle,
  AiOutlineProfile,
  AiOutlineUser,
} from "react-icons/ai";
import { BiConversation } from "react-icons/bi";
import { IoStorefrontOutline } from "react-icons/io5";

export const Links: UserAsideProps = [
  {
    link: "/user/dashboard",
    title: "Dashboard",
    icon: <AiOutlineHome size="1.3rem" />,
  },
  {
    link: "/user/purchased-history",
    title: "PurchaseHistory",
    icon: <AiOutlineProfile size="1.3rem" />,
  },
  {
    link: "/user/wishlist",
    title: "WishLists",
    icon: <AiFillHeart size="1.3rem" />,
  },
  {
    link: "/user/profile",
    title: "ManageAccount",
    icon: <AiOutlineUser size="1.3rem" />,
  },
  {
    link: "/user/fav-sellers",
    title: "FollowedSellers",
    icon: <IoStorefrontOutline size="1.3rem" />,
  },
  {
    link: "/user/conversations",
    title: "Conversations",
    icon: <BiConversation size="1.3rem" />,
  },
  {
    link: "",
    title: "DelMyAccount",
    icon: <AiOutlineMinusCircle size="1.3rem" />,
  },
];
