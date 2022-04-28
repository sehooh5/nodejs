# nodejs
- just for studying node.js
- 레퍼런스
  - 모던웹을 위한 Node.js 프로그래밍(책)
  - 생활코딩
  - [참고 블로그](https://hoony-gunputer.tistory.com/entry/Do-it-Nodejs-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D-%EC%84%9C%EB%B2%84%EC%97%90%EC%84%9C-%EB%8B%A4%EB%A5%B8-%EC%9B%B9%EC%82%AC%EC%9D%B4%ED%8A%B8%EC%9D%98-%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%A5%BC-%EA%B0%80%EC%A0%B8%EC%99%80-%EC%9D%91%EB%8B%B5%ED%95%98%EA%B8%B0)



## basic



#### 1. nodejs 는 비동기식으로  **javascript**를 이용해서 웹서버를 만드는 것

- 여러 작업을 동시에 처리
- 콜백함수로 비동기를 가능케하는데, 호출된 함수의 인자로 다른 함수가 전달되어서 호출된 함수가 끝나면  인자로 전달된 함수가 실행됨



#### 2. 모듈

- 어플리케이션을 구성하는 개별적 요소 (ex. npm)
- **require**('모듈이름') 메소드를 통해서 모듈이 제공하는 함수나 객체 등을 반환한다. 
- 노드에서 하나의 JS 파일은 하나의 모듈이 될 수 있다. 이때 JS 파일 내부에 함수나 변수를 **module.exports**에 할당하면 <u>외부에서 접근</u>할 수 있다.



#### 3. express

- 웹 및 모바일 애플리케이션을 위한 기능을 제공하는 간결하고 유연한 **Node.js 웹 애플리케이션 프레임워크**
- 웹 애플리케이션을 만들기 위한 각종 라이브러리와 미들웨어 등이 내장되어 개발하기 용이
- 개발 규칙을 강제하여 코드 및 구조의 통일성을 향상





## daily

#### 0103

- node js 본격적으로 시작



#### 0104

- 모던웹 책으로
- file 시작 전에 멈춤
  - 새로운 과제 시작단계



#### 0107

- file 부터 다시시작



#### 0117

- 노드 재시작



#### 0118

- 이벤트 핸들러



#### 0119

- 강제발생 등등 시작



#### 0120

- 이벤트 책으로 다시 진행중



#### 0121

- 맥북에 노드 공부환경 만들어 놓기



#### 0214

- 노드 서버구성 및 실행시키기
- 이벤트 호출 및 파일 작성 



#### 0215

- 마이크로 서비스 구성
- 서버 / 기능1 / 기능2



#### 0216

- 책으로 다시 시작



#### 0218

- 핸드캐리 관련한 사업
- 개발자 위한 소품?
- 창업 관련 지원
  - 예비창업패키지
    - 2월 사업 공고 / 3월 신청 접수
    - https://www.k-startup.go.kr/
  - 창업 사관학교
    - 1월 예정 / 1~2월 신청 접수
    - https://www.k-startup.go.kr/
  - 창조경제혁신센터
    - 연중 수시
    - 직접 방문 및 https://ccei.creativekorea.or.kr/
  - 신사업 창업사관학교
    - 1월 예정 / 2~3월 신청 접수
    -  http://newbiz.sbiz.or.kr
  - 실전 창업교육
    - 1월, 6월 공고 및 접수
    - https://www.k-startup.go.kr/
  - 경기 기술창업 지원프로그램
    - 2월 사업공고 / 3월 신청 접수
    - https://www.gsp.or.kr





#### 0316

- 위 참고자료의 블로그 이용하여 기본적 내용 연습



#### 0317

- 파라미터 추가하는 부분부터 시작하면 됨
- post, get 요청 및 파라미터 사용까지



#### 0322

- 파라미터 다음부터



#### 0323

- 오류페이지 만들기 시작



#### 0328

- node 책으로 다시 시작



#### 0401

- node 책으로 프로젝트 예시까지 해보기



#### 0404

- ejs 모듈부터 시작
- 템플릿 엔진 사용 
  - 동적 웹페이지를 생성할 때 사용
  - ejs, jade 템플릿 엔진 모듈
- nodejs 에서 가장 많이 사용되는 웹 프레임워크인 express 프레임워크가 템플릿 엔진으로 ejs 와 jade 를 사용



#### 0405

- jade까지 완료 다음 서버실행모듈
  - supervisor : 파일의 변경을 자동으로 인식하고 종료 후에 실행해주는 모듈
  - forever : nodejs 같은 단일 스레드 기반의 웹 서비스는 예외 하나로 웹서비스가 죽는다.. 이러한 예외 상황을 대비하기위해 만들어진 모듈
- **express 모듈**
  - http 모듈에 여러 기능을 추가해 쉽게 사용할 수 있게 만든 모듈



#### 0406

- static 미들웨어부터 시작



#### 0418

- 복귀 static 시작
- cookie, bodyparser 등등



#### 0419

- 파일 업로드 시작
- 책내용으로는 안되서 `connect-multiparty` 라는 모듈을 다운받아서 사용함



#### 0425

- fileupload 부터 다시시작
- session 미들웨어 진행
- Restful 웹 서비스 개발 진행



#### 0426

- Restful 웹서비스 이어서 진행



#### 0428

- mongo DB 연동

