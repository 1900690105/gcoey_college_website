"use client";
import { useSearchParams } from "next/navigation";
import React from "react";
import StudentRegistration from "./components/Register";
import StudentLogin from "./components/Login";

const page = () => {
  const params = useSearchParams();
  const page = params.get("page");

  return (
    <>
      <div>
        {page === "Registration" && <StudentRegistration />}
        {page === "Login" && <StudentLogin />}
      </div>
    </>
  );
};

export default page;
