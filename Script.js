const hamburger =document.querySelector('.hamburger');
const navigation =document.querySelector('.navigation');

hamburger.addEventListener('click',function(){
    
    this.classList.toggle('is-active');
    navigation.classList.toggle('active');


})
