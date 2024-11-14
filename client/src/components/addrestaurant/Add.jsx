import React,{useState} from "react";



const Add=()=>{
    const restaurants = {
        name:"",
        Type:"",
        Location:"",
        Rating:"",
        Top_food:""
    };

    const [restaurant,setRestaurant] = useState(restaurants)
    return(
            <div>
                <h3>Add new restaurant</h3>
                <form>
                    <div>
                        <label></label
                    </div>
                </form>
            </div>
    );
}

export default Add;
