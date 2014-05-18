var $currentpage = null, $lastpage = null;

$(function (){
  $('.wd-e-process').on('tap click',function (e){
    togglepop($('#wd-process'))
  })

  $('.wd-e-contact').on('tap click',function (e){
    togglepop($('#wd-contact'))
  })

  $('.wd-e-games').on('tap click',function (e){
    togglepop($('#wd-games'))
  })

  $('.wd-p-back,.wd-p-close').on('tap click',function (){
    var $dshow = $lastpage || $('#wd-cont-wrap,#myswipe');
    togglepop($dshow)
  })


  // 幻灯播放
  var strswipe = ''
  for( var i=0; i<4; i++ ){
    strswipe += '<div><img src="images/slide_'+i+'.jpg" data-title="照片"/></div>'
  }
  $('#myswipe .swipe-wrap').html(strswipe)


  window.myswipe = Swipe(document.getElementById('myswipe'), {
    // startSlide: 4,
    auto: 3000
    // continuous: true,
    // disableScroll: true,
    // stopPropagation: true,
    // callback: function(index, element) {},
    // transitionEnd: function(index, element) {}
  });
})


function togglepop($dshow,$dhide){
  var title = $dshow.data('title') || '储曼曼 & 刘飞'
  $dhide = $dhide || $currentpage || $('#wd-cont-wrap,#myswipe');

  if( $dshow.selector == $dhide.selector ) return;
  $('#wd-content').append($dshow);
  $dshow.css({
    "position" : "relative",
    "opacity" : 0
  }).animate({
    "opacity" : "1"
  },200)

  $('#wd-nav-title').html(title)

  // 显示被 vh 掉的电话号码
  $dshow.find('.vh').css('visibility','visible');
  $dhide.find('.vh').css('visibility','hidden')


  $('#wd-chamber').append($dhide);
  document.body.scrollTop = 0,
  document.documentElement.scrollTop = 0;

  $currentpage = $dshow;

  if( $lastpage && $currentpage && $lastpage.selector != $currentpage.selector ){
    $lastpage = $dhide;
  }
}