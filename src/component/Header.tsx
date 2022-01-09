import React from "react";
import ReactDOM from "react-dom";
import PropsTypes from "prop-types"



//Header.propTypes={
 //   title:PropsTypes.string
//}
interface HeaderModel
{title:string}

export const Header = (props:HeaderModel) => {
    return (
        <div>
        <h1>{props.title}</h1>
    </div>
    )
}
export default Header;