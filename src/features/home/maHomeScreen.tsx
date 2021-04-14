import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from 'src/app/rootReducer'
import brush1 from 'src/components/icons/brush1.svg'
import brush2 from 'src/components/icons/brush2.svg'
import brush3 from 'src/components/icons/brush3.svg'
import { Box } from 'src/components/layout/Box'
import { HeaderSection } from 'src/features/home/maHeaderSection'
import { Color } from 'src/styles/Color'
import { Font } from 'src/styles/fonts'
import { mq } from 'src/styles/mediaQueries'
import { Stylesheet } from 'src/styles/types'

export function HomeScreen() {
  const isDismissed = useSelector((state: RootState) => state.settings.homeHeaderDismissed)
  const [isMobile, setIsMobile] = useState<boolean>(false)

  if (isDismissed) return null

  useEffect(() => {
    if (window.innerWidth < 500) {
      setIsMobile(true)
      console.log('모바일임니다')
    } else {
      console.log('큰화면입니다')
    }
  }, [])
  return (
    <>
      {isMobile && (
        <>
          <HeaderSection />
          <Box direction="column" align="center" margin="3em 1em 0 1em">
            <Box direction="row" align="center">
              <img src={brush1} css={style.icon} alt="Tip" />
              <img src={brush2} css={style.icon} alt="Tip" />
              <img src={brush3} css={style.icon} alt="Tip" />
            </Box>
            <h1 css={style.header}>What is Footprint NFT?</h1>
            <Box direction="column" align="center" margin="0 2em 4em 2em">
              <p css={style.tip}>
                Footprint NFT is a NFT you can earn from buying stuffs at offline flea market near
                you.
              </p>
              <p css={style.tip}>
                It doesn't matter whether you are elsewhere in Europe, America or even Asia.
              </p>
              <p css={style.tip}>
                You just have to buy anything from any market shown on Mark-at! to get these
                attractive footprint NFTs, also albe to create your indigenous with them.{' '}
              </p>
            </Box>
          </Box>
          <Box direction="column" align="center" margin="0" styles={style.background}>
            <h1 css={style.header}>Famous Market List</h1>
            <Box direction="row" align="center" margin="0" styles={style.famousMarket}>
              <img
                src="http://ec2-3-34-14-143.ap-northeast-2.compute.amazonaws.com:8000/media/images/SportSmith_Goods_3.jpg"
                width="35%"
                style={style.marketImage}
              />

              <Box direction="column" align="center" margin="0 1em 0 0">
                <h3>Venice Flea Market</h3>
                <div css={style.desc}>Venice Boulevard, CA US</div>
              </Box>
            </Box>
            <Box direction="row" align="center" margin="0" styles={style.famousMarket}>
              <img
                src="http://ec2-3-34-14-143.ap-northeast-2.compute.amazonaws.com:8000/media/images/Oldies_Trove_Store_2_XfhDDGN.jpg"
                width="35%"
                style={style.marketImage}
              />

              <Box direction="column" align="center" margin="0 0 0 1em">
                <h3>Starway Flea Market</h3>
                <div css={style.desc}>1223 Race St, Denver, CO 80206 United States</div>
              </Box>
            </Box>
          </Box>
        </>
      )}
      {!isMobile && (
        <>
          <Box direction="column" align="center" margin="6em 3em 3em 3em">
            <img src="static/logo.png" width="fit-content" />
            <Box direction="column" align="center" margin="2em">
              <h2>
                This website is built for <strong>mobile devices</strong>
              </h2>
              <h2>Please use your Chrome dev tool,</h2>
              <h2>and open this page in a mobile friendly environment</h2>
            </Box>
          </Box>
        </>
      )}
    </>
  )
}

const style: Stylesheet = {
  background: {
    background: 'rgba(246, 246, 246)',
    padding: '2em 1em',
  },
  icon: {
    marginRight: '0.5em',
    height: '76pt',
    width: '76pt',
  },
  divider: {
    margin: '2.2em 0',
    backgroundColor: Color.altGrey,
    color: Color.altGrey, //for IE
  },
  celoPriceLabel: {
    ...Font.body,
    ...Font.bold,
    paddingBottom: '0.2em',
  },
  header: {
    [mq[768]]: {
      display: 'block',
      ...Font.h1,
      ...Font.bold,
      margin: '0.2em 0 1.2em 0',
      color: Color.primaryBlack,
    },
  },
  tip: {
    ...Font.body,
    lineHeight: '1.4em',
    margin: '1em 0 0 0',
  },
  desc: {
    color: 'rgb(153 153 153)',
  },
  famousMarket: {
    width: '26em',
    background: Color.primaryWhite,
    padding: '1em',
    margin: '1em',
    borderRadius: '16pt',
  },
  marketImage: {
    borderRadius: '10pt',
  },
}
