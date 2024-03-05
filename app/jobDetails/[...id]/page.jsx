import JobDetails from '@/app/Components/JobDetails'
import { localUrl } from '@/lib/baseUrl'

export async function getDetails(param) {
  const res = await fetch(`${localUrl}/jobDetails?id=${param}`,{
    cache : 'no-store',
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
  metadata.title = data.job.name
  metadata.description = data.job.description
 metadata.openGraph.images = `https://dalil.deltawy.com/images?id=${data.job.image}&type=tab`
 metadata.openGraph.title = `${data.job.name}`,
 metadata.openGraph.url = `${data.job.url}`,
 metadata.openGraph.description = `${data.job.description}`,
 metadata.openGraph.phone_number = `${data.job.phone}`,
 metadata.openGraph.latitude = `${data.job.lat}`,
 metadata.openGraph.longitude = `${data.job.lng}`,
 metadata.openGraph.streetAddress = `${data.job.description}`
  return (
    <>
      <JobDetails params={params}/>
    </>
  )
}

export default page