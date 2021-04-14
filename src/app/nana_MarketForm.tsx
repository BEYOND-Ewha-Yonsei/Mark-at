import { Input } from 'antd'
import axios from 'axios'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { RootState } from 'src/app/rootReducer'
import { Box } from 'src/components/layout/Box'
import { Stylesheet } from 'src/styles/types'
import styled from "styled-components"

export default function MarketForm() {
  const navigate = useNavigate()
  const [ImgURL1, setImgURL1] = useState<any|null>();
  const [ImgURL2, setImgURL2] = useState<any|null>();
  const [ImgURL3, setImgURL3] = useState<any|null>();
  const [ImgURL4, setImgURL4] = useState<any|null>();

  const [mainpic, setMainpic] = useState<any>("");
  const [pic1, setPic1] = useState<any>("");
  const [pic2, setPic2] = useState<any>("");
  const [pic3, setPic3] = useState<any>("");
  
  interface Istore {
    // id: string;
    name: string;
    categ: string;
    desc: string;
    location: string;
    period: string;
    hour: string;
    website: string;
    // clap: number|null;
    // mainpic:any|null;
    // pic1:any|null;
    // pic2:any|null;
    // pic3:any|null;
  }
  const [store, setStore] = useState<Istore>({
    name: '',
    categ: '',
    desc: '',
    location: '',
    period: '',
    hour: '',
    website: '',
  })
  const formData = new FormData();
  const userId = useSelector((s: RootState) => s.user.userId)

  const onChange = (e: any) => {
    setStore({
      ...store,
      [e.target.name]: e.target.value,
    })
    console.log(store)
  }
  const onChangeImage = (e: any) => {
		e.preventDefault();
		const reader = new FileReader();
		const file = e.target.files[0];
		reader.onloadend = () => {
      switch(e.target.name){
        case "mainpic":
          setImgURL1(reader.result)
          setMainpic(file)
          break;
        case "pic1":
          setImgURL2(reader.result)
          setPic1(file)
          break;
        case "pic2":
          setImgURL3(reader.result)
          setPic2(file)
          break;
        case "pic3":
          setImgURL4(reader.result)
          setPic3(file)
          break;
      }
    }
    reader.readAsDataURL(file);
	};
  const handleSubmit = () => {
    formData.append('id',userId)
    formData.append('name',store.name)
    formData.append('categ',store.categ)
    formData.append('desc',store.desc)
    formData.append('location',store.location)
    formData.append('period',store.period)
    formData.append('hour',store.hour)
    formData.append('website',store.website)
    //formData.append('clap',null)
    formData.append('mainpic',mainpic)
    formData.append('pic1',pic1)
    formData.append('pic2',pic2)
    formData.append('pic3',pic3)
  //   for (var value of formData.values()) {
  //     console.log(value);
  //  }
    axios.defaults.headers.post['Content-Type'] = 'multipart/form-data' ;
    axios
      .post('http://ec2-3-34-14-143.ap-northeast-2.compute.amazonaws.com:8000/server/store/',formData)
      .then((response) => {
        // console.log(response)
        alert('Product Successfully Uploaded')
        navigate('/myMarket')
      })
      .catch(function (error) {
        console.log(error)
        alert('fail')
      })
  }

  return (
    <form onSubmit={handleSubmit} encType={'multipart/form-data'}>
      <Box direction="column" align="center" styles={style.inputContainer}>
        <Box direction="column" align="center">
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
        <Box direction="column" styles={style.formContent}>
          <Box styles={style.info}>
            <h2>Information</h2>
          </Box>
          <span css={style.inputLabel}>Market name</span>
          <Input
            size="large"
            name="name"
            type="text"
            placeholder="Please fill out market name"
            value={store.name}
            css={style.input}
            onChange={onChange}
          />
          <span css={style.inputLabel}>Category</span>
          <Input
            size="large"
            name="categ"
            type="text"
            placeholder="ex. #furniture, #kitchen"
            value={store.categ}
            css={style.input}
            onChange={onChange}
          />
          <span css={style.inputLabel}>Intro</span>
          <Input
            size="large"
            name="desc"
            type="text"
            placeholder="Please fill out the introduction of your store."
            value={store.desc}
            height="5em"
            css={style.input}
            onChange={onChange}
          />
          <span css={style.inputLabel}>Address</span>
          <Input
            size="large"
            name="location"
            type="text"
            value={store.location}
            css={style.input}
            onChange={onChange}
          />
          <span css={style.inputLabel}>Period of market</span>
          <Input
            size="large"
            name="period"
            type="text"
            value={store.period}
            css={style.input}
            onChange={onChange}
          />
          <span css={style.inputLabel}>Operating hours</span>
          <Input
            size="large"
            name="hour"
            type="text"
            value={store.hour}
            css={style.input}
            onChange={onChange}
          />
          <span css={style.inputLabel}>Website</span>
          <Input
            size="large"
            name="website"
            type="text"
            placeholder="Please fill out website"
            value={store.website}
            css={style.input}
            onChange={onChange}
          />
        </Box>
        <Box direction="row" margin="1em 0 0 0">
          <button style={style.btn} onClick={handleSubmit}>
            submit
          </button>
        </Box>

      </Box>
    </form>
  )
}

const style: Stylesheet = {
  formContent: {
    margin: '1.2em',
    display: 'block',
    width: '90%',
  },
  info: {
    font: 'Poppins-SemiBold',
  },
  inputContainer: {
    marginTop: '1.5em',
    textAlign: 'right',
  },
  inputLabel: {
    textAlign: 'left',
    fontSize: '17px',
    fontWeight: '500',
    marginBottom: '0.5em',
    paddingRight: '1em',
    display: 'block',
  },
  input: {
    backgroundColor: 'rgba(246, 246, 246)',
    borderRadius: 10,
    border: '0px',
  },
  btn: {
    width: '12em',
    height: '3em',
    margin: '1.5em',
    background: 'linear-gradient(0.25turn,rgba(247,214,55),rgba(47,207,87))',
    outline: 'none',
    border: 'none',
    borderRadius: 50,
    fontWeight: 500,
    color: 'rgba(255,255,255)',
    font: 'Poppins-Medium',
  },
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
