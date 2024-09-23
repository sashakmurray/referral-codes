import "../ui/navbar.css"

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left ">
                <a href="..">Home</a>
            </div>

            <div className="navbar-center">
                <a href="../add_link" className="item">Add Link</a>
                <a href="../get_link">Get Link</a>
            </div>

            <div className="navbar-right">
                {/* profile / sign in */}
            </div>
        </nav>
    );
};

export default Navbar;