

document.addEventListener('DOMContentLoaded', (event) => {
  services = $('.services');
  page = document.getElementById('pagefrom__input');
  window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY +150;
  
    if (window.innerWidth > 700) {
      document.querySelectorAll('.section').forEach((el, i) => {
        if (el.offsetTop - document.querySelector('.list__nav').clientHeight <= scrollDistance) {
          document.querySelectorAll('.li__nav').forEach((el) => {
            if (el.classList.contains('active')) {
              el.classList.remove('active');
            }
          });
          document.querySelectorAll('span')[i].querySelector('.li__nav').classList.add('active');
        }
      });
    }
  });
  [].forEach.call(document.querySelectorAll('img[data-src]'), function(img) {
   img.setAttribute('src', img.getAttribute('data-src'));
    img.onload = function() { img.removeAttribute('data-src');
   }; 
  });
  function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('element-show');
      }
    });
  }
  let options = { threshold: [0] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.element-animation');
  for (let elm of elements) {
    observer.observe(elm);
  };
  function processInput(phone){
    var iti = window.intlTelInput(phone,{
      allowDropdown: false,
      initialCountry: 'RU',
      nationalMode: true,
      autoPlaceholder: 'aggressive',
      formatOnDisplay: true,
      separateDialCode: false,
      utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.15/js/utils.min.js'
    });
    phone.addEventListener('input', ()=> {
      phone.setCustomValidity('');
        if (!iti.isValidNumber()) phone.setCustomValidity('Проверьте введённые данные');
    });
  }

  var phones=document.querySelectorAll('input[name=user_phone]');
	for (var i = phones.length - 1; i >= 0; i--) {
		processInput(phones[i]);
	}


  $("#scroll-to-services").click(function() { 
    $('html, body').animate({
    scrollTop: $("#services").offset().top // класс объекта к которому приезжаем
    }, 0); // Скорость прокрутки
   });
  $('#1').on('click',function(){
    const onas = document.getElementById('onas');
    onas.scrollIntoView({block: "center", inline: "center"});
  });
  $('#2').on('click',function(){
    const onas = document.getElementById('garantii');
    onas.scrollIntoView({block: "center", inline: "center"});
  });
  $('#3').on('click',function(){
    const onas = document.getElementById('etapi');
    onas.scrollIntoView({block: "center", inline: "center"});
  });
  $('#4').on('click',function(){
    const onas = document.getElementById('mega');
    onas.scrollIntoView({block: "end", inline: "center"});
  });
  $('#5').on('click',function(){
    const onas = document.getElementById('otziv');
    onas.scrollIntoView({block: "center", inline: "center"});
  });
  
   

  $('#brg__img').on('click',function(){
    $('#brg__img').animate({opacity:0, right:'-150px'},300);
    $('#burger__wrap').css('display','block');
    $('#burger__wrap').animate({opacity:1, right:'0px'},300);
    
    $('#cross__img').animate({opacity:1, right:'0px'},300);
    $('#blackback').css('display','block');
    $('#blackback').animate({opacity:1},300);
    
  })
  $('#burger__wrap').on('click',function(event){
    if (event.target.id == 'burger__wrap'){
      $('#burger__wrap').animate({opacity:0, right:'1000px'},300);
    
      $('#brg__img').animate({opacity:1, right:'0px'},300);
      $('#cross__img').animate({opacity:0, right:'-150px'},300);
      $('#blackback').css('display','none');
      $('#blackback').animate({opacity:0},300);
      setTimeout(function(){
        $('#burger__wrap').css('display','none');
        },300)
    }
    
  })
  $('#cross__img').on('click',function(){
    $('#burger__wrap').animate({opacity:0, right:'1000px'},300);
    
    $('#brg__img').animate({opacity:1, right:'0px'},300);
    $('#cross__img').animate({opacity:0, right:'-150px'},300);
    $('#blackback').css('display','none');
    $('#blackback').animate({opacity:0},300);
    setTimeout(function(){
      $('#burger__wrap').css('display','none');
      },300)
  })
  for (el of $('button.button')){
    id = el.id;
    $(`#${id}`).on( "click", function(event) {
      event.preventDefault();
      if (event.currentTarget.id == 'lil'){
        $('.inputs').css('display','block');
        $('btn__submit').css('display','inline-block');
        document.getElementById('nameofmodal').textContent = 'Малый пакет'
        page.value = 'Малый пакет'
        
      }
      if (event.currentTarget.id == 'mid'){
        $('.inputs').css('display','block');
        $('.btn').css('display','inline-block');
        document.getElementById('nameofmodal').textContent = 'Средний пакет'
        page.value = 'Средний пакет'
      }
      if (event.currentTarget.id == 'large'){
        $('.inputs').css('display','block');
        $('.btn').css('display','inline-block');
        document.getElementById('nameofmodal').textContent = 'Большой пакет'
        page.value = 'Большой пакет'
      }
      if (event.currentTarget.id == 'insane'){
        $('.inputs').css('display','block');
        $('.btn').css('display','inline-block');
        document.getElementById('nameofmodal').textContent = 'Огромный пакет'
        page.value = 'Огромный пакет'
      }
      if (event.currentTarget.id == 'lilinfo'){
        document.getElementById('nameofmodal').textContent = 'Малый пакет'
        $('.inputs').css('display','none');
        $('.btn').css('display','none');
      }
      if (event.currentTarget.id == 'midinfo'){
        document.getElementById('nameofmodal').textContent = 'Средний пакет'
        $('.inputs').css('display','none');
        $('.btn').css('display','none');
      }
      if (event.currentTarget.id == 'largeinfo'){
        document.getElementById('nameofmodal').textContent = 'Большой пакет'
        $('.inputs').css('display','none');
        $('.btn').css('display','none');
      }
      if (event.currentTarget.id == 'insaneinfo'){
        document.getElementById('nameofmodal').textContent = 'Огромный пакет'
        $('.inputs').css('display','none');
        $('.btn').css('display','none');
      }
      $(`.modalwindoworder`).css('display', 'flex');
      setTimeout(function(){
        $(`.modalwindoworder`).css('opacity', '1');
      },50);
    } );
    $(`.modalwindoworder`).on( "click", function(event) {
      if ($(event.target).attr('class')==='modalwindoworder' | $(event.target).attr('class')==='window__close'){
        document.getElementById('text_name').value = '';
        document.getElementById('text_phone').value = '';
        document.getElementById('text_email').value = '';
        $(`.modalwindoworder`).css('opacity', '0');
        setTimeout(function(){
        $(`.modalwindoworder`).css('display', 'none');
        },300);
      }
    })
  }
})