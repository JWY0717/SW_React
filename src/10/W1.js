import Wheader from "./Wheader";
import keys from '../db/item.json'
import weather2 from '../db/weather2.json'
import { useState, useEffect} from "react";

const W1 = () => {
    
    const [items, setItems] = useState();  //useState는 변수 컴포넌트를 재렌더링
    const [itemTag, setItemTag ] = useState();


    // useEffect
    // 렌더링이 발생이 될 때마다 실행
    // useEffect(() =>{});


    // useEffect
    // 맨처음 컴포넌트 랜더링시 실행
       useEffect(() =>{
        setItems(weather2.response.body.items.item);
       }, []);


    //특정 state변수 변경시 실행
       useEffect(() =>{
        if  (!items) return ;

        console.log("items",items);
        let temp = items.map((i, n) =>
            <div className="w2div" key={"w2div" + n}>
                <span className="sp0">{keys[i.category][0]}</span>
                <span className="sp1">{i.obsrValue}</span>
                <span className="sp2">{keys[i.category][1]}</span>
            </div>
        );

            setItemTag(temp);
       }, [items]);

    return (
        <>
            <div className="content">
                <Wheader title={'일기예보-단기'} />
                {items && itemTag}
               
                   
            </div>
        </>
    );

}

export default W1;