import { Link } from 'react-router-dom' ;
const Wheader = ({title}) => {

    return (
        <>

            <div className="wheader">
                <h1>{title}</h1>

                <div className="wh">
                    <Link to ="/">🔄(홈으로 돌아가기)</Link>



                </div>

            </div> 
            </>
            )
}








            export default Wheader;