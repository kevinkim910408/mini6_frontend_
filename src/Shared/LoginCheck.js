// 로그인, 회원가입 유효성 검사 파일

// 아이디 형식 검사
export const idCheck = (username) => {
  let _reg = /^[가-힣a-zA-Z0-9-_.]{2,10}$/;

  return _reg.test(username);
};
// 비밀번호 체크

export const passwordCheck = (passwordcheck) => {
  let regPass = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z!@#$%^&*]{6,20}$/;

  return regPass.test(passwordcheck);
};
// 정규식
// ^ => 시작
// (?=.*\d) => 0~9까지의 숫자 표현
// (?=.*[a-zA-Z]) => 알파벳
