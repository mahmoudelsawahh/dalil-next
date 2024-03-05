"use client"
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';
import Navbar from "@/app/Components/dashboard/dashboardNavbar"
import { useEffect, useState } from 'react';
import { localUrl } from '@/lib/baseUrl';

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
  

const OfferForm = ({params}) => {
  const [UserName, setUserName] = useState("")
	const [Price, setPrice] = useState("")
	const [Desc, setDesc] = useState("")
  const [OfferImage, setOfferImage] = useState("")
  const [Loading , setLoading] = useState(false)


  const handelOfferImage = (e)=>{
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setOfferImage(reader.result.split(',')[1]); 
    };
   }

    const data = {
      "id" : window.localStorage.getItem('dalilElmahalla'),
      "description" : Desc,
      "name": UserName,
      "img": OfferImage,
       "price": Price
    }
   const sendData = ()=>{
    event.preventDefault()
    setLoading(true)
      fetch(`${localUrl}/rest/test.offers/saveOffer`,{
        method : 'POST',
        body : JSON.stringify(data),
        headers : {
          "Content-Type" : "application/json"
        }
      })
        .then((res) =>{
          res.json(),
          setLoading(false)
          setDesc(""),
          setUserName(""),
          setOfferImage(""),
          setPrice("")
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
                        <h1 className="breadcrumb-title"> انشاء عرض جديد  </h1>
                      </div>
                    </div>
                  </div>
                </div>	
             <div className="container-xxl">
             <form onSubmit={sendData}>
                  <div className="row dashboard-input row-gap-4 pt-5">
                        <div className="col-12 col-md-6">
							<label for="exampleFormControlInput1" className="form-label">اسم العرض </label>
							<input type="tel" className="form-control" value={UserName} onChange={(e)=> setUserName(e.target.value)} required />
						</div>
                    <div className="col-12 col-md-6">
                              <label for="exampleFormControlInput1" className="form-label">  السعر  </label>
                              <input type="number" className="form-control" placeholder={" برجاء ادخال السعر"} value={Price} onChange={(e)=>setPrice(e.target.value)} required	
                              />
                          </div>
                          <div className="col-12 col-md-12">
                                <label for="formFile" className="form-label">اختر صوره</label>
                                <input className="form-control" type="file"  onChange={(e)=> handelOfferImage(e)} id="formFile" required/>
                          </div>

                         
                     </div>
                     <div className="container-xxl">
             <div style={{direction : 'ltr', textAlign : 'center', paddingTop : '25px'}}>
                {/* <ReactQuill  formats={formats} theme="snow" value={Desc} onChange={setDesc} /> */}
              </div>
    
             </div>
                          <div className="container-xxl">	    
                        <div style={{paddingTop : '50px'}}>
                        <input type='submit' className="btn" style={{backgroundColor : '#055c97', fontSize : '16px', fontWeight : 700, color : '#fff',
                          width : '100%', padding : '10px 0px'}} value={'انشاء عرض جديد'}/>
                      </div>
                      </div>
                  </form>
             </div>
           
			
           </div>
    </div>
  )
}

export default OfferForm