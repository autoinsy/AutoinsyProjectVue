export function send(headSrc, str) {
  let html = "<div class='send'><div class='msg'><img src=" + headSrc + " />" +
    "<p><i class='msg_input'></i>" + str + "</p></div></div>";
  upView(html);
}

export function show(headSrc, str) {
  let html = "<div class='show'><div class='msg'><img src='" + headSrc + "'/><p class='msg-p right'><i class='msg_inputs'></i>" + str + "</p></div></div>";
  upView(html);
}

export function upView(html) {
  $('.message').append(html);
  $('body').animate({scrollTop: $('.message').outerHeight() - window.innerHeight}, 200)
}

export function sj() {
  return parseInt(Math.random() * 10)
}

$(function () {
  $('.footer').on('keyup', 'input', function () {
    console.log(this);
    if ($(this).val().length > 0) {
      $(this).next().css('background', '#114F8E').prop('disabled', true);
    } else {
      $(this).next().css('background', '#ddd').prop('disabled', false);
    }
  });
  $('.footer p').click(function () {
    show("static/img/touxiangm.3a101a3.png", $(this).prev().val());
    test();
  })
});
// let arr = ['您好我现在不在', '稍后联系'];
// let imgarr = ['picture/touxiang.png', 'picture/touxiangm.png']
// test()
//
export function test() {
  $(arr).each(function (i) {
    setTimeout(function () {
      send("picture/touxiang.png", arr[i])
    }, sj() * 500)
  })
}
