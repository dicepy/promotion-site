let scrolls = {
  '1':{
    'place': 'otzivi',
    'type': 'center'
  },
  '2':{
    'place': 'uslugi',
    'type': 'center'
  },
  '3':{
    'place': 'footer',
    'type': 'center'
  },
  'uslugi__btn':{
    'place': 'meet',
    'type': 'center'
  },
  'gosecond':{
    'place': 'meet',
    'type': 'center'
  },
  'gofirst':{
    'place': 'meet',
    'type': 'center'
  },
  'mob1':{
    'place': 'otzivi',
    'type': 'center'
  },
  'mob2':{
    'place': 'uslugi',
    'type': 'center'
  },
  'mob3':{
    'place': 'footer',
    'type': 'center'
  },
  'burger__btn':{
    'place': 'meet',
    'type': 'center'
  },
}

document.addEventListener('DOMContentLoaded', (event) => {
  services = $('.services');
  page = document.getElementById('pagefrom__input');
  totalprice = document.getElementById('totalprice');
  let burgeropen = () => {
    $('#brg__img').animate({opacity:0, right:'-150px'},300);
    $('#burger__wrap').css('display','block');
    $('#burger__wrap').animate({opacity:1, right:'0px'},300);
    
    $('#cross__img').animate({opacity:1, right:'0px'},300);
    $('#blackback').css('display','block');
    $('#blackback').animate({opacity:1},300);
   }

   let burgerclose = (event) => {
    if (event.target.id == 'burger__wrap' || event.target.id == 'cross__img'
    || event.target.id == 'mob1' || event.target.id == 'mob2'
    || event.target.id == 'mob3' || event.target.id == 'burger__btn'){
      $('#burger__wrap').animate({opacity:0, right:'1000px'},300);
      $('#brg__img').animate({opacity:1, right:'0px'},300);
      $('#cross__img').animate({opacity:0, right:'-150px'},300);
      $('#blackback').css('display','none');
      $('#blackback').animate({opacity:0},300);
      setTimeout(function(){
        $('#burger__wrap').css('display','none');
        },300)
    }
   }

  var element = document.querySelector('.telofperson');
  var maskOptions = {
    mask: '+{7}(000)000-00-00'
  };
  var mask = IMask(element, maskOptions);

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

  window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY - 200;
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
  
  const scrolltoblock = (placeto, to='nearest') => {
    let place = document.getElementById(placeto);
    place.scrollIntoView({block: to, inline: "center"});
  }

  $('body').on('click', (event) => {
    for (scrollitem in scrolls){
      if (event.target.id === scrollitem){
        scrolltoblock(scrolls[event.target.id]['place'], scrolls[event.target.id]['type'])
      }
    }
  })
  $('#brg__img').on('click',function(){
    burgeropen();
  })
  $('#burger__wrap').on('click',function(event){
    burgerclose(event);
  })
  $('#cross__img').on('click',function(event){
    burgerclose(event);
  })
})