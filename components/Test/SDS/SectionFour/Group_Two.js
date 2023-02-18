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

  const dispatch = useDispatch();
  //Initializing {questionNumber}
  const [questionNumber, setQuestionNumber] = useState(1);

 //Initializing useState - Loader
 const [showLoader, setShowLoader] = useState(false);
 const [close, setClose] = useState(false);

  // Counter Effect Function to Increament Progress Bar then Reroute to next section
  function increament() {
    setQuestionNumber(questionNumber + 1);


    if (questionNumber === questions.length) {
      setClose(true);
      setShowLoader(true);
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