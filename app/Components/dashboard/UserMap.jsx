// "use client"
// import LazyLoad from 'react-lazyload'

// const UserMap = () => {
//   return (
//     <>
//        <LazyLoad height={"100%"} once>
//        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d218842.15030775036!2d31.27305930640307!3d31.01486372645808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7a57f1a5967c1%3A0xadaa98780dc4c346!2sElmahalla%20elkobra!5e0!3m2!1sar!2seg!4v1693360375013!5m2!1sar!2seg" 
//          allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" style={{width : '100%', height : '400px'}}></iframe>
//        </LazyLoad>
//        <button type="button" className="btn  w-100 p-2" 
//        style={{backgroundColor : '#055c97', color : '#fff', fontWeight : 700 , fontSize : '18px'}}>تحديد موقعي على الخريطة  </button>
//     </>
//   )
// }

// export default UserMap


"use client"
import React, { useState } from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';
const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 30.9763086,
  lng: 31.1595836
};

const UserMap = () => {
  const [selectedLocation, setSelectedLocation] = useState(center);

  const handleMapClick = (event) => {
    setSelectedLocation({
      lat: event.latLng.lat(),
      lng: event.latLng.lng()
    });
    
  };

  const handelClick = ()=>{
    navigator.geolocation.getCurrentPosition((position) => {
             const { latitude, longitude } = position.coords;
             setSelectedLocation({
                    lat: latitude,
                   lng: longitude
             });
           });
  }

  return (
    <>
     <LoadScript
      googleMapsApiKey={'AIzaSyDJ8uTFj6943jB6JmStfHma3--E0eqTk5w'}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={selectedLocation}
        zoom={18}
        onClick={handleMapClick}
      >
        <Marker position={selectedLocation} />
      </GoogleMap>
    </LoadScript>
      <button type="button" className="btn  w-100 p-2" onClick={handelClick}
       style={{backgroundColor : '#055c97', color : '#fff', fontWeight : 700 , fontSize : '18px'}}>تحديد موقعي على الخريطة  </button>
    </>
  );
};

export default UserMap;

