import {useLocation} from 'react-router-dom'
import qs from 'query-string' ;

const RoutePage2 = () => {
    //주소의 ?뒤에 부분이 파라미터임//
    let location = useLocation().search ;
    console.log("location",location);

   // let location = 'https://m.post.naver.com/viewer/postView.naver?volumeNo=35164615&memberNo=38753951&vType=VERTICAL'
   // location = location.split('?')[1] ;
    let item = qs.parse(location).item ;
    console.log("item",item);

    const fruits = ['사과','바나나'] ;
    //if ( fruits.includes(item)) tag =  "과일입니다." ;
    //else tag = "과일이 아닙니다" ;

    let tag = fruits.includes(item) ? "과일입니다." : "과일이 아닙니다." ; 


    return (
        <>
            <h1>Page2</h1>
            
        </>
    )

}
export default RoutePage2;