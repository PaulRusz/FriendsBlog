import { Link } from 'react-router-dom'
import './Index.css'

const Styles = ['Primary', 'Outline'];
const Sizes =['Medium', 'Large'];

const Button = ({ Path, ExtraClasses }) => {
    <Link to={Path} className={`Btn-Mobile ${ExtraClasses}`}>
        <ButtonElement />
    </Link>
}

const ButtonElement = ({children, Type, Onclick, ButtonStyle, ButtonSize}) => {
    const CheckButtonStyle = Styles.includes(ButtonStyle) ? ButtonStyle : Styles[0];

    const CheckButtonSize = Sizes.includes(ButtonSize) ? ButtonSize : Sizes[0];

    return (
        <button
            className={`Btn ${CheckButtonStyle} ${CheckButtonSize}`}
            onClick= {Onclick}
            type={Type}
        >
            {children}
        </button>
    );
}

export default Button;