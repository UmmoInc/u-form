import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";


export default function Register_Form({ acknowledge }) {
  


  // const token = user[0].token
  // const phone_number = user[0].phone_number
  // console.log(token);
  const [first_name, setFirstName] = useState("");
  const [last_name, setSurname] = useState("");
  const [email, setEmail] = useState("");

  const router = useRouter();

  const [userData, setUserData] = useState();
  
  

  function handleSubmit(e) {
    e.preventDefault();

    
    if (typeof window !== "undefined") {
      const getUser = JSON.parse(localStorage.getItem("user"));
      console.log("UserDATA", getUser.phone_number);

      const token = getUser.token
      const phone_number = getUser.phone_number
  
      const data = {
        first_name,
        last_name,
        method: "token",
        type: "register",
        phone_number,
      };
      console.log(data);
      fetch("https://ummo-form-auth.herokuapp.com/api/v1/auth/create_user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          identifier: token,
        },
        body: JSON.stringify(data),
      }).then(async (response) => {
        const result = await response.json();
        console.log(result);
        if (result.status === 1) {
          console.log("SUCCESS");
          console.log(result);
          setUserData(data)
          router.push(`/home`);
        }
      });
    }
 
  }
useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(userData))
  })
  return (
    <div className="bg-white rounded-2xl px-4 md:px-8 py-8 md:py-12  border border-[#006592] border-opacity-25 space-y-6">
      {/*Register */}
      <div>
        <p className="font-[500] text-xl text-black tracking-wider">Register</p>
      </div>

      {/*Form */}
      <div>
        <form onSubmit={handleSubmit} className="space-y-4 tracking-wider">
          {/*First Name */}
          <div className="relative flex text-base w-full flex-col">
            <label
              htmlFor="firstName"
              className="font-semibold flex items-center absolute -top-3 left-7 px-3 text-[#0079B0] bg-white"
            >
              First Name
            </label>
            <input
              type={"text"}
              id="firstName"
              onChange={(e) => setFirstName(e.target.value)}
              name="firstName"
              value={first_name}
              className="border-2 pb-2 pt-3 font-bold bg-slate-50 px-8 text-sm  rounded-3xl h-[50px] border-[#0079B0] outline-none placeholder-[#B8C2CC] tracking-wider  active:bg-white "
            />
          </div>

          {/*Surname */}
          <div className="relative flex text-base w-full flex-col">
            <label
              htmlFor="surname"
              className="font-semibold flex items-center absolute -top-3 left-7 px-3 text-[#0079B0] bg-white"
            >
              Surname
            </label>
            <input
              type={"text"}
              id="surname"
              value={last_name}
              onChange={(e) => setSurname(e.target.value)}
              name="surname"
              className="border-2 pb-2 pt-3 font-bold bg-slate-50 px-8 text-sm  rounded-3xl h-[50px] border-[#0079B0] outline-none placeholder-[#B8C2CC] tracking-wider  active:bg-white "
            />
          </div>

          {/*Email */}
          <div className="relative flex text-base w-full flex-col hidden">
            <label
              htmlFor="email"
              className="font-semibold flex items-center absolute -top-3 left-7 px-3 text-[#0079B0] bg-white"
            >
              Email Address
            </label>
            <input
              type={"email"}
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-2 pb-2 pt-3 font-bold bg-slate-50 px-8 text-sm  rounded-3xl h-[50px] border-[#0079B0] outline-none placeholder-[#B8C2CC] tracking-wider  active:bg-white  "
            />
          </div>

          {/* <div className="flex space-x-3 ">
            <input type={"checkbox"} />
            <p> I have read the Terms & Conditions</p>
          </div> */}

          {/*Login Button */}
          <button
            type="submit"
            className="bg-[#0079B0] w-full py-2 font-medium rounded-3xl flex items-center justify-center h-[50px] tracking-widest text-[#E6F3F9] active:bg-gray-800"
          >
            <p>REGISTER </p>
          </button>
        </form>
      </div>
      {/* */}
      <div className="font-semibold text-[#0079B0] space-x-2  tracking-wider w-full flex justify-center cursor-pointer ">
        <p className="hover:underline">Terms of Use</p>
        <p className="hover:underline">Privacy Policy</p>
      </div>
    </div>
  );
}
