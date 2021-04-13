// import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
// import { message, Upload } from 'antd';
// import { useState } from 'react';

// function getBase64(img:any, callback:any) {
//   const reader = new FileReader();
//   reader.onloadend = () => {

//   };
//   reader.readAsDataURL(img);
// }

// function beforeUpload(file: any) {
//   const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
//   if (!isJpgOrPng) {
//     message.error('You can only upload JPG/PNG file!');
//   }
//   const isLt2M = file.size / 1024 / 1024 < 2;
//   if (!isLt2M) {
//     message.error('Image must smaller than 2MB!');
//   }
//   return isJpgOrPng && isLt2M;
// }

// export default function Uploading (opt:any, setStore:any){
//   const [loading, setLoading]=useState(false);
//   const imageUrl='';

//   const handleChange = (info: any) => {
//     if (info.file.status === 'uploading') {
//       setLoading(true);
//       return;
//     }
    
//     if (info.file.status === 'done') {
//       const reader = new FileReader();
//     let file = info.target.files[0];
//     reader.onloadend = () => {
//       switch(opt){
//         case "mainpic":
//           setStore({mainpic:reader.result});
//           console.log(imageUrl)
//           break;
//         // case "pic1":
//         //   setStore({pic1:imageUrl});
//         //   console.log(imageUrl)
//         //   break;
//         // case "pic2":
//         //   setStore({pic2:imageUrl});
//         //   console.log(imageUrl);
//         //   break;
//         // case "pic3":
//         //   setStore({pic3:imageUrl});
//         //   console.log(imageUrl)
//         //   break;
//         }
//     };
//     reader.readAsDataURL(file);
//     }
//   }
//   // let formData = new FormData();
//   //   formData.append("file", imageUrl)
//   //   //save the Image we chose inside the Node Server 
//   //   axios.post('/api/market/uploadImage', formData)
//   //       .then(response => {
//   //             if (response.data.success) {
//   //               alert('Product Successfully Uploaded')
//   //               } else {
//   //                   alert('Failed to upload Product')
//   //               }
//   //       })
//   const uploadButton = (
//     <div>
//       {loading ? <LoadingOutlined /> : <PlusOutlined />}
//       <div style={{ marginTop: 8 }}>Upload</div>
//     </div>
    
//   );
//   return (
//     <Upload
//       name="avatar"
//       listType="picture-card"
//       className="avatar-uploader"
//       showUploadList={false}
//       action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
//       beforeUpload={beforeUpload}
//       onChange={handleChange}
//     >
//       {imageUrl ? <img src={imageUrl} alt="" style={{ width: '100%' }} /> : uploadButton}

//     </Upload>
    
//   );
// }
