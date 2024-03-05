"use client"
import React, { useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { Col, Row } from "react-bootstrap";
import Swal from "sweetalert2/dist/sweetalert2.js";
import styles from  "/app/styles/Home.module.scss";
import { UserLogin } from "/store/auth";
import { useDispatch, useSelector } from "react-redux";
import {
  LazyLoadImage,
  LazyLoadComponent,
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import  Link  from "next/link";
import Image from "next/image";
import logoo from "/public/img/logo.png"
import { localUrl } from "@/lib/baseUrl";

const LoginPage = () => {
  const dispatch = useDispatch();
  const [AddEmail, SetEmail] = useState("");
  const [AddPassword, SetPassword] = useState("");
  const [LessData , setLessData] = useState(false)
  const [LoginError, setLoginError] = useState(null);

  const login  = useSelector((state) => state.AuthSlice);

  const SendData = async () => {
    if (AddEmail.length === 0 || AddPassword.length === 0) {
      setLessData(true)
    } else {
      setLessData(false)
      const clientLogin = {
        name: AddEmail,
        password: AddPassword,
      };
      
      const res =  await fetch(`${localUrl}/rest/test.peoples/inlogin`,{
        method : 'POST',
        headers : {
          'Content-Type': 'application/json',
        },
        body : JSON.stringify(clientLogin),
      })
      const result = await res.json()
      if(result.Errors.length > 0){
        setLoginError(result.Errors[0].errorMSG)
       }else{
        window.localStorage.setItem('dalilElmahalla', result.token)
        window.open(`dashboard/${result.name}` , '_top')
       }
    }
  };

  return (

       <LazyLoadComponent>

        {LessData ? 
        <div className="alert alert-warning" role="alert">
        يجب عليك ادخال جميع البيانات المطلوبة
        </div>
      : null}
      {
        LoginError ? 
        <>
        <div>
                 <div className="alert alert-danger" role="alert">
                     خطا :  {LoginError}
                 </div>
              </div>
        </>
        : null
      }

        <h1  className={styles.main_title} >تسجيل الدخول</h1>
        <div   className= {styles.Login_page} >
          <Row>
            <Col  md={12} className={styles.cloumn} >
              <div  className={styles.logo_container}>
              <Image
                 
                 src={logoo}
                 alt="logo"
                 style={{width:"100%",height:'100%', textAlign:"center" , }}
               />
              </div>
            </Col>
            <Col md={12} className={styles.cloumn}> 
              <FloatingLabel controlId="floatingInput" label="Enter username ">
                <Form.Control
                  type="text"
                  placeholder="Enter username"
                  value={AddEmail}
                  onChange={(e) => SetEmail(e.target.value)}
                />
              </FloatingLabel>
            </Col>

            <Col md={12} className={styles.cloumn}>
              <FloatingLabel controlId="floatingInput" label="Enter password  ">
                <Form.Control
                  type="text"
                  placeholder="Enter password "
                  value={AddPassword}
                  onChange={(e) => SetPassword(e.target.value)}
                />
              </FloatingLabel>
            </Col>
            <Col  md={12}  > 
              <button
                 className={styles.login_btn}
                name="loginpage"
                type="button"
                onClick={() => SendData()}
              >
                تسجيل الدخول
              </button>
            </Col>
            <Col  className={styles.cloumn} >
              <Link
                href="/register"
                 className={styles.go_to_register}
                onClick={() => window.scrollTo(0, 0)}
              >
                هل تريد انشاء <span>حساب جديد ؟</span>
              </Link>
            </Col>
          </Row>
        </div>
      </LazyLoadComponent>
    
  );
};

export default LoginPage;
