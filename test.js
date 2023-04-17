console.log('hi') 
console.error('here is an error')

/*声明方式 let,const
let可重新赋值变量 const表示该变量不可变 否则报错*/  //多行注释
let age = 30
age = 31;

console.log(age)

// data types
const name1 = 'anwen'
const age2 = 30
const rating = 4.5
const x = null

console.log(typeof name1)

//模板字符串
const hello = `my name is ${name1} and i am ${age}` //是反引号
console.log(hello);

const s1 = 'i am your dad'
const s2 = 'DADDY'
console.log(s1.length)
console.log(s1.toUpperCase())//大小写 
console.log(s2.toLowerCase())
console.log(s1.substring(0,3))//截取part
console.log(s2.split(''))

//Array
const number = new Array(1,2,8);
console.log(number)

const fruits = ['apple','banana']
fruits[2] = 'pear'//知道长度的情况下可以用
fruits.push('mango')//不知道的情况下在尾部加
fruits.unshift('watermelon')//头部
console.log(fruits)
fruits.pop()
console.log(fruits)
console.log(fruits[1])//访问
console.log(fruits.indexOf('watermelon'))

//object
const gong = {
    mz: 'gyh',
    sex: 'girl',
    hobbies: ['eat','sleep'],
    address:{
        state: 'ZHINa',//记得加这里的逗号
        city: 'SZ'
    }
}

console.log(gong.mz,gong.address)//'dictname'.keyname（容易忘记写dn）
console.log(gong.hobbies[0]) //访问内嵌数组
console.log(gong.address.city)