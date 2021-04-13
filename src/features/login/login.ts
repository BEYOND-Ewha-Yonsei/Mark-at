import { logger } from 'ethers';
import { setisLoggedIn, setUserId } from 'src/features/login/loginSlice';
import { createMonitoredSaga } from 'src/utils/saga';
import { put } from 'typed-redux-saga';
// export interface userParams {
//   id: string
// }
function* loginSuccess(params: string) {
  yield* put(setisLoggedIn(true))
  yield* put(setUserId({userId: params}));
  console.log(params)
  logger.info('userstate set')
}
export const {
  name: userSagaName,
  wrappedSaga: userSaga,
  reducer: userReducer,
  actions: userActions,
} = createMonitoredSaga<string>(loginSuccess, 'loginSuccess')


