import axios from 'axios';
import * as React from 'react';
import { useEffect } from 'react';
import { Stylesheet } from 'src/styles/types';

//{match}:RouteComponentProps<matchparams>
// interface matchparams {
//   storeId: string;
// }

export function StoreDetailPage() {
    const [Store, setStore] = React.useState({ id:"",name:"",location:"",desc:"",categ:"",period:"",hour:"",website:"",mainpic:"",pic1:"",pic2:"",pic3:"",clap:0});      

    useEffect(() => {
      axios
        .get(`http://ec2-3-34-14-143.ap-northeast-2.compute.amazonaws.com:8000/server/store/3/`)
        .then(({ data }) => {
          setStore(data)
          console.log(data)
          console.log(Store)
        })
        .catch(function (error) {
          console.log(error)
        })
    }, [])
    return (
        <div>
            {/* <Carousel autoplay>
              <div style={style.pic}>
              <img src={Store.mainpic}></img>
              </div>
              <div style={style.pic}>
                <img src={Store.pic1}></img>
              </div>
              <div style={style.pic}>
                <img src={Store.pic2}></img>
              </div>
              <div style={style.pic}>
                <img src={Store.pic3}></img>
              </div>
            </Carousel>
          <Box direction="column" align="center"> 
            <Box direction="column" align="start">
              <h1 css={style.header}>{Store.name}</h1>
              <p style={style.subdesc}> {Store.clap}</p>
              <button style={style.categ}>#{Store.categ}</button>
            </Box>
            <HrDivider styles={style.divider} />
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
          </Box> */}
        </div>
    )
}

const style: Stylesheet = {
  header: {
    fontWeight: 'bold',
  },
  pic:{
    width:'96px',
    height:'96px'
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

