"use client"
import React from "react";
import { Rating } from "primereact/rating";
import { LazyLoadImage, LazyLoadComponent } from "react-lazy-load-image-component";
import loading from "../../public/img/loading.gif";
import Link from "next/link";
import styles from "../styles/Home.module.scss";

 function Cat({ branches, type }) {
  return (
    <>
      <div className={styles.Client_Category}>
      {branches? branches.branches.map((ele , id) => {
        return(
        <head key={id}>
              {/* <title>{ele.name}</title> */}
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
              <meta name="twitter:description" content={ele.shortDescription?.slice(0, 160)}        />
              <meta name="twitter:image" content={`https://dalil.deltawy.com/images?id=${ele.image}&type=tab`} />
            </head> 
        )            
          })
          : ""}
        {branches? branches.branches.map((branch , id) => {
          const pathname = branch.name.replace(/-/g, " ");
          return (
            <Link key={id} href={branch.url.replace('https://deltawy.net', '')}>
           <div
             md={12}
             className={`${styles.client_category_container} flex-column flex-md-row`}
           >
               <div  className={styles.loading_circel}>
                 <LazyLoadImage
                   effect="blur"
                   src={`https://dalil.deltawy.com/images?id=${branch.logo}&type=tab}`}
                   alt={`${branch.name}`}
                   width="200px"
                   height="auto"
                   placeholderSrc={process.env.PUBLIC_URL + loading}
                 />
               </div>
               <div className={styles.client_category_content}>
                 <h3>{branch.name}</h3>
                 <h5>{branch.address}</h5>
                 <div className={styles.contact_div}>
                   <Rating
                     value={branch.rate === 0 ? 1 : branch.rate}
                     readOnly
                     cancel={false}
                   ></Rating>
                   <span>{branch.phone}</span>
                 </div>
                 <p>{branch.description.substring(0, 150)}{branch.description.length > 150 && "..."}</p>
               </div>
            
           </div>
         </Link>
        )  }): ""}
      </div>

    </>
  )
}
export default Cat;
