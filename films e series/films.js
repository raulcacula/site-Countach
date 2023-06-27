
var back = document.querySelector('.inicio-img')
window.addEventListener('scroll',function(){
    var value = 1 + window.scrollY/-600
    back.style.opacity = value
})



const box = document.querySelector('#container')
const imgs = document.querySelectorAll('#container img')
let cont = 0

function slider(){
    cont++


    if(cont > imgs.length - 1){
        cont = 0
    }
    box.style.transform = `translateX(${-cont * 1250 }px)`
}
setInterval(slider ,2000)


const box2 = document.querySelector('div.container')
const imgs2 = document.querySelectorAll('div.container img')
let cont2 = 0

function slider2(){
    cont2++


    if(cont2 > imgs2.length - 1){
        cont2 = 0
    }
    box2.style.transform = `translateX(${-cont2 * 500 }px)`
}
setInterval(slider2 ,2000)
