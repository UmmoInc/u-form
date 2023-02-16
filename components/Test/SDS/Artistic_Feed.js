import React, { useState } from 'react'
import Question from './Question'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useRouter } from 'next/router';
import Loader_Image from '../../../assets/1490.gif'
import Image from 'next/image';
import { useRef } from 'react';

function Artistic_Feed(data) {
    
    const questions = data.data[2].category_info[2].question_info
    const category_name = data.data[2].category_info[2].title
    // console.log(data.data[0].category_info[0].title);
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
      const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
        const { carouselState: { currentSlide } } = rest;
        return (
            <div className="carousel-button-group -translate-y-20 px-8 space-x-2 font-semibold  absolute gap-4 flex justify-center  
            items-center w-full">
              <button className='flex w-full border-2 rounded-xl  border-[#0079B0] text-[#0079B0] py-3 outline-none white justify-center' onClick={() => {
              next();
              increament();
              setTrigger((trigger) => trigger + 1)
              }}> NO</button>
              <button className='flex  border-2 rounded-xl  border-[#0079B0] text-[#0079B0] py-3 outline-none white justify-center w-full' onClick={() => {
                next(); 
                increament();
                setTrigger((trigger) => trigger + 1)
                }}> Yes</button>
              
              
           </div>
        
         );
       };

       const router = useRouter()

       let [questionNumber, setQuestionNumber] = useState(1)

       const [close, setClose] = useState(false)
       const [showLoader, setShowLoader] = useState(false)

       function increament() {
            setQuestionNumber(questionNumber+1)

            if (questionNumber === questions.length) {
                setClose(true)
                setShowLoader(true)
                router.push('/test/section/social/questions')
            }
       }
        console.log(questionNumber);


       const childRef = useRef()
       const [trigger, setTrigger] = useState(0)


  return (
    <div>
      {showLoader? <div className='flex h-screen  justify-center items-center'>
          <Image className='-translate-y-10' src={Loader_Image} width={50} length={50} />
      </div>:
        <div className={`w-full pt-24 ${close? "hidden":""}`}>
            <div className='flex flex-col items-center justify-center py-8'>
                <p className='text-[#0079B0] font-semibold text-xl'>Questions</p>
                <p>{questionNumber}/{questions.length}</p>

            </div>
            <Carousel
                swipeable={true}
                draggable={true}
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
                
                    {questions.map((question) => (
                        <div className=' flex mx-4'>
                            <Question ref={childRef}
                                trigger={trigger}
                                category_name={category_name} 
                                question={question.question} 
                                question_id={question.question_id}
                                option_id_0={question.options[0].id} 
                                option_id_1={question.options[1].id}
                            />
                        </div>
                    ))}
                
            </Carousel>
        </div>}
    </div>
  )
}

export default Artistic_Feed