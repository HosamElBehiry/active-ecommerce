import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import BreadCrumb from "@/components/Helpers/BreadCrumb";
import Image from "next/image";
import Link from "next/link";

function Index() {
  return (
    <div className="w-5/6 xs:w-11/12 mx-auto">
      <BreadCrumb current="All Categories" title="All Categories" />
      {[1, 2, 3, 4, 5, 6].map((idx) => (
        <div className="p-4 border rounded-md my-6" key={idx}>
          <div className="flex items-center mb-4 xs:justify-center">
            <Image
              loading="lazy"
              src="/imgs/featured-categories/1.png"
              className="h-20 w-20 border p-1 rounded-md"
              height={1000}
              width={1000}
              alt=""
            />
            <h2 className="mx-2 font-semibold text-lg hover:text-red-600">
              <Link href={`/category/${idx}`}>Women Clothing & Fashion</Link>
            </h2>
          </div>
          <div className="grid grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-5">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
              <div key={i} className="xs:text-center">
                <h3 className="font-semibold text-[17px] mb-2">
                  Hot Categories
                </h3>
                <ul>
                  <li className="mb-1">Party Dress</li>
                  <li className="mb-1">Beauty Health</li>
                  <li className="mb-1">Women Shoes</li>
                  <li className="mb-1">Sleeping Dress</li>
                  <li className="mb-1">Casual Dress</li>
                  <li className="mb-1 text-red-600 flex items-center xs:justify-center cursor-pointer">
                    <span className="font-semibold text-sm">More</span>{" "}
                    <MdOutlineKeyboardArrowDown
                      className="mx-2"
                      size="1.2rem"
                    />
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Index;
