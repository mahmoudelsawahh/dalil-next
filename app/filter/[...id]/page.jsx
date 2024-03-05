import FilterCat from "@/app/Components/FilterCat"
import { localUrl } from "@/lib/baseUrl"

export async function getDetails(param) {
  const res = await fetch(`${localUrl}/rest/test.branch/filter`,{
    method : 'POST',
    body : JSON.stringify(
        param
    ),
    cache : 'no-store',
    headers : {
      "Access-Control-Allow-Headers" : "X-Custom-Header, Upgrade-Insecure-Requests",
      'Content-Type': 'application/json',
    } 
})

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    return ""
  }
 
  return res.json()
}




const page = async({params}) => {
const data = await getDetails(
  {
    "filterKey": params.id[7] === undefined ? "" : decodeURIComponent(params.id[7]) ,
  "catId":   params.id[0],
  "stateId": params.id[2],
  "first": 0
}
)
  return (
    <>
      <FilterCat params={params} ALLBranches={data}/>
    </>
  )
}

export default page