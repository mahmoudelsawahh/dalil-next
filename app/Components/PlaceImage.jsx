"use client"
import ImageGallery from "react-image-gallery";
import LazyLoad from "react-lazyload";
import "react-image-gallery/styles/css/image-gallery.css";

const PlaceImage = ({ALLClientDetails}) => {
     
  return (
    <>
      {
        ALLClientDetails.imagesList.length > 0 ?
         <LazyLoad height={"100%"} once>
            <ImageGallery showNav={false} showFullscreenButton={false} showPlayButton={false} items={
                ALLClientDetails.imagesList.map((item)=>{
                    return (
                        {
                            original: `https://dalil.deltawy.com/images?id=${item}&type=bran`,
                            thumbnail: `https://dalil.deltawy.com/images?id=${item}&type=bran`,
                      }
                    )
                })
            } isRTL={true} lazyLoad={true}/>
         </LazyLoad>
         : null 
      }
    </>
  )
}

export default PlaceImage