//아이디 체크
function memberIdCheck(state) {

  const memberId = document.querySelector("#memberId");
  const memberIdInfo = document.querySelector("#memberIdInfo");
  if (state === "blur") {
    if (memberId.value === "") {
      memberIdInfo.innerHTML = `필수입력사항입니다.`;
      return false;
    } else {
      let regExp = /^[a-z]+[a-z0-9]{5,19}$/g;
      if (!memberId.value.match(regExp)) {
        memberIdInfo.innerHTML = `형식이 올바르지 않습니다.`;
        return false;
      } else {
        memberIdInfo.innerHTML = `ok`;
        return true;
      }
    }
  } else if (state === "focus") {
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
//비밀번호 확인 체크
function memberPwCheckReal(state) {
  const memberPw = document.querySelector("#memberPw");
  const memberPwCheck1 = document.querySelector("#memberPwCheck1");
  const memberPwCheckInfo = document.querySelector("#memberPwCheckInfo");
  if (state === "blur") {
    if (memberPwCheck.value === "") {
      memberPwCheckInfo.innerHTML = `필수입력 사항입니다.`;
      return false;
    } else if (memberPw.value === memberPwCheck1.value) {
      memberPwCheckInfo.innerHTML = `ok`;
      return true;
    } else {
      memberPwCheckInfo.innerHTML = `비밀번호가 같지 않습니다.`;
      return false;
    }
  } else if (state === "focus") {
    memberPwCheckInfo.innerHTML = `위에서 입력한 비밀번호를 입력하세요.`;
    return false;
  }
}
//이름 체크
function memberNameCheck(state) {
  const memberName = document.querySelector("#memberName");
  const memberNameInfo = document.querySelector("#memberNameInfo");
  if (state === "blur") {
    if (memberName.value === "") {
      memberNameInfo.innerHTML = `필수입력사항입니다.`;
      return false;
    } else {
      let regExp = /[ㄱ-힣]/;
      if (!memberName.value.match(regExp)) {
        memberNameInfo.innerHTML = `한글만 입력 해주세요.`;
        return false;
      } else {
        memberNameInfo.innerHTML = `ok`;
        return true;
      }
    }
  } else if (state === "focus") {
    memberNameInfo.innerHTML = `이름을 입력해주세요.`;
    return false;
  }
}
//닉네임 체크
function memberNickCheck(state) {
  const memberNick = document.querySelector("#memberNick");
  const memberNickInfo = document.querySelector("#memberNickInfo");
  if (state === "blur") {
    if (memberNick.value === "") {
      memberNickInfo.innerHTML = `필수입력사항입니다.`;
      return false;
    } else {
      let regExp = /^([a-zA-Z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣]).{1,10}$/;
      if (!memberNick.value.match(regExp)) {
        memberNickInfo.innerHTML = `형식이 올바르지 않습니다.`;
        return false;
      } else {
        memberNickInfo.innerHTML = `ok`;
        return true;
      }
    }
  } else if (state === "focus") {
    memberNickInfo.innerHTML = `닉네임은 한글,영문,숫자 2-10자리 입력바람.`;
  }
}
//E-mail체크
function memberEmailCheck(state) {
  const memberEmail = document.querySelector("#memberEmail");
  const memberEmailInfo = document.querySelector("#memberEmailInfo");
  if (state === "blur") {
    if (memberEmail.value === "") {
      memberEmailInfo.innerHTML = `필수입력사항입니다.`;
      return false;
    }
  } else if (state === "focus") {
    memberEmailInfo.innerHTML = `형식에 맞게 입력해 주세요.`;
  }

}
//전화번호 체크
function memberTellCheck(state) {
  const memberTell = document.querySelector("#memberTell");
  const memberTellInfo = document.querySelector("#memberTellInfo");
  if (state === "blur") {
    if (memberTell.value == "") {
      memberTellInfo.innerHTML = `필수입력사항입니다.`;
    } else {
      let regExp = /^[0-9]{3}-[0-9]{3,4}-[0-9]{4}/;
      if (!memberTell.value.match(regExp)) {
        memberTellInfo.innerHTML = `형식에 맞게 입력해주세요.`;
      } else {
        memberTellInfo.innerHTML = `ok`;
      }
    }
  } else if (state === "focus") {
    memberTellInfo.innerHTML = `숫자, -을 포함해 휴대전화 형식에 맞게 입력해주세요.`;
  }
}
//휴대폰 번호 체크
function memberPhoneNumCheck(state) {
  const memberPhoneNum = document.querySelector("#memberPhoneNum");
  const memberPhoneNumInfo = document.querySelector("#memberPhoneNumInfo");
  if (state === "blur") {
    if (memberPhoneNum.value == "") {
      memberPhoneNumInfo.innerHTML = `필수입력사항입니다.`;
      return false;
    } else {
      let regExp = /^[0-9]{3}-[0-9]{3,4}-[0-9]{4}/;
      if (!memberPhoneNum.value.match(regExp)) {
        memberPhoneNumInfo.innerHTML = `형식에 맞게 입력해주세요.`;
        return false;
      } else {
        memberPhoneNumInfo.innerHTML = `ok`;
        return true;
      }
    }
  } else if (state === "focus") {
    memberPhoneNumInfo.innerHTML = `숫자, -을 포함해 휴대전화 형식에 맞게 입력해주세요.`;
    return false;
  }
}


