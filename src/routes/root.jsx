import { Outlet, Link } from "react-router-dom";

export default function Root() {
    return (
        <>            
            <div id="sidebar">
                <h1>React with Annas</h1>
                <nav>
                    <ul>
                        <li>
                            <Link to={`/`}>Dashboard</Link>
                        </li>
                        <li>
                            <Link to={`/crud`}>CRUD</Link>
                        </li>
                        <li>
                            <Link to={`/contact-us`}>Contact Us</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div id="detail">
                <hr/>
                <Outlet />
            </div>
        </>
    );
}