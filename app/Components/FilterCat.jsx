"use client"
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBranches } from "../../store/Categories";
import styles from  "../styles/Home.module.scss";
import SubGategoriesSlick from "../Components/subGategoriesSlick";
import Cat from "../Components/Cat";
import { useRouter } from "next/navigation";
import { localUrl } from "@/lib/baseUrl";
import { PaginationControl } from 'react-bootstrap-pagination-control';

const FilterCat = ({ params ,  ALLBranches}) => {
	const [page, setPage] = useState(params.id[6])
  const router = useRouter();
  const [getAllStates , setGetAllStates] = useState([])
  const [getStateId , setGetStateId] = useState(params.id[2])

  const [GetAllCity , setGetAllCity] = useState([])

  const [GeCityId , setGetCityId] = useState(params.id[4])

  const  id  = params.id[0];

  useEffect(() => {

    fetch(`${localUrl}/rest/test.branch/getStates/`)
		  .then((res) => res.json())
		  .then((data) => {
			 return setGetAllStates(data.reverse())
		  })

		  fetch(`${localUrl}/rest/test.branch/getCities`,{
			method : 'POST',
			body : JSON.stringify({"id" : getStateId}),
		})
		  .then((res) => res.json())
		  .then((data) => {
			return (
        setGetAllCity(data)
      )
		  })

  }, [GeCityId, getStateId, id, page]);
 
  const MinTitle = ALLBranches
    ?  
      <h1 style={{ textAlign: "center" }} key={id}>
        {ALLBranches.title}
      </h1>
    : null;

  return (
    <React.Fragment>
  
    {ALLBranches ?
     <head>
       <title>{ALLBranches.title}</title>
     </head>
     :null}
    <form>
      <div className="container-xxl">
               <div className="row dashboard-input">
               <div className="col-12 col-md-6">
                          <label for="exampleFormControlInput1" className="form-label">المحافظة </label>
                          <select className="form-select" aria-label="Default select example" onChange={(e)=> (
              setGetStateId(e.target.value),
              router.replace(`/cat/${id}/state/${e.target.value}/city/${0}/page/${page}/${ALLBranches.title.replace(/\s+/g, '-')}`)
            )}>
                              {getAllStates.map((item)=>{

                                  return (
                                          <option value={item.id} key={item.id} selected={params.id[2] == item.id}>{item.name}</option>
                                          )
                              })}
                          </select>
                  </div>
                      <div className="col-12 col-md-6">
                          <label for="exampleFormControlInput1" className="form-label">المدينة </label> 
                          <select className="form-select" aria-label="Default select example" onChange={(e)=> (
              setGetCityId(e.target.value),
             router.replace(`/cat/${id}/state/${getStateId}/city/${e.target.value}/page/${page}/${ALLBranches.title.replace(/\s+/g, '-')}`)

            )}
            >
            <option value={0} selected={params.id[4] == 0}>اختر المدينه</option>

                               {GetAllCity.cities?GetAllCity.cities.map((item)=>{
                                  return (
                                          <option value={item.id} key={item.id} selected={params.id[4] == item.id}>{item.name}</option>
                                          )
                              }):null} 
                          </select>
                      </div>

              </div>
          </div>		
     </form>



    <div className={styles.sub_gateogry}>
      <div>
        {MinTitle}
          {/* <SubGategoriesSlick Categories={Categories} id={id} getStateId={getStateId} GeCityId={GeCityId}/> */}
          <Cat branches={ALLBranches} />
      </div>
    </div>

    {
      ALLBranches ? 
      ALLBranches.total > 20 ? 
      <PaginationControl
  page={page}
  between={0}
  total={ALLBranches ? ALLBranches.total : 0}
  limit={20}
  changePage={(page) => {
    setPage(page),
    router.replace(`/cat/${id}/state/${getStateId}/city/${GeCityId}/page/${page}/${ALLBranches.title.replace(/\s+/g, '-')}`)
  }}
  ellipsis={1}
  />
       : null
       : null
    }

  </React.Fragment>
  );
};

export default FilterCat;


