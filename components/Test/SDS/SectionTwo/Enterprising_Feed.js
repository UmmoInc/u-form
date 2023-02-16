import React, { useRef, useState } from "react";
import Question from "../Question";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useRouter } from "next/router";
import Loader_Image from "../../../../assets/1490.gif";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { addToGrading, decrement, increment } from "../../../features/counter/counterSlice";
import { store } from "../../../../middleware/store";
let testArray = []

export default function Enterprising_Feed(data) {

  //Initializing Index Number
  const [catergoryIndex, setCatergoryIndex] = useState(0)

  //Questions data From API
  const questions = data.data[1].category_info[4].question_info;
  const section_name = data.data[1].title;
  const category_name = data.data[1].category_info[4].title;

  // Router => router
  const router = useRouter();

  //Initializing {questionNumber}
  let [questionNumber, setQuestionNumber] = useState(1);

  //Initializing useState - Loader
  const [showLoader, setShowLoader] = useState(false);
  const [close, setClose] = useState(false);

  //Getting Store Contents
  const state = store.getState();
  const count = useSelector((state) => state.results.grading);

  //Dispatch response to Redux Store
  const dispatch = useDispatch();
  const addCatergoryToGrade_0 = () => {
      dispatch(addToGrading({
        'question_id': questions[questionNumber-1].question_id,
        'option_id':questions[questionNumber-1].options[0].id,
        section_name,
        category_name
      }))
      console.log(count);
  };
  const addCatergoryToGrade_1 = () => {
    dispatch(addToGrading({
      'question_id': questions[questionNumber-1].question_id,
      'option_id':questions[questionNumber-1].options[1].id,
      section_name,
      category_name
    }))
    console.log(count);
  };

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
  
  // Counter Effect Function to Increament Progress Bar then Reroute to next section
  function increament() {
    setQuestionNumber(questionNumber + 1);

    if (questionNumber === questions.length) {
      setClose(true);
      setShowLoader(true);
      router.push("/test/section-two/conventional/questions");
      
    };
  };

  // Yes/No buttons 
  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const {
      carouselState: { currentSlide },
    } = rest;
    return (
      <div
        className="carousel-button-group -translate-y-20 px-8 space-x-2 font-semibold  absolute gap-4 flex justify-center  
            items-center w-full">
        <button
          className="flex w-full border-2 rounded-xl  border-[#0079B0] text-[#0079B0] py-3 outline-none white justify-center"
          onClick={() => {
            addCatergoryToGrade_0()
            next();
            increament();
          }}>
          {" "}
          NO
        </button>
        <button
          className="flex  border-2 rounded-xl  border-[#0079B0] text-[#0079B0] py-3 outline-none white justify-center w-full"
          onClick={() => {
            addCatergoryToGrade_1();
            next();
            increament();
          }}>
          {" "}
          Yes
        </button>
      </div>
    );
  };
  

  return (
    <div>
      {showLoader ? (
        // Loader Component
        <div className="flex h-screen  justify-center items-center">
          <Image
            className="-translate-y-10"
            src={Loader_Image}
            width={50}
            length={50}
            alt='Loader'
          />
        </div>
      ) : (
        <div className={`w-full pt-24 ${close ? "hidden" : ""}`}>
          <div className="flex flex-col items-center justify-center py-8">
            <p className="text-[#0079B0] font-semibold text-xl">Questions</p>
            <p>
              {questionNumber}/{questions.length}
            </p>
          </div>
          {/* Question carousel */}
          <Carousel
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
            renderButtonGroupOutside={true}
            customButtonGroup={<ButtonGroup />}
          >
            {/* Question card */}
             <div className=" flex mx-4">
                <Question
                  category_name={category_name}
                  question={questions[questionNumber-1].question}
                />
              </div>
           
          </Carousel>
        </div>
      )}
    </div>
  );
}


