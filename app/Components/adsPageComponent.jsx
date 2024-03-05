"use client"
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getClientDetails, addMoreViews } from "/store/Categories";
import dynamic from "next/dynamic";
import Image from "next/image";
import LazyLoad from "react-lazyload";
import {FaFacebookMessenger, FaWhatsapp , FaPhone} from "react-icons/fa";
import { Rating } from "primereact/rating";
import styles from  "/app/styles/Home.module.scss";
import Link from "next/link";
import { FloatingLabel, Form } from "react-bootstrap";
import { ImEye } from "react-icons/im";
import PlaceImage from "./PlaceImage";
import {AiFillHome, AiOutlineGlobal, AiOutlinePhone} from "react-icons/ai";
import { MdLocationOn} from "react-icons/md";
import {
  FacebookShareButton,
  FacebookIcon,
  FacebookMessengerIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TelegramShareButton,
  TelegramIcon,
  LinkedinShareButton,
  LinkedinIcon,
  ViberIcon
} from 'next-share'
import { useRouter } from "next/navigation";
import Script from "next/script";
import { localUrl } from "@/lib/baseUrl";
import { useCookies } from "react-cookie";

import RssImage from '/public/img/rss-svgrepo-com.svg'
import SitMapIcon from '/public/img/icons8-sitemap-66.png'
const MatchBranchesContainer = dynamic(() => import('/app/Components/matchBranchesContainer.js'), {
  ssr : false
})
const Branche = dynamic(() => import('/app/Components/branche'), {
  ssr : false
})

 const SapesficCategory = ({params}) => {

  const [cookies, setCookie] = useCookies(['getPageId']);


  const [val1, setVal1] = useState(null);
  const  id  = params.id[0];
  const { ALLClientDetails } = useSelector((state) => state.categoriesMenu);
  const dispatch = useDispatch();
  useEffect(() => {
    setCookie('getPageId' , params.id[0])
    dispatch(getClientDetails(parseInt(id)));
    dispatch(addMoreViews(parseInt(id)));
  }, [dispatch, id , setCookie]);

  const router = useRouter()
   if(ALLClientDetails){
    
   }
  return (
    <div>
       <div>
  
    
  {ALLClientDetails ? (
           <head>
             <title>{ALLClientDetails.name}</title>
             <meta itemprop="name" content={ALLClientDetails.name} />
             <meta itemprop="description" content={ALLClientDetails.description.slice(0, 160)}
             />
             <meta itemprop="image" content={`https://dalil.deltawy.com/images?id=${ALLClientDetails.cover}&type=tab`}
             />
             <meta property="og:type" content="Article" />
             <meta property="og:title" content={ALLClientDetails.name} />
             <meta property="og:description" content={ALLClientDetails.description.slice(0, 160)}/>
             <meta property="og:image" content={`https://dalil.deltawy.com/images?id=${ALLClientDetails.logo}&type=tab`}        />
     
             {/* <!-- Twitter Meta Tags --> */}
             <meta name="twitter:card" content="summary_large_image" />
             <meta name="twitter:title" content={ALLClientDetails.name} />
             <meta name="twitter:description" content={ALLClientDetails.description.slice(0, 160)}        />
             <meta name="twitter:image" content={`https://dalil.deltawy.com/images?id=${ALLClientDetails.logo}&type=tab`}        />
             <link rel="icon" type="image/x-icon" href={`https://dalil.deltawy.com/images?id=${ALLClientDetails.logo}&type=tab`} />
              

             <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(
          {
                "@context": "https://schema.org",
              "@type": `${ALLClientDetails.catName}`,
              "name": `${ALLClientDetails.name}`,
              "address": {
                "@type": `$PostalAddress`,
                "streetAddress": `${ALLClientDetails.city}`,
                "addressLocality": `${ALLClientDetails.address}`,
                "addressRegion": `${ALLClientDetails.stat}`,
                "postalCode": "31951"
              },
              "image": `https://dalil.deltawy.com/images?id=${ALLClientDetails.logo}&type=tab`,
              "email": `${ALLClientDetails.email}`,
              "telePhone": `${ALLClientDetails.phone}`,
              "url": `${ALLClientDetails.url}`,
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": `${ALLClientDetails.lat}`,
                "longitude": `${ALLClientDetails.lng}`
              },
              "priceRange":"$"
          }
        ) }}
      />

           </head>
           ) : null}

     {ALLClientDetails ? 
     <div style={{minHeight : '100vh', position : 'relative'}}>
       {screen.width < 767 ? 
         null
        :
        <div style={{position : 'relative', height : '400px', marginBottom : '50px', display : 'flex', justifyContent : 'center'}} className="responsive-Layout">
      <Image src={`https://dalil.deltawy.com/images?id=${ALLClientDetails.cover}&type=tab`} alt={ALLClientDetails.name} width={700} height={400} priority={true}
      />
      
       </div>
        }


        <div className="d-flex d-md-none" style={{position : 'fixed', left : 0 , overflow : 'hidden',bottom : 0 , justifyContent : 'center', alignContent : 'center', width : '100%', zIndex : 555}}>
         <div style={{background : '#0084ff', width : '100%', textAlign : 'center', padding : '5px 0px'}}>
          <FaFacebookMessenger fontSize={30} style={{color : '#fff'}} onClick={()=> router.push(ALLClientDetails.face.replace('https://www.facebook.com', 'https://www.messenger.com/t'))}/>
         </div>
          {
            ALLClientDetails.Whatsapp > 2 ? 
            <div style={{background : '#25d366', width : '100%', textAlign : 'center', padding : '6px 0px', cursor : 'pointer'}} onClick={()=> router.push(`http://api.whatsapp.com/send?phone=${ALLClientDetails.Whatsapp}`)}>
        <FaWhatsapp fontSize={30} style={{color : '#fff'}}/>
        </div>
            : 
            null
          }
        <div style={{background : '#379d00', width : '100%', textAlign : 'center', padding : '6px 0px', cursor : 'pointer'}}>
         <Link href={'tel:01148004734'}>
         <FaPhone fontSize={28} style={{color : '#fff'}}/>
         </Link>
        </div>
    </div>    



        <div style={{gap : '20px', padding : '0px 0px', paddingBottom : '50px' }} className="d-flex flex-md-row flex-column align-items-center align-items-md-center">
              <LazyLoad height={"100%"} once>
              <div style={{boxShadow : '5px 5px 12px rgba(0,0,0,.15)', border : '5px solid #fff', width : '140px', height : '140px', borderRadius : '50%', overflow : 'hidden'}}>
              <Image src={`https://dalil.deltawy.com/images?id=${ALLClientDetails.logo}&type=tab`} alt={ALLClientDetails.name}
                width={140}
                height={140}
                style={{borderRadius : '50%'}}
                loading="lazy"
              />
              </div>
              </LazyLoad>
                <div  className="text-md-end ">
                  <h1 style={{fontSize : '28px', color : '#000', fontWeight : 'bold', textAlign : 'center', margin: '15px 0px'}}>{ALLClientDetails.name}</h1>                            

                   <div style={{padding : '15px 0px'}}>
                   <Link href={`https://www.google.com/maps/search/location/@${ALLClientDetails.lat},${ALLClientDetails.lng},12z?entry=ttu`} style={{color : '#055c97', fontSize : '16px', fontWeight : 'bold', padding : '5px 0px'}}>
                   <MdLocationOn style={{fontSize : '20px'}}/>  {ALLClientDetails.address}
                  </Link>
                   </div>
         
                   {ALLClientDetails.site.length > 0 ? null
                   :
                   <div style={{padding : '15px 0px'}}>
                   <Link href={ALLClientDetails.url} style={{color : '#055c97', fontSize : '16px', fontWeight : 'bold', padding : '5px 0px'}}>
                  <AiOutlineGlobal style={{fontSize : '25px'}}/> {ALLClientDetails.site}
                  </Link>
                   </div>
                    }
                   
                   {
                    ALLClientDetails.Whatsapp.length > 2 ? 
                    <div style={{padding : '15px 0px'}}>
                     <Link href={`http://api.whatsapp.com/send?phone=${ALLClientDetails.Whatsapp}`} style={{color : '#055c97', fontSize : '16px', fontWeight : 'bold', padding : '5px 0px'}}>
                    <FaWhatsapp style={{fontSize : '25px'}}/> {ALLClientDetails.Whatsapp}
                    </Link>
                     </div>
                    : null
                   }

                     <div style={{padding : '15px 0px'}}>
                     <Link href={`tel:${ALLClientDetails.phone}`} style={{color : '#055c97', fontSize : '16px', fontWeight : 'bold', padding : '5px 0px'}}>
                    <AiOutlinePhone style={{fontSize : '25px'}}/> {ALLClientDetails.phone}
                    </Link>
                     </div>

                   {screen.width < 767 ? 
                    <div style={{padding : '0px 20px'}}  className={styles.Views_section}>
                <h1 style={{fontSize : '28px'}}>عدد المشاهدات</h1>
                <ImEye />
                <p>{ALLClientDetails.views}</p>
              </div>

                   :
                   null
                   }

                    <div style={{marginLeft : '5px', textAlign : 'center', padding : '20px 0px' , flexWrap : 'wrap'}} className="d-flex justify-content-md-center justify-content-center">
                      <FacebookShareButton
                        url={`${ALLClientDetails.url}`}
                        title={`${ALLClientDetails.name}`}
                      >
                        <FacebookIcon size={45} style={{margin : '0px 10px'}} round />
                      </FacebookShareButton>
                      
                      <TwitterShareButton
                        url={`${ALLClientDetails.url}`}
                        title={`${ALLClientDetails.name}`}
                        hashtag={`${ALLClientDetails.name}`}
                      >
                        <TwitterIcon size={45} style={{margin : '0px 10px'}} round />
                      </TwitterShareButton>

                      <WhatsappShareButton
                        url={`${ALLClientDetails.url}`}
                        title={`${ALLClientDetails.name}`}
                        hashtag={`${ALLClientDetails.name}`}
                      >
                        <WhatsappIcon size={45} style={{margin : '0px 10px'}} round />
                      </WhatsappShareButton>

                      <TelegramShareButton
                        url={`${ALLClientDetails.url}`}
                        title={`${ALLClientDetails.name}`}
                        hashtag={`${ALLClientDetails.name}`}
                      >
                        <TelegramIcon size={45} style={{margin : '0px 10px'}} round />
                      </TelegramShareButton>

                      <LinkedinShareButton
                        url={`${ALLClientDetails.url}`}
                        title={`${ALLClientDetails.name}`}
                        hashtag={`${ALLClientDetails.name}`}
                      >
                        <LinkedinIcon size={45} style={{margin : '0px 10px'}} round />
                      </LinkedinShareButton>

                        <Link href="/rss.xml">
                      <Image src={RssImage} alt="rss-image" width={45} height={45}/>
                      </Link>
                      {/* <Link href="/page/sitemap.xml">
                      <Image src={SitMapIcon} alt="rss-image" width={45} height={45} style={{margin : '0px 10px'}}/>
                      </Link> */}
                    </div>
          
                  <div>
                </div>
                </div>
                
        </div>
         <div style={{color : '#fff', marginBottom : '50px'}}>
             <div className="card text-center">
                  <div className="card-body">
                    <h1 className="card-title" style={{fontSize : '30px'}}>{ALLClientDetails.name}</h1>
                    <p className="card-text" style={{lineHeight : '50px', direction : 'ltr'}}>{ALLClientDetails.description}</p>
                  </div>
            </div>
         </div>
         <div className="row" style={{marginBottom : '50px'}}>
        <div className="col-12 col-md-8">
        <LazyLoad height={"100%"} once>
          <PlaceImage ALLClientDetails={ALLClientDetails}/>
         </LazyLoad>
        <LazyLoad height={"100%"} once>
           {
            ALLClientDetails.services.length > 0 ?
            <div className={styles.servises} >
            <h1 style={{fontSize : '28px'}}>الخدمات المتاحة</h1>
             <ul style={{marginRight : '20px'}}>
              {ALLClientDetails.services.map((item , id)=>{
                return (
                  <li key={id} style={{fontSize : '20px', padding : '10px 0px'}}>{item.name}</li>
                )
              })}

             </ul>
          </div>
             : null
           }
           {
            ALLClientDetails.video.length > 2 ?
            <>
            <div className={styles.servises}>
            <h1 style={{fontSize : '28px'}}> فيديو</h1>
            <div style={{margin : '50px 0px'}}>
            <LazyLoad height={"100%"} once>
            <iframe width="100%" height="300" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
            </LazyLoad>
            </div>
          </div>
            </>
             : null
           }
          
          {/* <LazyLoad height={'100%'} once>
            <div className={styles.servises}>
              <h1 style={{fontSize : '28px'}}> التقييمات </h1>
              <div className={styles.rating_section}>
                <h1>{ALLClientDetails.TotalRate}</h1>
                <div className={styles.reating_left}>
                  <div className={styles.Ratings}>
                    <span className={styles.number}>0</span>
                    <span className={styles.space}></span>
                    <div className={styles.stars} >
                      <Rating value={5} readOnly cancel={false} style={{display:"flex" , flexDirection:'row' }}></Rating>
                    </div>
                  </div>
                  <div className={styles.Ratings}>
                    <span className={styles.number}>0</span>
                    <span className={styles.space}></span>
                    <div className={styles.stars}>
                      <Rating value={4} readOnly cancel={false} style={{display:"flex" , flexDirection:'row'}}></Rating>
                    </div>
                  </div>
                  <div className={styles.Ratings}>
                    <span className={styles.number}>0</span>
                    <span className={styles.space}></span>
                    <div className={styles.stars}>
                      <Rating value={3} readOnly cancel={false} style={{display:"flex" , flexDirection:'row'}}></Rating>
                    </div>
                  </div>
                  <div className={styles.Ratings}>
                    <span className={styles.number}>0</span>
                    <span className={styles.space}></span>
                    <div className={styles.stars}>
                      <Rating value={2} readOnly cancel={false} style={{display:"flex" , flexDirection:'row'}}></Rating>
                    </div>
                  </div>
                  <div className={styles.Ratings}>
                    <span className={styles.number}>0</span>
                    <span className={styles.space}></span>
                    <div className={styles.stars}>
                      <Rating value={1} readOnly cancel={false} style={{display:"flex" , flexDirection:'row'}}></Rating>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </LazyLoad> */}
          {/* <LazyLoad height={"100%"} once>
            <div className={styles.comment_section}>
              <div className={`${styles.stars} ${styles.comment_stars}`}>
                <Rating value={val1} onChange={(e) => setVal1(e.value)} style={{display:"flex" , flexDirection:'row', color: '#FFDD66' ,gap:'.4rem'}}/>
              </div>
              <h5>التقيم</h5>
              <FloatingLabel controlId="floatingTextarea2" label="التعليق">
                <Form.Control
                  as="textarea"
                  placeholder="التعليق"
                  style={{ height: "200px" }}
                />
              </FloatingLabel>
            </div>
          </LazyLoad> */}
          <div style={{color : '#fff', marginBottom : '50px'}}>
             <div className="card text-center">
             <div className="card-header" style={{ backgroundColor : '#fff'}}>
                     <h1 style={{fontSize : '32px', color : '#055c97', textAlign : 'start'}}>الخريطه</h1>
                  </div>
                  <div className="card-body">
                  <div >
                      <LazyLoad height={"100%"} once>
                      <Branche latt={ALLClientDetails} />
                        </LazyLoad>
                    </div>
                </div>
                 
            </div>
         </div>
        </LazyLoad>
      
        </div>
        <div className="col-12 col-md-4">
        <LazyLoad height={"100%"} once>
              <div  className={styles.Facebook_iframe_container}>
                <h1 className="text-center" >تابعنا علي صفحتنا </h1>
                  <LazyLoad height={"100%"} once>
                  <iframe
                  src={`https://www.facebook.com/plugins/page.php?href=${ALLClientDetails.face}%2Ffacebook&tabs=timeline&width=300&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId`}
                  style={{ width: "300px", height: "500px" }}
                  scrolling="no"
                  frameBorderr="0"
                  allowFullScreen={true}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  title="Facebook"
                  loading="lazy"
                />
                  </LazyLoad>
              </div>
              {screen.width > 767 ? 
                    <div style={{padding : '0px 20px'}}  className={styles.Views_section}>
                <h1 style={{fontSize : '28px'}}>عدد المشاهدات</h1>
                <ImEye />
                <p>{ALLClientDetails.views}</p>
              </div>

                   :
                   null
                   }
            </LazyLoad>
        </div>
       </div>
       
       

       
    
     </div>
     : 
     <div style={{height : '100vh'}}></div>
     }
     <LazyLoad height={"100%"} once>
      <MatchBranchesContainer id={id} />
   </LazyLoad>
  </div>
    </div>
  );
};
export default SapesficCategory;

 
