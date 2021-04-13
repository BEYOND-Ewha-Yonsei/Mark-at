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

  if (isDismissed) return null

  return (
    <>
      <div style={style.background}>
      <HeaderSection />
      </div>
      <Box direction="column" align="center" margin="3em 1em 0 1em">
        <Box direction="row" align="center">
          <img src={brush1} css={style.icon} alt="Tip" />
          <img src={brush2} css={style.icon} alt="Tip" />
          <img src={brush3} css={style.icon} alt="Tip" />
        </Box>
        <h1 css={style.header}>What is Footprint NFT?</h1>
        <Box direction="column" align="center">
          <p css={style.tip}>Footprint NFT is a NFT you can earn from buying stuffs at offline flea market near you.</p>
          <p css={style.tip}>It doesn't matter whether you are elsewhere in Europe, America or even Asia.</p>
          <p css={style.tip}>You just have to buy anything from any market shown on Mark-at! to get these attractive footprint NFTs, also albe to create your indigenous with them. </p>
        </Box>
      </Box>
      <div style={style.background}>
      <h1 css={style.header}>Famous Market List</h1>
      </div>
    </>
  )
}

const style: Stylesheet = {
  background:{
    background:'rgba( 246, 246, 246)'
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
}
