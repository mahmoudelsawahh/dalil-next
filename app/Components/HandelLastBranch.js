import React from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import Link from "next/link";
import {
  LazyLoadImage,
  LazyLoadComponent,
} from "react-lazy-load-image-component";
import { Rating } from "primereact/rating";
import "react-lazy-load-image-component/src/effects/blur.css";
import styles from  "../styles/Home.module.scss";

const HandelLastBranch = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    arrows: false,
    rtl: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
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
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    appendDots: (dots) => (
      <div
        styles={{
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul styles={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: () => (
      <div
        className={styles.active }
        styles={{
          width: "15px",
          color: "blue",
          height: "15px",
          border: "2px  solid gray",
          borderRadius: "50%",
          margin: "20px 0",
        }}
      ></div>
    ),
  };
  
  const {lastBranchesArr}  = useSelector((state) => state.categoriesMenu);
  const Data = lastBranchesArr
    ? lastBranchesArr.branches?.map((ele, idx) => {
        const pathname = ele.name.replace(/\s/g, "-");
        const pathcatName = ele.catName.replace(/\s/g, "-");

        return (
          <div
            key={idx}
            className={styles.StaticSlik }
            
          >
          <Link href={`/page?id=${ele.id}/${pathname}/${pathcatName}`} key={idx} passHref as={`/page/${ele.id}/${pathname}/${pathcatName}`}>
            <div>
              <div  className={styles.content_container}>
                <div className={styles.img_container_lastbarnch }>
                  <LazyLoadImage
                    effect="blur"
                    src={`https://dalil.deltawy.com/images?id=${ele.logo}&type=tab`}
                    alt={`${ele.name}-categories`}
                    width="100%"
                    height="auto"
                  />
                </div>
                <div className={styles.info_container}>
                  <h3>{ele.name}</h3>
                  <p>{ele.address}</p>
                  <div className={`${styles.card} ${styles.rating_area}`} >
                    <Rating
                      value={ele.rate === 0 ? 5 : ele.rate}
                      readOnly
                      cancel={false} 
                    ></Rating>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          </div>
        );
      })
    : "null";

  return (
    <div className={styles.lastBranches}>
      <h1>اخر الاماكن المضافة في الدليل</h1>
      <p>تصفح اخر الاماكن المضافة في مدينتك</p>
      <LazyLoadComponent>
        <Slider {...settings}>{lastBranchesArr && Data}</Slider>
      </LazyLoadComponent>
    </div>
  );
};

export default HandelLastBranch;