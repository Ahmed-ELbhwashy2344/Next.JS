import Image from "next/image";
import { TiArrowRightThick } from "react-icons/ti";
export default function () {
  return (
    <div className=" container mx-auto p-12 flex flex-wrap items-center justify-around ">
      <div className="md:w-1/2 w-full">
        <div>
          <h1 className=" text-4xl font-bold my-3">Cloud Hosting</h1>
          <p className=" font-medium mb-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing.
          </p>
        </div>
        <div>
          <span className=" inline-block text-2xl ">
            {" "}
            <TiArrowRightThick /> Lorem ipsum dolor sit amet.
          </span>
        </div>
        <div>
          <span className=" inline-block text-2xl ">
            {" "}
            <TiArrowRightThick /> Lorem ipsum dolor sit amet.
          </span>
        </div>
        <div>
          <span className=" inline-block text-2xl ">
            {" "}
            <TiArrowRightThick /> Lorem ipsum dolor sit amet.
          </span>
        </div>
      </div>
      <div className="md:w-1/2 md:mt-0 mt-5 w-full">
        <Image
          src="/post-3.jpg"
          alt=""
          width={500}
          height={500}
          className=" w-full rounded-2xl"
        />
      </div>
    </div>
  );
}
