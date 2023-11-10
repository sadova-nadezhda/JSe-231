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
    'margin' : '30px',
    'border' : '2px solid #000'
  })

  // console.log($('.list li').css('color'))
  // console.log($('.list').height()) //.width()
  // console.log($('.list').innerHeight())
  // console.log($('.list').outerHeight())
  // // console.log($('.list').outerHeight(true)) + pad + mar + border

  // $('.list').height(200)
  // console.log($('.list').height())

  // $('.list').css({
  //   'height': '100px',
  //   'overflow': 'auto'
  // })

  // $('.list li').click(function(e) {
  //   console.log($(this).text())
  //   console.log(e)
  // })

  // $('.list li').hover(
  //   function(){
  //   $(this).text('Change')
  //   },
  //   function(){
  //     $(this).text('!!!')
  //   }
  // )

  $('#form').focusin(function() {
    $(this).css({
      'border': '1px solid blue'
    })
  })

  $('#form').focusout(function() {
    $(this).css({
      'border': 'none'
    })
  })

  //change
  $('input').change(function() {
    $('.box').text($(this).val())
  })


})
