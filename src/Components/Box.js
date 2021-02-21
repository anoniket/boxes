import React,{useState} from "react";

import "../Styles/box.css";

function Box(){

     
    const [divarr,setDivarr] = useState([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16])
    const [redArr,setRedArr] = useState([]);
    const [firstel,setFirstel] = useState("");
    
    function handleit(x){
       
        if(redArr.length<2){
           
            setRedArr((prev)=>[...prev,x]);
            document.getElementById(x).style.backgroundColor = "#ff0000";
        }
        else{
            
            document.getElementById(x).style.backgroundColor = "#ff0000";
            document.getElementById(redArr[0]).style.backgroundColor = "blue";
            console.log(redArr);
            console.log(redArr.shift());
            setRedArr(()=>[redArr.shift(),x]);
        }
    }



    return(
        <div style={{width:"100%",height:"100%",backgroundColor:"#252525",color:"f6f6f6",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
          <div className="flex44">
            {
                divarr.map((val,index)=>{
                    return <div key={index} className="box" id={val} style={{backgroundColor:"blue"}} onClick={()=>{handleit(val)}}></div>
                })
            }
          </div>
        </div>
    )
}

export default Box;