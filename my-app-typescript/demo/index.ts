// function Hello<T>(arg:T):T{
//     return arg
// }

// function Hello<T>(arg:T[]):T[]{
//     return arg
// }
// const res:Array<string> = Hello<string>(['kaka'])
// console.log(res)

//lmada表达式
const func: (a: number) => string = function (a: number): string {
    return a.toString()
}

console.log(func(10))
//泛型类型

// interface Hello {
//     <T>(arg:T):T
// }

interface Hello<T> {
    (arg:T):T
}

function Hello2<T>(arg: T): T {
    return arg
}
//
// var myHello: <K>(arg: K) => K = Hello
// var myHello: { <K>(arg: K): K } = Hello2;
var myHello:Hello<string> = Hello2;

console.log((myHello('kaka')))



//泛型类
class Sum<T>{
    num:T;
    add:(x:T,y:T) => T
}


var sum = new Sum<string>();

sum.num = 'kaka';

sum.add = function(x,y){
    return x + y
}