import * as React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { ScreenContentFrame } from 'src/components/layout/ScreenContentFrame';
import { toggleHomeHeaderDismissed } from 'src/features/settings/settingsSlice';
import { useIsMobile } from 'src/styles/mediaQueries';
interface matchparams {
  storeId: string;
}

export function StoreDetailPage({match}:RouteComponentProps<matchparams>) {
    const storeId = match.params.storeId
    const [Store, setStore] = useState({ id: 1,name:"",location:"",desc:"",categ:"",period:"",hour:"",website:"",mainpic:"",pic1:"",pic2:"",pic3:"",clap:0});
    
    
    const isMobile = useIsMobile()
    const dispatch = useDispatch()
    const onClickDismiss = () => {
      dispatch(toggleHomeHeaderDismissed())
    }
    const onClose = isMobile ? onClickDismiss : undefined

    // useEffect(() => {
    //     axios.get(`http://ec2-3-34-14-143.ap-northeast-2.compute.amazonaws.com:8000/server/store/?id=${storeId}/`)
    //         .then(response => {
    //             setStore(response.data[0])
    //         })

    // }, [])
    
    return (
      <ScreenContentFrame onClose={onClose} hideCloseButton={!onClose}>
        hi
            {/* <div style={{ display: 'flex', justifyContent: 'center' }}>
                <h1>{Store.name}</h1>
            </div>
            <MarketInfo store={Store}/> */}
        </ScreenContentFrame>
    )
}


