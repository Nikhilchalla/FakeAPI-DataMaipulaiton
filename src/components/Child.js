import { useState } from "react";


function Child({username,city}){
    //props is always an object
    //contains key and value
    
    
    return (
        <div className="bg-info"> 
            <h1>Child-1 component</h1>
            <h3 className="text-primary text-white"> 
                    {username}
            </h3>
            <h3 className="text-primary text-white"> 
                    {city} 
            </h3>
            
        </div>
        
    )
}

export default Child;

