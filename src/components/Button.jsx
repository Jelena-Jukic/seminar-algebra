import "../styles/Button.css";
import "../styles/Global.css";

export function Button(props) {
    return (
        <button className="button"
            type={props.type}
            onClick={props.onClick}
        >
            {props.label}
        </button> 
    );
}
