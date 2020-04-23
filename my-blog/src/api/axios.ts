import axios from 'axios'

export const baseURI = '/sunrise-gateway'
export const httpHeaderConfig = {
	headers: { 'Content-Type': 'application/json;charset=UTF-8;' },
}
export const basePath = '/customer'
axios.defaults.timeout = 500000

type Params = {
    url:string,
	body:object,
	callack:(params:any) => void,
	pageIndex?:number,
	pageSize?:number,
	otherCallback?:() => void,
}


export const fetchData = (params:Params) => {
    let body = params.body;
    for (let key in body) {
        //搜索条件去掉空格
		if (typeof body[key] == 'string') {
			body[key] = body[key].trim()
			if (body[key] == '') {
				body[key] = null
			}
		}
    }
    let dataString = JSON.stringify(body);
    let data = {
		body: dataString,
		ctrlData: {
			pageIndex: params.pageIndex || 1,
			pageSize: params.pageSize || 10000
		}
	}
    return axios.post(`${baseURI}` + params.url, data, httpHeaderConfig)
        .then(response => {
            return params.callack(response)
        })
        .catch(err => {
            console.log(err)
        })
}