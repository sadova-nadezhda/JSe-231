$(document).ready(function(){
  // Добавление внутри бокса

  // Добавляем в начало box1
  // $('.box1').prepend('<p>1111</p>')
  // $('<p>1111</p>').prependTo('.box1')

  // Добавляем в конец box1
  // $('.box1').append('<p>2222</p>')
  // $('<p>2222</p>').appendTo('.box1')


  // Добавление за пределами бокса

  // Добавляем перед box1
  // $('.box1').before('<h4>Заголовок</h4>')
  // $('<h4>Заголовок</h4>').insertBefore('.box1')

  // Добавляем после box1
  // $('.box1').after('<ul>abc</ul>')
  // $('<ul>abc</ul>').insertAfter('.box1')

  // Создать копию (глубокое копирование)
  // $('.box2').clone().appendTo('.box1')
  // $('.box2').clone().prependTo('.box1')

  // Замена элемента
  // $('.box1').replaceWith('<h4>Заголовок</h4>')
  // $('<h4>Заголовок2</h4>').replaceAll('h4')

  // Работаем с оберткой

  // $('.box1').wrap('<div class="wrapper"></div>')
  // $('.box1').wrapInner('<div class="inner"></div>')

  $('.box1').wrapAll('<div class="boxes"></div>')

  // $('.txt').unwrap()

  // Удаление элемета
  $('.btn').click(function() {
    $('.txt').remove()
  })

  // Очистить
  $('.boxes').empty()

  // Работа с атрибутами и свойствами
  console.log($('.box-img img').attr('alt'))
  console.log($('.box-img img').prop('alt'))

  let url = 'https://www.imgonline.com.ua/examples/bee-on-daisy.jpg'

  $('.box-img img').attr('src', url);
  $('.box-img img').attr('width', '300px');

});
