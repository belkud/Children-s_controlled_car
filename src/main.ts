import './style.css'





//  if (confirm ('покрасить background?')) {


//   // location.href= 'https://dzen.ru/?clid=2233626&yredirect=true'
//  }

// console.log(location);



const sun = document.querySelector ('#sun') as HTMLDivElement
const moon = document.querySelector ('#moon') as HTMLDivElement
const cloud = document.querySelector ('#cloud') as HTMLDivElement
const theme = document.querySelector ('#theme') as HTMLDivElement




let moveX = 0
let moveY = 0

//! Изменение дневной\ночной темы
sun.addEventListener ('click', ()=>{
  document.body.style.transition = .5 +'s'
  document.body.style.background = 'black'
  theme.style.color = 'aliceblue'
  carWithLamp.style.opacity = '1'
  carWithLamp3.style.opacity = '.6'
  // car.style.opacity = '0'
  car.style.opacity = '1'
  car.style.filter = 'none'
  
  sun.style.transition = .5 + 's'
  moon.style.transition = .5 + 's'
  moon.style.display = 'block'
  
  sun.style.transform = `translate(0px, 120px)`
  moon.style.transform = `translate(0px, 60px)`
  cloud.style.filter = `brightness(.6)`
  // filter: brightness(.8)
  // drop-shadow(10px 10px 5px rgb(218, 233, 246, .4));
  
})


moon.addEventListener ('click', ()=>{
  document.body.style.transition = .5 +'s'
  document.body.style.background = 'lightgray'
  theme.style.color = 'black'
  carWithLamp.style.opacity = '0'
  carWithLamp3.style.opacity = '0'
  car.style.filter = ''
  
  
  sun.style.opacity = '1'
  sun.style.transform = `translate(0px, 60px)`
  moon.style.transform = `translate(0px, 120px)`
  cloud.style.filter = `brightness(1)`

  moon.style.transition = .5 + 's'
  sun.style.transition = .5 + 's'
  sun.style.display = 'block'
})



//!  Автомобиль

//!  Проекции машинок
const carBox = document.querySelector('#carBox') as HTMLImageElement
const car = document.querySelector('#car') as HTMLImageElement
const carWithLamp = document.querySelector('#carWithLamp') as HTMLImageElement
const carWithLamp2 = document.querySelector('#carWithLamp2') as HTMLButtonElement
const carWithLamp3 = document.querySelector('#carWithLamp3') as HTMLButtonElement
const car_container = document.querySelector('#car_container') as HTMLDivElement


// carBox.fillRect(rectX, rectY, rectW, rectH);
// var c=document.getElementById("myCanvas");
//! Кнопки
const switchLamps = document.querySelector('#switchLamps') as HTMLButtonElement
const switchLamps2 = document.querySelector('#switchLamps2') as HTMLButtonElement
const signal = document.querySelector('#signal') as HTMLButtonElement



//! Посигналить
const carSignal = new Audio()
carSignal.src =  'Autosignal.mp3'
signal.addEventListener ('click', ()=> {
  carSignal.play()
} )



//! Включить фары
switchLamps.addEventListener('click', ()=>{
  if (carWithLamp.style.opacity == '1'){
    switchLamps.innerHTML = 'Включить фары'
    carWithLamp.style.opacity = '0'
  } else {
    carWithLamp.style.opacity = '1'
    switchLamps.innerHTML = 'Выключить фары'
  }
})



//! Включить аварийку
switchLamps2.addEventListener('click', ()=> {
  carWithLamp2.style.display = 'block'
  // var inter = 0;
  if(switchLamps2.innerHTML == 'Включить аварийку') {
    switchLamps2.innerHTML = 'Выключить аварийку'
    var inter = setInterval (() => {
      setTimeout(() => {
        carWithLamp2.style.opacity = '0'
      }, 0);
      setTimeout(() => {
        carWithLamp2.style.opacity = '1'
      }, 500);
    },1000);
    console.log((inter));
  } else {
    // clearTimeout(inter);
    // console.log((inter));

    switchLamps2.innerHTML = 'Включить аварийку'
    carWithLamp2.style.display = 'none'
    
  }
})

 
  



//! Управление машинкой

  document.addEventListener ( 'keydown' , (event)=> {
  console.log(event.code);
  if (event.key == 'ArrowRight' || event.code == 'KeyD' ) {
    moveX = moveX + 15
    moveY = moveY + 0
    car_container.style.transform =  `translate(${moveX}px,${moveY}px)`
    car_container.style.transition = .5 + 's'
    carBox.style.transition = .5 + 's'
    car.classList.add('car1')
    car.classList.remove('car2')
    car.classList.remove('car3')
    car.classList.remove('car4')
    rotateRight()

  } if (event.key == 'ArrowLeft'|| event.code == 'KeyA'){
    moveX = moveX - 15
    moveY = moveY + 0
    car_container.style.transform =  `translate(${moveX}px,${moveY}px)`
    car_container.style.transition = .5 + 's'
    carBox.style.transition = .5 + 's'
    car.classList.add('car2')
    car.classList.remove('car1')
    car.classList.remove('car3')
    car.classList.remove('car4')
    rotateLeft ()
    // rotateLeft2 ()

  } if (event.key == 'ArrowUp'|| event.code == 'KeyW') {
    moveY = moveY - 15
    moveX = moveX + 0
    car_container.style.transform =  `translate(${moveX}px,${moveY}px)`
    car_container.style.transition = .5 + 's'
    carBox.style.transition = .5 + 's'
    car.classList.add('car3')
    car.classList.remove('car1')
    car.classList.remove('car2')
    car.classList.remove('car4')
    rotateUp ()

  } if (event.key == 'ArrowDown'|| event.code == 'KeyS') {
    moveY = moveY + 15
    moveX = moveX + 0
    car_container.style.transform =  `translate(${moveX}px,${moveY}px)`
    car_container.style.transition = .5 + 's'
    carBox.style.transition = .5 + 's'
    car.classList.add('car4')
    car.classList.remove('car1')
    car.classList.remove('car2')
    car.classList.remove('car3')
    rotateDown ()
  }
})

console.log(carBox);

 
 
//! Координаты машинки
const page1 = document.querySelector('.page1') as HTMLDivElement

// page1.addEventListener('keydown', function (e) {
//   let x = e.pageX - this.clientLeft - this.offsetLeft - 30
//   let y = e.pageY - this.clientTop - this.offsetTop - 30
//   if (x < 0) {
//      x = 0
//   }
//   if (x > document.clientWidth - 50) {
//      x = document.clientWidth - car_container.width
//   }
//   if (y < 0) {
//      y = 0
//   }
//   if (y > document.clientHeight - 50) {
//      y = document.clientHeight - car_container.height
//   }

//   car_container.style.left = x + 'px'
//   car_container.style.top = y + 'px'
// })

//! повороты машинки
  
let deg = 0
function rotateRight () { 
  deg+=90
  if (deg>=91|| deg<=360 ) {
    deg=90
  } 
  carBox.style.rotate = deg + 'deg'
}

function rotateDown () {
  deg+=90
  if (deg>=181||deg<=90) {
    deg=180
  } 
  carBox.style.rotate = deg + 'deg'
  }

function rotateLeft () {
  if (deg==0) {deg-=90}
  else {deg=270}
  carBox.style.rotate = deg + 'deg'  
  if (deg==-90) deg=270
}

// function rotateLeft2 () {
//   deg+=90 
//   if (deg==270){
//     deg=360
//   }
// }

function rotateUp () {
  deg+=90
  if (deg >=0|| deg<=90) {
    deg=0
  }
  

  if (deg == 360) deg = 0
 
  carBox.style.rotate = deg + 'deg'
}

 


//! Управление со смартфона
const bt_1 =document.querySelector('#bt_1') as HTMLButtonElement
const bt_2 =document.querySelector('#bt_2') as HTMLButtonElement
const bt_3 =document.querySelector('#bt_3') as HTMLButtonElement
const bt_4 =document.querySelector('#bt_4') as HTMLButtonElement
const svgfile =document.querySelector('#svgfile') as HTMLOrSVGImageElement




bt_1.addEventListener ('click',()=> {
  moveX -= 15
  moveY = moveY + 0
  car_container.style.transform =  `translate(${moveX}px,${moveY}px)`
  car_container.style.transition = .5 + 's'
  carBox.style.transition = .5 + 's'
  rotateLeft()
}) 

bt_2.addEventListener ('click',()=> {
  moveX = moveX + 15
  moveY = moveY + 0
  car_container.style.transform =  `translate(${moveX}px,${moveY}px)`
  car_container.style.transition = .5 + 's'
  carBox.style.transition = .5 + 's'
  rotateRight () 
}) 

bt_3.addEventListener ('click',()=> {
  moveX = moveX +0
  moveY = moveY - 15
  car_container.style.transform =  `translate(${moveX}px,${moveY}px)`
  car_container.style.transition = .5 + 's'
  carBox.style.transition = .5 + 's'
  rotateUp()
}) 

bt_4.addEventListener ('click',()=> {
  moveY = moveY + 15
  moveX = moveX +0
  car_container.style.transform =  `translate(${moveX}px,${moveY}px)`
  car_container.style.transition = .5 + 's'
  carBox.style.transition = .5 + 's'
  rotateDown()
}) 





const list_item = document.querySelectorAll('.list-item>button') 
let seconds = 0
  for (let i=0; i<list_item.length; i++)(
  list_item[i].addEventListener ('click', ()=> {
     
 setInterval(() => {
   seconds++
   list_item[4].innerHTML = `${seconds}` 
 }, 1000);
 
 
    console.log(`${i+1}`);
    
}))

list_item.forEach(list_item=>
  list_item.addEventListener ('click', (event)=> {
    list_item.classList.toggle('changeColor')
    console.log(event.target.dataset.set);
    
}))





const forest = document.querySelector ('#forest') as HTMLPictureElement
// forest.style.width = 500+'px'

//! 3 этапа загрузки HTML страницы
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
// button.innerHTML = document.readyState;

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

 
  let summ = 1
 
  const users = document.querySelector('#users') as HTMLButtonElement
  // users.innerHTML = (Vasia.name + '<br>')
  // users.innerHTML += Vasia.age
  
  users.addEventListener('click', ()=> {
    setInterval(()=>{
      summ++
      users.innerHTML = `Счетчик времени: ${summ}`
    },1)
  })


  // const nums = document.querySelector('#num') as HTMLButtonElement
 




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










function Person (name:string, age:number, city:string) {
  this.name = name
  this.age = age
  this.city = city
  this.country = 'Russia'
  this.job = 'programmist'
}

let user1 = new Person('Sveta', 27, 'Sochi')
console.log(user1);






const data_output = document.querySelector('#data_output ') as HTMLDivElement




//! promise
const prom1 = new Promise((resolve,reject)=>{
    resolve ('Проверка пройдена')
})

prom1.then((value)=>{
    console.log(value)
})

const prom2 = new Promise((resolve,reject)=> {
  reject ('Проверка не пройдена')
})

prom2.catch((value)=>{
  console.log(value)
})

data_output.addEventListener ('click', ()=>{
    if (data_output.style.backgroundColor == 'red'){
      data_output.style.backgroundColor = 'green'
      prom1.then((value)=>{
       data_output.innerHTML = (value)
     })
    } else {
      data_output.style.backgroundColor = 'red'
      prom2.catch((value)=>{
       data_output.innerHTML = (value)
     })
    }
})


// digital.addEventListener ('click', (e)=>{
//   if (e.target.style.backgroundColor == 'lightgray')  {
//      e.target.style.backgroundColor = 'red'
//      e.target.style.color = 'lightgrey'
     
//   } else{
//      e.target.style.backgroundColor = 'lightgray'
//      e.target.style.color = 'red'
//   }
// }));