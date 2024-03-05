"use client"
import Navbar from "@/app/Components/dashboard/dashboardNavbar"
import { localUrl } from "@/lib/baseUrl"
import { useEffect, useState } from "react"
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';

const formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'align',
  'direction',
  'code-block',
  'formula'
]

const UserAds = ({params}) => {
  const [GetAds , setGetAds] = useState([]);
  const [GetAdsId , setGetAdsId] = useState(1);
  const [GetGovAllData , setGetGovAllData] = useState([]);
	const [GetGovId , seGetGovId] = useState(0);
	const [GetAllCity , setGetAllCity] = useState([]);
	const [GeCityId , setGetCityId] = useState(0)
  const [userName , setUserName ] = useState("")
  const [Phone, setPhone] = useState("")
  const [BannerImage, setBannerImage] = useState("");
  const [UserText, setUserText] = useState('');
  const [Loading , setLoading] = useState(false)

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


   const handelAdsImage = (e)=>{
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setBannerImage(reader.result.split(',')[1]); 
    };
   }

    const data = {
      "id" : window.localStorage.getItem('dalilElmahalla'),
      "name" : userName,
      "description" : UserText,
      "adCategotry" : GetAdsId,
      "image" : BannerImage
    }

    const sendData = ()=>{
      event.preventDefault()
          setLoading(true)
      fetch(`${localUrl}/rest/test.ads/saveAdd`,{
        method : 'POST',
        body : JSON.stringify(data),
        headers : {
          "Content-Type" : "application/json"
        }
      })
        .then((res) =>{
          res.json(),
          setLoading(false)
        })
      }

  return (
    <div style={{position : 'relative'}}>
       {
          Loading ? 
          <div style={{position : 'absolute', background : '#0000008f', width : '100%' , height : '100%' , zIndex : 5}}>
                <div className="" style={{display :'flex' , justifyContent : 'center',
                 alignItems : 'center', height : '100vh', position : 'fixed', width : '100%', zIndex : 15,
                 top : '40%' , left : '50%', transform : 'translate(-50% , -50%)'
                 }}>
                  <div class="text-center">
                    <div class="spinner-border" role="status" style={{color : '#fff' , width : '3rem' , height : '3rem'}}>
                    </div>
                  </div>
                </div>
            </div>
           : 
           null
          }
        <Navbar params={params.id}/>
       		 <div style={{backgroundColor : '#f8f9fe', height : "100%", paddingBottom : '50px'}}>
              <div className="breadcrumb-bar">
                  <div className="container-xxl">
                    <div className="row align-items-center">
                      <div className="col-md-12 col-12">
                        <h1 className="breadcrumb-title"> انشاء اعلان  </h1>
                      </div>
                    </div>
                  </div>
                </div>	
             <div className="container-xxl">
             <form onSubmit={sendData}>
                  <div className="row dashboard-input row-gap-4 mt-5">
                  <div className="col-12 col-md-6">
                        <label for="exampleFormControlInput1" className="form-label">الفئة الاعلانية</label>
                          <select className="form-select" aria-label="Default select example" onChange={(event) => setGetAdsId(event.target.value)} required>
                          {GetAds.map((item)=>{
                            return (
                                <option value={item.id}  key={item.id}>{item.name}</option>
                                )
							          	})}
                          </select>
                    </div>
                    <div className="col-12 col-md-6">
						  	<label for="exampleFormControlInput1" className="form-label">المحافظة </label>
                    <select className="form-select" aria-label="Default select example"  onChange={(event) => seGetGovId(event.target.value)} required>
                      {GetGovAllData.map((item)=>{
                        return (
                            <option value={item.id}  key={item.id}>{item.name}</option>
                            )
                      })}
                    </select>
        						</div>
                        <div className="col-12 col-md-6">
							<label for="exampleFormControlInput1" className="form-label">المدينة </label>
              <select className="form-select" aria-label="Default select example" onChange={(e)=> setGetCityId(e.target.value)} required>
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
                              <input type="number" className="form-control" placeholder={" برجاء ادخال رقم الهاتف  "}  onChange={(e)=> setPhone(e.target.value)} required	
                              />
                          </div>
                          <div className="col-12 col-md-6">
                                <label for="formFile" className="form-label">اختر صوره</label>
                                <input className="form-control" type="file"  onChange={(e)=> handelAdsImage(e)} id="formFile" required/>
                          </div>

                         
                     </div>
                     <div className="container-xxl">
                  <div style={{direction : 'ltr', textAlign : 'center', marginTop : '25px'}}>
                        {/* <ReactQuill  formats={formats} theme="snow" value={UserText} onChange={setUserText}/> */}
                 </div>
    
                 </div>
			 <div className="container-xxl">	    
			     <div style={{marginTop : '50px'}}>
					 <input 
					 type="submit" className="btn" style={{backgroundColor : '#055c97', fontSize : '16px', fontWeight : 700, color : '#fff', width : '100%', padding : '10px 0px'}}
					 />
				 </div>
			  </div>
         </form>
             </div>
           </div>
    </div>
  )
}

export default UserAds