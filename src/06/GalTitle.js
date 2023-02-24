const GalTitle= ({c1,selC1,setSelC1}) => {

    const handleSelect = (item) => {
        setSelC1(item);
    }
    //화면 표시

    let c1Tag = [...c1];
    c1Tag = c1.map((item) => 

        <div className={item === selC1 ? "c1Sel" : "c1Tag"}
         key={item} onClick={()=> handleSelect(item)}> {item} </div>

    
    ) ;

    return (
        <div className="gc1">
            <div className="ggc1">
            {c1Tag}
        </div>

        </div>
    );


}
export default GalTitle;
