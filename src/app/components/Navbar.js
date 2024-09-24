import "../ui/navbar.css"
import Link from "next/link";


const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left ">
                <Link href="..">Home</Link>
            </div>

            <div className="navbar-center">
                <Link href="../add_link" className="item">Add Link</Link>
                <Link href="../get_link">Get Link</Link>
            </div>

            <div className="navbar-right">
                {/* profile / sign in */}
            </div>
        </nav>
    );
};

export default Navbar;