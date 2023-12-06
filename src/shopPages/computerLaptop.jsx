import { Outlet } from "react-router-dom";
function CL(){
    return(
        <div className="App">
            <h2>Computers & Laptops</h2>
            <p>Computers & Laptops Page</p>
            <Outlet /> 
        </div>
        
    );
}

export default CL;