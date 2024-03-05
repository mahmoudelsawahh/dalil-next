"use client"

import { localUrl } from "@/lib/baseUrl";
import { useEffect, useState } from "react"

const Ads = () => {
  const [GetAds , setGetAds] = useState([]);
  const [GetAdsId , setGetAdsId] = useState(0);
  const [GetGovAllData , setGetGovAllData] = useState([]);
	const [GetGovId , seGetGovId] = useState(0);
	const [GetAllCity , setGetAllCity] = useState([]);
	const [GeCityId , setGetCityId] = useState(0)
  const [userName , setUserName ] = useState("")
  const [Phone, setPhone] = useState("")
  const [BannerImage, setBannerImage] = useState(null);

  useEffect(()=>{
    fetch(`${localUrl}/rest/test.branch/adsCategory`)
    .then((res) => res.json())
    .then((data) => {
      setGetAds(data.reverse())
    })

    fetch(`${localUrl}/rest/test.branch/getStates`)
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

  },[GetGovId])


  
    return (
      <>
          <form>
                  <div className="row dashboard-input row-gap-4 pt-5">
                  <div className="col-12 col-md-6">
                        <label for="exampleFormControlInput1" className="form-label">الفئة الاعلانية</label>
                          <select className="form-select" aria-label="Default select example" onChange={(event) => setGetAdsId(event.target.value)}>
                          {GetAds.map((item)=>{
                            return (
                                <option value={item.id}  key={item.id}>{item.name}</option>
                                )
							          	})}
                          </select>
                    </div>
                    <div className="col-12 col-md-6">
						  	<label for="exampleFormControlInput1" className="form-label">المحافظة </label>
                    <select className="form-select" aria-label="Default select example"  onChange={(event) => seGetGovId(event.target.value)}>
                      {GetGovAllData.map((item)=>{
                        return (
                            <option value={item.id}  key={item.id}>{item.name}</option>
                            )
                      })}
                    </select>
        						</div>
                        <div className="col-12 col-md-6">
							<label for="exampleFormControlInput1" className="form-label">المدينة </label>
              <select className="form-select" aria-label="Default select example" onChange={(e)=> setGetCityId(e.target.value)}>
							<option value={0} selected={GetAllCity == 0}>اختر المدينه</option>

								{GetAllCity.map((item)=>{
									return (
											<option value={item.id} key={item.id}>{item.name}</option>
											)
								})}
							</select>						</div>
                    <div className="col-12 col-md-6">
                              <label for="exampleFormControlInput1" className="form-label">  اسم الاعلان </label>
                              <input type="text" className="form-control" placeholder={" برجاء ادخال اسم الاعلان "} onChange={(e)=> setUserName(e.target.value)} required	
                              />
                          </div>
              <div className="col-12 col-md-6">
                              <label for="exampleFormControlInput1" className="form-label">رقم الهاتف للتواصل  </label>
                              <input type="tel" className="form-control" placeholder={" برجاء ادخال رقم الهاتف  "}  onChange={(e)=> setPhone(e.target.value)} required	
                              />
                          </div>
                          <div className="col-12 col-md-6">
                                <label for="formFile" className="form-label">اختر صوره</label>
                                <input className="form-control" type="file"  onChange={(e)=> console.log(e.target.files)} id="formFile"/>
                          </div>

                         
                     </div>
         </form>
      </>
    )
  }
  
  export default Ads