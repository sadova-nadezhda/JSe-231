$(document).ready(function() {
  $('.box').css({
    'position': 'relative',
    'width': '300px',
    'height': '200px',
    'margin-bottom': '20px',
    'background-color': 'red'
  })

  // $('.btn1').click(function(e) {
  //   $('.box').hide() // скрыть элемент
  // })

  // $('.btn2').click(function(e) {
  //   $('.box').show() // показать элемент
  // })

  // Произвольная анимация

  // $('.btn3').click(function(e) {
  //   $('.box').animate({
  //     'width': '100px',
  //     'height': '100px',
  //     'left': '+=50'
  //   }, 1000, function() {
  //     alert('done')
  //   })
  // })

  // Практика

  // $('.btn3').click(function(e) {
  //   $('.box').animate({
  //     'left': '-=50'
  //   })
  // })
  // $('.btn4').click(function(e) {
  //   $('.box')
  //   .animate({
  //     'left': '50'
  //   }, 1000)
  //   .animate({
  //     top: '50'
  //   }, 1000)
  // })

  // Fade
  // $('.btn1').click(function(e) {
  //   $('.box').fadeOut(1000) // скрыть элемент
  // })

  // $('.btn2').click(function(e) {
  //   $('.box').fadeIn(1000) // показать элемент
  // })

  // $('.btn3').click(function(e) {
  //   $('.box').fadeToggle(1000) // показать/скрыть
  // })

  // Slide
  $('.btn1').click(function(e) {
    $('.box').slideUp(1000) // скрыть элемент
  })

  $('.btn2').click(function(e) {
    $('.box').slideDown(3000) // показать элемент
  })

  $('.btn3').click(function(e) {
    $('.box').slideToggle(1000) // показать/скрыть
  })

  $('.btn4').click(function(e) {
    $('.box').stop()
  })



});
