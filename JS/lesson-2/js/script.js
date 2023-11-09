$(document).ready(function(){
  // $(".hero__link").click(function(event){
  //   alert(event.target)
  //   $(this).text('Check')
  // })
  // $(".hero__link").css("color", "red").css("font-size", "20px");
  // console.log($('li').length)
  // console.log($('a').text())
  // console.log($('a').html())
  // console.log($('a').val())
  // $(".hero__link").text("Read More")
  // $(".hero__link").html("<a>!!!</a>")
  // let link = document.querySelector('.hero__link')
  // console.log($(link))

  $('li').click(function() {
    // console.log($(this).parent())
    // console.log($(this).children())
    // console.log($(this).siblings())
    // $(this).next().css("color", "red")
    // $(this).prev().css("color", "blue")

    //toggleClass(), addClass(), removeClass()
    // $(this).toggleClass('active')

    console.log($(this).closest('ul'))

  })

  // console.log($("body *").first())
  // console.log($("body *").last())
  // console.log($("body *").eq(4))
  // console.log($("body *").slice(4, 8))
  // console.log($("body *").has('span'))
  // console.log($("body *").has('span'))
  // console.log($("body *").is('span'))
  // console.log($("body *").not('div'))
  // console.log($("body *").filter('div'))
  // console.log($("ul").find('span'))
})


// другие варианты
// $().ready(function() {})
// $(function() {})
