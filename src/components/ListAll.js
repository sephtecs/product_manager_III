import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Homepage from './HomePage';

const ListAll = (props) => {

    const [allEquipment, setAllEquipment] = useState([]);

    useEffect(() => { //technically a 'side effect'
        axios.get("http://localhost:8000/api/equipment")
        .then((res) => {
            console.log(res.data);
            setAllEquipment(res.data)
        })
        .catch((err) => {
            console.log(err);
        })
    }, [<Homepage />]); //dependency array; [Look up on this feature and its complications a little further!!!]

    return (
        <div style={{textAlign: "center"}}>
            <h2>All Products:</h2>
            
            {allEquipment.map((equipment, index) => 
                <ul style={{textAlign: "center"}}>
                    <a href= {`/equipment/${equipment._id}`}>{equipment.title}</a>
                </ul>
            )}
        </div>
    )
};

export default ListAll;