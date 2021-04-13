import { useState } from 'react';
import { Box } from 'src/components/layout/Box';
import styled from "styled-components";

export default function Uploading (){
  const [ImgURL1, setImgURL1] = useState<any|null>();
  const [ImgURL2, setImgURL2] = useState<any|null>();
  const [ImgURL3, setImgURL3] = useState<any|null>();
  const [ImgURL4, setImgURL4] = useState<any|null>();

  const [mainpic, setMainpic] = useState("");
  const [pic1, setPic1] = useState("");
  const [pic2, setPic2] = useState("");
  const [pic3, setPic3] = useState("");
	const onChangeImage = (e: any) => {
		e.preventDefault();
		const reader = new FileReader();
		const file = e.target.files[0];
		reader.onloadend = () => {
      switch(e.target.name){
        case "mainpic":
          setMainpic(file)
          console.log(mainpic)
          setImgURL1(reader.result)
          break;
        case "pic1":
          setPic1(file)
          console.log(pic1)
          setImgURL2(reader.result)
          break;
        case "pic2":
          setPic2(file)
          console.log(pic2)
          setImgURL3(reader.result)
          break;
        case "pic3":
          setPic3(file)    
          console.log(pic3)
          setImgURL4(reader.result)
          break;
      }
    }
    reader.readAsDataURL(file);
	};
  // let formData = new FormData();
  //   formData.append("file", imageUrl)
  //   //save the Image we chose inside the Node Server 
  //   axios.post('/api/market/uploadImage', formData)
  //       .then(response => {
  //             if (response.data.success) {
  //               alert('Product Successfully Uploaded')
  //               } else {
  //                   alert('Failed to upload Product')
  //               }
  //       })
  return (
    <div>
      <Box direction="column">
      <Picture>
        <FileBox>
          <InputFile
            type='file'
            name='mainpic'
            onChange={onChangeImage}
            id='image'
          />
        </FileBox>
        <ImageArea>
          {ImgURL1 && <img className='preview' src={ImgURL1} width='80%' />}
        </ImageArea>
      </Picture>
      <Picture>
        <FileBox>
          <InputFile
            type='file'
            name='pic1'
            onChange={onChangeImage}
            id='image'
          />
        </FileBox>
        <ImageArea>
          {ImgURL2 && <img className='preview' src={ImgURL2} width='80%' />}
        </ImageArea>
      </Picture>
      <Picture>
        <FileBox>
          <InputFile
            type='file'
            name='pic2'
            onChange={onChangeImage}
            id='image'
          />
        </FileBox>
        <ImageArea>
          {ImgURL3 && <img className='preview' src={ImgURL3} width='80%' />}
        </ImageArea>
      </Picture>
      <Picture>
        <FileBox>
          <InputFile
            type='file'
            name='pic3'
            onChange={onChangeImage}
            id='image'
          />
        </FileBox>
        <ImageArea>
          {ImgURL4 && <img className='preview' src={ImgURL4} width='80%' />}
        </ImageArea>
      </Picture>
      </Box>
      {/* <Row>
          <Button onClick={onSubmit}>제출</Button>
      </Row> */}
    </div>

  );
}
const Picture = styled.div`
	margin: 1rem;
	width: 50%;
	text-align: center;
`;
const FileBox = styled.div`
	width: 100%;
	margin: auto;
	align-item: center;
	justify-content: center;
	display: flex;
`;
const InputFile = styled.input``;
const ImageArea = styled.div`
	margin: 1rem;
`;