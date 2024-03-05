"use client"
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBranches } from "../../../store/Categories";
import Head from "next/head"  
import styles from  "../../styles/Home.module.scss";
import SubGategoriesSlick from "../../Components/subGategoriesSlick";
import Cat from "../../Components/Cat";

const SubGategories = ({ Categories, params }) => {
  const { AllCategories } = useSelector((state) => state.categoriesMenu);
  const dispatch = useDispatch();
  const  id  = params.id[0];
  const { ALLBranches } = useSelector((state) => state.categoriesMenu);

  useEffect(() => {
    dispatch(getBranches(parseInt(id)));
  }, [dispatch, id]);

  const MinTitle = AllCategories
    ? AllCategories
        .filter((ele) => ele.id === parseInt(id))
        .map((e, id) => {
          return (
            <h1 style={{ textAlign: "center" }} key={id} className={styles.main_title}>
              {e.name}
            </h1>
          );
        })
    : null;


  return (
    <React.Fragment>
      {
        AllCategories
        ? AllCategories
            .filter((e) => e.id === parseInt(id))
            .map((ele, id) => {
              
              return (
                <head key={id}>
              <title>{ele.name}</title>
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
        : null
      }


      <div className={styles.sub_gateogry}>
        <div>
          {MinTitle}
            <SubGategoriesSlick Categories={AllCategories} id={id}/>
            <Cat branches={ALLBranches}
            //  type={router.query.type} 
            // type={133} 
             />
        </div>
      </div>
    </React.Fragment>
  );
};

export default SubGategories;


