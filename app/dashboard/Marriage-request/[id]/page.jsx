import MarriedForm from "@/app/Components/dashboard/Marriage"
import OfferForm from "@/app/Components/dashboard/OfferForm"
import StaffText from "@/app/Components/dashboard/StaffText"
import Navbar from "@/app/Components/dashboard/dashboardNavbar"

const page = ({params}) => {

  return (
    <>
        <Navbar params={params.id}/>
       		 <div style={{backgroundColor : '#f8f9fe', height : "100%", marginBottom : '50px'}}>
                  <MarriedForm/>
            
			 <div className="container-xxl">	    
			     <div style={{marginTop : '50px'}}>
					 <button className="btn" style={{backgroundColor : '#055c97', fontSize : '16px', fontWeight : 700, color : '#fff',
					  width : '100%', padding : '10px 0px'}}>انشاء طلب زواج  </button>
				 </div>
			  </div>
           </div>
    </>
  )
}

export default page