import { useNavigate } from 'react-router-dom'
import check from 'src/components/icons/check.svg'
import { Box } from 'src/components/layout/Box'
import { Font } from 'src/styles/fonts'
import { mq } from 'src/styles/mediaQueries'
import { Stylesheet } from 'src/styles/types'

export function HeaderSection() {
  const navigate = useNavigate()
  return (
    <Box direction="column" margin="0" styles={style.background}>
      <Box direction="column">
        <Box direction="column" align="center">
          <h1 css={style.header}>Mark-At!</h1>
          <label css={[Font.body, Font.bold]}>Earn your special marks buying </label>
          <label css={[Font.body, Font.bold]}>from local markets!</label>
        </Box>
        <Box direction="row" align="start">
          <img src={check} css={style.icon} alt="Tip" />
          <p css={style.tip}>Buy stuffs that you want to buy with celo!</p>
        </Box>
        <Box direction="row" align="start">
          <img src={check} css={style.icon} alt="Tip" />
          <p css={style.tip}>Get any cool stuffs from flea market near your place!</p>
        </Box>
        <Box direction="row" align="start">
          <img src={check} css={style.icon} alt="Tip" />
          <p css={style.tip}>Get your footprint NFT buying from market!</p>
        </Box>
        <Box direction="row" align="start">
          <img src={check} css={style.icon} alt="Tip" />
          <p css={style.tip}>Create indigenous picture with your footprint NFTs!</p>
        </Box>
      </Box>
      <Box direction="row" align="center" margin="auto">
        <button style={style.btn} onClick={() => navigate('/market-map')}>
          Move to market close to you
        </button>
      </Box>
    </Box>
  )
}

const style: Stylesheet = {
  background: {
    background: 'rgba( 246, 246, 246)',
    padding: '1em',
  },
  header: {
    [mq[768]]: {
      display: 'block',
      ...Font.h1,
      ...Font.bold,
      margin: '0.2em 0 1.2em 0',
    },
  },
  icon: {
    marginRight: '0.5em',
    height: '24pt',
    width: '24pt',
  },
  tip: {
    ...Font.body,
    lineHeight: '1.4em',
    margin: '1em 0 0 0',
  },
  btn: {
    width: '20em',
    height: '3em',
    marginTop: '1.5em',
    marginBottom: '4em',
    background: 'linear-gradient(0.25turn,rgba(247,214,55),rgba(47,207,87))',
    outline: 'none',
    border: 'none',
    borderRadius: 50,
    fontWeight: 500,
    color: 'rgba(255,255,255)',
    font: 'Poppins-Medium',
  },
}
