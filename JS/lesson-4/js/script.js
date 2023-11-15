$(document).ready(function(){
  // Добавление внутри бокса

  // Добавляем в начало box1
  $('.box1').prepend('<p>1111</p>')
  $('<p>1111</p>').prependTo('.box1')

  // Добавляем в конец box1
  $('.box1').append('<p>2222</p>')
  $('<p>2222</p>').appendTo('.box1')


  // Добавление за пределами бокса

  // Добавляем перед box1
  $('.box1').before('<h4>Заголовок</h4>')
  $('<h4>Заголовок</h4>').insertBefore('.box1')

  // Добавляем после box1
  $('.box1').after('<ul>abc</ul>')
  $('<ul>abc</ul>').insertAfter('.box1')

  // Создать копию (глубокое копирование)
  // $('.box2').clone().appendTo('.box1')
  // $('.box2').clone().prependTo('.box1')


});
