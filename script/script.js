document.addEventListener('DOMContentLoaded', (event) => {
  services = document.querySelector('.services');
  for (el of document.querySelectorAll('button.button')){
    id = el.id;
    $(`#${id}`).on( "click", function(event) {
      console.log(event.currentTarget.id);
      event.preventDefault();
      $(`.modalwindoworder`).css('display', 'flex')
    } );
    $(`.modalwindoworder`).on( "click", function(event) {
      if ($(event.target).attr('class')=='modalwindoworder'){
        $(`.modalwindoworder`).css('display', 'none')
      }
    })
  }
})