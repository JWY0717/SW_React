const Mydiv21 = (probs) => {
    const user = probs.user ;

    console.log("div21",probs)
    return (
        <div className="mydiv21">
            <h3 className="divh3">Mydiv21</h3>
            
            <p> {user} </p>
            
            <p> {probs.divname}</p>
        </div>
    );

}

export default Mydiv21 ;