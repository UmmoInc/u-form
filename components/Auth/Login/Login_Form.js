import React, { useState } from "react";
import Link from "next/link";
import {
  authentication,
  
} from "../../../middleware/firebase";
import { RecaptchaVerifier, getAuth,signInWithPhoneNumber} from "firebase/auth";

export default function Login_Form() {
  // country code
  const countrycode = "+268";
  // phone number state
  const [phoneNumber, setPhoneNumber] = useState(countrycode);
  const [expandForm, setExpandForm] = useState(false);

  //Request OTP
  const requestOTP = (e) => {
    e.preventDefault();
    const auth = getAuth();
    console.log("Starting debugging");
    if (phoneNumber.length >= 7) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "sign-in-button",
        {
          size: "invisible",
          callback: (response) => {
            console.log('Response debugging')
            console.log(response);
            // onSignInSubmit();
          },
        },
        auth
      );
      
      //Send OTP
      let appVerifier = window.recaptchaVerifier;
      signInWithPhoneNumber(auth, phoneNumber, appVerifier)
        .then((confirmationResult) => {
          window.confirmationResult = confirmationResult;
        })
        .catch((error) => {
          console.log(error);
        });
    }
    console.log("Ending debugging");
  };

  return (
    <div className="bg-white rounded-2xl px-4 md:px-8 py-16 md:py-32  shadow-sm border border-[#006592] border-opacity-25">
      {/*Login */}
      <div>
        <p className="font-[500] text-2xl text-black pb-6 md:pb-12">Login</p>
      </div>

      {/*Form */}
      <div>
        <form onSubmit={requestOTP} className="space-y-4">
          {/*Cellphone */}
          <div className="relative flex text-base w-full flex-col">
            <label
              htmlFor="Username"
              className="font-medium  flex items-center absolute -top-3 left-5 px-2 text-[#0079B0] bg-white"
            >
              Cellphone
            </label>
            <input
              onChange={(e) => setPhoneNumber(e.target.value)}
              type={"tel"}
              id="Username"
              name="Username"
              value={phoneNumber}
              className="border-2 pb-2 pt-3 font-bold bg-slate-50 px-8 text-sm  rounded-md border-[#0079B0] outline-none placeholder-[#B8C2CC] tracking-wider  active:bg-white "
            />
          </div>

          {/*Login Button */}
          <button
            id="sign-in-button"
            type="submit"
            className="bg-[#0079B0] w-full py-2  font-medium rounded-md text-[#E6F3F9] active:bg-gray-800"
          >
            <p>Continue </p>
          </button>
        </form>
      </div>
      {/* */}
      <div className="font-medium text-[#0079B0] space-x-4 mt-12 text-sm w-full flex justify-center cursor-pointer ">
        <p className="hover:underline">Terms of Use</p>
        <p className="hover:underline">Privacy Policy</p>
      </div>
    </div>
  );
}
