let todos = [
    {
        id:1,
        name:"kaka",
        done:true
    },
    {
        id:2,
        name:"kaka2",
        done:false
    },
    {
        id:3,
        name:"kaka3",
        done:true
    }
]
type Url = '/api/todos' | '/api/toggle' | '/api/add';

const axios = <T>(url:Url,payload?:any):Promise<T> | never => {
    let data;
    switch(url){
        case '/api/todos':{
            data = todos.slice();
            break
        }
        case '/api/toggle':{
            const todo = todos.filter(todo => todo.id == payload)[0];
            if(todo){
                todo.done = !todo.done;
            }
            break
        }
        case '/api/add':{
            todos.push(payload)
            break
        }
        default :{
            throw new Error('Unknown api')
        }
    }
    return Promise.resolve(data as any)
}

export default axios;