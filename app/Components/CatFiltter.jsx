"use client"
import { localUrl } from "@/lib/baseUrl";
import { useEffect, useRef, useState } from "react"

const CatFiltter = () => {

	const [GetGovAllData , setGetGovAllData] = useState([]);
	const [GetGovId , seGetGovId] = useState(1);
	const [GetAllCity , setGetAllCity] = useState([]);
	useEffect(() => {
		fetch(`${localUrl}/rest/test.branch/getStates/`)
		  .then((res) => res.json())
		  .then((data) => {
			setGetGovAllData(data.reverse())
		  })

		  fetch(`${localUrl}/rest/test.branch/getCities`,{
			method : 'POST',
			body : JSON.stringify({"id" : GetGovId}),
		})
		  .then((res) => res.json())
		  .then((data) => {
			return setGetAllCity(data.cities)
		  })

		  
	  }, [GetGovId])

	  	
  return (
    <>
        <form>
		<div className="container-xxl">
			     <div className="row dashboard-input">
                 <div className="col-12 col-md-6">
							<label for="exampleFormControlInput1" className="form-label">المحافظة </label>
							<select className="form-select" aria-label="Default select example"  onChange={event => seGetGovId(event.target.value)}>
								{GetGovAllData.map((item)=>{
									return (
											<option value={item.id}  key={item.id}>{item.name}</option>
											)
								})}
							</select>
					</div>
						<div className="col-12 col-md-6">
							<label for="exampleFormControlInput1" className="form-label">المدينة </label>
							<select className="form-select" aria-label="Default select example">
								{GetAllCity.map((item)=>{
									return (
											<option value={item.id} key={item.id}>{item.name}</option>
											)
								})}
							</select>
						</div>

				</div>
	        </div>		
	   </form>
    </>
  )
}

export default CatFiltter