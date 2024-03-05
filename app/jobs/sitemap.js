  async function jobApi() {  
    const res = await fetch(`https://dalil.deltawy.com/jobLite`,{
      cache : 'no-store',
      headers : {
        'Content-Type': 'application/json',
      },
    })
    return res.json()
  }
  
  
  export default async function sitemap(){
    const baseUrl = "https://deltawy.net"
  
   const jobs = await jobApi()
   const jobsUrl = jobs? jobs.jobs.map((item)=>{
     return {
         url : `${baseUrl}/jobDetails/${item.id}/${item.name}`,
         lastModified : new Date()
     }
  }) : []

  
      return [
          {
              url: 'https://deltawy.net',
              lastModified: new Date(),
            },
            {
              url: 'https://deltawy.net/jobs',
              lastModified: new Date(),
            },
            {
              url: 'https://deltawy.net/advertisement',
              lastModified: new Date(),
            },
            {
              url: 'https://deltawy.net/privacy',
              lastModified: new Date(),
            },
            {
              url: 'https://deltawy.net/loginPage',
              lastModified: new Date(),
            },
            {
              url: 'https://deltawy.net/register',
              lastModified: new Date(),
            },
            ...jobsUrl,

      ]
  }