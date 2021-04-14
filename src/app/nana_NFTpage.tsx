import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { getContract } from 'src/blockchain/contracts'
import { Button } from 'src/components/buttons/Button'
import { Box } from 'src/components/layout/Box'
import { CeloContract } from 'src/config'
import { useWalletAddress } from 'src/features/wallet/utils'
import { Font } from 'src/styles/fonts'
import { mq, useIsMobile } from 'src/styles/mediaQueries'
import { Stylesheet } from 'src/styles/types'

export function NFTpage() {
  const isMobile = useIsMobile()
  const navigate = useNavigate()
  const onClickMove = () => {
    navigate('/NFTpaint')
  }
  const test = getContract(CeloContract.MarkAtToken)
  const address = useWalletAddress()
  const [nfts, setNfts] = useState<string[]>([])
  const [nfts_re, setNfts_re] = useState<string[]>([])

  const Metadata = [
    'https://ipfs.io/ipfs/QmQxtsnSTtWhFN8cP3hg2jZaTcCBxNFK3gNg7zcFUWtrK7?filename=fp1.png',
    'https://ipfs.io/ipfs/QmQPdMLW9Lu1ZEZT1sKF58zjtgt5ydeKiP4aW6LqM9rShB?filename=fp2.png',
    'https://ipfs.io/ipfs/Qmdye38FXH1RgN1WFScqayD8S51Ndf97uCa7QChUuNa9EA?filename=fp3.png',
    'https://ipfs.io/ipfs/QmRMBx8yPwdq1TpTXMdwYcfeXsMkNinFsRtJ3qQogizXWC?filename=fp4.png',
    'https://ipfs.io/ipfs/QmdYMMKKWJP1D4AHiPe7wg9GXtqcttEQAiz1HiVSGAKWs2?filename=fp5.png',
    'https://ipfs.io/ipfs/QmfBLyBYgcpXdrwNGKfzPMnaUidW8CizrvgignDfAoV1Gf?filename=fp6.png',
    'https://ipfs.io/ipfs/QmZyyYRr2gV87MoCwQe2rHiavzvsN4xz1rmeoRfaax1ijK?filename=fp7.png',
    'https://ipfs.io/ipfs/QmcWpkoXKYarxXof4qByuPmngcsH9VTDSh54WcQdjwHHbd?filename=fp8.png',
  ]
  let Metadata_re = [
    'https://ipfs.io/ipfs/QmQxtsnSTtWhFN8cP3hg2jZaTcCBxNFK3gNg7zcFUWtrK7?filename=fp1.png',
    'https://ipfs.io/ipfs/QmQPdMLW9Lu1ZEZT1sKF58zjtgt5ydeKiP4aW6LqM9rShB?filename=fp2.png',
    'https://ipfs.io/ipfs/Qmdye38FXH1RgN1WFScqayD8S51Ndf97uCa7QChUuNa9EA?filename=fp3.png',
    'https://ipfs.io/ipfs/QmRMBx8yPwdq1TpTXMdwYcfeXsMkNinFsRtJ3qQogizXWC?filename=fp4.png',
    'https://ipfs.io/ipfs/QmdYMMKKWJP1D4AHiPe7wg9GXtqcttEQAiz1HiVSGAKWs2?filename=fp5.png',
    'https://ipfs.io/ipfs/QmfBLyBYgcpXdrwNGKfzPMnaUidW8CizrvgignDfAoV1Gf?filename=fp6.png',
    'https://ipfs.io/ipfs/QmZyyYRr2gV87MoCwQe2rHiavzvsN4xz1rmeoRfaax1ijK?filename=fp7.png',
    'https://ipfs.io/ipfs/QmcWpkoXKYarxXof4qByuPmngcsH9VTDSh54WcQdjwHHbd?filename=fp8.png',
  ]
  useEffect(() => {
    async function showNfts() {
      await getBalance().then(function (data: any) {
        const balance = parseInt(data._hex, 16)

        const q = Math.floor(balance / 8)
        const re = balance % 8

        for (let i = 0; i < q; i++) {
          setNfts(nfts.concat(Metadata))
        }
        setNfts_re(nfts_re.concat(Metadata_re.splice(0, re)))
      })
    }
    showNfts()
  }, [])

  function getBalance() {
    return test.balanceOf(address)
  }

  return (
    <Box direction="column" justify="start" align="center">
      <Box direction="column" justify="start" align="center">
        <h1 css={style.h1}>{`My ${isMobile ? '' : 'simple '}NFT`}</h1>
        <Button onClick={onClickMove} styles={style.buttonContainer}>
          Go to My NFT Paint
        </Button>
      </Box>

      <Box direction="row" justify="center" align="center" wrap>
        {nfts.map((nft, index) => (
          <div key={index} css={style.nftContainer}>
            <img src={nft} css={style.nfts} width="100%" />
          </div>
        ))}
        {nfts_re.map((nft, index) => (
          <div key={index} css={style.nftContainer}>
            <img src={nft} css={style.nfts} width="100%" />
          </div>
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
    margin: '0.5em 0.5em 0.5em 0.5em',
    textAlign: 'center',
    maxWidth: '95%',
    [mq[768]]: {
      fontSize: '1.5em',
      marginTop: '0.5em',
    },
  },
  buttonContainer: {
    margin: '0.5em 0.5em 1em 0.5em',
    width: '7em',
    minWidth: '15em',
    height: '2.8em',
    background: 'linear-gradient(0.25turn,rgba(247,214,55),rgba(47,207,87))',
    borderRadius: 50,
    fontSize: '1.1em',
    [mq[768]]: {
      marginTop: '1.5em',
    },
  },
  nftContainer: {
    margin: '0.5em',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '6em',
    height: '6em',
    borderWidth: '1em ',
    borderColor: 'linear-gradient(0.6turn,rgba(247,214,55),rgba(47,207,87))',
    borderRadius: 50,
    [mq[768]]: {
      marginTop: '2.5em',
      flexDirection: 'row',
    },
  },
  nfts: {
    margin: '0.5em 0.5em 0.5em 0.5em',
    width: '400',
  },
}
