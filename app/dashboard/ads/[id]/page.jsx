import UserAds from "@/app/Components/dashboard/UserAds"

const page = ({params}) => { 
  return (
     <>
       <UserAds params={params}/>
     </>
  )
}

export default page