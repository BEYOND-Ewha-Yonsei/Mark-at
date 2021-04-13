import { logger } from 'ethers';
import { resetLogin } from 'src/features/login/loginSlice';
import { createMonitoredSaga } from 'src/utils/saga';
import { put } from 'typed-redux-saga';
// export interface userParams {
//   id: string
// }
function* userReset() {
  yield* put(resetLogin())
  console.log('user reset')
  logger.info('reset')
}
export const {
  name: resetSagaName,
  wrappedSaga: resetSaga,
  reducer: resetReducer,
  actions: resetActions,
} = createMonitoredSaga(userReset, 'userReset')


