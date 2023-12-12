$(function () {
  // 대상을 변수에 저장
  const $window = $(window);
  const $cursor = $('.cursor');

  // 마우스가 움직일 때
  $window.on('mousemove', function (e) {
    // console.log(e);
    let mouseX = e.pageX;
    let mouseY = e.pageY;

    $cursor.css({
      left: mouseX,
      top: mouseY,
    });
  });

  // click 클래스 적용/삭제
  $window.on('mousedown', function () {
    $cursor.addClass('click');
  });
  $window.on('mouseup', function () {
    $cursor.removeClass('click');
  });
});
