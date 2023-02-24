const Async = () =>{

    const funcA = () => {
        console.log("함수명령");
    }

    console.log("명령1");
    console.log("명령2");                       
    setTimeout(() => {
        console.log("타임 아웃 명령1")
        setTimeout(() => {
            console.log("타임 아웃 명령2")
            setTimeout(() => {
                console.log("타임 아웃 명령3")
            }, 500);
        }, 100);
    }, 1000);
    
   
  

 

    console.log("명령3");               //"명령 3"은 "타임 아웃 명령1"값이 나오기 1초전에 먼저 입력이 된다.!

    return(
        <>
        </>
    );
}

export default Async ;