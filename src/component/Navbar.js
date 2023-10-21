import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav>
            <div>
                <div>
                    <ul>
                        <li>
                            <Link to={'/home'}>Home</Link>
                        </li>
                        <li>
                            <Link to={'/about'}>About</Link>
                        </li>
                        <li>
                            <Link to={'/works'}>Works</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;