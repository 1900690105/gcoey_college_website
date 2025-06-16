import React from "react";
import SubjectAttendance from "./attendence/AttendanceChart";
import OverallAttendance from "./attendence/OverallAttendance";

const StudentAttendence = () => {
  return (
    <>
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 ">
          User Attendance Month-wise
        </h1>
        <OverallAttendance />
        <SubjectAttendance />
      </div>
    </>
  );
};

export default StudentAttendence;
