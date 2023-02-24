import data from "../db/data.json";
import GalCard from "./GalCard";
import "./Gal.css";
//import GalCard2 from "./GalCard2";
import { useRef, useState, useEffect } from "react";

const GalSelect = () => {


    //데이터 가져오기
    const items = data.response.body.items.item;
    console.log("items",items)
    const c1 = items.map((obj) =>obj.galTitle); 
    console.log("c1", c1)
    // console.log("c1", c1.map((v, k) => console.log(v, k)))

    //object 연습
    // let item0 = items[0]
    // //keys
    // console.log("item0", item0)
    // console.log("item0", Object.keys(item0))
    // //values
    // Object.keys(item0).map((v, k) => console.log(v, k) )
    // console.log("item0", Object.values(item0))
    // Object.keys(item0).map((v, k) => console.log(v, k) )

    // Object.entries(item0).map((v, k) => console.log(v, k) )




    //랜더링 제어변수
    //
    //  const [selItem, setSelItem] = useState({});   {/* {Object.keys(selItem).length > 0 && <GalCard cardItem={selItem} />*/}
    const [selItem, setSelItem] = useState();

    //select box 제어
    const selR = useRef();

    // let optionTag = [
    // <option  key={c1[0]}value={c1[0]}>{c1[0]}</option>,
    // <option  key={c1[1]}value={c1[1]}>{c1[1]}</option>,
    // <option  key={c1[2]}value={c1[2]}>{c1[2]}</option>,
    // <option  key={c1[3]}value={c1[3]}>{c1[3]}</option>,
    // <option  key={c1[4]}value={c1[3]}>{c1[3]}</option>,
    // <option  key={c1[5]}value={c1[3]}>{c1[3]}</option>,
    // <option  key={c1[6]}value={c1[3]}>{c1[3]}</option>,
    // <option  key={c1[7]}value={c1[3]}>{c1[3]}</option>,
    //     ]
    // ;

    let optionTag = c1.map((item) =>
                    <option key={item} value={item}>{item}</option>
                    );


    //컴포넌트가 처음 렌더리이 일어났을 때
    useEffect(() => {
        selR.current.focus();
        console.log(selR.current)
    }, []);



    const handleSel = (e) => {
        e.preventDefault();
        console.log("onChange", selR.current.value)
        let temp ;
        temp =items.filter((item) => item.galTitle === selR.current.value);
      //  console.log("onchange temp",)
        setSelItem(temp[0]);
    }




    return (
        <>
            <div className="conright">

                <form>
                    <select ref={selR} name="sel1" onChange={handleSel} onClick={handleSel}>
                        <option value=" ">항목을 선택하세요 </option>
                        {optionTag}
                    </select>
                </form>
               
                {/* {Object.keys(selItem).length > 0 && <GalCard cardItem={selItem} />*/}
                { selItem && <GalCard cardItem={selItem} />} 



                </div>

        </>

    );



}
export default GalSelect;