import { localUrl } from '@/lib/baseUrl'
import { cookies } from 'next/headers'

export async function postApi(param) {
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


  
  export default async function sitemap(){
    const baseUrl = "https://deltawy.net"
    const cookieStore = cookies()
    const theme = cookieStore.get('getPageId')
    const allPosts = await postApi(theme.value)
 

    const postsUrl = allPosts? allPosts.siteMap.branches.map((item)=>{
      return {
        url : `${baseUrl}/page/${item.id}/${item.name.replace(/\s+/g, '-')}`,
        lastModified : new Date()
      }
   }) : []


   const postsUrlCat = allPosts? allPosts.siteMap.cats.map((item)=>{
    return {
      url : `${baseUrl}/page/${item.id}/${item.name.replace(/\s+/g, '-')}`,
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
                ...postsUrlCat
      ]
  }