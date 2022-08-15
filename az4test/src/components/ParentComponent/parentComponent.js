import {useState} from 'react';
import DivWithBorder from "../DivWithBorder/DivWithBorder";


const ParentComponent = () => {
    const [height, setHeight] = useState(300);
    return (
  
        
        <DivWithBorder height={height} setHeight={setHeight}/>
   
    );
}

export default ParentComponent;