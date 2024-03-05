import SapesficCategory from "@/app/Components/adsPageComponent"
import { localUrl } from "@/lib/baseUrl"
// import generateRssFeed from "@/lib/generateRssFeed"
export async function getDetails(param) {
  const res = await fetch(`${localUrl}/rest/test.branch/branche`,{
    method : 'POST',
    body : JSON.stringify({"id" : param}),
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


export const metadata = {
  title: 'دليل المحلة الإلكتروني',
  type : 'local business',
  description: 'دليل المحلة الإلكتروني - هو دليل ومحرك بحث شامل للشركات وهو دليل صناعي وتجاري وخدمي يشمل كافة القطاعات والأشخاص المهنيين ، من مميزات الدليل: طريقة العرض والبحث حداثة ودقة بياناته في جميع المجالات يتميز بأنه مطور بتقنيات برمجية حديثة الدليل بالكامل مجاناً لمن يريد البحث عن أي شئ يتميز بقوة نتائجه في محركات البحث يتميز الدليل بالسرعة في أرشفة البيانات في محركات البحث العالمية الدليل إشهار ممتاز للشركات التجارية والقطاعات الخدمية والأشخاص أصحاب الأعمال  ',
  openGraph: {
    images:  ``,
    title : '',
    url : '',
    site_name : 'IMDb',
    description : '',
    email : '',
    phone_number : '',
    latitude : '',
    longitude : '',
    locality : '',
    region : '',
    countryName : 'Egypt',
    streetAddress : ''
  },
  
}


const page = async({params}) => {
  const data = await getDetails(Number(params.id[0]))
  metadata.title = data.name
  metadata.description = data.shortDescription
 metadata.openGraph.images = `https://dalil.deltawy.com/images?id=${data.logo}&type=tab`
 metadata.openGraph.title = `${data.name}`,
 metadata.openGraph.url = `${data.url}`,
 metadata.openGraph.description = `${data.shortDescription}`,
 metadata.openGraph.email = `${data.email}`,
 metadata.openGraph.phone_number = `${data.phone}`,
 metadata.openGraph.latitude = `${data.lat}`,
 metadata.openGraph.longitude = `${data.lng}`,
 metadata.openGraph.region = `${data.stat}`,
 metadata.openGraph.countryName = `${data.city}`,
 metadata.openGraph.streetAddress = `${data.address}`

 // await generateRssFeed(Number(params.id[0]));


  return (
    <>
   
      <SapesficCategory params={params}/>
    </>
  )
}

export default page
