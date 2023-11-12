import './style.css'







const forest = document.querySelector ('#forest') as HTMLPictureElement
// forest.style.width = 500+'px'


window.onload = ()=> {
 console.log('страница загружена');
}
document.addEventListener('DOMContentLoaded', ready)
function ready(event){
  console.log(`ширина ${forest.style.width} px`);
  console.log('DOMContentLoaded');
}

window.onunload = ()=> {
 console.log('вы покидаете страницу');
}

const button = document.querySelector('#button') as HTMLButtonElement
// button.addEventListener
button.innerHTML = document.readyState;

// диалоговое окно - внесенные изменения могут не сохраниться
 
// window.onbeforeunload = function() {
//   return false;
// };


if (document.readyState == 'interactive') {
  // ещё загружается, ждём события
  document.addEventListener('DOMContentLoaded', ()=> {
    console.log('ждём события');
  });
} else {
    console.log('DOM готов!');
}


// loading - в процессе загрузки
// interactive - полностью прочитан
// complete - полностью прочитан и все ресурсы загружены
 