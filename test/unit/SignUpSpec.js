// 로그인 기능의 test
// 구현해야 할 기능을 생각해보자. 
// 이메일, google, facebook 선택
// 1.이메일인 경우
// 1-1) 이메일 검증
//  - @를 포함해야한다. 
//  - 영문만 포함되어야 한다. 
//  - 규칙에 맞지 않으면 에러를 표시해서 사용자에게 알려줘야한다.
// 1-2) 비밀번호 검증
//  - 영문,숫자,특수문자(규칙정해야함) 만 포함
//  - 최소길이와 최대길이 
//  - 규칙에 맞지 않으면 에러를 표시해서 사용자에게 알려줘야한다.
// 1-3) 비밀번호 확인(비밀번호 두번입력하는 부분) 
//  - 첫번째 입력한 값과 같아야 한다. 
//  - 첫번째 값과 다르면 에러를 표시해서 사용자에게 알려줘야한다.
// 1-4) 이름설정 
//  - 중복 확인 필요
//  - 중복된 이름이 있는 경우 에러를 표시해야한다.
//  - 특수문자나 문자의 정해진 규칙에 맞아야 한다. 
//  - 최소길이와 최대길이
//  - 규칙에 맞지 않는 경우 에러를 표시해야한다. 
// 1-5) 사진설정
//  - 정해진 파일 형식에 맞아야한다.  
//  - 사진을 설정하지 않는 경우, 디폴트로 설정되는 이미지가 있어야한다. 
// 1-6) firebase 통신
//  - 이메일은 users의 id
//  - 이름은 users의 name
//  - 비밀전호는 users의 password
//  - 사진은 firebase 스토리지에 저장된 다음 database 인가? 


// sns인 경우
// 1. firebase auth를 통해서 일단 로그인
// 2. 유저키를 users에 추가
// 3. 유저키 아래에 data들 추가. id,name,picture
// 4. password는 null ?
// 끝??

describe("signup.js", function(){
  var c = require('./../../src/components/SignUp/SignUp.vue');
  it('signUpByGoogle은 함수이다', function(){
    const google = c.methods.signUpByGoogle
    expect(typeof google).toBe('function');
  });
});