var eKey = document.querySelector('.detail .key p:nth-child(2)');
var eLocation = document.querySelector('.detail .location p:nth-child(2)');
var eWhich = document.querySelector('.detail .which p:nth-child(2)');
var eCode = document.querySelector('.detail .code p:nth-child(2)');

var al = document.querySelector('.alert');
var result = document.querySelector('.result');
var box = document.querySelector('.box');
document.addEventListener('keydown', function(event){
    let keyName = event.keyCode === 32 ? 'Space' : event.key

    eKey.innerText = keyName; 
    eLocation.innerText = event.location ; 
    eWhich.innerText = event.which ; 
    eCode.innerText = event.code ; 
    result.innerText = event.which; 
    
    al.classList.add('hide');
    box.classList.remove('hide');
})