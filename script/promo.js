const promo = ['first']

document.addEventListener('DOMContentLoaded', function(){
  totalprice = document.getElementById('totalprice');
  $( "#text_promo" ).on( "keyup", function() {
    setTimeout(() => {
      for (const prop of promo) {
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


