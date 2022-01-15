import React from "react";
import ReactDOM from "react-dom";
import PropsTypes from "prop-types"
import { Alert, Badge } from "react-bootstrap";


//Header.propTypes={
//   title:PropsTypes.string
//}
interface HeaderModel {
    appTitle: string,
    personLenght: number
}

export const Header = (props: HeaderModel) => {
    let badgeStyle  = "";

    if (props.personLenght >= 3) badgeStyle = "success";
    if (props.personLenght <= 2) badgeStyle = "warning";
    if (props.personLenght <= 1) badgeStyle = "danger";

    return (
        <div>
            <Alert variant="info">
                <h2>{props.appTitle}</h2>
            </Alert>
            <Alert variant="light">
                تعداد اشخاص{" "}
                <Badge pill bg={badgeStyle}>
                    {props.personLenght}
                </Badge>{" "}
                نفر می باشد
            </Alert>
        </div>
    );
}
export default Header;