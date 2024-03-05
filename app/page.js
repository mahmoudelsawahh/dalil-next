// import generateRssMain from '@/lib/generateRssMain';
import dynamic from 'next/dynamic'

const Home = dynamic(() => import('./Components/Home'), {
  ssr : false
})

const page = async() => {
  // await generateRssMain();
  return (
    <>
      <Home/>
    </>
  )
}

export default page