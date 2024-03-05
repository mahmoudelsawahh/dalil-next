import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";
import  Link  from "next/link";
import {
  LazyLoadImage,
  LazyLoadComponent,
} from "react-lazy-load-image-component";
import styles from  "../styles/Home.module.scss";

const LastBranches = () => {
  // const navigate = useNavigate();

  const  {lastBranchesArr}  = useSelector((state) => state.categoriesMenu);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
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
  };
  const Data = lastBranchesArr
    ? lastBranchesArr.branches?.map((ele, idx) => {
        const pathname = ele.name.replace(/\s/g, "-");
        const pathcatName = ele.catName.replace(/\s/g, "-");
        return (
          <div
            key={idx}
             className={styles.lastbranches_top_container}
          >
            <Link href={`/page?id=${ele.id}/${pathname}/${pathcatName}`} key={idx} as={`page/${ele.id}/${pathname}/${pathcatName}`}>
            <div  className={styles.content_container}>
            
              <p>{ele.name}</p>
              <div  className={styles.img_container_lastbarnch}>
                <LazyLoadImage
                  effect="blur"
                  src={`https://dalil.deltawy.com/images?id=${ele.logo}&type=tab`}
                  alt={`${ele.name}-categories`}
                  width="100%"
                  height="auto"
                />
              </div>
              
            </div>
            </Link>
          </div>
        );
      })
    : "null";

  return (
    <React.Fragment>
      <div  className={styles.slick_last_top}>
        <LazyLoadComponent>
          {/* <DeferredContent onLoad={onDataLoad}> */}
          <Slider {...settings}>{lastBranchesArr && Data}</Slider>
          {/* </DeferredContent> */}
        </LazyLoadComponent>
      </div>
      {/* </DeferredContent> */}
    </React.Fragment>
  );
};

export default LastBranches;
