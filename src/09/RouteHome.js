import {Link, useParams} from 'react-router-dom'
import { useNavigate } from "react-router-dom";
const RouteHome = () => {
    const navigate = useNavigate() ;
    const url ={
        'μ¬κ³Όπ' : '/p2?item=μ¬κ³Όπ' ,
        'λ°λλπ': '/p2?item=λ°λλπ' ,
        'λΉκ·Ό π₯' : '/p2?item=λΉκ·Ό π₯' 
    }

    const gourl = (item) => {
        // navigate(url[item]);
        if (item === 'μ¬κ³Όπ')navigate('/p2?item=μ¬κ³Όπ');
        else if (item === 'λ°λλπ')navigate('/p2?item=λ°λλπ');
        else if (item === 'λΉκ·Ό π₯')navigate('/p2?item=λΉκ·Ό π₯');
    }

    
    return (
        <>
            <h1>Home</h1>

            <h2>νλΌλ―Έν° μ μ‘</h2>
            <ul>
            
                <li><Link to='/p1/μ¬κ³Ό'>μ¬κ³Όπ</Link></li>
                <li><Link to='/p1/λ°λλ'>λ°λλπ</Link></li>
                <li><Link to='/p1/λΉκ·Ό'>λΉκ·Όπ₯</Link></li>

            </ul>

            <h2>νλΌλ―Έν° μ μ‘2</h2>
            <button onClick={() => gourl('μ¬κ³Όπ')}>μ¬κ³Όπ</button>
            <button onClick={() => gourl('λ°λλπ')}>λ°λλπ</button>
            <button onClick={() => gourl('λΉκ·Όπ₯')}>λΉκ·Όπ₯</button>

        </>
    )

}
export default RouteHome;