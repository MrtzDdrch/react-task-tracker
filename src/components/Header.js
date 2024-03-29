import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props) => {

    return (
    <header className='header'>
        <h1>{props.title}</h1>
        <Button 
            color='green'
            onClick={props.onAdd}
            text={props.showAddTask ? 'Close' : 'Add'}
        />
    </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// CSS in JS
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black',
// }

export default Header