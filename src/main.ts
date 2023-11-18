import './style.css'



//!  Автомобиль
const changeColor = document.querySelector('.changeColor')


const carBox = document.querySelector('#carBox') as HTMLImageElement
const carShadow = document.querySelector('.carShadow') as HTMLImageElement

const car = document.querySelector('#car') as HTMLImageElement
const carWithLamp = document.querySelector('#carWithLamp') as HTMLImageElement
const carWithLamp2 = document.querySelector('#carWithLamp2') as HTMLButtonElement
const switchLamps = document.querySelector('#switchLamps') as HTMLButtonElement
const switchLamps2 = document.querySelector('#switchLamps2') as HTMLButtonElement

switchLamps.addEventListener('click', ()=>{
  if (carWithLamp.style.opacity == '1'){
    switchLamps.innerHTML = 'Включить фары'
    carWithLamp.style.opacity = '0'
  } else {
    carWithLamp.style.opacity = '1'
    switchLamps.innerHTML = 'Выключить фары'

  }
})





switchLamps2.addEventListener('click', ()=> {
  carWithLamp2.style.display = 'block'
  if(switchLamps2.innerHTML == 'Включить аварийку') {
    switchLamps2.innerHTML = 'Выключить аварийку'
  
    setInterval (() => {
      setTimeout(() => {
        carWithLamp2.style.opacity = '0'
      }, 0);
      setTimeout(() => {
        carWithLamp2.style.opacity = '1'
      }, 500);
    },1000);
    
  } else {
    switchLamps2.innerHTML = 'Включить аварийку'
    carWithLamp2.style.display = 'none'
  }

})


//!!!!!!! УДАЛИТЬ НОЛЬ

let deg = 0
const svgfile = document.querySelector ('#svgfile')   as HTMLOrSVGImageElement
svgfile.addEventListener ('click', ()=> {
  
  moveX = moveX + 20
  car.style.marginLeft = moveX + 'px'
  carWithLamp.style.marginLeft = moveX + 'px'
  carWithLamp2.style.marginLeft = moveX + 'px'
  car.classList.add('car1')
  car.classList.add('car1')
  car.classList.remove('car2')
  car.classList.remove('car3')
  car.classList.remove('car4')
  deg=90
  car.style.rotate = deg + 'deg'
  carWithLamp.style.rotate = deg + 'deg'
  carWithLamp2.style.rotate = deg + 'deg'

})

 
 
 let moveX = 0
 let moveY = 0


document.addEventListener ( 'keydown' , (event)=> {
  console.log(123);
  console.log(event.code);
  
  if (event.key == 'ArrowRight' || event.code == 'KeyD' ) {
    
    
    moveX = moveX + 15
    car.style.marginLeft = moveX + 'px'
    carWithLamp.style.marginLeft = moveX + 'px'
    carWithLamp2.style.marginLeft = moveX + 'px'
    car.classList.add('car1')
    car.classList.add('car1')
    car.classList.remove('car2')
    car.classList.remove('car3')
    car.classList.remove('car4')
    rotateRight()


    
  } if (event.key == 'ArrowLeft'){
    moveX = moveX - 10
    car.style.marginLeft = moveX + 'px'
    carWithLamp.style.marginLeft = moveX + 'px'
    carWithLamp2.style.marginLeft = moveX + 'px'
    car.classList.add('car2')
    car.classList.remove('car1')
    car.classList.remove('car3')
    car.classList.remove('car4')
    rotateLeft ()
  } if (event.key == 'ArrowUp') {
    moveY = moveY - 10
    car.style.marginTop = moveY + 'px'
    carWithLamp.style.marginTop = moveY + 'px'
    carWithLamp2.style.marginTop = moveY + 'px'
    car.classList.add('car3')
    car.classList.remove('car1')
    car.classList.remove('car2')
    car.classList.remove('car4')
    rotateUp ()
  } if (event.key == 'ArrowDown') {
    moveY = moveY + 10
    car.style.marginTop = moveY + 'px'
    carWithLamp.style.marginTop = moveY + 'px'
    carWithLamp2.style.marginTop = moveY + 'px'
    car.classList.add('car4')
    car.classList.remove('car1')
    car.classList.remove('car2')
    car.classList.remove('car3')
    rotateDown ()
  }
})

// let deg = 0

function rotateRight () {
  deg=90
  car.style.rotate = deg + 'deg'
  carWithLamp.style.rotate = deg + 'deg'
  carWithLamp2.style.rotate = deg + 'deg'
}
function rotateLeft () {
  deg =270 
  if (deg==0) {
    return deg = -90
  }
  car.style.rotate = deg + 'deg'
  carWithLamp.style.rotate = deg + 'deg'
  carWithLamp2.style.rotate = deg + 'deg'

}
function rotateDown () {
  deg=180
  car.style.rotate = deg + 'deg'
  carWithLamp.style.rotate = deg + 'deg'
  carWithLamp2.style.rotate = deg + 'deg'
  }
function rotateUp () {
  deg=0
  car.style.rotate = deg + 'deg'
  carWithLamp.style.rotate = deg + 'deg'
  carWithLamp2.style.rotate = deg + 'deg'
}




const list_item = document.querySelectorAll('.list-item>button') 

  for (let i=0; i<list_item.length; i++)(
  list_item[i].addEventListener ('click', ()=> {
    // list_item.classList.toggle('changeColor')
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