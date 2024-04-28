function menumouseover(){
  document.querySelector("#menuul").style.display = "block";
}
function menumouseout(){
  const menuul = document.querySelector("#menuul");
  menuul.style.display = "none";
}
function shopingmouseover(){
   document.querySelector("#shopingul").style.display = "block";
}
function shopingmouseout(){
  const shopingul = document.querySelector("#shopingul");
  shopingul.style.display = "none";
}
function squadmouseover(){
   document.querySelector("#squadul").style.display = "block";
}
function squadmouseout(){
  const squadul = document.querySelector("#squadul");
  squadul.style.display = "none";
}
function login(){
  window.open("memberlogin.html","로그인","width=400px,height=400,top=100, left=100");
}
function join(){
  window.open("member-register.html","로그인","width=800px,height=1200,top=100, left=100");
}