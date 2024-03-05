"use client"
import React from 'react'
import Navbar from './Components/NavBar'
import Layout from './Components/Layout'
import { usePathname } from 'next/navigation'
import { CookiesProvider } from 'react-cookie';

const ContainerLayout = ({children}) => {
    const pathName = usePathname();
    const param = pathName.split('/')[1]
  return (
    <CookiesProvider defaultSetOptions={{ path: '/' }}>
      {
        param === "dashboard" ? 
        <>
           
            {children}
        </>
        :
         <>
            <Navbar/>
            <Layout>
                {children}
            </Layout>    
         </>
      }
      </CookiesProvider>
  )
}

export default ContainerLayout