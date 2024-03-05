import './globals.css'
import { Cairo } from 'next/font/google';
import ProviderLayout from '@/ProviderLayout'
import dynamic from 'next/dynamic';
const ContainerLayout = dynamic(() => import('./contanerLayoute'), {
  ssr : false
})
const cairo = Cairo({ 
  subsets: ['latin'] ,
  display : 'swap',
  preload : true
})

export const metadata = {
  title: 'دليل المحلة الإلكتروني',
  type : 'local business',
  description: 'دليل المحلة الإلكتروني - هو دليل ومحرك بحث شامل للشركات وهو دليل صناعي وتجاري وخدمي يشمل كافة القطاعات والأشخاص المهنيين ، من مميزات الدليل: طريقة العرض والبحث حداثة ودقة بياناته في جميع المجالات يتميز بأنه مطور بتقنيات برمجية حديثة الدليل بالكامل مجاناً لمن يريد البحث عن أي شئ يتميز بقوة نتائجه في محركات البحث يتميز الدليل بالسرعة في أرشفة البيانات في محركات البحث العالمية الدليل إشهار ممتاز للشركات التجارية والقطاعات الخدمية والأشخاص أصحاب الأعمال  ',
  openGraph: {
    images:  `https://deltawy.net/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.79a01fb9.png&w=1920&q=75`,
    title : 'دليل المحلة الإلكتروني',
    url : 'http://deltawy.net/',
    site_name : 'IMDb',
    description: 'دليل المحلة الإلكتروني - هو دليل ومحرك بحث شامل للشركات وهو دليل صناعي وتجاري وخدمي يشمل كافة القطاعات والأشخاص المهنيين ، من مميزات الدليل: طريقة العرض والبحث حداثة ودقة بياناته في جميع المجالات يتميز بأنه مطور بتقنيات برمجية حديثة الدليل بالكامل مجاناً لمن يريد البحث عن أي شئ يتميز بقوة نتائجه في محركات البحث يتميز الدليل بالسرعة في أرشفة البيانات في محركات البحث العالمية الدليل إشهار ممتاز للشركات التجارية والقطاعات الخدمية والأشخاص أصحاب الأعمال  ',
    email : 'deltawy@gmail.com',
    phone_number : '201067439828',
    latitude : '30.9763086',
    longitude : '31.1595836',
    locality : 'elmahalla',
    countryName : 'Egypt',
    streetAddress : 'elmahalla'
  },
  
}


export default function RootLayout({ children }) {

  return (
    <html lang="ar">
      <body className={cairo.className}>
          <ProviderLayout>
           <ContainerLayout>
              {children}
           </ContainerLayout>
          </ProviderLayout>
      </body>
    </html>
  )
}
