import Mydiv11 from "./Mydiv11";
import { useState,useEffect } from "react";       //useState 호출 법!!!

const Mydiv1 = ({rname, n, setN}) => {           //속성값이 있으면 받겠다  probs는 
                                        //probs는 부모 컴포넌트에서 자식컴포넌트에게 값을 주고 싶을 때 사용!   함수도 전달이된다!                   
    const user = rname ;                //부모의 state값도 변경 가능!!!
                                        
    let [cnt, setCnt] = useState(0) ;   //hook: useState 사용 함수 ....  useState 사용 함수는 [ ] 배열 형식으로 받아야 함!  //
                                        
    const addCnt = () => {              //{addcnt}의 함수를 불러 button 클릭!  하지만 setCnt(++cnt) ;안하면 화면에는 버튼 증가 표식이 안됨
        setCnt(++cnt) ;
        //if (cnt % 2 == 0){

        //    }
        //set(cnt % 2 ==0? cnt * 10 : cnt);    
        //cnt = cnt + 1 ;

        
        console.log(cnt);  
    } ;

    useEffect(() => {                                               //useEffect는 3가지 경우
        console.log('변경되었습니다')
        
    },);


    useEffect(() => {
        console.log('Mydiv1에 처음입니다')
        return(
            console.log('종료......')
        )
    },[]);



    useEffect(() => {
        console.log("cnt값 변경")
        setCnt(++n);
    },[cnt])

    //useEffect(() =>{},[])   useEffect기본형!!!

    return (
        <div className="mydiv1">
            <h2 className="divh2">Mydiv1 {user} {n}</h2>
            <Mydiv11 user={user}  divname={'사용자 정의' + cnt } /> ;
            <div className="divbt"> 
                <button onClick={addCnt}>💖</button>       
                <span>{cnt}</span>                     
            </div>   
        </div>
    );

}
//{addcnt}의 함수를 불러 button 클릭!  하지만 setCnt(++cnt) ;안하면 화면에는 버튼 증가 표식이 안됨
export default Mydiv1 ;