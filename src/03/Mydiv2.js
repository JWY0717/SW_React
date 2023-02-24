import Mydiv21 from "./Mydiv21";

const Mydiv2 = (probs) => {

    const user = probs.user ;
    return (
        <div className="mydiv2">
            <h2 className="divh2">Mydiv2{probs.user}</h2>
            <Mydiv21 user={user}divname={'사용자 정의' + probs.div2} /> 
        </div>
    );

}

export default Mydiv2 ;