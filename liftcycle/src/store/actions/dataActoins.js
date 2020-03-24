export function fetchData() {
    return (dispatch,getState) => {
        return fetch('https://www.fastmock.site/mock/90803af96e6379807adf1b0b4f078c6b/demo1/getList')
                .then(res => res.json())
                .then(json => {
                    dispatch({
                        type:'ADD'
                    })
                    return json
                })
    }
}