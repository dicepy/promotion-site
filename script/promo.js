const promo = {
  'first': 0.8,
  'second': 0.7,
  'third': 0.5,
  'fourth':0.123499
};


document.addEventListener('DOMContentLoaded', function(){
  totalprice = document.getElementById('totalprice');
  $( "#text_promo" ).on( "keyup", function() {// baseprice = document.getElementById('modal__price').getAttribute('data-price');
    setTimeout(() => {
      for (const prop in promo) {
        if (document.getElementById('text_promo').value === prop){
          document.getElementById('text_promo').classList.remove('invalidpromo');
          document.getElementById('text_promo').classList.add('validpromo');
          break;
        }
        else{
          if (document.getElementById('text_promo').value === ''){
            document.getElementById('text_promo').classList.remove('invalidpromo');
            break;
          }
          document.getElementById('text_promo').classList.remove('validpromo');
          document.getElementById('text_promo').classList.add('invalidpromo');
        }
      }
    }, 1);
  });
})


