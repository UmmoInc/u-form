import React, { useState } from "react";
import { useRouter } from "next/router";

export default function KYCForm({ acknowledge }) {
  // const token = user[0].token
  // const phone_number = user[0].phone_number
  // console.log(token);
  const [date_of_birth, setDate_of_birth] = useState("");
  const [email_address, setEmail_address] = useState("");
  const [gender, setGender] = useState("");
  const [in_school, setIn_school] = useState("");
  const [location, setLocation] = useState("");
  
  const [showSchool, setShowSchool] = useState(false)

  function inSchool(params) {

    setIn_school(true)
  }
  function offSchool(params) {
    setIn_school(true)
  }

  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();

    if (typeof window !== "undefined") {
      const getUser = JSON.parse(localStorage.getItem("user"));
      console.log("UserDATA", getUser.phone_number);

      const token = getUser.token;
      console.log(token);
      const phone_number = getUser.phone_number;
        console.log(phone_number);
      const data = {
        date_of_birth,
        email_address,
        gender,
        in_school,
        location,
        "reference_id":"efdfdb19-39ee-4d63-9897-a097f11deb17",
      };
      
      console.log(data);
      fetch("https://ummo-form-auth.herokuapp.com/api/v1/auth/create_kyc", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          identifier: token,
          phone_number: phone_number
        },
        body: JSON.stringify(data),
      }).then(async (response) => {
        const result = await response.json();
        console.log(result);
        if (result.status === 1) {
          console.log("SUCCESS");
          console.log(result);
          router.push(`../../test/section-one/section_info`);
        }
      });
    }
  }

  return (
    <div className="bg-white rounded-2xl px-4 md:px-8 py-8 md:py-12 shadow-sm border border-[#006592] border-opacity-25 space-y-6">
      {/*Register */}
      <div>
        <p className="font-[500] text-2xl text-black ">My Test Infomation</p>
      </div>

      {/*Form */}
      <div>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/*First Name */}
          <div className="relative flex text-base w-full flex-col">
            <label
              htmlFor="date_of_birth"
              className="font-medium  flex items-center absolute -top-3 left-5 px-2 text-[#0079B0] bg-white"
            >
              Date Of Birth
            </label>
            <input
              type={"date"}
              id="date_of_birth"
              onChange={(e) => setDate_of_birth(e.target.value)}
              name="date_of_birth"
              value={date_of_birth}
              className="border-2 pb-2 pt-3 font-bold bg-slate-50 px-8 text-sm  rounded-xl border-[#006592] outline-none placeholder-[#B8C2CC] tracking-wider  active:bg-white "
            />
          </div>

          {/*Surname */}
          <div className="relative flex text-base w-full flex-col">
            <label
              htmlFor="email_address"
              className="font-medium  flex items-center absolute -top-3 left-5 px-2 text-[#0079B0] bg-white"
            >
              Email Address
            </label>
            <input
              type={"email"}
              id="email_address"
              value={email_address}
              onChange={(e) => setEmail_address(e.target.value)}
              name="email_address"
              className="border-2 pb-2 pt-3 font-bold bg-slate-50 px-8 text-sm  rounded-xl border-[#0079B0] outline-none placeholder-[#B8C2CC] tracking-wider  active:bg-white "
            />
          </div>

          {/*Email */}
          <div className="relative flex text-base w-full flex-col">
            <label
              htmlFor="gender"
              className="font-medium  flex items-center absolute -top-3 left-5 px-2 text-[#0079B0] bg-white"
            >
              Gender
            </label>
            <input
              type={"text"}
              id="gender"
              name="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="border-2 pb-2 pt-3 font-bold bg-slate-50 px-8 text-sm  rounded-xl border-[#0079B0] outline-none placeholder-[#B8C2CC] tracking-wider  active:bg-white "
            />
          </div>
          <div className="relative flex text-base w-full flex-col">
            <label
              htmlFor="location"
              className="font-medium  flex items-center absolute -top-3 left-5 px-2 text-[#0079B0] bg-white"
            >
              Location
            </label>
            <input
              type={"text"}
              id="location"
              name="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="border-2 pb-2 pt-3 font-bold bg-slate-50 px-8 text-sm  rounded-xl border-[#0079B0] outline-none placeholder-[#B8C2CC] tracking-wider  active:bg-white "
            />
          </div>
          <div>
            <p>In School?</p>
            <div className="flex space-x-5">
              <div className="flex space-x-2">
                <input type={"checkbox"} onClick={inSchool}/>
                <p>Yes</p>
              </div>
              <div className="flex space-x-2">
                <input type={"checkbox"} onClick={offSchool}/>
                <p>No</p>
              </div>
            </div>
          </div>
          {/* <div className={`relative flex text-base w-full flex-col ${showSchool? "":"hidden"}`}>
            <label
              htmlFor="in_school"
              className="font-medium  flex items-center absolute -top-3 left-5 px-2 text-[#0079B0] bg-white"
            >
              In School
            </label>
            <input
              type={"text"}
              id="in_school"
              name="in_school"
              value={in_school}
              onChange={(e) => setIn_school(e.target.value)}
              className="border-2 pb-2 pt-3 font-bold bg-slate-50 px-8 text-sm  rounded-xl border-[#0079B0] outline-none placeholder-[#B8C2CC] tracking-wider  active:bg-white "
            />
          </div> */}

          

          {/*Login Button */}
          <button
            type="submit"
            className="bg-[#0079B0] w-full py-2 font-medium rounded-xl flex items-center justify-center text-[#E6F3F9] active:bg-gray-800"
          >
            <p>Register </p>
          </button>
        </form>
      </div>
      {/* */}
      <div className="font-medium text-[#0079B0] space-x-2 text-sm w-full flex justify-center cursor-pointer ">
        <p className="hover:underline">Terms of Use</p>
        <p className="hover:underline">Privacy Policy</p>
      </div>
    </div>
  );
}
