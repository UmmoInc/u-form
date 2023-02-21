import React, { useState } from 'react'
import Carousel from 'react-multi-carousel';
import { useDispatch, useSelector } from 'react-redux';
import { store } from '../../../../middleware/store';
import { addToGrading } from '../../../features/counter/counterSlice';
import Loader_Image from "../../../../assets/1490.gif";
import Image from "next/image";
import { useRouter } from 'next/router';

function Group_Two(data) {


    //Questions
    const questions = data.data[3].category_info[1].question_info
    const section_name = data.data[3].title;
    const category_name = data.data[3].category_info[1].title;
    

      //Device Breakpoints on Carousel
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

     // Router => router
     const router = useRouter();

  //Getting Store Contents
  const state = store.getState();
  const count = useSelector((state) => state.results.grading);
  const user = useSelector((state) => state.userData.user);
  const user_id = user[0].phone_number
  const grade_response = count
  const dispatch = useDispatch();
  //Initializing {questionNumber}
  const [questionNumber, setQuestionNumber] = useState(1);

 //Initializing useState - Loader
 const [showLoader, setShowLoader] = useState(false);
 const [close, setClose] = useState(false);

  // Counter Effect Function to Increament Progress Bar then Reroute to next section
  function increament() {
    setQuestionNumber(questionNumber + 1);
    
    //Post Results
    let value = {user_id, "test_id":"efdfdb19-39ee-4d63-9897-a097f11deb17", grade_response}
    const sendResponse =() =>{
    //        //Send user data to Mongodb
    //   fetch(
    //     "http://ummo-digital-tester.herokuapp.com/api/v1/grading/grade",
    //     {
    //       method: "PUT",
    //       headers: {
    //         "Content-Type": "application/json",
    //         "identifier": token,
    //       },
    //       body: JSON.stringify(data),
    //     }
    //   ).then(async (response) => {
    //     const result = await response.json()
    //     console.log(result);
    //     if (result.status === 1) {
    //       console.log(result.message);
    //       let type = result.data.type
    //       router.push('/home')

    //     }
    //     else {
    //       console.log("FAILED", result.message);
    //     }
    //     //   res.redirect(307);
    //   });
        console.log(value);
    }

    


    if (questionNumber === questions.length) {
      setClose(true);
      setShowLoader(true);
      sendResponse();
      

      router.push("/home");
    };
  };

    function option_0(params) {
        dispatch(addToGrading({
          'question_id': questions[questionNumber-1].question_id,
          'option_id':questions[questionNumber-1].options[0].id,
          section_name,
          category_name
        }))
        console.log(count);

    }
    function option_1(params) {
        dispatch(addToGrading({
          'question_id': questions[questionNumber-1].question_id,
          'option_id':questions[questionNumber-1].options[1].id,
          section_name,
          category_name
        }))
        console.log(count);

    }
    function option_2(params) {
        dispatch(addToGrading({
          'question_id': questions[questionNumber-1].question_id,
          'option_id':questions[questionNumber-1].options[2].id,
          section_name,
          category_name
        }))
        console.log(count);

    }
    function option_3(params) {
        dispatch(addToGrading({
          'question_id': questions[questionNumber-1].question_id,
          'option_id':questions[questionNumber-1].options[3].id,
          section_name,
          category_name
        }))
        console.log(count);

    }
    function option_4(params) {
        dispatch(addToGrading({
          'question_id': questions[questionNumber-1].question_id,
          'option_id':questions[questionNumber-1].options[4].id,
          section_name,
          category_name
        }))
        console.log(count);

    }
    function option_5(params) {
        dispatch(addToGrading({
          'question_id': questions[questionNumber-1].question_id,
          'option_id':questions[questionNumber-1].options[5].id,
          section_name,
          category_name
        }))
        console.log(count);

    }



  return (
    <div className=''>
        {
            showLoader? 
            <div className="flex flex-col h-screen  justify-center items-center">
                <Image
                    className="-translate-y-10"
                    src={Loader_Image}
                    width={50}
                    length={50}
                    alt='Loader'
                />
                <p>Calcuating...Please Wait</p>
            </div>
            : 
            <Carousel className='pt-24'
            swipeable={false}
            draggable={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={false}
            keyBoardControl={true}
            arrows={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            
          >
            {/* Question card */}
             <div className=" flex mx-4">
                <div  className='bg-white border w-full  rounded-xl py-8 px-4 tracking-wider space-y-8'>
                     <div>
                        <div className='space-y-2 h-32'>
                            <p  className='text-[#8794A1] font-light`'>{category_name}</p>
                            <p className='font-semibold'>{questions[questionNumber-1].question}</p>
                        </div>
                        <div className='space-x-2 py-1 w-full items-center flex justify-center '>
                            <button type={'button'} onClick={() => {
                                increament()
                                option_0()
                            }} className='border-2 rounded-xl  border-[#0079B0] outline-none text-[#0079B0] w-24 py-1'>1</button>
                            <button type={'button'} onClick={() => {
                                increament()
                                option_1()
                            }} className='border-2 rounded-xl  border-[#0079B0] outline-none text-[#0079B0] w-24 py-1'>2</button>
                            <button type={'button'} onClick={() => {
                                increament()
                                option_2()
                            }} className='border-2 rounded-xl  border-[#0079B0] outline-none text-[#0079B0] w-24 py-1'>3</button>
                            
                        </div>
                        <div className='space-x-2 py-1 w-full items-center flex justify-center'>
                            <button type={'button'} onClick={() => {
                                increament()
                                option_3()
                            }} className='border-2 rounded-xl  border-[#0079B0] outline-none text-[#0079B0] w-24 py-1'>4</button>
                            <button type={'button'} onClick={() => {
                                increament()
                                option_4()
                            }} className='border-2 rounded-xl  border-[#0079B0] outline-none text-[#0079B0] w-24 py-1'>5</button>
                            <button type={'button'} onClick={() => {
                                increament()
                                option_5()
                            }} className='border-2 rounded-xl  border-[#0079B0] outline-none text-[#0079B0] w-24 py-1'>6</button>
                            
                        </div>
                    </div>
                </div>
              </div>
           
          </Carousel>
        }
        
    </div>
  )
}

export default Group_Two