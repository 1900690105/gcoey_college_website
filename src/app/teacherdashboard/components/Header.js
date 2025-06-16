import Image from "next/image";
import React from "react";

function Header() {
  return (
    <>
      <header className="flex justify-between items-center p-4 border border-gray-300 bg-gray-100 mb-10">
        <div className="w-24">
          <Image
            src="/logo.jpeg"
            alt="College Logo"
            height={100}
            width={700}
            className="w-full"
          />
        </div>

        <div className="flex-grow text-center">
          <h1 className="text-2xl font-bold mb-1">
            शासकीय अभियांत्रिकी महाविद्यालय यवतमाळ
          </h1>
          <h2 className="text-xl font-semibold mb-1">
            (GOVERNMENT COLLEGE OF ENGINEERING YAVATMAL)
          </h2>
          <p className="text-lg mb-2">धामणगाव रोड यवतमाळ- ४४५००१</p>
          <div className="text-sm">
            <p className="mb-1">Phone No- Website -www.gcoey.ac.in : E mail</p>
            <p className="mb-1">
              Office: 07232 243278 office.gcoeyavatmal@dtemaharashtra.gov.in
            </p>
            <p>Principal : 07232 238683</p>
          </div>
        </div>

        <div className="w-24">
          <Image
            src="/dbatu.jpeg"
            alt="Right Logo"
            height={100}
            width={700}
            className="w-full"
          />
        </div>
      </header>
    </>
  );
}

export default Header;
