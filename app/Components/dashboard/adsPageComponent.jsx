"use client"
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAdDetails } from "/store/AdvertisementSlice";
import { FaPhone } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import styles from  "/app/styles/Home.module.scss";
import  Link  from "next/link";
import Image from "next/image";

const AdDetailsPage = ({params}) => {
  const dispatch = useDispatch();
  const id = params.id[0]
  const  {getAdDetailsArray}  = useSelector((state) => state.Ads);
  useEffect(() => {
    dispatch(getAdDetails(parseInt(id)));
  }, [dispatch, id]);

  const FinalData = getAdDetailsArray ? 
  (
    <div>
      <head key={getAdDetailsArray.ad?.id}>
        <meta itemprop="name" content={getAdDetailsArray.ad?.name} />
        <meta itemprop="description" content={getAdDetailsArray.ad?.shortDescription?.slice(0, 160)}
        />
        <meta itemprop="image" content={`https://dalil.deltawy.com/images?id=${getAdDetailsArray.ad?.image}&type=tab`}
        />
        <meta property="og:type" content="Article" />
        <meta property="og:title" content={getAdDetailsArray.ad?.name} />
        <meta property="og:description" content={getAdDetailsArray.ad?.shortDescription?.slice(0, 160)}        />
        <meta property="og:image" content={`https://dalil.deltawy.com/images?id=${getAdDetailsArray.ad?.image}&type=tab`}        />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={getAdDetailsArray.ad?.name} />
        <meta name="twitter:description" content={getAdDetailsArray.shortDescription?.slice(0, 160)}        />
        <meta name="twitter:image" content={`https://dalil.deltawy.com/images?id=${getAdDetailsArray.ad?.image}&type=tab`}        />
        <link rel="icon" type="image/x-icon" href={`https://dalil.deltawy.com/images?id=${getAdDetailsArray.ad?.image}&type=tab`} />
      </head>
      <h1  className={styles.ad_info_p}>{getAdDetailsArray.ad?.name}</h1>
      <div  style={{textAlign:"center", padding:"2rem 0" }} >
        <Image
          src={`https://dalil.deltawy.com/images?id=${getAdDetailsArray.ad?.image}&type=tab`}
          loading="lazy"
        alt="deltawy"
        width={300}
        height={300}
        />
      </div>
      <h1  className={styles.discripe_tag} >الوصف</h1>
      <div   className={styles.ad_info } >
        <p>{getAdDetailsArray.ad?.description}</p>
        <p>رقم تليفون التواصل</p>
        <p> {getAdDetailsArray.ad?.phone}</p>
        <div   className={styles.icons_section}>
          {getAdDetailsArray.ad?.phone.length > 0 && (
            <span>
              <Link
                href={`tel:${getAdDetailsArray.ad.phone}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaPhone />
              </Link>
            </span>
          )}

          {getAdDetailsArray.ad.phone.length > 0 && (
            <span>
              <Link
                href={`http://api.whatsapp.com/send?phone=${getAdDetailsArray.ad.phone}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoWhatsapp />
              </Link>
            </span>
          )}
        </div>
      </div>
    </div>
  ) : "";
  return <div className={styles.job_details} >{FinalData}</div>;
};

export default AdDetailsPage;
