import PropTypes from "prop-types";

function Header({ title }) {
    return (
        <header className="header">
            <h1 className="header__title">{title}</h1>
        </header>
    );
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Header;
