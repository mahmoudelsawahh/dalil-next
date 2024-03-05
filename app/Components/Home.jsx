"use client"
import dynamic from "next/dynamic";
import React, {  useEffect } from "react";
import styles from "/app/styles/Home.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getLastBranches } from "/store/Categories";
import  Link  from "next/link";
const LastBranches = dynamic(() => import('./LastBranches'), {
  ssr : false
})
const HandelLastBranch = dynamic(() => import('./HandelLastBranch'), {
  ssr : false
})
const DirectoryItems = dynamic(() => import('./DirectoryItems'), {
  ssr : false
})
const LastViewsSlick = dynamic(() => import('./LastViewsSlick'), {
  ssr : false
})
import { getGatecories } from "@/store/Categories";
import Image from "next/image";
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLastBranches());
    dispatch(getGatecories())

  }, [dispatch]);
  const { AllCategories } = useSelector((state) => state.categoriesMenu);
  const CategoriesColumn =
  AllCategories?.length > 0
      ? AllCategories?.map((ele, id) => {
          const pathname = ele.name.replace(/-/g, " ");
          return (
              <div className={styles.card_image_rad} key={id}>
                 <Link href={`/cat/${ele.id}/state/0/city/0/page/1/${ele.name}`} key={id} >
                  <div className={styles.card_image}>
                    <Image
                      src={`https://dalil.deltawy.com/images?id=${ele.image}&type=tab`}
                      alt={`${ele.name}-categories`}
                      width={360}
                      height={250}
                    />
                  </div>
                  <h4>{pathname}</h4>
                </Link>
              </div>
            
          );
        })
      : "loading....";

  return (
    <div>
        <React.Fragment>
          {
            AllCategories?.length > 0
            ? AllCategories?.map((ele, id) => {
                const pathname = ele.name.replace(/-/g, " ");
                return (
                  <head key={id}>
                  <title> دليل المحلة و الدلتا الشامل على الانترنت</title>
                  <meta name="description" content={ele.shortDescription?.slice(0, 160)}
                  />
                  <meta itemprop="name" content={ele.name} />
                  <meta itemprop="description" content={ele.shortDescription?.slice(0, 160)}
                  />
                  <meta itemprop="image" content={`https://dalil.deltawy.com/images?id=${ele.image}&type=tab`}
                  />
                  <meta property="og:type" content="Article" />
                  <meta property="og:title" content={ele.name} />
                  <meta property="og:description" content={ele.shortDescription?.slice(0, 160)} />
                  <meta property="og:image" content={`https://dalil.deltawy.com/images?id=${ele.image}&type=tab`} />
                  <meta name="twitter:card" content="summary_large_image" />
                  <meta name="twitter:title" content={ele.name} />
                  <meta name="twitter:description" content={ele.shortDescription?.slice(0, 160)} />
                  <meta name="twitter:image" content={`https://dalil.deltawy.com/images?id=${ele.image}&type=tab`} />
                  <link rel="icon" type="image/x-icon" href={`https://dalil.deltawy.com/images?id=${ele.image}&type=tab`} />
                </head> 
                  
                );
              })
            : "loading...."
          }
      <div style={{direction:'rtl'}}>    
        <LastBranches/>
        <section style={{textAlign:'center'}}>
          <h1 className={styles.main_title} >تصفح ادلة الدليل</h1>
            <div className={styles.card_image_rad_flex}>{CategoriesColumn}</div>
          <HandelLastBranch />
          <LastViewsSlick />
            <DirectoryItems Categories={AllCategories} />
        </section>
      </div>
    </React.Fragment>
    </div>
  );
};

export default Home;