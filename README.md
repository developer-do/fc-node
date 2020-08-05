# fc-node

### node.js 란?

- 웹 브라우저에서 쓰이는 자바스크립트를 서버에서 사용가능하게 만든것 ( 자바스크립트 문법 서버에서 사용 가능 )
- 무엇이 가능하게 했나? 
  - V8의 탑재로 인해서
- V8 이란? 
  - 크롬에 탑재된 자바스크립트 엔진이다.
- 대용량 서비스를 위해 Ryan Lienhart Dahl 이 개발
- 출처 https://ko.wikipedia.org/wiki/Node.js

### node.js 설치하기

- node.js를 검색 후 LTS (안정, 신뢰버전 다운로드)
- window일 때를 가정
  - cmd창을 열고 
  - node -v 로 node 버전을 확인 (현재 나의 버전 v12.18.3)
  - npm -v 로 npm 버전을 확인 (현재 나의 버전 6.14.6)

### 에디터 설치하기

- vscode를 사용하며 atom이나 webstorm을 사용해도 무방하다.
- 사용하고 있는 에디터가 있으면 그대로 사용하면 된다.
- vscode를 검색 후 자신의 운영체제에 맞는 window, macos에 맞춰 download를 한다.

### 모듈 패턴

- 내보낼 때
  - Module.exports 변수
- 불러올땐
  - require 파일명