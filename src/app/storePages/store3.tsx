import { Carousel } from 'antd';
import * as React from 'react';
import { HrDivider } from 'src/components/HrDivider';
import period from 'src/components/icons/calendar.svg';
import hour from 'src/components/icons/clock.svg';
import HeartIcon from 'src/components/icons/heart.svg';
import location from 'src/components/icons/map-pin.svg';
import website from 'src/components/icons/phone-call.svg';
import { Box } from 'src/components/layout/Box';
import { Stylesheet } from 'src/styles/types';

export default function MarketInfo1() {
    const Store =({
      "id": "9",
      "name": "FloorChirp",
      "location": "Airport Avenue 3050, CA US",
      "desc": "FloorChirp offers a vast selection of rugs, carpets and curtains. Make your own mood with FloorChirp",
      "mainpic": "http://ec2-3-34-14-143.ap-northeast-2.compute.amazonaws.com:8000/media/images/FloorChirp_1.jpg",
      "categ": "Fabric",
      "period": "5th March, 2021 - 14th April, 2021",
      "hour": "9AM ~ 6PM",
      "website": "www.instagram.com/1d6a12_",
      "pic1": "http://ec2-3-34-14-143.ap-northeast-2.compute.amazonaws.com:8000/media/images/FloorChirp_2.jpg",
      "pic2": "http://ec2-3-34-14-143.ap-northeast-2.compute.amazonaws.com:8000/media/images/FloorChirp_3.jpg",
      "pic3": "http://ec2-3-34-14-143.ap-northeast-2.compute.amazonaws.com:8000/media/images/FloorChirp_4.jpg",
      "clap": 131
  });
    return (
        <div style={style.back}>
            <Carousel autoplay>
            {/* <div style={style.scrollwrap}> */}
              <div style={style.pic}>
              <img style={style.pic} src={Store.mainpic}></img>
              </div>
              <div style={style.pic}>
                <img style={style.pic} src={Store.pic1}></img>
              </div>
              <div style={style.pic}>
                <img style={style.pic} src={Store.pic2}></img>
              </div>
              <div style={style.pic}>
                <img src={Store.pic3}></img>
              </div>
            {/* </div> */}
            </Carousel>
          <Box direction="column" align="start" >
            <div style={style.back2}>
              <Box direction="column" align="start"margin="1em 2em 2em 2em">
                <Box direction="row" align="start"margin="0 0 1em 0">
                  <h1 css={style.header}>{Store.name}</h1>
                  <div css={{ display: 'inline', padding: '0.2em 0' }}>
                  <img src={HeartIcon} />
                  <h5 css={{ textAlign: 'center' }}>{Store.clap}</h5>
                  </div>
                </Box>
                <button style={style.categ}>#{Store.categ}</button>
              </Box>
            </div>
            <Box direction="column" align="start"margin="1em 2em 5em 2em">
              <div style={style.back2}>
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
                <Box direction="column" align="start">  
                  <h3 style={style.desc}>Send here!</h3>
                  <p style={style.subdesc}>0x64075445D7a73b7E95aB9858Af6Ff43f370f7DA5</p>
                </Box>
              </div>
            </Box>
          </Box>
        </div>
    )
}
const style: Stylesheet = {
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