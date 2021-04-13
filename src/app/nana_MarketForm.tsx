import { Input } from 'antd'
import axios from 'axios'
import { useState } from 'react'
// import Uploading from 'src/app/utils/Uploading'
import { Box } from 'src/components/layout/Box'
import { Stylesheet } from 'src/styles/types'

export default function MarketForm(userId: any) {
  type Istore = {
    id: string
    name: string
    categ: string
    desc: string
    location: string
    period: string
    hour: string
    website: string
    mainpic: string
    pic1: string
    pic2: string
    pic3: string
  }
  const [store, setStore] = useState<Istore>({
    id: userId,
    name: '',
    categ: '',
    desc: '',
    location: '',
    period: '',
    hour: '',
    website: '',
    mainpic: '',
    pic1: '',
    pic2: '',
    pic3: '',
  })
  const onChange = (e: any) => {
    setStore({
      ...store,
      [e.target.name]: e.target.value,
    })
    console.log(store)
  }

  const handleSubmit = () => {
    axios
      .get(`http://ec2-3-34-14-143.ap-northeast-2.compute.amazonaws.com:8000/server/store/1`)
      .then((response) => {
        console.log(response)
        setStore(response.data)
      })
      .catch(function (error) {
        alert(error)
        console.log(error)
      })
  }

  return (
    <form onSubmit={handleSubmit}>
      <Box direction="column" align="center" styles={style.inputContainer}>
        <Box direction="column" align="center">
          {/* <Uploading opt="mainpic" setStore={setStore} style={{ width: '90%' }} />
          <Box direction="row" align="center">
            <Uploading opt="pic1" setStore={setStore} />
            <Uploading opt="pic2" setStore={setStore} />
            <Uploading opt="pic3" setStore={setStore} />
          </Box> */}
        </Box>
        <Box direction="column" styles={style.formContent}>
          <Box styles={style.info}>
            <h2>Information</h2>
          </Box>
          <span css={style.inputLabel}>Market name</span>
          <Input
            size="large"
            name="name"
            type="text"
            placeholder="Please fill out market name"
            value={store.name}
            css={style.input}
            onChange={onChange}
          />
          <span css={style.inputLabel}>Category</span>
          <Input
            size="large"
            name="categ"
            type="text"
            placeholder="ex. #furniture, #kitchen"
            value={store.categ}
            css={style.input}
            onChange={onChange}
          />
          <span css={style.inputLabel}>Intro</span>
          <Input
            size="large"
            name="desc"
            type="text"
            placeholder="Please fill out the introduction of your store."
            value={store.desc}
            height="5em"
            css={style.input}
            onChange={onChange}
          />
          <span css={style.inputLabel}>Address</span>
          <Input
            size="large"
            name="location"
            type="text"
            value={store.location}
            css={style.input}
            onChange={onChange}
          />
          <span css={style.inputLabel}>Period of market</span>
          <Input
            size="large"
            name="period"
            type="text"
            value={store.period}
            css={style.input}
            onChange={onChange}
          />
          <span css={style.inputLabel}>Operating hours</span>
          <Input
            size="large"
            name="hour"
            type="text"
            value={store.hour}
            css={style.input}
            onChange={onChange}
          />
          <span css={style.inputLabel}>Website</span>
          <Input
            size="large"
            name="website"
            type="text"
            placeholder="Please fill out website"
            value={store.website}
            css={style.input}
            onChange={onChange}
          />
        </Box>
        <Box direction="row" margin="1em 0 0 0">
          <button style={style.btn} onClick={handleSubmit}>
            submit
          </button>
        </Box>
      </Box>
    </form>
  )
}

const style: Stylesheet = {
  formContent: {
    margin: '1.2em',
    display: 'block',
    width: '90%',
  },
  info: {
    font: 'Poppins-SemiBold',
  },
  inputContainer: {
    marginTop: '1.5em',
    textAlign: 'right',
  },
  inputLabel: {
    textAlign: 'left',
    fontSize: '17px',
    fontWeight: '500',
    marginBottom: '0.5em',
    paddingRight: '1em',
    display: 'block',
  },
  input: {
    backgroundColor: 'rgba(246, 246, 246)',
    borderRadius: 10,
    border: '0px',
  },
  btn: {
    width: '12em',
    height: '3em',
    margin: '1.5em',
    background: 'linear-gradient(0.25turn,rgba(247,214,55),rgba(47,207,87))',
    outline: 'none',
    border: 'none',
    borderRadius: 50,
    fontWeight: 500,
    color: 'rgba(255,255,255)',
    font: 'Poppins-Medium',
  },
}
