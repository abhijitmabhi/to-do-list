import React from 'react'

const Header = ({ title }) => {
    return (
        <header>
            <h1>{ title }</h1>
        </header>
    )
}

Header.defaultProps = {
    title: "Do To List"
}

export default Header
