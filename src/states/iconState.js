import {useState} from 'react'
const IconType = ()=>{

    const [Icon,setIcon] = useState('fas fa-circle')

    const getIcon=()=>{
        return Icon
    }
    const changeIcon = ()=>{
        Icon == 'fas fa-circle'? setIcon('fas fa-times'):setIcon('fas fa-circle')
    }
 
    return {
        getIcon,
        changeIcon
    }
}

export default IconType