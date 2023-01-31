import React, { useState } from "react";
import Link from "next/link";
import {
  authentication,

} from "../../../middleware/firebase";
import { RecaptchaVerifier, getAuth, signInWithPhoneNumber } from "firebase/auth";
import { useRouter } from "next/router";

export default function Login_Form({users}) {
  // country code
  const countrycode = "+268";
  // phone number state
  const [phoneNumber, setPhoneNumber] = useState(countrycode);
  const [expandForm, setExpandForm] = useState(false);

  //Show OTP Form 
  const [otpForm, setOtpForm] = useState(false)
  const [OTP, setOTP] = useState('')

  //Button- Fade Out
  const [verifying, setVerifying] = useState(false)

  //Loader
  const [loading, setLoading] = useState(false)


  function switchForms() {
    setOtpForm(true)
  }

  const router = useRouter();

  //Request OTP
  const requestOTP = (e) => {
    setLoading(true)
    e.preventDefault();
    const auth = getAuth();
    console.log("Starting debugging");
    if (phoneNumber.length >= 7) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "sign-in-button",
        {
          size: "invisible",
          callback: (response) => {
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
          console.log('OTP sent');
          setOtpForm(true)
        })
        .catch((error) => {
          console.log(error);
        });
    }




  };

  //Verify OTP
  const verifyOTP = (e) => {
    let otp = e.target.value;
    setOTP(otp);

    if (otp.length === 6) {
      setVerifying(true)
      console.log(otp)

      let confirmationResult = window.confirmationResult;
      confirmationResult.confirm(otp).then((result) => {
        //User signed in successfully
        const user = result.user;
        console.log('user created')

        //Registered User
        const selectedUser = sds.users.find((user) =>user.cellphone === phoneNumber);

        //Route user if registered to home, else to register
        if (!selectedUser){
          router.push('./')
        } else {
          router.push('/register')
        }


        ;
        // //Redirect
        // useEffect(() => {
        //   router.push('./');
        //   return () => {
        //     console.log('home')
        //   }
        // }, [third])


        //..
      }).catch((error) => {
        //User couldnt validate
      })
    }
  }
  return (
    <div>
      {otpForm ?
        <div>

          <div className="flex w-full font-semibold text-lg justify-center space-y-4 items-center  flex-col">
            <p>Verify Your Phone Number</p>
            <p className=" text-base font-normal tracking-wider text-[#606F7B]">Enter your OTP code here</p>
          </div>
          <div className="flex items-center justify-center w-full">
            <form className="w-8/12">
              <div className="w-full flex items-center justify-center py-3 ">
                <input type={'text'} className='bg-[#B0D9EC] rounded-md py-2 outline-none font-bold px-5  shadow-inner w-full' value={OTP} onChange={verifyOTP} />
              </div>
              <div>
              {verifying? <button

                className="bg-[#0079B0] opacity-60 w-full py-2  font-medium rounded-xl text-[#E6F3F9] active:bg-gray-800"
              >
               <p>Verifying...</p> 
              </button>
              :
              <Link href={'../'}>
              <button className="bg-[#0079B0]  w-full py-2  font-medium rounded-xl text-[#E6F3F9] active:bg-gray-800"
                >
                   <p>Verify </p> 
                </button>
              </Link>
              }
                
              </div>
            </form>
          </div>

        </div>

        :

        <div className="bg-white relative rounded-2xl px-4 md:px-8 py-8 md:py-12 shadow-sm border border-[#006592] border-opacity-25 space-y-6">
          {/*Login */}
          <div>
            <p className="font-[500] text-2xl text-black ">Login</p>
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
                  className="border-2 pb-2 pt-3 font-bold bg-slate-50 px-8 text-sm  rounded-xl border-[#0079B0] outline-none placeholder-[#B8C2CC] tracking-wider  active:bg-white "
                />
              </div>

              {/*Login Button */}
              <button
                id="sign-in-button"
                type="submit"
                className="bg-[#0079B0] w-full py-2  font-medium rounded-xl text-[#E6F3F9] active:bg-gray-800"
              >
                {loading ? <p>Loading... </p> : <p>Continue </p>}
              </button>
            </form>
          </div>
          {/* */}
          <div className="font-medium text-[#0079B0] space-x-2 text-sm w-full flex justify-center cursor-pointer ">
            <p className="hover:underline">Terms of Use</p>
            <p className="hover:underline">Privacy Policy</p>
          </div>

          {/*Verification Screen - Pop-Up */}

        </div>}


    </div>
  );
}
