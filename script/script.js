

document.addEventListener('DOMContentLoaded', (event) => {
  services = $('.services');
  page = document.getElementById('pagefrom__input');
  
  for (el of $('button.button')){
    id = el.id;
    $(`#${id}`).on( "click", function(event) {
      event.preventDefault();
      if (event.currentTarget.id == 'lil'){
        document.getElementById('nameofmodal').textContent = 'Малый пакет'
        page.value = 'Малый пакет'
      }
      if (event.currentTarget.id == 'mid'){
        document.getElementById('nameofmodal').textContent = 'Средний пакет'
        page.value = 'Средний пакет'
      }
      if (event.currentTarget.id == 'large'){
        document.getElementById('nameofmodal').textContent = 'Большой пакет'
        page.value = 'Большой пакет'
      }
      if (event.currentTarget.id == 'insane'){
        document.getElementById('nameofmodal').textContent = 'Огромный пакет'
        page.value = 'Огромный пакет'
      }
      $(`.modalwindoworder`).css('opacity', '0');
      $(`.modalwindoworder`).css('display', 'flex');
      $(`.modalwindoworder`).animate({opacity:1},300);
      
    } );
    $(`.modalwindoworder`).on( "click", function(event) {
      if ($(event.target).attr('class')=='modalwindoworder' | $(event.target).attr('class')=='window__close'){
        $(`.modalwindoworder`).css('opacity', '1');
        $(`.modalwindoworder`).animate({opacity:0},300);
        setTimeout(function(){
        $(`.modalwindoworder`).css('display', 'none');
        },300)
      }
    })
  }
})