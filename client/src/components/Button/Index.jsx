import './Index.css'

const Styles = ['Primary', 'Outline'];
const Sizes =['Medium', 'Large'];

const Button = ({children, Type, Onclick, ButtonStyle, ButtonSize, ExtraClasses}) => {
    const CheckButtonStyle = Styles.includes(ButtonStyle) ? ButtonStyle : Styles[0];

    const CheckButtonSize = Sizes.includes(ButtonSize) ? ButtonSize : Sizes[0];

    return (
        <button
            className={`Btn ${CheckButtonStyle} ${CheckButtonSize} ${ExtraClasses}`}
            onClick= {Onclick}
            type={Type}
        >
            {children}
        </button>
    );
}

export default Button;