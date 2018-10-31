$('.actiaa').click(function(){
  $('.tanchu').show();
  $('.zhifu').hide();

});
$('.details_left li').click(function(){
  $('.details_left li').children("a").removeClass("li_active");
  $(this).children("a").addClass("li_active");
  var index=$(this).index();
  $(".details_right>ul>li").hide().eq(index).show();

});
$('.yingshen').click(function(){
  $('.popup').show();
  $('.bgs').show();
});
$('.cha').click(function(){
  $('.popup').hide();
  $('.bgs').hide();
});
$('.return').click(function(){
  $('.popup').hide();
  $('.bgs').hide();
});

$('.loginbtn li').click(function(){
  $('.loginbtn li').children("a").removeClass("activer");
  $(this).children("a").addClass("activer");
  var index=$(this).index();
  $(".loginbox>ul>li").hide().eq(index).show();
});

$('.loginul li').click(function(){
  $('.loginul li').children("a").removeClass("activers");
  $(this).children("a").addClass("activers");
  var index=$(this).index();
  $(".enroll_li>ul>li").hide().eq(index).show();
});
$('.zs_tab li').click(function(){
  $('.zs_tab li').children("a").removeClass("li_active");
  $(this).children("a").addClass("li_active");
  var index=$(this).index();
  $(".zs_tab_lb>ul>li").hide().eq(index).show();

});
$('.module_peoject_btn').click(function(){
  $('.module_tanchu').show();
  $('.module_peoject').hide();
});

$(".tcdPageCode").createPage({
  pageCount:20,
  current:1,
  backFn:function(p){
    //console.log(p);
  }
});

$('.order_li li').click(function(){
  $('.order_li li').removeClass("active");
  $(this).addClass("active");
});


  $.fn.extend({
    tabscroll: function () {
      var $_this = $(this);
      $_this.find('.laiba .pios').mouseover(function () {
        var i = $(this).index();
        $_this.find('.caom').eq(i).show().siblings().hide();
        $_this.find('.laiba').show();

      })
    }
  })
$(function () {
  $('.ddw').tabscroll();
})
//里tab切换
$(function () {

  $('.ddw').mouseover(function () {
    var i = $(this).index();
    $('.limqh .cone').eq(i).show().siblings().hide();

  })
})
//第一tab切换样式
$(function () {
  $('#x6 dt').mouseover(function () {
    var i = $(this).index();
    $('#x6 dt>div').removeClass('yangshi666').css('borderBottom', 'solid 1px #E8E8E7')
    $('#x6 dt .a86').eq(i).addClass('yangshi666').css('borderBottom', 'none')

  })
})
//飞机票JQ
$(function () {
  $('.bxu').mouseover(function () {
    $('#x6').animate({'top': '0px'}, 'slow', 'easeOutQuad')
  })
  $('#ch6').click(function () {
    $('#x6').animate({'top': '209px'}, 'slow', 'easeInOutBack')
  })
})
//进入页面显示楼层导航
$(window).scroll(function () {
  var chhe = $(window).scrollTop();
  if (chhe >= 1500) {
    $('#goodby').show();

  }
  else {
    $('#goodby').hide();
  }
  if (chhe >= 8500) {
    $('#goodby').hide();
  }


})
//楼层导航定位
$(function () {
  $('#goodby li').click(function () {
    var i = $(this).index();
    $('body').animate({scrollTop: $('.hey').eq(i).offset().top}, 'slow', 'easeInOutBack')
  })
})


//抄底评论Y轴滚动
$(function () {
  var x = 0;
  var tpl = $('.oppe dt').outerHeight(true);
  timer342 = setInterval(function () {
    x--;
    if (x < 0) {
      x = $('.oppe dt').length - 3
      $('#reme').scrollTop(tpl * (x + 1))
    }
    $('#reme').animate({scrollTop: tpl * x}, 'slow', 'easeInOutBack')

  }, 2000)

})
//今日抄底,图片动画效果
$('.aox li').hover(
  function () {

    var i = $(this).index();
    $('.aox li img').eq(i).animate({marginLeft: '20px'})

  },
  function () {

    var i = $(this).index();
    $('.aox li img').eq(i).animate({marginLeft: '0px'})
  }
)
//2,6楼大图滚动
$.fn.extend({
  imgRoll2: function () {
    var $_this = $(this);
    var imgw = $_this.find('.fld li').width();
    var x = 0;
    var anm = true;

    $_this.find('#zjt3').click(function () {
      clearInterval(timer18);
      if (anm) {
        anm = false;
        x--;
        if (x < 0) {
          x = $_this.find('.fld li').length - 1;
        }
        www();
      }
      ;
      sue();
    })

    $_this.find('#yjt3').click(function () {
      clearInterval(timer18);
      if (anm) {
        anm = false;
        x++;
        if (x >= $_this.find('.fld li').length) {
          x = 0;
        }
        www();
      }
      ;
      sue();
    })

    $_this.find('#sli2 li').mouseover(function () {
      clearInterval(timer18);
      x = $_this.find('#sli2 li').index(this);
      $_this.find('#sli2 li').eq(x).addClass('der-ite').siblings().removeClass('der-ite');
      $_this.stop().animate({scrollLeft: imgw * x}, 400)
      sue();
    })
    var timer18 = null;

    function sue() {

      timer18 = setInterval(function () {
        x++;
        if (x >= $_this.find('.fld li').length - 1) {
          x = 0;
        }
        $_this.find('#sli2 li').eq(x).addClass('der-ite').siblings().removeClass('der-ite');
        $_this.stop().animate({scrollLeft: imgw * x}, 400);
      }, 4000)
    }

    sue();

    function www() {
      $_this.find('#sli2 li').eq(x).addClass('der-ite').siblings().removeClass('der-ite');
      $_this.stop().animate({scrollLeft: imgw * x}, 400, function () {
        anm = true;
      })
    }

  }
})
$(function () {
  $('#gjs').imgRoll2();
  $('#gjs2').imgRoll2();
  $('#gjs3').imgRoll2();
  $('#gjs4').imgRoll2();
  $('#gjs5').imgRoll2();
})

//3,4,5楼大图滚动.JQ面向对象//
$.fn.extend({
  imgRoll: function () {
    var $_this = $(this);
    var imgw = $_this.find('.dse li').width();
    var x = 0;
    var agg = true;


    $_this.find('#zjt4').click(function () {
      clearInterval(timer25)
      if (agg) {
        agg = false;
        x--;
        if (x < 0) {
          x = $_this.find('.dse li').length - 1
        }
        $_this.find('#sli3 li').eq(x).addClass('der-ite').siblings().removeClass('der-ite');
        $_this.stop().animate({scrollLeft: imgw * x}, 'slow', 'easeInOutBack', function () {
          agg = true;
        })
        melai();

      }
    })
    $_this.find('#yjt4').click(function () {
      clearInterval(timer25)
      if (agg) {
        agg = false;
        x++;
        if (x > $_this.find('.dse li').length - 1) {
          x = 0
        }
        $_this.find('#sli3 li').eq(x).addClass('der-ite').siblings().removeClass('der-ite');
        $_this.stop().animate({scrollLeft: imgw * x}, 'slow', 'easeInOutBack', function () {
          agg = true;
        })
        melai();

      }
    })
    $_this.find('#sli3 li').mouseover(function () {
      clearInterval(timer25)
      x = $_this.find('#sli3 li').index(this);
      $_this.find('#sli3 li').eq(x).addClass('der-ite').siblings().removeClass('der-ite');
      $_this.stop().animate({scrollLeft: imgw * x}, 'slow', 'easeInOutBack')
      melai();

    })
    var timer25 = null;

    function melai() {
      timer25 = setInterval(function () {
        x++;
        if (x > $_this.find('.dse li').length - 1) {
          x = 0
        }
        $_this.find('#sli3 li').eq(x).addClass('der-ite').siblings().removeClass('der-ite');
        $_this.stop().animate({scrollLeft: imgw * x}, 'slow', 'easeInOutBack')
      }, 4000)

    }

    melai();
  }

})
$(function () {
  $('.ssl').imgRoll();
  $('.ssl2').imgRoll();
  $('.ssl3').imgRoll();
  $('.ssl4').imgRoll();
  $('.ssl5').imgRoll();
  $('.ssl6').imgRoll();
})


//JQ版tab切换
$(function () {
  $('#baozhu3 .tab li').mouseover(function () {
    var i = $(this).index();
    $('#baozhu3 .tab li').eq(i).addClass('tab-tiell').siblings().removeClass('tab-tiell');
    $('#gbug>li').eq(i).show().siblings().hide();


  })
})


//所有楼tab切换
$.fn.extend({
  tabscroll: function () {
    var $_this = $(this);
    $_this.find('#wfoo3 .tab li').mouseover(function () {
      var i = $(this).index();
      $_this.find('#wfoo3 .tab li').eq(i).addClass('tab-tiell').siblings().removeClass('tab-tiell');
      $_this.find('#yui>li').eq(i).show().siblings().hide();
    })
  }
})
$(function () {
  $('#wfoo').tabscroll();
  $('#cfoo').tabscroll();
  $('#cfoo2').tabscroll();
  $('#cfoo3').tabscroll();
  $('#kfoo').tabscroll();
  $('#kfoo2').tabscroll();
  $('#kfoo3').tabscroll();
  $('#kfoo4').tabscroll();
  $('#cfoo4').tabscroll();
})


//JQ版大图滚动
$(function () {
  var cch = $('#rxx li').eq(0).width();//获取一张图片的宽度
  var hcc = 0;//定义滚动条总宽度
  $('#zjt2').click(function () {//绑定事件
    clearInterval(timer19)
    hcc -= cch;//滚动条的总宽度减去一张图片的宽度
    if (hcc < 0) {
      hcc = cch * 3;
    }
    ;//滚动条宽度小于0的时候.显示最后一张
    diaoy();
    rem()
  })
  $('#yjt2').click(function () {
    clearInterval(timer19)
    hcc += cch;
    if (hcc >= cch * 4) {
      hcc = 0;
    }
    ;
    diaoy();
    rem()
  })
  $('#sli li').mouseover(function () {//绑定事件
    clearInterval(timer19)
    var i = $(this).index();//i循环
    hcc = cch * i;//滚动条总宽度等于一张图片总宽度乘以i
    diaoy();
    rem()
  })
  var timer19 = null;

  function rem() {
    timer19 = setInterval(function () {
      hcc += cch;
      if (hcc >= cch * 4) {
        hcc = 0;
      }
      ;
      diaoy();
    }, 4000)
  }

  rem();

  function diaoy() {
    $('#sli li').eq(hcc / cch).addClass('der-ite').siblings().removeClass('der-ite');
    $('#rxx').stop().animate({scrollLeft: hcc}, 400);
  }
})


//大图滚动
window.onload = function () {
  dtqh = document.getElementById('dtqh');
  liss = dtqh.getElementsByTagName('li');
  zjt = document.getElementById('zjt');
  yjt = document.getElementById('yjt');
  timer20 = null;
  num11 = 0;

  function move(num11) {
    clearInterval(timer20);
    var start = dtqh.scrollLeft;
    var step = 0;
    var end = liss[0].offsetWidth * num11;
    var stepmax = 20;
    var everystep = (end - start) / stepmax;
    /*console.log(num11)*/
    timer20 = setInterval(function () {
      step++;
      if (step == stepmax) {
        step = 0;
        clearInterval(timer20);
      }
      ;
      start += everystep;
      dtqh.scrollLeft = start;
    }, 40)


  }

  zjt.onclick = function () {
    num11--;
    if (num11 < 0) {
      num11 = liss.length - 1;
    }
    move(num11);
  }
  yjt.onclick = function () {
    num11++;
    if (num11 > liss.length - 1) {
      num11 = 0;

    }
    ;
    move(num11);
  }


}


//大图滚动2

dtgd2 = document.getElementById('dtgd2');
lisss = dtgd2.getElementsByTagName('li');
min2 = document.getElementById('min2');
cnxh = min2.getElementsByTagName('a')[0];
timer159 = null;
num159 = 6;
dtgd2.scrollLeft = lisss[0].offsetWidth * 6;

function move(num159) {
  clearInterval(timer159);
  var start = dtgd2.scrollLeft;
  var step = 0;
  var end = lisss[0].offsetWidth * num159;
  var stepmax = 20;
  var everystep = (end - start) / stepmax;
  timer159 = setInterval(function () {
    step++;
    if (step == stepmax) {
      step = 0;
      clearInterval(timer159);

    }
    start += everystep;
    dtgd2.scrollLeft = start;
    if (dtgd2.scrollLeft == lisss[0].offsetWidth * 24) {
      dtgd2.scrollLeft = 0;
      // num159 = lisss.length-12;
    }
  }, 40)
}


cnxh.onclick = function () {
  num159 += 6;
  if (num159 > 24) {
    num159 = 6;
    move(num159);
  }
  move(num159);
}

//全局固定计时器
//已封装
function Tab(gggId) {
  this.ggg = document.getElementById(gggId);
  this.cc = this.ggg.getElementsByTagName('i')[0];
  this.zzt = this.ggg.getElementsByTagName('em')[0];
  this.timer = null;
  this.timer1111111 = null;
  this.emLeft = 0;
  var _this = this;

  this.ggg.onmouseover = function () {
    clearInterval(_this.timer1111111);
    _this.timer = setInterval(function () {
      _this.emLeft--;
      if (_this.emLeft <= -62) {
        _this.emLeft = -62;
        clearInterval(_this.timer);
      }
      _this.zzt.style.left = _this.emLeft + 'px';
    }, 1)
  }
  this.ggg.onmouseout = function () {
    clearInterval(_this.timer);
    _this.timer1111111 = setInterval(function () {
      _this.emLeft++;
      if (_this.emLeft >= 0) {
        _this.emLeft = 0;
        clearInterval(_this.timer1111111);
      }
      _this.zzt.style.left = _this.emLeft + 'px';
    }, 1)
  }
}


var tab = new Tab('ggg');
var tab = new Tab('ggg1');
var tab = new Tab('ggg2');
var tab = new Tab('ggg3');


//全局固定计时器
/*	var ggg=document.getElementById('ggg');
 var cc=ggg.getElementsByTagName('i')[0];
 var zzt=ggg.getElementsByTagName('em')[0];
 var timer=null;
 var timer1111111=null;
 var emLeft=0;
 ggg.onmouseover=function() {
     clearInterval(timer1111111);
     timer=setInterval(function () {
         emLeft--;
         if (emLeft<=-62) {
             emLeft=-62;
             clearInterval(timer);
         }
         zzt.style.left=emLeft+'px';
     },1)
 }
 ggg.onmouseout=function() {
     clearInterval(timer);
     timer1111111=setInterval(function () {
         emLeft++;
         if (emLeft>=0) {
             emLeft=0;
             clearInterval(timer1111111);
         }
         zzt.style.left=emLeft+'px';
     },1)
 }*/



/* 	var denglu=document.getElementById('jd-denglu');
 var yzbj=denglu.getElementsByTagName('div')[1];
 var asd=document.getElementById('asd');

 yzbj.onmouseover=function () {
     asd.style.display='block';
 }


 yzbj.onmouseout=function () {
     asd.style.display='none';
 }


*/



//选择城市
var jddenglu = document.getElementById('jd-denglu');
var yzbj = jddenglu.getElementsByTagName('div')[1];
var ssss = jddenglu.getElementsByClassName('sss')[0];
var asd = document.getElementById('asd');
var chengshi = asd.getElementsByClassName('chengshi')[1];
var as = asd.getElementsByTagName('a');
var imgs = jddenglu.getElementsByTagName('img')[0];
var imgs1 = jddenglu.getElementsByTagName('img')[1];

/*alert(as.length)*/

yzbj.onmouseover = function () {
  asd.style.display = 'block';
  /*	imgs.style.display='none';
  imgs1.style.display='block';*/
}

yzbj.onmouseout = function () {
  asd.style.display = 'none'
  /*imgs.style.display='block';
  imgs1.style.display='none';*/
}

//
// for (var i = 0; i < as.length; i++) {
//   as[i].onclick = function () {
//     asd.style.display = 'none';
//     for (var i = 0; i < as.length; i++) {
//       if (as[i] == this) {
//         ssss.innerHTML = as[i].innerHTML;
//         as[i].className = 'yanshi';
//         as[i].style.background = 'images/7c900c2382c1454d86fdd7129323d1d1.gif'
//         as [i].style.color = 'white'
//       } else {
//         as[i].className = '';
//         as[i].style.background = ''
//         as [i].style.color = ''
//
//       }
//     }
//   }
// }

//透明图切换
var con = document.getElementById('con');
var lis = con.getElementsByTagName('li');
var nev = document.getElementById('nev');
var lie = nev.getElementsByTagName('li');
var num = 0;
var tiom = null;
var tiom2 = null;

function wangchong(num) {
  clearInterval(tiom);
  a();
  for (var i = 0; i < lis.length; i++) {
    lie[i].className = '';
    lis[i].style.opacity = 0;
  }
  ;
  lie[num].className = 'active';
  var baiyu = 0;
  tiom = setInterval(function () {
    for (var i = 0; i < lis.length; i++) {
      baiyu += 0.02;
      if (baiyu >= 1) {
        baiyu = 1;
        e();
        clearInterval(tiom)
      }
      lis[num].style.opacity = baiyu;
    }
    ;
  }, 50);
}

function chongwang() {
  num++;
  if (num >= lis.length) {
    num = 0;
    wangchong(num);
  }
  wangchong(num);
}

tiom2 = setInterval(chongwang, 2000);
for (var i = 0; i < lis.length; i++) {
  lie[i].index = i;
  lie[i].onmouseover = function () {
    clearInterval(tiom2);
    num = this.index;
    wangchong(num);
  }
  lie[i].onmouseout = function () {
    tiom2 = setInterval(chongwang, 2000);
  }
}
;
var zuo = document.getElementById('zuo');
var you = document.getElementById('you');

function e() {
  zuo.onclick = function () {
    clearInterval(tiom2);
    num--;
    if (num < 0) {
      num = lis.length - 1;
    }
    wangchong(num);
    tiom2 = setInterval(chongwang, 2000);
  }

  you.onclick = function () {
    clearInterval(tiom2);
    num++;
    if (num >= lis.length) {
      num = 0;
    }
    wangchong(num);
    tiom2 = setInterval(chongwang, 2000);
  }
}

function a() {
  zuo.onclick = function () {
    return false;
  }

  you.onclick = function () {
    return false;
  }
}

e();


$(".sad").click(function () {
  var speed = 200;//滑动的速度
  $('body,html').animate({scrollTop: 0}, speed);
  return false;
});

