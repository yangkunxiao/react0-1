import { takeEvery,takeLatest,call, put } from 'redux-saga/effects';
import axios from 'axios'

function* mySaga() {
    yield takeLatest('getList', getList,1)
}

function fetchList(){
    return axios.post('https://www.fastmock.site/mock/90803af96e6379807adf1b0b4f078c6b/demo1/getList')
}

function* getList(action) {
    console.log(action,'init-1');
    const res = yield call(fetchList) ;
    yield put({
        type: 'init',
        value: res.data.list
    })
    // axios.post('https://www.fastmock.site/mock/90803af96e6379807adf1b0b4f078c6b/demo1/getList').then(res => {
    //     console.log(res, 'list');
    //     put({
    //         type:'init',
    //         value:res.data.list
    //     })
    // }, err => {
    //     console.log(err, 'err')
    // })
}

export default mySaga;