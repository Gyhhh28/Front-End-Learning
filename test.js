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

gong.email = 'nidie@gmail.com'//add attribute
console.log(gong)

const todos = [
    {
        id : 1,
        text: 'throw myself',
        isCompleted: true
    },//记得数组元素之间加逗号
    {
        id : 2,
        text: 'kill my boss',
        isCompleted: true
    },
    {
        id : 3,
        text: 'go to hell',
        isCompleted: false
    }
    
]

console.log(todos[1].text)

//转换成JSON格式
const todoJSON = JSON.stringify(todos);
console.log(todoJSON)

//for loop
for(let i =0; i<10; i++){
    console.log(`for loop number:${i}`)
}

//while
let i = 0;
while(i<0){
    console.log(`while loop number:${i}`)
    i++;
}

//遍历 Array
for(let todo of todos){
    console.log(todo)
}

//iteration with array:
//forEach,map,filter
todos.forEach(function(todo) {
    console.log(todo.text);
})

const todoId = todos.map(function(todo) {
    return todo.id;
})

console.log(todoId)

//filter不是很懂

//condition
const o = 10

if(o === 10) {
    console.log('o is 10')
} else if(o>10) {
    console.log('x>10')
} else {
    console.log('o is not 10')
}// 三个等于就要判断数据类型了

const qw = 2;
const po = 3

if(qw > 1 || po > 2) {
    console.log('youknowyouareright')
}//  ||isor  &&isand
 
const x2 = 5

const color = x2 >10 ? 'red' :'blue'
console.log(color)
//三元操作符 ？：

//another condition 
switch(color) {
    case 'red':
        console.log('is red')
        break
    case'blue':
        console.log('is blue')
        break
    default:
        console.log('none of them')
        break
}


//function
function addNums(n1 = 1, n2 = 2) {
    console.log(n1 +n2)
}
addNums()
addNums(5,4)

//=> is return
const add = (n3, n4) => n3+ n4
console.log(add(6,8))

const add2 = n5 =>n5+9
console.log(add2(55))

//constructor function
function Person(firstName, job) {
    this.firstName = firstName;
    this.job =job
}
const person1 = new Person('peter','streetgirl')
const person2 = new Person('josh','drgudealer')

console.log(person1,person2)