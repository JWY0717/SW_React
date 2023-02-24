import { useState, useEffect } from "react";
import BoxofficeDetail from "./BoxofficeDetail";

const Boxofficelist = ({ tDt }) => {

    const [mvlist, setmvlist] = useState();
    const [mvcd, setCd] = useState();


    //영화클릭
    const showDetail = (cd) => {
        console.log(cd)
        setCd(cd);
    }


    //맨처음 랜더링
    useEffect(() => {
        console.log(tDt)
        if (!tDt) return;
        const apikey = 'f5eef3421c602c6cb7ea224104795888';
        let url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${apikey}&targetDt=${tDt}`;
        fetch(url)
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data);
            let list = data.boxOfficeResult.dailyBoxOfficeList;
                setmvlist(list.map((item) =>
                    <div className="mvrow" key={item.movieCd} onClick={() => showDetail(item.movieCd)}>
                        <span className="mvcol1"><span className="mvrank">{item.rank}</span></span>
                        <span className="mvcol2">{item.movieNm}</span>
                        <span className="mvcol3">{parseInt(item.audiCnt).toLocaleString('kr-ko')}</span>
                    </div>
                ));
            })
            .catch((err) => console.log(err))
    }, [tDt]);


    useEffect(() => {
        console.log(mvlist)
    }, [mvlist]);
    return (

        <div className="mvcontent">
        <div className="mvlist">
            <div className="mvrow0">
                <span className="mvcol1">순위</span>
                <span className="mvcol2">영화명</span>
                <span className="mvcol3">관객수</span> 
            </div> 
            {mvlist}    
        </div>
        <div className="mvdetail">
             {mvcd && <BoxofficeDetail mvcd={mvcd}/>}
        </div>
    </div>
);
}

export default Boxofficelist;