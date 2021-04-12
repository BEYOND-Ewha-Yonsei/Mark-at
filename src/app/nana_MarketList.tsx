import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { Button } from 'src/components/buttons/Button'
import HeartIcon from 'src/components/icons/heart.svg'
import { Box } from 'src/components/layout/Box'
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

  const onClickCreateNew = () => {
    navigate('/store-detail')
  }

  const marketplace = 'Venice High Flea Market'

  const markets = [
    {
      id: 1,
      name: 'Holliday House',
      mainpic: '../static/market1.jpg',
      categ: '#kitchen',
      clap: 1,
    },
    {
      id: 2,
      name: 'Home Run Park',
      mainpic: '../static/nft/puppy.png',
      categ: '#sporting',
      clap: 0,
    },
    {
      id: 3,
      name: 'Radio&Camera ground',
      mainpic: '../static/nft/cat.png',
      categ: '#electronics',
      clap: 2,
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
    <Box css={style.listComponent}>
      <img src={list.mainpic} css={style.mainpic} />
      <div className="textBox" style={style.storeProfile}>
        <h2 css={style.h1}>{list.name}</h2>
        <Button styles={style.categ}>{list.categ}</Button>
      </div>
      <div className="clap" css={{ position: 'absolute', right: '1em', padding: '1.5em 0' }}>
        <img src={HeartIcon} />
      </div>
    </Box>
  )

  return (
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
  listContainer: {
    marginTop: '1.5em',
    display: 'block',
  },
  listComponent: {
    width: '100%',
    padding: '1em',
    height: '8em',
    display: 'flex',
  },
  mainpic: {
    margin: 'auto 0',
    width: '5em',
    height: '5em',
    borderRadius: 5,
  },
  storeProfile: {
    margin: '1em',
  },
  categ: {
    height: '1.5em',
    minWidth: '10em',
    padding: '0 auto',
    borderRadius: 50,
  },
}
