import { Carousel } from 'antd';
import axios from 'axios';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { RootState } from 'src/app/rootReducer';
import { HrDivider } from 'src/components/HrDivider';
import period from 'src/components/icons/calendar.svg';
import hour from 'src/components/icons/clock.svg';
import HeartIcon from 'src/components/icons/heart.svg';
import location from 'src/components/icons/map-pin.svg';
import website from 'src/components/icons/phone-call.svg';
import { Box } from 'src/components/layout/Box';
// import { ScreenContentFrame } from 'src/components/layout/ScreenContentFrame';
import { Stylesheet } from 'src/styles/types';

export function MyMarket() {
  const navigate = useNavigate()
  interface Istore {
    id:string,
    name:string,
    location:string,
    desc:string,
    categ:string,
    period:string,
    hour:string,
    website:string,
    mainpic:string|null,
    pic1:string|null,
    pic2:string|null,
    pic3:string|null,
    clap:number|null};      
  const [Store, setStore] = useState<Istore>({
    id:'',
    name:'',
    location:'',
    desc:'',
    categ:'',
    period:'',
    hour:'',
    website:'',
    mainpic:null,
    pic1:null,
    pic2:null,
    pic3:null,
    clap:null});
  const userId = useSelector((s: RootState) => s.user.userId)
  useEffect(() => {
    axios
      .get(`http://ec2-3-34-14-143.ap-northeast-2.compute.amazonaws.com:8000/server/store/${userId}/`)
      .then(({data}) => {
        setStore({...Store,
        id:data.id,
        name:data.name,
        location:data.location,
        desc:data.desc,
        categ:data.categ,
        period:data.period,
        hour:data.hour,
        website:data.website,
        mainpic:data.mainpic,
        pic1:data.pic1,
        pic2:data.pic2,
        pic3:data.pic3,
        clap:data.clap})
      })
      .catch(function (error) {
        alert('register first!')
        navigate('/market-register')
      })
  }, [])
    return (
      <>
        <Carousel autoplay>
        {Store.mainpic?   
          <div style={style.pic}>
          <img src={Store.mainpic}></img>
          </div>:<></>}
          {Store.pic1?   
          <div style={style.pic}>
            <img src={Store.pic1}></img>
          </div>:<></>}
          {Store.pic2?   
          <div style={style.pic}>
            <img src={Store.pic2}></img>
          </div>:<></>}
          {Store.pic3?               
          <></>
          :null}

        </Carousel>
        <Box direction="column" align="start" styles={style.back} >
          <Box direction="column" align="start" styles={style.background}>
          <h1 css={style.header}>{Store.name}</h1>
            <Box direction="row" align="start" >
            <button style={style.categ}>#{Store.categ}</button>
              <div css={{ display: 'inline', padding:'0 1.5em' }}>
              <img src={HeartIcon} />
              <h5 css={{ textAlign: 'center' }}>{Store.clap}</h5>
              </div>
            </Box>

          </Box>
          <Box margin='0.5em 0 0 0'></Box>
          <Box direction="column" align="start" styles={style.background}>
              <Box direction="column" align="start"> 
                <h2 css={style.header3}>Intro</h2>
                <h3 style={style.desc}>{Store.desc}</h3>
              </Box>
              <Box direction="row" align="start">  
                <img src={location} css={style.icon} alt="loc" />
                <p style={style.subdesc}>{Store.location}</p>
              </Box>
              <Box direction="row" align="start">  
                <img src={period} css={style.icon} alt="period"/>
                <p style={style.subdesc}> {Store.period}</p>
              </Box>
              <Box direction="row" align="start">  
                <img src={hour} css={style.icon} alt="hour" />
                <p style={style.subdesc}> {Store.hour}</p>
              </Box>
              <Box direction="row" align="start">  
                <img src={website} css={style.icon} alt="web" />
                <p style={style.subdesc}> {Store.website}</p>
              </Box>
              <HrDivider styles={style.divider} />
              {/* <Box direction="column" align="start">  
                <h3 style={style.desc}>Send here!</h3>
                <p style={style.subdesc}>0x64075445D7a73b7E95aB9858Af6Ff43f370f7DA5</p>
              </Box> */}
          </Box>
        </Box>
      </>
    )
}

const style: Stylesheet = {
  background: {
    background: 'rgba( 255, 255, 255)',
    padding: '1em',
    width:'100%'
  },
  back:{
    background:'rgba(246,246,246)',
  },
  back2:{
    background:'rgba(255,255,255)',
  },
  header: {
    fontWeight: 'bold',
  },
  pic:{
    width:'100%',
    height:'100%',
  },
  header3: {
    fontWeight: 'bold',
  },
  categ: {
    borderRadius: '17pt',
    height:'24px',
    border:'none',
    background: 'rgba(47, 207, 87)',
    color:'white'
  },
  divider: {
    border: 2,
    margin: '2.2em 0',
    backgroundColor: '#B2B7BC',
    color: '#B2B7BC',
  },
  icon: {
    marginRight: '0.5em',
    height: '16px',
    width: '16px',
  },
  scroppwrap:{
    "overflow-x": 'scroll',
    "overflow-y": 'hidden',
    whiteSpace: 'nowrap',
    pic: {
      display: 'inline-block',
    }
  },
}

