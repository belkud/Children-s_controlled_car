import './style.css'







const forest = document.querySelector ('#forest') as HTMLPictureElement
// forest.style.width = 500+'px'

//! 3 стадии загрузки HTML страницы
// 1
// document.addEventListener('DOMContentLoaded', ready)
// function ready(){
//   console.log('DOMContentLoaded');
// }

// 2
// window.onload = ()=> {
//  console.log('страница загружена');
// }
// 3
// window.onunload = ()=> {
//   console.log('вы покидаете страницу');
// }




const button = document.querySelector('#button') as HTMLButtonElement
button.innerHTML = document.readyState;

// readyState - степень загрузки элемента

// loading - в процессе загрузки
// interactive - полностью прочитан
// complete - полностью прочитан и все ресурсы загружены

  

  // console.log(document.readyState);
  
  // document.addEventListener('readystatechange', ()=>{
  //   console.log(document.readyState);
  // })
  
  
  
  //! конструтор
  function User100500 (name:string, age:number)  {
    this.name =name
    this.age = age
    this.job = 'worker'
    //  this.sayHi = alert('hello')
  }
 

  
  const Vasia = new User100500 ('Vasia', 25)
  console.log(Vasia);

  Vasia.color = 'red'
  console.log(Vasia);
  
  Vasia.age =29
  console.log(Vasia);
  
  //  delete Vasia.age
  // console.log(Vasia);

 
 
  const users = document.querySelector('#users') as HTMLButtonElement
  users.innerHTML = (Vasia.name + '<br>')
  users.innerHTML += Vasia.age

  
  //! Метод document.write – один из наиболее древних  и ненужных методов (работает пока страничка грузится)


let promise1 = new Promise((resolve, reject)=> {
 resolve('Успешно! ');  
});

promise1.then((value)=>{
  console.log(value);
})

let promise2 = new Promise((resolve, reject)=> {
 reject('Произошла ошибка! ');  
});

promise2.catch((value)=>{
  console.log(value);
})

function loadScript(src) {
  let script = document.createElement('script');
  script.src = src;
  document.head.append(script);
}
console.log(document);






let true1 =new Promise((resolve,reject)=> {
  resolve ('truetrue')
})
true1.then((value)=>{
  console.log(value)
})



let false1 = new Promise((resolve, reject)=>{
  reject('falsefalse')
})
false1.catch((event)=> 
console.log(event)
)

 


function Device (brand:string, year:number) {
  this.brand = brand
  this.year = year
  this.color = 'white'
  this.country = 'China'
}

let notebook = new Device ('Amoudo', 2017)
console.log(notebook);

let telephone = new Device ('Realme', 2019)
console.log(telephone);



