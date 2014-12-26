console.log('loading')
jQuery(document).ready(function($) {
  
  $('button.next').on('click', function(event) {
    console.log('next');
  })
  $('button.previous').on('click', function(event) {
    console.log('previous');
  })

});