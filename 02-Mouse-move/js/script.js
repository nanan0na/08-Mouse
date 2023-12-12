$(function () {
  // 대상을 변수에 저장
  const $window = $(window);
  const $objWrap = $('.obj-wrap');
  const $obj1 = $objWrap.find('.obj1');
  const $obj2 = $objWrap.find('.obj2');
  const $obj3 = $objWrap.find('.obj3');
  const $obj4 = $objWrap.find('.obj4');

  // 마우스 좌표값
  let x = 0;
  let y = 0;

  // 보정되는 마우스 좌표값
  let mx = 0;
  let my = 0;
  let speed = 0.008;

  // 마우스가 움직일 때 좌표값 받아오기
  $window.on('mousemove', function (e) {
    // 마우스 좌표의 시작지점을 화면의 정중앙으로 이동
    x = e.pageX - $window.outerWidth() / 2;
    y = e.pageY - $window.outerHeight() / 2;

    // x = 0일 때,
    // 0 = 0 - 960
    // -960
  });

  moving();

  // 마우스의 기본 좌표값을 기준으로 어떤 값을 만들어 내자
  function moving() {
    mx += (x - mx) * speed;
    my += (y - my) * speed;

    // 오브젝트에 좌표값 적용
    $obj1.css({
      transform: `translate(${mx}px, ${my}px) rotate(${my}deg)`,
    });
    $obj2.css({
      transform: `translate3d(${-mx}px, ${-my}px, ${mx}px)`,
    });
    $obj3.css({
      transform: `translate3d(${-mx * 0.5}px, ${my * 0.8}px, ${mx * 0.05}px) rotateY(${mx}deg)`,
      filter: `blur(${-mx * 0.05}px)`,
    });
    $obj4.css({
      transform: `translate3d(${-mx / 0.2}px, ${my / 0.8}px, ${mx / 0.4}px) rotateY(${mx}deg)`,
      filter: `blur(${-mx * 0.05}px)`,
    });

    // 부드럽게 반복
    requestAnimationFrame(moving);
  }
});
