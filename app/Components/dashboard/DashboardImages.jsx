// "use client";
// import { Paper } from "@mui/material";
// import { useState } from "react";
// import { FaCloudUploadAlt } from "react-icons/fa";
// import ImageUploading from "react-images-uploading";

// const DashboardImages = () => {
//   const [ListImages, setListImages] = useState([]);
//   const [BannerImages, setBannerImages] = useState([]);
//   const [LogoImages, setLogoImages] = useState([]);

//   const maxNumber = 6;

//   const onChange = (imageList) => {
//     setListImages(imageList);
//   };
//   const onChangeBanner = (imageList) => {
//     setBannerImages(imageList);
//   };

//   const onChangeLogo = (imageList) => {
//     setLogoImages(imageList);
//   };

//   return (
//     <>
//       <div className="row row-gap-5">
//         <div className="col-md-4 col-12">
//           <ImageUploading
//             value={LogoImages}
//             onChange={onChangeLogo}
//             maxNumber={maxNumber}
//             dataURLKey="data_url"
//           >
//             {({ imageList, onImageUpload, dragProps }) => (
//               // write your building UI
//               <div className="upload__image-wrapper">
//                 <Paper
//                   elevation={3}
//                   style={{
//                     backgroundColor: "#fff",
//                     padding: "20px",
//                     borderRadius: "5px",
//                     cursor: "pointer",
//                   }}
//                   onClick={onImageUpload}
//                   {...dragProps}
//                 >
//                   {LogoImages.length > 0 ? (
//                     <div style={{ display: "flex", justifyContent: "center" }}>
//                       {imageList.map((image, index) => (
//                         <div key={index} className="image-item">
//                           <img
//                             src={image["data_url"]}
//                             alt="hello"
//                             style={{
//                               width: "100%",
//                               height: "190px",
//                               margin: "5px",
//                               border: "1px solid #eee",
//                               padding: "10px ",
//                             }}
//                           />
//                           <div className="image-item__btn-wrapper"></div>
//                         </div>
//                       ))}
//                     </div>
//                   ) : (
//                     <div
//                       style={{
//                         backgroundColor: "#f5f5f5",
//                         height: "200px",
//                         borderRadius: "10px",
//                       }}
//                     >
//                       <div
//                         style={{
//                           display: "flex",
//                           justifyContent: "center",
//                           alignItems: "center",
//                           flexDirection: "column",
//                           height: "100%",
//                         }}
//                       >
//                         <FaCloudUploadAlt
//                           style={{ fontSize: "50px", color: "#055c97" }}
//                         />
//                         <h1
//                           style={{
//                             fontSize: "25px",
//                             color: "#055c97",
//                             fontWeight: 700,
//                           }}
//                         >
//                           تحميل صوره
//                         </h1>
//                         <p
//                           style={{
//                             fontSize: "14px",
//                             color: "#333",
//                             fontWeight: 500,
//                           }}
//                         >
//                           يجب ان تكون عاليه الدقه وحجم منحفض
//                         </p>
//                       </div>
//                       <div></div>
//                     </div>
//                   )}
//                   <button
//                     className="btn"
//                     onClick={onImageUpload}
//                     {...dragProps}
//                     style={{
//                       backgroundColor: "#055c97",
//                       color: "#fff",
//                       fontWeight: 700,
//                       fontSize: "16px",
//                       width: "100%",
//                       marginTop: "15px",
//                     }}
//                   >
//                     صور الغلاف{" "}
//                   </button>
//                 </Paper>
//               </div>
//             )}
//           </ImageUploading>
//         </div>
//         <div className="col-md-4 col-12">
//           <ImageUploading
//             value={BannerImages}
//             onChange={onChangeBanner}
//             maxNumber={maxNumber}
//             dataURLKey="data_url"
//           >
//             {({ imageList, onImageUpload, dragProps }) => (
//               // write your building UI
//               <div className="upload__image-wrapper">
//                 <Paper
//                   elevation={3}
//                   style={{
//                     backgroundColor: "#fff",
//                     padding: "20px",
//                     borderRadius: "5px",
//                     cursor: "pointer",
//                   }}
//                   onClick={onImageUpload}
//                   {...dragProps}
//                 >
//                   {BannerImages.length > 0 ? (
//                     <div style={{ display: "flex", justifyContent: "center" }}>
//                       {imageList.map((image, index) => (
//                         <div key={index} className="image-item">
//                           <img
//                             src={image["data_url"]}
//                             alt="hello"
//                             style={{
//                               width: "100%",
//                               height: "190px",
//                               margin: "5px",
//                               border: "1px solid #eee",
//                               padding: "10px ",
//                             }}
//                           />
//                           <div className="image-item__btn-wrapper"></div>
//                         </div>
//                       ))}
//                     </div>
//                   ) : (
//                     <div
//                       style={{
//                         backgroundColor: "#f5f5f5",
//                         height: "200px",
//                         borderRadius: "10px",
//                       }}
//                     >
//                       <div
//                         style={{
//                           display: "flex",
//                           justifyContent: "center",
//                           alignItems: "center",
//                           flexDirection: "column",
//                           height: "100%",
//                         }}
//                       >
//                         <FaCloudUploadAlt
//                           style={{ fontSize: "50px", color: "#055c97" }}
//                         />
//                         <h1
//                           style={{
//                             fontSize: "25px",
//                             color: "#055c97",
//                             fontWeight: 700,
//                           }}
//                         >
//                           تحميل صوره
//                         </h1>
//                         <p
//                           style={{
//                             fontSize: "14px",
//                             color: "#333",
//                             fontWeight: 500,
//                           }}
//                         >
//                           يجب ان تكون عاليه الدقه وحجم منحفض
//                         </p>
//                       </div>
//                       <div></div>
//                     </div>
//                   )}
//                   <button
//                     className="btn"
//                     onClick={onImageUpload}
//                     {...dragProps}
//                     style={{
//                       backgroundColor: "#055c97",
//                       color: "#fff",
//                       fontWeight: 700,
//                       fontSize: "16px",
//                       width: "100%",
//                       marginTop: "15px",
//                     }}
//                   >
//                     صور اللوجو
//                   </button>
//                 </Paper>
//               </div>
//             )}
//           </ImageUploading>
//         </div>
//         <div className="col-md-4 col-12">
//           <ImageUploading
//             multiple
//             value={ListImages}
//             onChange={onChange}
//             maxNumber={maxNumber}
//             dataURLKey="data_url"
//           >
//             {({ imageList, onImageUpload, dragProps }) => (
//               // write your building UI
//               <div className="upload__image-wrapper">
//                 <Paper
//                   elevation={3}
//                   style={{
//                     backgroundColor: "#fff",
//                     padding: "20px",
//                     borderRadius: "5px",
//                     cursor: "pointer",
//                   }}
//                   onClick={onImageUpload}
//                   {...dragProps}
//                 >
//                   {ListImages.length > 0 ? (
//                     <div
//                       style={{
//                         display: "flex",
//                         justifyContent: "space-between",
//                         alignItems: "center",
//                         flexWrap: "wrap",
//                         minHeight: "200px",
//                       }}
//                     >
//                       {imageList.map((image, index) => (
//                         <div key={index} className="image-item">
//                           <img
//                             src={image["data_url"]}
//                             alt="hello"
//                             style={{
//                               width: "180px",
//                               margin: "5px",
//                               border: "1px solid #eee",
//                               padding: "10px ",
//                             }}
//                           />
//                           <div className="image-item__btn-wrapper"></div>
//                         </div>
//                       ))}
//                     </div>
//                   ) : (
//                     <div
//                       style={{
//                         backgroundColor: "#f5f5f5",
//                         height: "200px",
//                         borderRadius: "10px",
//                       }}
//                     >
//                       <div
//                         style={{
//                           display: "flex",
//                           justifyContent: "center",
//                           alignItems: "center",
//                           flexDirection: "column",
//                           height: "100%",
//                         }}
//                       >
//                         <FaCloudUploadAlt
//                           style={{ fontSize: "50px", color: "#055c97" }}
//                         />
//                         <h1
//                           style={{
//                             fontSize: "25px",
//                             color: "#055c97",
//                             fontWeight: 700,
//                           }}
//                         >
//                           تحميل صوره
//                         </h1>
//                         <p
//                           style={{
//                             fontSize: "14px",
//                             color: "#333",
//                             fontWeight: 500,
//                           }}
//                         >
//                           يجب ان تكون عاليه الدقه وحجم منحفض
//                         </p>
//                       </div>
//                       <div></div>
//                     </div>
//                   )}

//                   <button
//                     className="btn"
//                     onClick={onImageUpload}
//                     {...dragProps}
//                     style={{
//                       backgroundColor: "#055c97",
//                       color: "#fff",
//                       fontWeight: 700,
//                       fontSize: "16px",
//                       width: "100%",
//                       marginTop: "15px",
//                     }}
//                   >
//                     صور المكان{" "}
//                   </button>
//                 </Paper>
//               </div>
//             )}
//           </ImageUploading>
//         </div>
//       </div>
//     </>
//   );
// };

// export default DashboardImages;

import React from 'react'

const DashboardImages = () => {
  return (
    <div>DashboardImages</div>
  )
}

export default DashboardImages