import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { DeferredContent } from "primereact/deferredcontent";
import { useDispatch, useSelector } from "react-redux";
import {
  LazyLoadImage,
  LazyLoadComponent,
} from "react-lazy-load-image-component";
import { Rating } from "primereact/rating";
// import { getLastViews } from "../../../store/Categories";
import { getMatchBranch } from "/store/Categories";
import styles from  "../styles/Home.module.scss";
import  Link  from "next/link";
import Image from "next/image";

const MatchBranchesContainer = ({ id }) => {
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const { matchBranchesArray }  = useSelector((state) => state.categoriesMenu);

  useEffect(() => {
    dispatch(getMatchBranch(id));
  }, [dispatch, id]);
  const slideNumber = matchBranchesArray
    ? matchBranchesArray.branches?.length
    : 3;
  const settings = {
    infinite: true,
    slidesToShow: slideNumber <= 2 ? 1 : 3,
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
        style={{
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: () => (
      <div
         className={styles.active}
        style={{
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

  const Data = matchBranchesArray
    ? matchBranchesArray.branches?.map((ele, idx) => {
        const pathname = ele.name.replace(/\s/g, "-");
        const pathcatName = ele.catName.replace(/\s/g, "-");

        return (
          <div
            key={idx}
             className={styles.StaticSlik}
      
          >
            <Link  href={`/page?id=${ele.id}/${pathname}/${pathcatName}`} key={idx} as={`/page/${ele.id}/${pathname}/${pathcatName}`}>
            <div  className={styles.content_container}>
              <div  className={styles.img_container_lastbarnch}>
                <Image
                  src={`https://dalil.deltawy.com/images?id=${ele.logo}&type=tab`}
                  alt={`${ele.name}-categories`}
                width={200}
                height={200}
                />
              </div>
              <div className={styles.info_container} >
                <h3>{ele.name}</h3>
                <p>{ele.address}</p>
                <div className={`${styles.card} ${styles.rating_area}`}>
                  <Rating
                    value={ele.rate === 0 ? 1 : ele.rate}
                    readOnly
                    cancel={false}
                  ></Rating>
                </div>
              </div>
            </div>
            </Link>
            </div>
        );
      })
    : "null";
  return (
    <div className={styles.lastBranches} >
      <h1>اكثر الاماكن زيارة</h1>
      <p>تصفح اكثر الاماكن زيارة في مدينتك</p>
        <DeferredContent>
          <Slider {...settings}>{matchBranchesArray && Data}</Slider>
        </DeferredContent>
    </div>
  );
};

export default MatchBranchesContainer;
