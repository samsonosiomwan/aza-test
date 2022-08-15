import { useEffect} from "react";
import useWindowResize from "../../hooks/useWindowResize";
import "./style.css";

const DivWithBorder = ({height, setHeight}) => {
  const divWidth = useWindowResize();
 

  useEffect(() => {
    const input = document.querySelector(".input");
    input.value = height
    const heightListener = (e) => { setHeight(+e.target.value);
    input.value = +e.target.value;
    }

    input.addEventListener("keyup", heightListener);
    return () => input.removeEventListener("keyup", heightListener);

  }, [height,setHeight]);

  return (
    <div className="DivWithBorder" style={{ height }}>
      <span className="liveWidth">Live Width {divWidth.width}</span>
      <span>enter height: </span>
      <input type="number" className="input"  />
    </div>
  );
};

export default DivWithBorder;
