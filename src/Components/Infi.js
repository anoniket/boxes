import React,{useState,useEffect} from "react";
import InfiniteScroll from "react-infinite-scroll-component";


function Infi(){
 

    const [bigArr,setBigArr] = useState([]);
    const [smallArr,setSmallArr] = useState(["Hello","Hello"]);
   

    const fetchMoreData = () => {
        setTimeout(() => {
            setSmallArr((prev)=>[...prev,"Hello"]);
        }, 100);
      };
    


   



    return(
        <div>
        
        <InfiniteScroll
          dataLength={smallArr.length}
          next={fetchMoreData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          {smallArr.map((i, index) => (
            <div style={{height:"100vh",width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}} key={index}>
              Hello
            </div>
          ))}
        </InfiniteScroll>
      </div>
        
    
    )
}

export default Infi;