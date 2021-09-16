import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Homepage from './HomePage';
import { Link } from 'react-router-dom';

const ListAll = (props) => {

    const [allEquipment, setAllEquipment] = useState([]); 
    // state = memory
    // getter function
    // setter function
    // these functions are being pulled out or destructured from the useState hook

    useEffect(() => { //technically a 'side effect'
        axios.get("http://localhost:8000/api/equipment") // ---> server
        .then((res) => {
            console.log(res.data);
            setAllEquipment(res.data) 
        })
        .catch((err) => {
            console.log(err);
        })
    }, [<Homepage />]); //dependency array; [Look up on this feature and its complications a little further!!!]

    const deleteEquipment = (deleteId) => {
        axios.delete('http://localhost:8000/api/equipment/' + deleteId)
            .then(res => {
                const delAllEquipment = allEquipment.filter((equip) => {
                    return equip._id !== deleteId;
                }) // the filter function returns a new array, based off a specific condition,
                // and in this case we're returning all id's that is not the deleted id
                setAllEquipment(delAllEquipment);
                // All equipment minus the deleted equipment
            })
            .catch(err => console.error)
    }

    return (
        <div style={{textAlign: "center"}}>
            <h2>All Products:</h2>
            
            {allEquipment.map((equipment, index) => 
                <ul style={{textAlign: "center"}}>
                    <a href= {`/equipment/${equipment._id}`}>{equipment.title}</a>
                    <button style={{marginLeft: "8px"}} onClick={(e) =>{deleteEquipment(equipment._id)}}>Delete</button>
                    <Link style={{marginLeft: "5px"}} to={`/equipment/${equipment._id}/edit`}>Edit</Link>
                </ul>
            )}
        </div>
    )
};

export default ListAll;