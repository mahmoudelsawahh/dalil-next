async function postApi() {  
    const res = await fetch(`https://dalil.deltawy.com/rest/test.ads/getAll/5`,{
      cache : 'no-store',
      headers : {
        'Content-Type': 'application/json',
      },
    })
    return res.json()
  }
  
  export default async function sitemap(){
    const baseUrl = "https://deltawy.net"
    const posts = await postApi()
    const postsUrl = posts? posts.ads.map((item)=>{
      return {
          url : `${baseUrl}/adDetailsPage/${item.id}/${item.name}`,
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
            ...postsUrl,
      ]
  }