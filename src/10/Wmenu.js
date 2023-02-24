import { Link } from 'react-router-dom';
import Wheader from "./Wheader";
const Wmenu = () => {

    return (
        <>

            <div className='content'>
                <Wheader title={'일기예보'} />

                <div className="wmain">
                <button className='a'><Link to="/w1">단기예보</Link></button>
                <button className='b'><Link to="/w2">장기예보</Link></button>
                </div>

            </div>
        </>
    )
}








export default Wmenu;