window.scroll({
    top: 0,
    behavior: 'smooth',
})
function btn(){
    var btn = document.querySelector('#button')
    var txt = document.querySelector('#srch')
    if(txt.value.length == 0 || txt.value > btn){
        window.alert('Nada encontrado')
    }else{
        window.alert('Essa função ainda não existe :(')
    }
}



/*
function  btn(){
    var bloco = document.getElementById('search-box')
    if(bloco = window.alert('Essa função ainda não existe :(')){

    }
}*/


var  one = document.getElementById('parte-one')
var thue = document.getElementById('parte-thue')
function setaLeft(){
    if(thue.style.display = 'block'){
        one.style.display = 'none'
    }else{
        one.style.display = 'block'
    }
}

var  passar = ["parte-one","parte-thue"]
var photo = document.getElementById("foto")
var   i = 0
/*
function slideShow(){
   one.src = passar[i]
   if(i < passar.length -1 ){
    i++
   }else{
    i = 0
   }
   setTimeout(slideShow,2000)
}
slideShow()*/

var img1 = "iphone copy.png"
var img2 = "carrinho.png"
var img3 = "champ.png"
var cont = 1
 function seta(){
    document.getElementById("figura").src = img1;
    var aux = img1;
     img1 = img2
     img2 = img3
    img3 = aux
 }

let one2 = document.getElementById('parte-one')
window.addEventListener('scroll', function(){
    let value = 1 + window.scrollY/-600
    one2.style.opacity = value 
})


var imgs = ["/IMG/desconto.png","/IMG/frete.png","films.png"]
var ima = document.getElementById('imagens')
var i = 0

function slideShow(){
    ima.src = imgs[i]
    if(i < imgs.length - 1 ){
        i++
    }else{
        i = 0
        
    }
    setTimeout(slideShow,2000)
}
slideShow()


function  listclick(){
    var list = document.getElementById('lista')
    var seta = document.querySelector('lista-titulo.fa-solid fa-magnifying-glass')
    if(list.style.display == 'block'){
        list.style.display = 'none'
     
    }else{
        list.style.display = 'block'
    }
}

// NAV BAR //
function menuShow(){
    var search = document.getElementById('search-box')
    var bar = document.querySelector('.bars')
    var  buy = document.getElementById('compras')
    var film = document.querySelector('.films')
    if(search.style.display == 'block' && buy.style.display == 'block'  && film.style.display == 'block'){ 
        search.style.display = 'none'
        buy.style.display = 'none'
        film.style.display = 'none'
   bar.innerHTML = '  <i class="fa-solid fa-bars"></i>'
   one.style.display = 'block'
    }else{
        search.style.display = 'block'
        buy.style.display = 'block'
        bar.innerHTML = '<i class="fa-solid fa-xmark"></i>' 
         one.style.display = 'none'
         one.style.background = 'black'
         film.style.display = 'block'
    }
}