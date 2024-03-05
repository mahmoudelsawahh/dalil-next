"use client"
import React from "react";
import loading from "/public/img/loading.gif";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useSelector } from "react-redux";
import SplashScreen from "/app/Components/SplashScreen.js";
import styles from  "../styles/Home.module.scss";
import  Link  from "next/link";
import Head from "next/head"  
const Jobs = () => {

  const { AllJobs, isLoadingJobs } = useSelector((state) => state.JobSlice);

  const FinalData = AllJobs
    ? AllJobs.jobs.map((ele, idx) => {
        const pathname = ele.name.replace(/\s/g, "-");
        return (
          <div
          className={styles.cards_container} 
          key={idx}
          onClick={() => {
            window.scrollTo(0, 0);
          }}
          style={{gap:"1rem"}}
        >
          
            <div className={styles.image_container} >
            <Link href={`/jobDetails?id=${ele.id}/${pathname}`} key={idx} as={`/jobDetails/${ele.id}/${pathname}`}>
              <LazyLoadImage
                src={`https://dalil.deltawy.com/images?id=${ele.image}&type=tab`}
                alt={ele.name}
                effect="blur"
                style={{width:"100%",height:"auto" }}
                placeholderSrc={process.env.PUBLIC_URL + loading}
              />
              </Link>
              
            </div>
            <Link href={`/jobDetails?id=${ele.id}/${pathname}`} key={idx} as={`/jobDetails/${ele.id}/${pathname}`}>
            <div className={styles.Job_description} >
              <h3>{ele.name}</h3>
              <span> {ele.address}</span>
              <p>{ele.shortDescription.substring(0, 130)}{ele.shortDescription.length > 130 && "....."}</p>
            </div>
            </Link>
        </div>
        );
      })
    : null;

  return (
    <>
      {AllJobs ? (
        <div>
          <h1 className={styles.main_title}> الوظائف</h1>
          <div className={styles.Jobs} >{FinalData}</div>
        </div>
      ) : (
        <SplashScreen />
      )}

      {
        AllJobs
        ? AllJobs.jobs.map((ele, idx) => {
            return (
              <head key={idx}>
        
              <title>{ele.name}</title>
              <meta name="description" content={ele.shortDescription.slice(0, 160)}
              />
              <meta itemprop="name" content={ele.name} />
              <meta itemprop="description" content={ele.shortDescription.slice(0, 160)}
              />
              <meta itemprop="image" content={`https://dalil.deltawy.com/images?id=${ele.image}&type=tab`}
              />
              <meta property="og:type" content="Article" />
              <meta property="og:title" content={ele.name} />
              <meta property="og:description" content={ele.shortDescription.slice(0, 160)} />
              <meta property="og:image" content={`https://dalil.deltawy.com/images?id=${ele.image}&type=tab`} />
      
              {/* <!-- Twitter Meta Tags --> */}
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:title" content={ele.name} />
              <meta name="twitter:description" content={ele.shortDescription.slice(0, 160)} />
              <meta name="twitter:image" content={`https://dalil.deltawy.com/images?id=${ele.image}&type=tab`} />
              <link rel="icon" type="image/x-icon" href={`https://dalil.deltawy.com/images?id=${ele.image}&type=tab`} />
            </head>
            );
          })
        : null
      }
    </>
  );
};

export default Jobs;
