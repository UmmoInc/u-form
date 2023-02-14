import React from 'react'
import Question from './Question'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Catergory(data) {
    
    const questions = data.data[0].category_info[0].question_info
    const category_name = data.data[0].category_info[0].title
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
  return (
    <div>
        <div className=' w-full pt-36'>
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
            >
                
                    {questions.map((question) => (
                        <div className=' flex mx-4'>
                            <Question
                                category_name={category_name} 
                                question={question.question} 
                                question_id={question.question_id}
                                option_id_0={question.options[0].id} 
                                option_id_1={question.options[1].id}
                            />
                        </div>
                    ))}
                
            </Carousel>
        </div>
    </div>
  )
}

export default Catergory