//아이디 체크
function memberIdCheck(state){
  const memberId = document.querySelector("#memberId");
  const memberIdInfo = document.querySelector("#memberIdInfo");
  if(state === "blur"){
    if(memberId.value === ""){
      memberIdInfo.innerHTML =`필수입력사항입니다.`;
      return false;
    }else{
      let regExp = /^[a-z]+[a-z0-9]{5,19}$/g;
      if(!memberId.value.match(regExp)){
        memberIdInfo.innerHTML =`형식에 맞게 입력해주세요.`;
        return false;
      }else{
        memberIdInfo.innerHTML =`ok`;
        return true;
      }
    }
  }else if(state === "focus"){
    memberIdInfo.innerHTML = `영문자로 시작하는 영문자 또는 숫자 6~20자 입력바람`;
    return false;
  }
}
//비밀번호 체크
function memberPwCheck(state) {

  const memberPw = document.querySelector("#memberPw");
  const memberPwInfo = document.querySelector("#memberPwInfo");
  if (state === "blur") {
    if (memberPw.value === "") {
      memberPwInfo.innerHTML = `필수입력사항입니다.`;
      return false;
    } else {
      let regExp = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;
      if (!memberPw.value.match(regExp)) {
        memberPwInfo.innerHTML = `형식이 올바르지 않습니다.`;
        return false;
      } else {
        memberPwInfo.innerHTML = `ok`;
        return true;
      }
    }
  } else if (state === "focus") {
    memberPwInfo.innerHTML = `8 ~ 16자 영문, 숫자, 특수문자를 최소 한가지씩 입력바람`;
    return false;

  }
}