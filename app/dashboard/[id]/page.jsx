import DashboardImages from "@/app/Components/dashboard/DashboardImages"
import UserDetails from "@/app/Components/dashboard/UserDetails"
import UserMap from "@/app/Components/dashboard/UserMap"
import Navbar from "@/app/Components/dashboard/dashboardNavbar"

const page = ({params}) => {

  return (
    <>
        <Navbar params={params.id}/>
       		 <div style={{backgroundColor : '#f8f9fe', height : "100%"}}>
				<div className="breadcrumb-bar">
						<div className="container-xxl">
							<div className="row align-items-center">
								<div className="col-md-12 col-12">
									<h1 className="breadcrumb-title"> اعدادات الحساب</h1>
								</div>
							</div>
						</div>
					</div>	
				<UserDetails/>			 
           </div>
    </>
  )
}

export default page