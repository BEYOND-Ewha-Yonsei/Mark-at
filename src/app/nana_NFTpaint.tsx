import { Col, Row } from 'antd'
import * as React from 'react'
import { useCallback, useRef, useState } from 'react'
import Drawer from 'react-bottom-drawer'
import { Button } from 'src/components/buttons/Button'
import { Box } from 'src/components/layout/Box'
import { Stylesheet } from 'src/styles/types'

export function NFTpaint() {
  const [isVisible, setIsVisible] = useState(false)
  const openDrawer = useCallback(() => setIsVisible(true), [])
  const closeDrawer = useCallback(() => setIsVisible(false), [])

  const canvasRef = useRef<HTMLCanvasElement>(null)

  var canvas = document.querySelector('canvas')
  var ctx = canvas?.getContext('2d')
  var myImage = '../src/components/icons/cat_1.svg'

  function addToCanvas(ctx: any, image: string, x: any, y: any) {
    var img = new Image()
    img.src = stampNFTs[imgIndex]
    img.width = 48
    img.onload = function () {
      ctx.drawImage(img, x - 24, y - 24)
    }
  }

  const stampNFTs = [
    '../src/components/icons/rabbit.svg',
    '../src/components/icons/pig_1.svg',
    '../src/components/icons/penguin.svg',
    '../src/components/icons/mouse.svg',
    '../src/components/icons/hen_1.svg',
    '../src/components/icons/fox_1.svg',
    '../src/components/icons/duck_1.svg',
    '../src/components/icons/cat_1.svg',
  ]

  const [imgIndex, setImgIndex] = useState(-1)

  const staticNfts = [
    'https://ipfs.io/ipfs/QmQxtsnSTtWhFN8cP3hg2jZaTcCBxNFK3gNg7zcFUWtrK7',
    'https://ipfs.io/ipfs/QmQPdMLW9Lu1ZEZT1sKF58zjtgt5ydeKiP4aW6LqM9rShB',
    'https://ipfs.io/ipfs/Qmdye38FXH1RgN1WFScqayD8S51Ndf97uCa7QChUuNa9EA',
    'https://ipfs.io/ipfs/QmRMBx8yPwdq1TpTXMdwYcfeXsMkNinFsRtJ3qQogizXWC',
    'https://ipfs.io/ipfs/QmdYMMKKWJP1D4AHiPe7wg9GXtqcttEQAiz1HiVSGAKWs2',
    'https://ipfs.io/ipfs/QmfBLyBYgcpXdrwNGKfzPMnaUidW8CizrvgignDfAoV1Gf',
    'https://ipfs.io/ipfs/QmZyyYRr2gV87MoCwQe2rHiavzvsN4xz1rmeoRfaax1ijK',
    'https://ipfs.io/ipfs/QmcWpkoXKYarxXof4qByuPmngcsH9VTDSh54WcQdjwHHbd',
  ]

  return (
    <Box direction="column" justify="start" styles={{ backroundColor: 'rgba(246,246,246)' }}>
      <div css={style.topPadding}></div>
      <Box direction="column" justify="center" align="center">
        <img src="../static/My-NFT-Paint.svg"></img>
      </Box>
      <div className="Canvas" style={style.canvas}>
        <canvas
          ref={canvasRef}
          height={500}
          width={375}
          className="canvas"
          onClick={(e) => addToCanvas(ctx, myImage, e.nativeEvent.offsetX, e.nativeEvent.offsetY)}
        />
      </div>
      <Button onClick={openDrawer} styles={style.drawerButton}>
        Select Mark
      </Button>
      <Drawer duration={250} hideScrollbars={false} onClose={closeDrawer} isVisible={isVisible}>
        <Box
          direction="row"
          justify="center"
          align="center"
          styles={{ minHeight: '30vh', display: 'flex' }}
        >
          <Row>
            {staticNfts.map((nft, index) => (
              <Col span={6}>
                <div key={index} css={style.nftContainer}>
                  <img src={nft} css={style.nfts} width="100%" onClick={() => setImgIndex(index)} />
                </div>
              </Col>
            ))}
          </Row>
        </Box>
      </Drawer>
    </Box>
  )
}

const style: Stylesheet = {
  topPadding: {
    height: '24pt',
  },
  canvas: {
    width: '100%',
    borderBottom: '2px rgba(189,189,189)',
    alignItems: 'center',
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
  },
  nfts: {
    margin: '0.5em 0.5em 0.5em 0.5em',
    width: '400',
  },
  drawerButton: {
    position: 'fixed',
    bottom: '9em',
    right: '50%',
    marginRight: '-5em',
    height: '2.8em',
    width: '10em',
    alignItems: 'center',
    borderRadius: 50,
    background: 'linear-gradient(0.25turn,rgba(247,214,55),rgba(47,207,87))',
    fontSize: '1.1em',
  },
}
