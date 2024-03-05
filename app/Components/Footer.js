import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { CgChevronDoubleLeft } from "react-icons/cg";
import {
  LazyLoadComponent,
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import styles from "../styles/Home.module.scss";
import  Link  from "next/link";
import  Image  from "next/image";
import logo from "/public/img/logo.png"
import googleImage from '/public/img/google-play.png'
import LazyLoad from "react-lazyload";
const Footer = () => {
  return (
    <React.Fragment>
      <footer className={styles.footer}>
        <Container>
          <Row className="text-center flex-column flex-md-row" style={{textAlign:'center'}}>
            <Col md={3} className={styles.column_footer}>
              <h1 style={{fontSize : '22px'}}>عن الدليل</h1>
              <hr />
              <p>
                دليل المحلة الإلكتروني - هو دليل ومحرك بحث شامل للشركات وهو دليل
                صناعي وتجاري وخدمي يشمل كافة القطاعات والأشخاص المهنيين ، من
                مميزات الدليل: طريقة العرض والبحث حداثة ودقة بياناته في جميع
                المجالات 
              </p>
            </Col>
            <Col className={styles.column_footer}>
              <h1 style={{fontSize : '22px'}}> الصفحات الرئيسية</h1>
              <hr />
              <ul>
                <li>
                  <Link href="/">الرئيسية</Link>
                  <Link href="/">
                      <CgChevronDoubleLeft className={styles.footer_arrow_icon} />

                  </Link>

                </li>
                <li>
                  <Link href="/">اضافة</Link>
                  <Link href="/">
                  <CgChevronDoubleLeft className={styles.footer_arrow_icon} />
                  </Link>

                </li>
                <li>
                  
                  <Link href="/loginPage"> تسجيل الدخول</Link>
                  <Link href="/loginPage"> 
                  <CgChevronDoubleLeft className={styles.footer_arrow_icon} />
  
                 </Link>

                </li>
                <li>
                  
                  <Link href="/jobs">الوظائف</Link>
                  <Link href="/jobs">
                  <CgChevronDoubleLeft className={styles.footer_arrow_icon} />
                  </Link>

                </li>
                <li>
                  <Link href="/ads">الاعلانات</Link>
                  <Link href="/ads">
                  <CgChevronDoubleLeft className={styles.footer_arrow_icon} />
                  </Link>

                </li>
              </ul>
            </Col>
            <Col className={styles.column_footer}>
              <h1 style={{fontSize : '22px'}}> الصفحات الداخلية</h1>
              <hr />
              <ul>
              <li>
                  <Link href="/sitemap.xml">خريطة الموقع</Link>
                  <Link href="/sitemap.xml">
                    <CgChevronDoubleLeft className={styles.footer_arrow_icon} />
                 </Link>

                </li>
                <li>
                  <Link href="/rss-0.xml">الرئيسية</Link>
                  <Link href="/rss-0.xml">
                  <CgChevronDoubleLeft className={styles.footer_arrow_icon} />
                  </Link>

                </li>
                <li>
                  <Link href="/jobs/sitemap.xml">الوظائف</Link>
                  <Link href="/jobs/sitemap.xml">
                      <CgChevronDoubleLeft className={styles.footer_arrow_icon} />
                  </Link>

                </li>
                <li>
                  <Link href="/advertisement/sitemap.xml">الاعلانات</Link>
                  <Link href="/advertisement/sitemap.xml">
                      <CgChevronDoubleLeft className={styles.footer_arrow_icon} />
                  </Link>

                </li>
              </ul>
            </Col>
            <Col className={styles.column_footer}>
              <h1  style={{fontSize : '22px'}}>التواصل</h1>
              <hr />

              <ul>
                <li>
                  <Link
                    href={"https://www.facebook.com/DalilLmehalla"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    صفحة فيسبوك
                  </Link>
                  <Link
                    href={"https://www.facebook.com/DalilLmehalla"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                  <CgChevronDoubleLeft className={styles.footer_arrow_icon} />
                  </Link>
                </li>
                <li>
                  <Link
                    href={`tel:0106743982`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    0106743982
                  </Link>
                  <Link
                    href={`tel:0106743982`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                  <CgChevronDoubleLeft className={styles.footer_arrow_icon} />
                  </Link>
                </li>
                <li>
                  <Link href={`mailto:info@deltawy.com`} rel="noopener noreferrer">
                    info@deltawy.com
                  </Link>
                  <Link href={`mailto:info@deltawy.com`} rel="noopener noreferrer">
                  <CgChevronDoubleLeft className={styles.footer_arrow_icon} />
                  </Link>
                </li>
                
              </ul>
            </Col>
            <Col  className={styles.column_footer}>
              <h1  style={{fontSize : '22px'}}>حمل التطبيق</h1>
              <hr />
              <ul className={styles.googleplay_container}>
                <li>
                  <div style={{width:"100%" , display : 'flex', justifyContent : 'center', alignItems : 'center'}}
                    onClick={() => {
                      window.open(
                        "https://play.google.com/store/apps/details?id=com.Deltawy.DeltawyNet",
                        "_blank"
                      );
                    }}
                  >
                    <LazyLoad height={"100px"} once>
                        <Image src={googleImage} alt="googleImage" style={{width :'100px' , height : '100px'}} loading="lazy"/>
                    </LazyLoad>
                  </div>
                </li>
              </ul>
            </Col>
          </Row>
        
        </Container>
        <LazyLoadComponent>
            <div className={styles.rights_container}>
              <p className="text-center">جميع الحقوق محفوظة لدي</p>
              <div 
                className={styles.rights_logo}
              >
                <Link href={"https://deltawy.com/"} target="_blank">                
                <Image                 
                  src={logo}
                  alt="logo"
                  style={{width:"120px",height:'90px'}}
                />
                </Link>
              </div>
            </div>
          </LazyLoadComponent>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
