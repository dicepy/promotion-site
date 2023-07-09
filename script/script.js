

document.addEventListener('DOMContentLoaded', (event) => {
  window_title_text = document.querySelector('.window__title').textContent;
  console.log(window_title_text)

  services = document.querySelector('.services');
  for (el of document.querySelectorAll('button.button')){
    id = el.id;
    $(`#${id}`).on( "click", function(event) {
      console.log(event.currentTarget.id);
      event.preventDefault();
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