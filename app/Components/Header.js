"use client"
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Container } from "react-bootstrap";
import styles from "../styles/Home.module.scss";
import { useRouter } from "next/navigation";
import Image from "next/image";
import mainBg from '/public/img/download.webp'
import { Autoplay, Navigation } from 'swiper';
import Link from 'next/link';
import FilterHeader from './FilterHeader';
const Header = ({Categories}) => {  
  const router = useRouter()
  const CategoriesSlick =
    Categories?.length > 0 &&
    Categories?.map((ele, id) => {
      const pathname = ele.name.replace(/-/gi, "-");
      return (
        <SwiperSlide key={id}>
          <div className={styles.slick_Container}>
          <Link href={`/cat/${ele.id}/state/0/city/0/page/1/${pathname}`} style={{cursor : 'pointer'}}>
            <div
              className={`${styles.img_skick} ${styles.loading_circel}`} 
              
              style={{textAlign : 'center', display : 'flex', justifyContent : 'center', width : '80px' , height : '80px'}}>
              <Image
                src={`https://dalil.deltawy.com/images?id=${ele.image}&type=tab`}
                alt={`${ele.name}-categories`}
                loading="lazy"
                width={80}
                height={80}
                objectPosition='center'
                objectFit='cover'
                title='images'
                layout='responsive'

              />
            </div>
            <h1 style={{fontSize : '22px', color : '#fff'}}>{pathname}</h1>
            </Link>
          </div>
        </SwiperSlide>
      );
    });


  return (
    <header className={styles.header_container}>
      <div
        className={`${styles.img_container} headerResponsive`} 
      >
        <Image src={mainBg} alt="deltawy" layout="fill" objectFit="cover" priority/>
        <div className={styles.Header_content}>
          <div className={styles.text_contet}>
            <div className={styles.warpper}>
              <h1 className={styles.static_text}>ابحث عن اقرب </h1>
              <ul className={styles.dynamic_text}>
                <li>
                  <span data-text="مطاعم">مطاعم</span>
                </li>
                <li>
                  <span data-text="فنادق">فنادق</span>
                </li>
                <li>
                  <span data-text="محلات">محلات</span>
                </li>
              </ul>
            </div>
            <p>ابحث في مدينتك</p>
            <p> تصفح دليل المحلة و الدلتا</p>
          </div>
            <Container>
            <FilterHeader Categories={Categories}/>

              <div className={styles.header_slider}>
                <Swiper
                  slidesPerView={1}
                     autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}
                    breakpoints={{
                      640: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                      },
                      768: {
                        slidesPerView: 3,
                        spaceBetween: 0,
                      },
                      1024: {
                        slidesPerView: 4,
                        spaceBetween: 0,
                      },
                    }}
                    modules={[Autoplay , Navigation]}
                    navigation={true}
                    className="mySwiper"
                >{CategoriesSlick}</Swiper>
              </div>    
            </Container>
            
        </div>
      </div>
  </header>
  );
};

export default Header;