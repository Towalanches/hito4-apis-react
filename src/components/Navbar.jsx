const Navbar = () => {
    const total = 25000
    const token = false

    return (
        <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand" href="#">Pizzería Mamma Mia!</a>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#">🍕 Home</a>
                    </li>
                    {token ? (
                        <>
                            <li className="nav-item">
                                <a className="nav-link" href="#">🔓 Profile</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">🔒 Logout</a>
                            </li>
                        </>
                    ) : (
                        <>
                            <li className="nav-item">
                                <a className="nav-link" href="#">🔐 Login</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">🔐 Register</a>
                            </li>
                        </>
                    )}
                </ul>
                <span className="navbar-text">
                    🛒 Total: ${total.toLocaleString()}
                </span>
            </div>
        </nav>
    )
}

export default Navbar
