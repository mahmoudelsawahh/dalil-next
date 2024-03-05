"use client"
import React, { useEffect, useState } from "react";
import {Col } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import { RiMenu4Line } from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Home.module.scss";
import logo from "/public/img/logo.png"
import { LazyLoadComponent } from "react-lazy-load-image-component";
// import userLogo from '/public/img/male.png'
const options = [
  {
    scroll: true,
    backdrop: true,
  },
];

function OffCanvasExample({ ...props}, {params}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);
  return (
    <div style={{display : 'flex', justifyContent :'space-between', alignItems : 'flex-start'}} className="mx-md-0 mx-2">
      <button
      className={styles.mobileButton}
        onClick={toggleShow}
        name="navbar"
        aria-label="navbar"
        type="button"
        style={{margin:" 1rem 1rem  0 0"}}
      >
        <RiMenu4Line style={{fontSize:"1.5rem " , color:'#ffffff'}}  />
      </button>
      
      <LazyLoadComponent>
      <Link href="/" className="d-block d-md-none">
              <div className={styles.logo}>
              <Image
              src={logo}
              alt="logo"
              width='100px'
              style={{width:'120px', height:"auto"}}
              priority
            />
              </div>
            </Link>

      </LazyLoadComponent>
      

      <Offcanvas
        show={show}
        
        className={styles.dallel_canves}
        onHide={handleClose}
        {...props}
      >
        <Offcanvas.Header closeButton >
          <Offcanvas.Title>القائمة</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className={styles.Links_nav_container} style={{display: 'flex',
            gap: '1rem',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'}}>
            <Link  href="/" >
              <div className={styles.logo}>
              <Image
              effect="blur"
              src={logo}
              alt="logo"
              width='100px'
              style={{width:'150px', height:"auto"}}
              loading="lazy"
            />
              </div>
            </Link>
            
            <Link
              
              href={`/dashboard/${params}`}
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  left: 100,
                  behavior: "instant",
                });
                handleClose();
              }}
            >
              بيانات النشاط
            </Link>
            <Link
              
              href={`/dashboard/ads/${params}`}
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  left: 100,
                  behavior: "instant",
                });
                handleClose();
              }}
            >
                انشاء اعلان     
            </Link>
            <Link
              
              href={`/dashboard/offer/${params}`}
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  left: 100,
                  behavior: "instant",
                });
                handleClose();
              }}
            >
                انشاء عرض     
            </Link>
            {/* <Link
              
              href={`/dashboard/staff-request/${params}`}
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  left: 100,
                  behavior: "instant",
                });
                handleClose();
              }}
            >
                طلب موظفين       
            </Link>
            <Link
              
              href={`/dashboard/Marriage-request/${params}`}
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  left: 100,
                  behavior: "instant",
                });
                handleClose();
              }}
            >
                 طلب زواج       
            </Link> */}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}
const Navbar = ({params}) => {
  const [StateUser , setStateUser] = useState(false)
  useEffect(()=>{
    if(window.localStorage.getItem('dalilElmahalla')){
      return setStateUser(true)
    }else{
      setStateUser(false)
    }
   },[])
  return (
    <nav className={styles.navbar_container  } >
      <Col xs={12} md={1}  >
          {options?.map((props, idx) => (
            <OffCanvasExample key={idx} placement={"end"} {...props} params={params}/>
          ))}
      </Col>


      <section className={styles.nav_bar} >
    <div className={styles.mobile_reverse}>
             {/* <Link href={`/dashboard/${params}/profile`}>
             <Image src={userLogo} className="rounded-circle" width={50} height={50} style={{ marginLeft : '30px'}}  alt="profile" />
             </Link> */}
            
          <Link href={`/dashboard/${params}`}
             className={styles.logo}
            onClick={() => {
              window.scrollTo({
                top: 0,
                left: 100,
                behavior: "instant",
              });
            }}
          >
            <Image
              effect="blur"
              src={logo}
              alt="logo"
             style={{width:'100px' , height:"auto" }}
              
            />
          </Link>

     
    </div>
    <div className={styles.mobile_reverse}>
        <div className={styles.Links_container }>
            <Link
              href={`/dashboard/${params}`}
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  left: 100,
                  behavior: "instant",
                });
              }}
            >
              بيانات النشاط
            </Link>
            <Link
              
              href={`/dashboard/ads/${params}`}
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  left: 100,
                  behavior: "instant",
                });
              }}
            >
                انشاء اعلان     
            </Link>
            <Link
              
              href={`/dashboard/offer/${params}`}
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  left: 100,
                  behavior: "instant",
                });
              }}
            >
                انشاء عرض     
            </Link>
            {/* <Link
              
              href={`/dashboard/staff-request/${params}`}
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  left: 100,
                  behavior: "instant",
                });
              }}
            >
                طلب موظفين       
            </Link>
            <Link
              
              href={`/dashboard/Marriage-request/${params}`}
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  left: 100,
                  behavior: "instant",
                });
              }}
            >
                  طلب زواج
            </Link> */}
          </div>
          </div>
        <div className={styles.buttonslogin }>
         <Link href="/loginPage">
         <button
             className={`${styles.btn} ${styles.nav_btn}` }
            name="login"
            type="button"
            onClick={() => {
              window.scrollTo({
                top: 0,
                left: 100,
                behavior: "instant",
              });
              // }
            }}
            aria-label="LOGIN-btn"
          >
         الرئيسية      
        </button>
         </Link>
        
           {
            StateUser ? 
            <button
            name="add-dalel"
            type="button"
           className={`${styles.btn} ${styles.nav_btn}`}
           aria-label="LOGIN-btn"
            onClick={() => {
              window.localStorage.removeItem('dalilElmahalla')
              setStateUser(false)
            }}
          >
             تسجيل الخروج 
          </button>
            : 
            <Link href='/loginPage' aria-label="LOGIN-">
            <button
            name="add-dalel"
            type="button"
           className={`${styles.btn} ${styles.nav_btn}`}
           aria-label="LOGIN-btn"
            onClick={() => {
             
              window.scrollTo({
                top: 0,
                left: 100,
                behavior: "instant",
              });
            }}
          >
              تسجيل الدخول 
          </button>
          </Link>      
           }
    </div>
      </section>
    </nav>
  );
};

export default Navbar;
