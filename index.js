//node_modules 파일은 github 파일에 넣지 않습니다. express 등 모든 모듈은 package.json을 읽고 모듈을 찾아 직접 설치하면 됩니다.
const express = require("express");
const http = require("./src/httpServer");
const app = express()

//최대한 배우던 방식 그대로 코딩합니다...만 2가지 규칙을 지켜주세요.
// 1. 함수 입력시, src 파일 내부에 있는 js 파일(필요하면 추가해도됨.) 에 입력해주세요.
// 2. 최대한 이 파일은 짧고 간결하게 해주세요. 다른 복잡한 내용은 다른 파일에서 하시구요.


//노란색 함수를 클릭한 다음 F12를 눌러보세요!!
app.listen("8080",http.ShowURL);
app.get('/',http.SendMainpage);