"use client";
import { useSearchParams } from "next/navigation";
import React from "react";

const page = () => {
  const params = useSearchParams();
  const page = params.get("user");
  return (
    <>
      <div>{page === "Student"}</div>
    </>
  );
};

export default page;
