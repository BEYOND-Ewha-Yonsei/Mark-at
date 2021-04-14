import { SearchOutlined } from '@ant-design/icons'
import { Carousel, Input } from 'antd'
import { CarouselRef } from 'antd/lib/carousel'
import * as React from 'react'
import { useRef, useState } from 'react'
import { useNavigate } from 'react-router'
import { Button } from 'src/components/buttons/Button'
import { Box } from 'src/components/layout/Box'
import { mq, useIsMobile } from 'src/styles/mediaQueries'
import { Stylesheet } from 'src/styles/types'

export function MarketMap() {
  const isMobile = useIsMobile()
  const navigate = useNavigate()

  const onClickViewList = () => {
    navigate('/bigmarket/1')
  }

  const [state, setState] = useState(0)

  const slider = useRef<CarouselRef>(null)

  const onClickPoint = (_id: number) => {
    slider.current?.goTo(_id)
  }

  return (
    <Box direction="column" styles={style.formContent}>
      <Box direction="column" align="center" margin="1em 1.5em 1em 1.5em">
        <Input
          size="large"
          name="search"
          placeholder="Pick your market"
          style={style.search}
          prefix={<SearchOutlined />}
        />
      </Box>
      <Carousel
        ref={slider}
        dots={false}
        infinite={true}
        centerMode={true}
        centerPadding="30px"
        beforeChange={(current, next) => setState(next)}
      >
        <Box align="center" styles={style.marketCard}>
          <img src="../static/market1.jpg" style={style.marketPicture} />
          <div className="textBox" style={style.marketProfile}>
            <h3 css={{ marginBottom: '0px' }}>Eleven Wood Flea Market</h3>
            <h4>Venice Boulevard 1200, CA US</h4>
          </div>
        </Box>
        <Box align="center" styles={style.marketCard}>
          <img
            src="http://ec2-3-34-14-143.ap-northeast-2.compute.amazonaws.com:8000/media/images/SportSmith_Goods_3.jpg"
            style={style.marketPicture}
          />
          <div className="textBox" style={style.marketProfile}>
            <h3 css={{ marginBottom: '0px' }}>Venice High Flea Market</h3>
            <h4>Venice Boulevard 13000, CA US</h4>
          </div>
        </Box>
        <Box align="center" styles={style.marketCard}>
          <img
            src="http://ec2-3-34-14-143.ap-northeast-2.compute.amazonaws.com:8000/media/images/Oldies_Trove_Store_2_XfhDDGN.jpg"
            style={style.marketPicture}
          />
          <div className="textBox" style={style.marketProfile}>
            <h3 css={{ marginBottom: '0px' }}>Starway Flea Market</h3>
            <h4>1223 Race St, Denver, CO 80206 United States</h4>
          </div>
        </Box>
      </Carousel>
      <div
        onClick={() => onClickPoint(0)}
        style={{ position: 'fixed', top: '216pt', left: '151pt', width: 'auto' }}
      >
        {state == 0 ? (
          <div style={style.dot1}>
            <div style={style.dot2}></div>
          </div>
        ) : (
          <div style={style.dotgray1}>
            <div style={style.dotgray2}></div>
          </div>
        )}
      </div>
      <div
        onClick={() => onClickPoint(1)}
        style={{
          position: 'fixed',
          top: '340pt',
          left: '134pt',
          width: 'auto',
        }}
      >
        {state == 1 ? (
          <div style={style.dot1}>
            <div style={style.dot2}></div>
          </div>
        ) : (
          <div style={style.dotgray1}>
            <div style={style.dotgray2}></div>
          </div>
        )}
      </div>
      <div
        onClick={() => onClickPoint(2)}
        style={{ position: 'fixed', top: '392pt', left: '172pt', width: 'auto' }}
      >
        {state == 2 ? (
          <div style={style.dot1}>
            <div style={style.dot2}></div>
          </div>
        ) : (
          <div style={style.dotgray1}>
            <div style={style.dotgray2}></div>
          </div>
        )}
      </div>
      <Box direction="column" align="center" margin="20em 0 0 0">
        <Button onClick={onClickViewList} styles={style.button}>
          View the list of this markets
        </Button>
      </Box>
    </Box>
  )
}

const style: Stylesheet = {
  formContent: {
    [mq[480]]: {
      marginLeft: '-1.3em',
    },
    minHeight: '100%',
    backgroundImage: `url("static/maps.jpg")`,
  },
  search: {
    padding: '0.5em 0.5em',
    border: 'none',
    borderRadius: 10,
    boxShadow: '0px 0px 10px #ccc',
  },
  marketCard: {
    display: 'flex',
    padding: '1em',
    margin: '1em 0.5em',
    borderRadius: 10,
    boxShadow: '0px 0px 10px #ccc',
    height: '7em',
    backgroundColor: 'white',
  },
  marketPicture: {
    margin: 'auto 0',
    width: '5em',
    height: '5em',
    borderRadius: 5,
  },
  marketProfile: {
    display: 'block',
    margin: '1em',
  },
  button: {
    position: 'absolute',
    bottom: '8em',
    width: '18em',
    minWidth: '15em',
    height: '2.8em',
    background: 'linear-gradient(0.25turn,rgba(247,214,55),rgba(47,207,87))',
    borderRadius: 50,
    fontSize: '1.1em',
    [mq[768]]: {
      marginTop: '1.5em',
    },
  },
  dot1: {
    width: '28pt',
    height: '28pt',
    display: 'flex',
    backgroundColor: 'rgba(47,207,87,.3)',
    borderRadius: 50,
  },
  dot2: {
    margin: 'auto',
    width: '14pt',
    height: '14pt',
    backgroundColor: 'rgba(47,207,87)',
    borderRadius: 50,
  },
  dotgray1: {
    width: '24pt',
    height: '24pt',
    display: 'flex',
    backgroundColor: 'rgba(189,189,189,.3)',
    borderRadius: 50,
  },
  dotgray2: {
    margin: 'auto',
    width: '12pt',
    height: '12pt',
    backgroundColor: 'rgba(189,189,189)',
    borderRadius: 50,
  },
}
