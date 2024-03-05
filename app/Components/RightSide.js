"use client"
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {
  LazyLoadComponent,
} from "react-lazy-load-image-component";
import styles from  "../styles/Home.module.scss";
import { getRightFrinds } from "../../store/FriendsSlice";
import Link from "next/link";
import Script from "next/script";
import deltawyBanner from '/public/img/deltawy.gif.gif'
import Image from 'next/image';
import LazyLoad from 'react-lazyload';

const RightSide = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  const dispatch = useDispatch();
  const  { AllJobs }  = useSelector((state) => state.JobSlice);
  const fristGroupArray = useSelector((state) => state.FriendsSlice.fristGroupArray);
    const SideJobs = AllJobs
    ? AllJobs.jobs?.map((ele, id) => {
        const pathname = ele.name.replace(/\s/g, "-");
        return (
          <Link style={{borderBottom:' 1px solid #dee2e6', width:"100%" , color : '#024878', display : 'flex'}}
            key={id}
            href={`/jobDetails?id=${ele.id}/${pathname}`} as={`/jobDetails/${ele.id}/${pathname}`}
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <LazyLoad height={"100%"}>
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

  const filterNumber = fristGroupArray ? fristGroupArray.slice(fristGroupArray.length / 2, fristGroupArray.length) : null
  const FriendsData = fristGroupArray
    ? filterNumber?.map((ele, id) => {
        return (
          <Link target={"_blank"} href={`${ele.link}`} key={id} rel="noreferrer" style={{ borderBottom:' 1px solid #dee2e6', color : '#024878' ,padding:"10px 0" , width:"100%" , fontWeight:"bold"}}>
           <p style={{fontSize:"13px"}}>{ele.name}</p> 
          </Link>
        );
      })
    : "null";
    
  return (
    <React.Fragment>
      {
        AllJobs
        ? AllJobs.jobs?.map((ele, id) => {
            return (
              // eslint-disable-next-line @next/next/inline-script-id
              <Script key={id} type="application/ld+json" >
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
         <LazyLoadComponent>
         <Link href={"https://deltawy.com"} target='_blank'>
         <Image
            src={deltawyBanner}
            alt="deltawy"
            className={styles.side_nave_img_delt}
          />
         </Link>
         </LazyLoadComponent>
        </div>
        <div className={`${styles.display_fflex} ${styles.jobs_side}`}   >
          <h1 className={styles.hthree}>اخر الوظائف</h1>
          <div  className={styles.Links}>{SideJobs}</div>
        </div>
        
        <LazyLoadComponent>
         
          <div  className={`${styles.display_fflex} ${styles.friends}`}  >
            <h1 className={`${styles.display_friends} ${styles.friends}`} >مواقع صديقة</h1>
            <div   className={`${styles.display_links} ${styles.Links}`}  >
              
              
              {FriendsData}
               
            </div>
          </div>
        </LazyLoadComponent>
      </aside>
    </React.Fragment>
  );
};

export default RightSide;

