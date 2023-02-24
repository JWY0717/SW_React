import GalHeader from "./GalHeader";
import GalData from "./GalData";
import GalTitle from "./GalTitle";
import "./Gal.css";
import { useState, useEffect,useRef } from "react";


const GalM =({c1,dataAll}) => {

    console.log("c1",c1);    
    console.log("dataAll",dataAll) ;

 //카테고리 선택
let [selC1, setSelC1] =useState() ; 

//상세내용 가져오기
let [selData, setSelData] = useState({}) ; 

const txtR = useRef();


    useEffect(() => {
        txtR.current.focus();
    }, []) ;


    useEffect(() => {
        console.log("selC1" , selC1);
    }, [selC1]) ;

    useEffect(() => {
        if (selC1) {
            setSelData(dataAll.filter((item) => item.galTitle === selC1)[0])
        }
    }, [selC1])

    //선택 된 세부내용 뿌려주기
    useEffect(()=>{
        console.log("selData",selData);
    },[selData]);

    
    const[c1Tag, setC1Tag] = useState([]);
    const showC1 = () =>{
        console.log(txtR.current.value);
        let temp =c1.filter((i) => i.includes(txtR.current.value))
        setC1Tag(temp);
        setSelC1('');
      
    }

    return (
    
        <div className="content">
            <div className="header">
                
            <GalHeader />   

            
            
        </div>  
        <div className="form-tag">
                <form>
                    <input ref={txtR} type="text" name="txt1" onChange={showC1} />
                    <button type="reset">취소</button>
                </form>


            </div>
          
        <div className="main">
                <GalTitle c1 = {c1Tag} selC1 = {selC1} setSelC1 = {setSelC1}/>
                <GalData selData = {selData} />      
            </div>
        
        </div>
        

    );

}

export default GalM;
    
    
    




    
