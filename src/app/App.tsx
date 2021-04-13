import * as React from 'react'
import { PropsWithChildren } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom'
import { BadBrowserScreen } from 'src/app/BadBrowserScreen'
import { ErrorBoundary } from 'src/app/FailScreen'
import MarketForm from 'src/app/nana_MarketForm'
import { MarketList } from 'src/app/nana_MarketList'
import { MarketMap } from 'src/app/nana_MarketMap'
import { NFTpage } from 'src/app/nana_NFTpage'
import { NFTpaint } from 'src/app/nana_NFTpaint'
import { NotFoundScreen } from 'src/app/NotFoundScreen'
import { useSplashScreen } from 'src/app/splash'
import { StoreDetailPage } from 'src/app/StoreDetailPage'
import MarketInfo1 from 'src/app/storePages/store1'
import MarketInfo2 from 'src/app/storePages/store2'
import MarketInfo3 from 'src/app/storePages/store3'
import MarketInfo4 from 'src/app/storePages/store4'
import { default as MarketInfo5, default as MarketInfo6 } from 'src/app/storePages/store5'
import { UpdateBanner } from 'src/app/UpdateBanner'
import Uploading from 'src/app/utils/Uploading'
import { ModalProvider } from 'src/components/modal/modalContext'
import { config } from 'src/config'
import { ExchangeConfirmationScreen } from 'src/features/exchange/ExchangeConfirmationScreen'
import { ExchangeFormScreen } from 'src/features/exchange/ExchangeFormScreen'
import { TransactionReview } from 'src/features/feed/TransactionReview'
import { HomeNavigator } from 'src/features/home/HomeNavigator'
import { HomeScreen } from 'src/features/home/maHomeScreen'
import { LoginForm } from 'src/features/login/loginForm'
import { RegisterScreen } from 'src/features/login/registerScreen'
import { resetActions } from 'src/features/login/userreset'
import { ImportChoiceScreen } from 'src/features/onboarding/import/ImportChoiceScreen'
import { ImportWalletScreen } from 'src/features/onboarding/import/ImportWalletScreen'
import { LedgerImportScreen } from 'src/features/onboarding/import/LedgerImportScreen'
import { NewWalletScreen } from 'src/features/onboarding/new/NewWalletScreen'
import { OnboardingNavigator } from 'src/features/onboarding/OnboardingNavigator'
import { SetPincodeScreen } from 'src/features/onboarding/pincode/SetPincodeScreen'
import { WelcomeScreen } from 'src/features/onboarding/welcome/WelcomeScreen'
import { ChangePincodeScreen } from 'src/features/pincode/ChangePincodeScreen'
import { SendConfirmationScreen } from 'src/features/send/SendConfirmationScreen'
import { SendFormScreen } from 'src/features/send/SendFormScreen'
import { SettingsScreen } from 'src/features/settings/SettingsScreen'
import { WalletScreenTest } from 'src/features/wallet/WalletScreenTest'
import { useBrowserFeatureChecks } from 'src/utils/browsers'



function Router(props: PropsWithChildren<any>) {
  // The BrowserRouter works everywhere except windows so using hash for electron
  return config.isElectron ? (
    <HashRouter>{props.children}</HashRouter>
  ) : (
    <BrowserRouter>{props.children}</BrowserRouter>
  )
}
export const App = () => {
  const dispatch = useDispatch()
  dispatch(resetActions.trigger())
  const showSplash = useSplashScreen()
  const isBrowserSupported = useBrowserFeatureChecks()

  // Don't load the app until we're done with the splash screen
  if (showSplash) return null

  if (!isBrowserSupported) return <BadBrowserScreen />

  return (
    <ErrorBoundary>
      <Router>
        <ModalProvider>
          <UpdateBanner />
          <Routes>
            <Route path="/" element={<HomeNavigator />}>
              <Route path="/" element={<HomeScreen />} />
              <Route path="tx" element={<TransactionReview />} />
              <Route path="send" element={<SendFormScreen />} />
              <Route path="send-review" element={<SendConfirmationScreen />} />
              <Route path="exchange-review" element={<ExchangeConfirmationScreen />} />
              <Route path="exchange" element={<ExchangeFormScreen />} />
              <Route path="wallet" element={<WalletScreenTest />} />
              <Route path="settings" element={<SettingsScreen />} />
              
              <Route path="NFTpage" element={<NFTpage />} />
              <Route path="NFTpaint" element={<NFTpaint />} />

              <Route path="market-register" element={<MarketForm />} />
              <Route path="test" element={<Uploading />} />

              <Route path="store/1" element={<MarketInfo1/>} />
              <Route path="store/2" element={<MarketInfo2/>} />
              <Route path="store/3" element={<MarketInfo3/>} />
              <Route path="store/4" element={<MarketInfo4/>} />
              <Route path="store/5" element={<MarketInfo5/>} />
              <Route path="myMarket" element={<MarketInfo6/>} />
              <Route path="store-detail/1" element ={<StoreDetailPage/>} /> 
              <Route path="store" element={<StoreDetailPage/>} />

              <Route path="market-map" element={<MarketMap />} />
              <Route path="bigmarket/1" element={<MarketList />} />
              <Route path="seller-register" element={<RegisterScreen />} />
              
              <Route path="seller-login" element={<LoginForm/>}
              />
            </Route>

            <Route path="/setup" element={<OnboardingNavigator />}>
              <Route path="/" element={<WelcomeScreen />} />
              <Route path="new" element={<NewWalletScreen />} />
              <Route path="existing" element={<ImportChoiceScreen />} />
              <Route path="import" element={<ImportWalletScreen />} />
              <Route path="ledger" element={<LedgerImportScreen />} />
              <Route path="set-pin" element={<SetPincodeScreen />} />
            </Route>

            <Route path="change-pin" element={<ChangePincodeScreen />} />

            {/* To faciliatate testing */}
            {/* <Route path="/dev/home" element={<HomeScreen />} />
            <Route path="/dev/modals" element={<ModalTestScreen />} />
            <Route path="/dev/tools" element={<DevTools />} /> */}

            <Route path="*" element={<NotFoundScreen />} />
          </Routes>
        </ModalProvider>
      </Router>
    </ErrorBoundary>
  )
}
