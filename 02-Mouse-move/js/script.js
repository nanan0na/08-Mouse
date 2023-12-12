$(function () {
  // 대상을 변수에 저장
  const $window = $(window);
  const $cursor = $('.cursor');
  const $info = $('.info');

  // 마우스 좌표값
  let x = 0;
  let y = 0;

  // 보정되는 마우스 좌표값
  let mx = 0;
  let my = 0;
  let speed = 0.08;

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

    // info창에 뿌리기
    $info.html(`mx : ${mx}<br>my : ${my}`);

    // 마우스에 좌표값 적용
    $cursor.css({
      left: mx,
      top: my,
    });

    requestAnimationFrame(moving);
  }
});
