import { MdOutlineWarning } from "react-icons/md";
import { UserProps } from "@/interfaces/User.interface";
import Image from "next/image";

function DeleteAccount(props: UserProps) {
  return (
    <div className="z-50 fixed top-0 left-0 w-screen h-screen bg-light-black flex items-center justify-center">
      <div className="bg-white rounded-md w-[768px] sm:w-[98%] sm:mx-auto max-h-[90vh] overflow-y-auto">
        <div className="border-b mb-6">
          <div className="p-6 flex flex-col items-center justify-center">
            <Image
              src="/imgs/user/1.png"
              className="h-20 w-20 rounded-full"
              height={1000}
              width={1000}
              alt=""
            />
            <h2 className="text-orange-700 font-semibold text-xl mt-3">
              Delete Your Account
            </h2>
            <h3 className="text-zinc-500 font-semibold">
              Warning: You cannot undo this action
            </h3>
          </div>
        </div>
        <div className="border-b mb-6">
          <div className="p-6">
            <p className="text-rose-600 font-semibold text-sm">
              Note: Donot Click to any button or don't do any action during
              account Deletion, it may takes some times.
            </p>
            <h3 className="text-zinc-500 font-semibold my-2">
              Deleting Account Means :
            </h3>
            <ul className="flex flex-col">
              <li className="p-2 bg-rose-50 rounded-sm flex mb-3">
                <MdOutlineWarning className="text-yellow-500" size="1.4rem" />
                <p className="mx-3 flex-1">
                  If you create any classified ptoducts, after deleting your
                  account, those products will no longer in our system
                </p>
              </li>
              <li className="p-2 bg-rose-50 rounded-sm flex">
                <MdOutlineWarning className="text-yellow-500" size="1.4rem" />
                <p className="mx-3 flex-1">
                  After deleting your account, wallet balance will no longer in
                  our system
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-end px-6 mb-4">
          <button
            onClick={() => props.setActive(!props.active)}
            className="bg-gray-400 text-white font-semibold py-2 px-5 rounded-md mx-3"
          >
            Cancel
          </button>
          <button className="bg-rose-400 text-white font-semibold py-2 px-5 rounded-md">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteAccount;
