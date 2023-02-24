const Async = () =>{

    //url 주소 데이터 가져오는 fetch 방법!//
    const url = 'http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20230214';
    
    fetch(url)
 //.then의 순서로 실행됨
    .then((resp) => resp.json())            //fulfii일때
    .then((data) => console.log(data))      //비동기 : json데이터가 있을때 object type으로 반환
    .catch((err) => console.log(err))       //리젝트일때 실행



    return(
        <>
        </>
    );
}

export default Async ;