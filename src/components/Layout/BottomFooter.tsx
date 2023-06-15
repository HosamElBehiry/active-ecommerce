import Image from "next/image";

function BottomFooter() {
  return (
    <div className="bg-[#17171f] py-2" dir="ltr">
      <div className="w-5/6 xs:w-11/12 mx-auto flex flex-row-reverse items-center justify-between xs:block text-white">
        <div className="my-3 w-[200px] xs:mx-auto">
          <Image
            src="/imgs/footer/payment.png"
            className="h-auto w-full object-fill"
            height={1000}
            width={1000}
            alt="Payment Photo"
          />
        </div>
        <h4 className="my-3 xs:text-center">
          &copy; Active eCommerce CMS {new Date().getFullYear()}
        </h4>
      </div>
    </div>
  );
}

export default BottomFooter;
