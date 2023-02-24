

const Frccn = ({dt, cn}) => {
//console.log('cn:', cn)
    
let infoArry = cn.split(',');
let kn = 0;


dt && (infoArry = infoArry.map((v) =>  //map함수 한줄짜리 리턴함수 : 삼항연산자 이용해서 if/else문 사용가능
    
 
    <li key = {dt + kn++}>
        <span>{v.split(':')[0]}</span>
        {
        v.includes('높음') ?
        <span className='lired'>{v.split(':')[1]}</span> 
         :
         <span>{v.split(':')[1]}</span>  
        }
    </li> 
));

return (
    <div className="mainbox2">
        <div className='detail'>
            <ul>
                {infoArry}
            </ul>
        </div>
    </div>
);

}

    export default Frccn;