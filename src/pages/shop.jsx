import { Link, Outlet } from "react-router-dom";
import Breadcrumbs from "../components/breadCrumbs";
function Shop(){
    return(
        <div>
            <h2>Trial Shop Page</h2>
            <nav>
                <ul>
                    <li>
                        <Link to="computer-laptop">Computers & Laptops</Link>
                    </li>
                    <li>
                        <Link to="mobile-tablet">Mobiles & Tablets</Link>
                    </li>
                    <li>
                        <Link to="photography">Photography</Link>
                    </li>
                    <li>
                        <Link to="television">Televison</Link>
                    </li>
                    
                    
                </ul>
                
            </nav>
            <Outlet />

        </div>
    );
}

export default Shop;
