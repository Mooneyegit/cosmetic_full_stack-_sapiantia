import { Outlet, Link } from "react-router-dom";

const Layout = () =>{
    return (
        <>
        <nav>
            <li>
                <Link to ="/">Home</Link>
            </li>
            <li>
                <Link to ="/about">About</Link>
            </li>
            <li>
                <Link to ="/products">Products</Link>
            </li>
            <li>
                <Link to ="/faq">Faq</Link>
            </li>
        </nav>


        <Outlet />
        </>
    )
};

export default Layout; 