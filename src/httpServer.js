const path = require('path');

//팁: /** 라고 치면 VSCode 기준 자동으로 JSDoc 마크업 주석을 달수 있습니다.
// <- 주석이랑 /** */ 주석은 특징이 다르다는 점을 기억해주셨으면 좋겠습니다.
// JSDoc 를 함수위에 두면, VSCode 기준 함수의 설명문과, 타입을 확인할 수 있습니다.


/**http://localhost:8080/ 을 출력합니다.
 * ctrl+click 하면 바로 링크 들어가집니다.*/
function ShowURL(){
    console.log("http://localhost:8080/")
}

/**
 * 메인 페이지를 들어갔을때, mainpage.html을 전송하는 함수입니다.
 * @param {Request} req http 요청
 * @param {Response} res http 답변
 */
function SendMainpage(req,res){
    res.sendFile(path.join(__dirname, '..', 'public', 'mainpage.html'));
}


module.exports = {
    ShowURL,
    SendMainpage
}