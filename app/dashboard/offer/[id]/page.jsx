import OfferForm from '@/app/Components/dashboard/OfferForm'
import React from 'react'

const page = ({params}) => {
  return (
    <>
      <OfferForm params={params}/>
    </>
  )
}

export default page