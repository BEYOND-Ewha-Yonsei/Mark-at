import { Card } from 'antd'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import HeartIcon from 'src/components/icons/heart.svg'
import { Box } from 'src/components/layout/Box'
import { ScreenContentFrame } from 'src/components/layout/ScreenContentFrame'
import { Color } from 'src/styles/Color'
import { Font } from 'src/styles/fonts'
import { mq } from 'src/styles/mediaQueries'
import { Stylesheet } from 'src/styles/types'

interface ListProps {
  id: any
  name: string
  mainpic: string
  categ: string
  clap: any
}

export function MarketList() {
  const navigate = useNavigate()

  const onClick = (_storeId: any) => {
    navigate('/store-detail/' + `${_storeId}`)
  }

  const marketplace = 'Venice High Flea Market'

  const markets = [
    {
      id: 17,
      name: 'groceryus',
      mainpic:
        'http://ec2-3-34-14-143.ap-northeast-2.compute.amazonaws.com:8000/media/images/%E1%84%85%E1%85%A9%E1%84%80%E1%85%A9_lLB4LZi.png',
      categ: 'Groceries',
      clap: 91,
    },
    {
      id: 19,
      name: 'Toymonster',
      mainpic:
        'http://ec2-3-34-14-143.ap-northeast-2.compute.amazonaws.com:8000/media/images/%E1%84%85%E1%85%A9%E1%84%80%E1%85%A9_MQkiPLa.png',
      categ: 'Child/Babycare',
      clap: 89,
    },
    {
      id: 9,
      name: 'FloorChirp',
      mainpic:
        'http://ec2-3-34-14-143.ap-northeast-2.compute.amazonaws.com:8000/media/images/FloorChirp_1.jpg',
      categ: 'Fabric',
      clap: 131,
    },
    {
      id: 35,
      name: 'Dolls around the world',
      mainpic:
        'http://ec2-3-34-14-143.ap-northeast-2.compute.amazonaws.com:8000/media/images/%E1%84%80%E1%85%B3%E1%84%85%E1%85%B5%E1%86%B71_XLRMGUY.jpg',
      categ: 'Toys and games',
      clap: 96,
    },
    {
      id: 6,
      name: 'Oldies Trove Store',
      mainpic:
        'http://ec2-3-34-14-143.ap-northeast-2.compute.amazonaws.com:8000/media/images/Oldies_Trove_Store_2_XfhDDGN.jpg',
      categ: 'Antiques',
      clap: 79,
    },
    {
      id: 24,
      name: 'Eden&lawn',
      mainpic:
        'http://ec2-3-34-14-143.ap-northeast-2.compute.amazonaws.com:8000/media/images/%E1%84%85%E1%85%A9%E1%84%80%E1%85%A9_4GrbU6e.png',
      categ: 'Home&Garden',
      clap: 79,
    },
  ]

  const [bigMarket, setBigMarket] = useState([])

  useEffect(() => {
    axios
      .get(`http://ec2-3-34-14-143.ap-northeast-2.compute.amazonaws.com:8000/server/bigmarket/1/`)
      .then(({ data }) => {
        setBigMarket(data.store)
        console.log(data.store)
        console.log(bigMarket)
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [])

  const ListComponent = (list: ListProps) => (
    <Card bordered={false} bodyStyle={style.listComponent} onClick={() => onClick(list.id)}>
      <img src={list.mainpic} css={style.mainpic} />
      <div className="textBox" style={style.storeProfile}>
        <div>
          <h2 css={style.h2}>{list.name}</h2>
        </div>
        <div css={style.categ}>#{list.categ}</div>
      </div>
      <div
        className="clap"
        css={{ display: 'inline', position: 'absolute', right: '1em', padding: '0.2em 0' }}
      >
        <img src={HeartIcon} />
        <h5 css={{ textAlign: 'center' }}>{list.clap}</h5>
      </div>
    </Card>
  )

  return (
    <ScreenContentFrame css={{ padding: '1.0em' }}>
      <Box direction="column" justify="center">
        <Box justify="start" align="start">
          <h1 css={style.h1}>{marketplace}</h1>
        </Box>
        <Box direction="column" css={style.listContainer}>
          {markets.map((market) => (
            <ListComponent key={market.id} {...market} />
          ))}
        </Box>
      </Box>
    </ScreenContentFrame>
  )
}

const style: Stylesheet = {
  h1: {
    ...Font.h1,
    ...Font.bold,
    fontSize: '1.5em',
    margin: '0em 0.5em 0.5em 0.5em',
    textAlign: 'start',
    maxWidth: '95%',
    [mq[768]]: {
      fontSize: '1.5em',
      marginTop: '0.5em',
    },
  },
  h2: {
    ...Font.h2,
    ...Font.bold,
    fontSize: '1.4em',
    fontWeight: '600',
    margin: '0em 0.5em 0.5em 0.5em',
    textAlign: 'start',
    [mq[768]]: {
      fontSize: '1.5em',
      marginTop: '0.5em',
    },
  },
  listContainer: {
    marginTop: '1.5em',
    display: 'block',
    width: '100%',
    backgound: `${Color.borderLight}`,
  },
  listComponent: {
    padding: '1em 0em',
    height: '7.5em',
    borderBottom: `2.5px solid ${Color.borderLight}`,
  },
  mainpic: {
    display: 'inline-block',
    width: '5em',
    height: '5em',
    verticalAlign: 'top',
    borderRadius: 10,
  },
  storeProfile: {
    display: 'inline-block',
  },
  categ: {
    display: 'inline-block',
    justifyContent: 'center',
    height: '1.7em',
    padding: '0 1em',
    fontWeight: '400',
    marginLeft: '0.7em',
    color: 'white',
    background: 'rgba(47, 207, 87)',
    borderRadius: 50,
  },
}
