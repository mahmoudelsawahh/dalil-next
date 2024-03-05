"use client"
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import  Link  from "next/link";
import { useSelector } from "react-redux";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import styles from  "../styles/Home.module.scss";
const SubGategoriesSlick = ({ Categories, id , getStateId , GeCityId}) => {
  const slideNumber = Categories ? Categories.catList : ""
  const settings = {
    cssEase: "linear",
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: slideNumber.length <= 4 ? 3 : 5,
    initialSlide: 3,
    slidesToScroll: 1,
    autoplay: true,
    rtl: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [fade, setFade] = useState("");
  
  const getFade = () => {
    setFade("fade-page");
    return setTimeout(() => {
      setFade("");
    }, 1000);
  };
  const subGateogry = Categories ? Categories.catList.map((ele) => {
    const pathname = ele.name.replace(/-/g, " ");
    return (
      <div key={ele.id}>
        <div
          className={styles.slick_Container}
          style={{ textAlign: "center" }}
        >
          {/* <Link key={ele.id} href={`/subGategories?id=${ele.id}/${pathname}`} as={`/cat/${ele.id}/${ele.name.replace(/\s+/g, '-')}`}> */}
              <Link key={ele.id} href={`/cat/${ele.id}/state/${getStateId}/city/${GeCityId}/page/1/${ele.name.replace(/\s+/g, '-')}`} >
            <section className={styles.img_skick}>
              <div className={`${styles.img_skick} ${styles.loading_circel}`}>
                <LazyLoadImage
                  effect="blur"
                  src={`https://dalil.deltawy.com/images?id=${ele.image}&type=tab`}
                  alt={`${ele.name}-categories`}
                  
                />
              </div>

              <h3 className={styles.h3_margin_bold}>{pathname}</h3>
            </section>
          </Link>
        </div>
      </div>
    );
})
: null;

  return (
    <React.Fragment>
      <div  className={`${styles.header_slider} ${styles.subCategirySlick}`}>
      {slideNumber.length > 2 ? 
       <div>
        <Slider {...settings}>{subGateogry}</Slider>
       </div>
      :
        <div style={{display : 'flex', justifyContent : 'center', gap : '40px'}}>
          {subGateogry}
        </div>
       }
    </div>
   
    </React.Fragment>
  );
};

export default SubGategoriesSlick;

