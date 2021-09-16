import React, {useEffect, useState} from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import axios from 'axios';
// import { Link } from 'react-router-dom';


const Details = (props) => {
    const { id } = useParams();
    const [res, setRes] = useState(null);
    const history = useHistory();

    useEffect(()=> {
        axios.get(`http://localhost:8000/api/equipment/${id}`)
        .then((response) => {
            console.log(response)
            setRes(response.data)})
        .catch((err) => console.log(err)) // could add ternary operator or some conditional for a validation check i.e. redirect user to a picture if value of url doesn't exist
    },[id])

    const deleteEquipment = (id) => {
        axios.delete(`http://localhost:8000/api/equipment/${id}`)
            .then(res => console.log(res))
            .catch(err => console.log(err));
        let path = '';
        history.push(path);
    }

    if (res === null) {
        return null
    } 

    return (
    <div style={{textAlign : 'left', marginLeft: 20}}>
        <h2>{res.title}</h2>
        <h3>Price: ${res.price}</h3>
        <h3>Description: {res.description}</h3>
        <br />
        <button style={{ marginLeft: "5px" }} onClick={(e) =>{deleteEquipment(res._id)}}>Delete</button>
    </div>
)}

export default Details;