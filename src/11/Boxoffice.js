import Boxofficelist from './Boxofficelist';
import "./Boxoffice.css";
import { useState, useEffect, useRef} from "react";
//useRef : input box에 포커스 주기위해 사용
//state : 날짜가 선택되면 목록이 랜더링 되게 하기위해
//fetch data의 targetDt=20230214

const Boxoffice = () => {

    //상영일 선택 state변수
    const [targetDt, setTargetDt] = useState();

    //input 제어
    const mvdr = useRef();


    //처음 랜더링!
    useEffect(()=> {
        mvdr.current.focus();
    },[]);

    //targetDt변경시
    useEffect(()=> {
    //    console.log("targetDt",targetDt)
    }, [targetDt]);

    //input 이벤트 
    const handleMV =  () => {
       console.log(mvdr.current.value)

    //targetDt로 줘야하는 값 (-기호는 빼고 전달해야함)
        setTargetDt(mvdr.current.value.replaceAll('-',''))
    }
     return(
        <>
            <div className="mvh">
                <h1>박스오피스</h1>
                <form>
                    <input type= "date" name = "mvd" ref={mvdr} onChange={handleMV} />
                </form>
            </div>
            <div className="mvmain">
               <Boxofficelist tDt={targetDt} />
            </div>
        </>
    );
}

export default Boxoffice  ;