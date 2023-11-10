$(document).ready(function() {
  // $('.list li').css('color', 'red')

  $('.list li').css({
    'color':'red',
    'background-color': '#f4f4f4',
    'padding': '10px',
    'margin-bottom': '10px'
  })

  $('.list').css({
    'padding': '10px',
    'border' : '2px solid #000'
  })

  console.log($('.list li').css('color'))
  console.log($('.list').height()) //.width()
  console.log($('.list').innerHeight())
  console.log($('.list').outerHeight())
  // console.log($('.list').outerHeight(true)) + pad + mar + border







})
