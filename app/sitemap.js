
async function branchesApi() {  
  const res = await fetch(`https://dalil.deltawy.com/rest/test.branch/last/0`,{
    cache : 'no-store',
    headers : {
      'Content-Type': 'application/json',
    },
  })
  return res.json()
}


async function catApi() {  
  const res = await fetch(`https://dalil.deltawy.com/rest/test.category/cats`,{
    cache : 'no-store',
    headers : {
      'Content-Type': 'application/json',
    },
  })
  return res.json()
}

async function postApi() {  
  const res = await fetch(`https://dalil.deltawy.com/rest/test.ads/getAll/5`,{
    cache : 'no-store',
    headers : {
      'Content-Type': 'application/json',
    },
  })
  return res.json()
}

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
  // ----------------------------------------------------
//   const branches = await branchesApi()
//   const branchesUrl = branches? branches.branches.map((item)=>{
//     return {
//         url : `${baseUrl}/page/${item.id}/${item.name}`,
//         lastModified : new Date()
//     }
// }) : []
 // ----------------------------------------------------

  const posts = await postApi()
  const postsUrl = posts? posts.ads.map((item)=>{
    return {
        url : `${baseUrl}/adDetailsPage/${item.id}/${item.name}`,
        lastModified : new Date()
    }
}) : []

 // ----------------------------------------------------

 const jobs = await jobApi()
 const jobsUrl = jobs? jobs.jobs.map((item)=>{
   return {
       url : `${baseUrl}/jobDetails/${item.id}/${item.name}`,
       lastModified : new Date()
   }
}) : []
 // ----------------------------------------------------

const cat = await catApi()
const catUrl = cat ? cat.map((item)=>{
   return {
              url : `${baseUrl}/cat/${item.id}/${item.name.replace(/\s+/g, '-')}`,
              lastModified : new Date()
         } 
}): []

 
// ----------------------------------------------------------------

const catStock = []
    const catCategory = ()=>{
   if(cat){
    cat.forEach( function(childArray) {
      childArray.catList.forEach(function(item){
        catStock.push(item)
      });
     });
   }
    }
    catCategory()


    const doneData = catStock ? catStock.map((item)=>{
      return {
        url : `${baseUrl}/cat/${item.id}/${item.name.replace(/\s+/g, '-')}`,
        lastModified : new Date()
      }
    }) : null


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
          ...catUrl,
          ...jobsUrl,
          ...postsUrl,
          // ...branchesUrl,
          ...doneData
    ]
}