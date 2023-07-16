import { StepsProp } from "@/interfaces/Payment.interface";
import { StepOptions } from "@/constants/Payment";

function Steps(props: StepsProp) {
  return (
    <div className="w-5/6 xs:w-11/12 mx-auto my-6">
      <div className="grid grid-cols-5 gap-5 w-5/6 lg:w-full mx-auto">
        {StepOptions.map((option, i) => (
          <div
            key={option.name}
            className={`border-b-[5px] border rounded-md p-2 flex flex-col items-center ${
              props.step && props.step === i + 1
                ? "text-red-600 border-b-red-600"
                : props.step && props.step > i + 1
                ? "text-green-600 border-b-green-600"
                : "text-zinc-400"
            }`}
          >
            {option.icon}
            <span className="my-1 font-semibold inline-block md:hidden">
              {i + 1}- {option.name}
            </span>
          </div>
        ))}
      </div>
      {props.children}
    </div>
  );
}

export default Steps;
