import PropTypes from 'prop-types' 

export const Button = ({ btnToggle, color, text, onClick}) => {

    return (    
    <button 
    style={{ backgroundColor: color}} className='btn' onClick={onClick}>
        {text}        
    </button>
    )
}

Button.defaultProps = {
    color: 'steelblue',
    text: 'Add',
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button
