// 兼容EcmaScript6

//boolean, Object, null, undefined

var foo: number = 123
foo = 321
let thelist: Array<string>

interface person {
    name: string,
    age: number,
}

let me: person = {
    name: "zili",
    age: 20
}

let introduction: string = `My name is ${me.name}, ${me.age} years old now.`

let yuanzu: Array<[string, number]> = [["a", 1], ["b", 2]]
let array: number[] = [1, 2 ,3]

//尽量少用
let num: any = 10
num = "20"
let ret: string = (num as string).substr(1)

function add(x: number, y: number): number {
    return x+y
}

var ret1: number = add(2, 3)

//void only use as the type of a function
function fnHello(): void {
    console.log(`hello`)
}