import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";

function ThirdParty() {
  return (
    <div className="flex items-center justify-center text-white gap-2 my-3 mx-2">
      <div className="bg-blue-800 p-2 rounded-full transition-all duration-700 hover:-translate-y-2 cursor-pointer">
        <FaFacebookF size="1.2rem" />
      </div>
      <div className="bg-blue-500 p-2 rounded-full transition-all duration-700 hover:-translate-y-2 cursor-pointer">
        <AiOutlineTwitter size="1.2rem" />
      </div>
      <div className="bg-blue-600 p-2 rounded-full transition-all duration-700 hover:-translate-y-2 cursor-pointer">
        <TiSocialLinkedin size="1.2rem" />
      </div>
    </div>
  );
}

export default ThirdParty;
