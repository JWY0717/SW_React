import Frccn from './Frccn';
import Frcdt from './Frcdt';
import Frcheader from './Frcheader';
import './Frcst.css';
import { useState,useEffect} from 'react';


//State 변수를 쓰게 되면 변환된 값이 계속 변경되면서 입력될 수 있다


const Frcst = () => {
    /* 공공데이터포털 : 한국환경공단_에어코리아_대기오염정보
    frcstOneCn : 첫째날예보
    frcstTwoCn : 둘째날예보
    frcstThreeCn : 셋째날예보
    frcstFourCn : 넷째날예보



    frcstOneDt : 첫째날예보일시
    frcstTwoDt : 둘째날예보일시
    frcstThreeDt : 셋째날예보일시
    frcstFourDt : 넷째날예보일시
    */
    // let [cn, setCn] =useState();

    const items = [
        {
        "frcstFourDt":"2023-02-05",
        "frcstThreeDt":"2023-02-04",
        "frcstTwoCn":"서울 : 낮음, 인천 : 낮음, 경기북부 : 낮음, 경기남부 : 낮음, 강원영서 : 낮음, 강원영동 : 낮음, 대전 : 낮음, 세종 : 낮음, 충남 : 낮음, 충북 : 낮음, 광주 : 낮음, 전북 : 낮음, 전남 : 낮음, 부산 : 낮음, 대구 : 낮음, 울산 : 낮음, 경북 : 낮음, 경남 : 낮음, 제주 : 낮음, 신뢰도 : 보통",
        "gwthcnd":"2월 4일~5일은 중서부지역을 중심으로 국외 미세먼지가 유입되는 가운데 대기 정체로 축적되어 4일 인천· 경기남부·충남, 5일 인천·경기남부·충북·충남에서 미세먼지 농도가 '높음'일 것으로 예상됩니다.",
        "frcstTwoDt":"2023-02-03",
        "frcstFourCn":"서울 : 낮음, 인천 : 높음, 경기북부 : 낮음, 경기남부 : 높음, 강원영서 : 낮음, 강원영동 : 낮음, 대전 : 낮음, 세종 : 낮음, 충남 : 높음, 충북 : 높음, 광주 : 낮음, 전북 : 낮음, 전남 : 낮음, 부산 : 낮음, 대구 : 낮음, 울산 : 낮음, 경북 : 낮음, 경남 : 낮음, 제주 : 낮음, 신뢰도 : 보통",
        "frcstThreeCn":"서울 : 낮음, 인천 : 높음, 경기북부 : 낮음, 경기남부 : 높음, 강원영서 : 낮음, 강원영동 : 낮음, 대전 : 낮음, 세종 : 낮음, 충남 : 높음, 충북 : 낮음, 광주 : 낮음, 전북 : 낮음, 전남 : 낮음, 부산 : 낮음, 대구 : 낮음, 울산 : 낮음, 경북 : 낮음, 경남 : 낮음, 제주 : 낮음, 신뢰도 : 보통",
        "frcstOneDt":"2023-02-02",
        "frcstOneCn":"서울 : 낮음, 인천 : 낮음, 경기북부 : 낮음, 경기남부 : 낮음, 강원영서 : 낮음, 강원영동 : 낮음, 대전 : 낮음, 세종 : 낮음, 충남 : 낮음, 충북 : 낮음, 광주 : 낮음, 전북 : 낮음, 전남 : 낮음, 부산 : 낮음, 대구 : 낮음, 울산 : 낮음, 경북 : 낮음, 경남 : 낮음, 제주 : 낮음, 신뢰도 : 높음",
        "presnatnDt":"2023-01-30"
        }
        ]

        /*let fcrDt = [];

        fcrDt[0] = fcrDt.push{item"frcstOneDt"};
        fcrDt[1] = fcrDt.push{"frcstTwoDt"};
        fcrDt[2] = fcrDt.push{"frcstThreeDt"};
        fcrDt[3] = fcrDt.push{"frcstFourDt"};

        console.log(fcrDt);


        let fcrCn = [];
        fcrCn[0] = fcrCn.push{"frcstOneCn"};
        fcrCn[1] = fcrCn.push{"frcstTwoCn"};
        fcrCn[2] = fcrCn.push{"frcstThreeCn"};
        fcrCn[3] = fcrCn.push{"frcstFourCn"};
        console.log(fcrDt);*/

       let frcdt =  ["frcstOneDt","frcstTwoDt","frcstThreeDt","frcstFourDt"];
       let frccn =  ["frcstOneCn","frcstTwoCn","frcstThreeCn","frcstFourCn"];
       

       //예보일자별 배열 추출
       frcdt = frcdt.map((k) => items[0][k]) ;  //k는 아무거나 변수값 ex=a, i , k
       frccn = frccn.map((k) => items[0][k]) ;  

        // let temp = [];
        //    for(let k of fcrdt) {
        //       temp.push(item[0][k]);
        //    }
        //   fcrdt = temp ;

     //  console.log("fcrdt",fcrdt);
     //  console.log("fcrcn",fcrcn);

       //일자별 예보 오브젝트 생성
       let frcobj = {} ;

       for(let [idx, k] of frcdt.entries()) {
        //console.log('idx=', idx, 'value=', k,'cnvalue=',fcrcn[idx])
        frcobj[k] = frccn[idx];
    }
      //  console.log("fcrobj", fcrobj);

      let [cn, setCn] =useState(frcobj["2023-02-02"]);  //fcrcn[0]
      let [dt, setDt] =useState();
      


        //하위 컴포넌트에서 상위 컴포넌트로 
    useEffect(() => {                                   //dt가 빠뀌어야 cn이 빠뀌기 떄문에 useEffect를 쓴다!!
        console.log(frcobj[dt]);
        frcobj[dt] && setCn(frcobj[dt]);
    }, [dt]);
    return (
        <>
         
            <Frcheader />
            <p>{dt}</p>
            <div className="main">
                <Frcdt dt={frcdt} setDt={setDt}/>
                <Frccn cn = {cn}/>
                <Frcdt frcdt = {frcdt} setDt = {setDt}/>
                {dt && <Frccn dt={dt} cn={cn}/> }
            </div> 
            
            
        
        </> 
  

    


    );
}
    
    export default Frcst ;