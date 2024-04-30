function menumouseover() {
  document.querySelector("#menuul").style.display = "block";
}
function menumouseout() {
  const menuul = document.querySelector("#menuul");
  menuul.style.display = "none";
}
function shopingmouseover() {
  document.querySelector("#shopingul").style.display = "block";
}
function shopingmouseout() {
  const shopingul = document.querySelector("#shopingul");
  shopingul.style.display = "none";
}
function squadmouseover() {
  document.querySelector("#squadul").style.display = "block";
}
function squadmouseout() {
  const squadul = document.querySelector("#squadul");
  squadul.style.display = "none";
}
function login() {
  window.open("memberlogin.html", "로그인", "width=400px,height=400,top=100, left=100");
}
function join() {
  window.open("member-register.html", "로그인", "width=800px,height=1200,top=100, left=100");
}

document.addEventListener('DOMContentLoaded', function () {
  function call_js() {
    let slideshow = document.querySelector(".slideshow");
    let slideshow_slides = document.querySelector(".slideshow_slides");
    let slides = document.querySelectorAll(".slideshow_slides a");
    console.log(slides);
    //보여줄 회전목마의 현재 위치값,시간설정,슬라이드 수
    let currentIndex = 0;
    let timer = null;
    let slideCount = slides.length;

    //회전목마 이미지를 우측으로 배치시킨다.
    for (let i = 0; i < slideCount; i++) {
      let newLeft = `${i * 100}%`;
      slides[i].style.left = newLeft;
    }
    //회전목마를 움직인다. 왼쪽으로 -100%씩 이동시킨다.
    function gotoSlide(index) {
      currentIndex = index;
      let newLeft = index * -100 + `%`;
      slideshow_slides.style.left = newLeft;

      // indicators.forEach((e) => {
      //   e.classList.remove("active");
      // });
      // indicators[currentIndex].classList.add("active");
    }
    //index = (0번부터 3번까지) 3초간 gotoSlide(index)
    gotoSlide(0);

    //3초간
    function startTimer() {
      timer = setInterval(() => {
        currentIndex += 1;
        let index = currentIndex % slideCount;
        gotoSlide(index)
      }, 3000);
    }
    startTimer();
  }
  call_js();
});