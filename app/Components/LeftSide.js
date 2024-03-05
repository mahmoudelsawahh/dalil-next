"use client"
/* eslint-disable @next/next/inline-script-id */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import styles from  "../styles/Home.module.scss";
import { getRightFrinds } from "../../store/FriendsSlice";
import Link from "next/link";
import Script from "next/script";
import Image from 'next/image';
import deltawyBanner from '/public/img/deltawy.gif.gif'
import LazyLoad from 'react-lazyload';
import { getAllAds } from '@/store/AdvertisementSlice';
import { getAllJobs } from '@/store/JobsSlice';
const RightSide = () => {
  const getAllAdsDetails =  useSelector((state) => state.Ads.getAllAdsArray);
  const dispatch = useDispatch();
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    dispatch(getAllJobs())
    dispatch(getAllAds())
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, [dispatch]);

  
  const fristGroupArray = useSelector((state) => state.FriendsSlice.fristGroupArray);
    const SideJobs = getAllAdsDetails
    ? getAllAdsDetails.ads?.map((ele, id) => {
        const pathname = ele.name.replace(/\s/g, "-");
        return (
          <Link style={{borderBottom:' 1px solid #dee2e6', width:"100%", color : '#024878', display : 'flex' }}
            key={id}
            href={`/adDetailsPage/${ele.id}/${pathname}`}
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <LazyLoad height={"100%"} once>
                <Image src={`https://dalil.deltawy.com/images?id=${ele.image}&type=tab`} width={50} height={50} alt={ele.name} loading='lazy'/>
            </LazyLoad>
            <p className={styles.pp}>{ele.name}</p>
          </Link>
        );
      })
    : null;

  useEffect(() => {
    dispatch(getRightFrinds());
  }, [dispatch]);

   const filterNumber = fristGroupArray ? fristGroupArray.slice(0,fristGroupArray.length / 2) : null
  const FriendsData = fristGroupArray
    ? filterNumber?.map((ele, id) => {
        return (
          <Link target={"_blank"} href={`${ele.link}`} key={id} rel="noreferrer" style={{ borderBottom:' 1px solid #dee2e6',  color : '#024878',padding:"10px 0" , width:"100%" , fontWeight:"bold"}}>
           <p style={{fontSize:"13px"}}>{ele.name}</p> 
          </Link>
        );
      })
    : "null";
    
  return (
    <React.Fragment>
      {
        getAllAdsDetails
        ? getAllAdsDetails.ads?.map((ele, id) => {
            return (
              <Script key={id} type="application/ld+json">
              {JSON.stringify({
               
               "@context": "https://schema.org",
               "@type": "JobPosting",
               "baseSalary": "",
               "jobBenefits": "Medical, Life, Dental",
               "datePosted": `${date.toLocaleDateString()}`,
               "description": `${ele.shortDescription  }`,
               "employmentType": "Full-time",
               "title":`${ele.name}`
               
              })}
            </Script>
               
            );
          })
        : null
      }
      
      <aside className={styles.side_nave}>
        <div  className={styles.side_nave_img_delt}>
        <LazyLoad height={"100%"} once>
         <Link href={"https://deltawy.com"} target='_blank'>
         <Image
              src={deltawyBanner}
              alt="deltawy"
              loading='lazy'
              className={styles.side_nave_img_delt}
            />
         </Link>
        </LazyLoad>
        </div>
        <div className={`${styles.display_fflex} ${styles.jobs_side}`}   >
          <h3 className={styles.hthree}>اخر الاعلانات</h3>
          <div  className={styles.Links}>{SideJobs}</div>
        </div>

        <LazyLoad height={"100%"} once>
         
          <div  className={`${styles.display_fflex} ${styles.friends}`}  >
            <h1 className={`${styles.display_friends} ${styles.friends}`} >مواقع صديقة</h1>
            <div   className={`${styles.display_links} ${styles.Links}`}  >
              
              
              {FriendsData}
               
            </div>
          </div>
        </LazyLoad>
      </aside>
    </React.Fragment>
  );
};

export default RightSide;

