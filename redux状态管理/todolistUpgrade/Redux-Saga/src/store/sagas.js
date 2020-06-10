import { call,takeEvery,put,all,select,take } from 'redux-saga/effects'
import axios from 'axios'
import { initState,addCountChange } from './actionsCreate'
import { GET_INIT_LIST,ADD_COUNT,MINUS_COUNT } from './actionsTypes'

//定义一个生成器函数，当监听到GET_INIT_LIST事件时，立即执行getiInitList函数
function* todoSaga(){
  yield takeEvery(GET_INIT_LIST,getInitList)
}

function* getInitList(){
  try {
    const res = yield axios.get('https://www.fastmock.site/mock/90803af96e6379807adf1b0b4f078c6b/demo1/api/todolist')
    const action = initState(res.data.toDoList);
    //调用put 替代store.dispatch
    yield put(action)
  } catch (error) {
    console.log("接口请求失败，请检查 todolist 接口。");
  }
}

//计算器
function* changeCount(){
  yield takeEvery(ADD_COUNT,addAction)
  yield takeEvery(ADD_COUNT,addAction)
}

function* addAction(){
  const action = addCountChange(10);
  yield put(action)
}


function* watchAndLog(){
  while(true){
    const state = yield select();
    const action = yield take('*');
    console.log('action',action);
    console.log('state',state);
  }
  // yield takeEvery('*',function*(action){
  //   const state = yield select();
  //   console.log('action',action);
  //   console.log('state',state);
  // })
}

// export default todoSaga
export default function* rootSaga(){
  yield all([
    changeCount(),
    todoSaga(),
    watchAndLog()
  ])
}