import Image from "next/image";
import React from "react";
import CoursesCard from "./course/Container";

const Course = () => {
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold mb-8">Courses</h1>
        <CoursesCard />
        <Image
          src={"/c (1).png"}
          alt="img"
          height={100}
          width={1500}
          className="w-full"
        />
        <Image
          src={"/c (2).png"}
          alt="img"
          height={100}
          width={1500}
          className="w-full"
        />
        <Image
          src={"/c (3).png"}
          alt="img"
          height={100}
          width={1500}
          className="w-full"
        />
        <Image
          src={"/c (4).png"}
          alt="img"
          height={100}
          width={1500}
          className="w-full"
        />
        <Image
          src={"/c (5).png"}
          alt="img"
          height={100}
          width={1500}
          className="w-full"
        />
        <Image
          src={"/c.png"}
          alt="img"
          height={100}
          width={1500}
          className="w-full"
        />
        <Image
          src={"/c (6).png"}
          alt="img"
          height={100}
          width={1500}
          className="w-full"
        />
      </div>
    </>
  );
};

export default Course;
