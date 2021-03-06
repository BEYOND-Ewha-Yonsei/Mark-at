// import { Input } from 'antd'
// import axios from 'axios'
// import { useEffect, useState } from 'react'
// import Uploading from 'src/app/utils/Uploading'
// import { Box } from 'src/components/layout/Box'
// import { mq } from 'src/styles/mediaQueries'
// import { Stylesheet } from 'src/styles/types'

// export default function MarketForm(userId: any) {
//   type Istore = {
//   id: string,
//   name: string,
//   categ: string,
//   desc: string,
//   location:string,
//   period: string,
//   hour: string,
//   website: string,
//   mainpic: string,
//   pic1: string,
//   pic2: string,
//   pic3: string,
//   }
//   const [store, setStore] = useState<Istore>({
//     id: userId,
//     name: '',
//     categ: '',
//     desc: '',
//     location: '',
//     period: '',
//     hour: '',
//     website: '',
//     mainpic: '',
//     pic1: '',
//     pic2: '',
//     pic3: '',
//   })
//   const onChange = (e: any) => {
//     setStore({
//       ...store,
//       [e.target.name]: e.target.value,
//     })
//     console.log(store)
//   }
//   useEffect(() => {
//       axios.get(`http://ec2-3-34-14-143.ap-northeast-2.compute.amazonaws.com:8000/server/store/?id=${store.id}/`)
//           .then(response => {
//               setStore(response.data[0])
//           })

//   }, [])
//   const handleSubmit = () => {
//     axios
//     .get(`http://ec2-3-34-14-143.ap-northeast-2.compute.amazonaws.com:8000/server/store/?id=${store.id}`)
//     .then((response) => {
//       console.log(response)
//       setStore(response.data)
//     })
//     .catch(function (error) {
//       alert(error)
//       console.log(error)
//     })
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <Box direction="column" align="center" styles={style.inputContainer}>
//         <h2>Add My Market</h2>
//         <Box direction="row" align="center">
//           <Uploading opt="mainpic" setStore={setStore}/>
//           <Uploading opt="pic1" setStore={setStore}/>
//           <Uploading opt="pic2" setStore={setStore}/>
//           <Uploading opt="pic3" setStore={setStore}/>
//         </Box>
//         <Box direction="row" margin="1em 0 0 0">
//           <span css={style.inputLabel}>market name</span>
//           <Input size="large" name="name" type="text" value={store.name} onChange={onChange} />
//         </Box>
//         <Box direction="row" margin="1em 0 0 0">
//           <span css={style.inputLabel}>category</span>
//           <Input size="large" name="categ" type="text" value={store.categ} onChange={onChange} />
//         </Box>
//         <Box direction="row" margin="1em 0 0 0">
//           <span css={style.inputLabel}>description</span>
//           <Input size="large" name="desc" type="text" value={store.desc} onChange={onChange} />
//         </Box>
//         <Box direction="row" margin="1em 0 0 0">
//           <span css={style.inputLabel}>loaction</span>
//           <Input size="large" name="location" type="text" value={store.location} onChange={onChange} />
//         </Box>
//         <Box direction="row" margin="1em 0 0 0">
//           <span css={style.inputLabel}>open period</span>
//           <Input size="large" name="period" type="text" value={store.period} onChange={onChange} />
//         </Box>
//         <Box direction="row" margin="2em 0 0 0">
//           <span css={style.inputLabel}>open hour</span>
//           <Input size="large" name="hour" type="text" value={store.hour} onChange={onChange} />
//         </Box>
//         <Box direction="row" margin="1em 0 0 0">
//           <span css={style.inputLabel}>website</span>
//           <Input size="large" name="website" type="text" value={store.website} onChange={onChange} />
//         </Box>
//         <Box direction="row" margin="1em 0 0 0">
//           <button style={style.btn} onClick={handleSubmit}>submit</button>
//         </Box>
//       </Box>
//     </form>
//   )
// }

// const style: Stylesheet = {
//   formContent: {
//     [mq[480]]: {
//       marginLeft: '-1.3em',
//     },
//   },
//   inputContainer: {
//     marginTop: '1.5em',
//     textAlign: 'right',
//   },
//   inputLabel: {
//     textAlign: 'left',
//     width: '6em',
//     paddingRight: '1em',
//     [mq[480]]: {
//       width: '8em',
//     },
//   },
//   btn: {
//     width: '12em',
//     height:'3em',
//     marginTop: '1.5em',
//     background: 'linear-gradient(0.25turn,rgba(247,214,55),rgba(47,207,87))',
//     outline: 'none',
//     border: 'none',
//     borderRadius: 5,
//     fontWeight: 500,
//     color: 'rgba(255,255,255)',
//     font: "Poppins-Medium"
//   },
// }
