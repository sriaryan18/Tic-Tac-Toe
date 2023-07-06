
import IconType from "../states/iconState";


const HandleClickOnSquare = ()=>{
    IconType().changeIcon()
    console.log(IconType.getIcon());
}

export default HandleClickOnSquare;