import Image from "next/image";
import photo from "../../../public/post-3.jpg";

export default function AboutPage() {
  return (
    <div className=" container mx-auto pt-10">
      <div className=" flex  ">
        <div className="w-1/4 mx-1">
          <Image
            src={photo}
            alt="photo"
            className="w-full"
          />
          <h1>Photo</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
            commodi dolore pariatur adipisci voluptate esse vero ullam magnam
            est sapiente.
          </p>
        </div>
      </div>
    </div>
  );
}
