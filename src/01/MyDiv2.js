import logo from '../logo.svg';

const  MyDiv2 = () => {          
    const myName ='장우영' ;
    const myGit ='https://github.com/JWY0717?tab=repositories';
    console.log(myName)
    return (  
      <div >  
            <p>{myName}</p>
            <p>GiHub :  <a href={myGit}>{myGit}</a></p>
      </div>  
    );
  }


export default MyDiv2;