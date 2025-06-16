"use client";
import React from "react";
import ProjectGalleryComponent from "./components/ViewProjects";
import { useSearchParams } from "next/navigation";
import ProjectUploadComponent from "./components/UploadProject";

const page = () => {
  const searchParams = useSearchParams();
  const page = searchParams.get("page");
  return (
    <>
      <div>
        {page === "upload" ? (
          <ProjectUploadComponent />
        ) : (
          <ProjectGalleryComponent />
        )}
      </div>
    </>
  );
};

export default page;
