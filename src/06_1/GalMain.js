import './Gal.css' ;
import GalCard from './GalCard';
import { useState, useEffect } from 'react';
import { useRef } from 'react';

const GalMain = ({c1, item}) => {
    //console.log("GalMain item", item) ;
    //console.log("GalMain c1", c1) ;

    const txtR = useRef() ;
    useEffect(()=>{
        txtR.current.focus()
    }) ;
    const [c1tag, setC1tag] = useState([]) ;
    const showc1 = () => {
        console.log(txtR.current.value) ;
        let temp = c1.filter((i) => i.includes(txtR.current.value)) ;
        setSelc1('') ;
        setC1tag(temp.map( (i) => 
            <li className={i === selc1 ? 'ulis' : 'uli'} onClick={() => selItem(i)} key={i}> 
            {i} 
            </li>
        )) ;
    }

    const [selc1 , setSelc1] = useState() ;
    const [cardItem, setCardItem] = useState() ;

    useEffect(()=>{
        console.log("selc1" , selc1)
        //setCardItem(item.filter((i) => i["galTitle"] === selc1)[0]);
        setCardItem(item.filter((i) => i.galTitle === selc1)[0]);
    }, [selc1]);

    useEffect(()=>{
        console.log("cardItem" , cardItem) 
    }, [cardItem]);

    const selItem = (i) => {
        setSelc1(i) ;
    }

    return (
        <div className="content">
            <div className="conleft">
                <div>
                    <form>
                        <input ref={txtR} type="text" name='txt1' onChange={showc1}/>
                        <button type='reset'>취소</button>
                    </form>
                </div>
                <ul>
                    {c1tag}
                </ul>
            </div>
            <div className="conright">
                {cardItem && <GalCard cardItem={cardItem} />}
            </div>
        </div>
    ) ;
}

export default GalMain ;