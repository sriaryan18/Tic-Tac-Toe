
// import HandleClickOnSquare from "../logics/handleClickOnSquare";
import '../styles/board.css';
const Square = ({value,changeIcon,icon})=>{

    const handle = ()=>{
      changeIcon(value-1)
    }
    return (
      <button className="square" 
        onClick={handle}
      >
        <i className={icon}></i>   
      </button>

    );
}

export default Square;