import React, {useState} from "react";


function ClickablePicture(props) {

const [value,setValue] = useState({toggleImg: true});

function handleClick() {

    setValue({toggleImg:!value.toggleImg});
}


return(

<img onClick={handleClick} src={value.toggleImg ? props.img : props.imgClicked}/>



);

}


export default ClickablePicture;