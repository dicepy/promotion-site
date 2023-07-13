var promo = {
  'first': 0.8,
  'second': 0.7,
  'third': 0.5,
  'fourth':0.123499
};


document.addEventListener('DOMContentLoaded', function(){
  totalprice = document.getElementById('totalprice');
  $( "#text_promo" ).on( "keyup", function() {
    baseprice = document.getElementById('modal__price').getAttribute('data-price');
    setTimeout(() => {
      for (const prop in promo) {
        if (document.getElementById('text_promo').value === prop){
          totalprice.value = Math.round(baseprice*promo[prop]);
          document.getElementById('promofield').classList.remove('invalidpromo');
          $('#modal__price').css('opacity', '0');
          setTimeout(() => {
            document.getElementById('modal__price').textContent = Math.round(baseprice*promo[prop]);
            $('#modal__price').css('opacity', '1');
          }, 300);
          break;
        }
        
        else{
          document.getElementById('promofield').classList.add('invalidpromo');
          totalprice.value = baseprice;
          if (document.getElementById('modal__price').textContent !==  document.getElementById('modal__price').getAttribute('data-price')){
            $('#modal__price').css('opacity', '0');
            setTimeout(() => {
              document.getElementById('modal__price').textContent =  baseprice;
              $('#modal__price').css('opacity', '1');
              
            }, 300);
            
          }
        }
        
      }
    }, 1);
  });
})


