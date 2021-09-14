import React, {useEffect, useState} from "react";
import { useParams } from "react-router";
import axios from 'axios';


const Details = (props) => {
    const { id } = useParams();
    const [res, setRes] = useState(null);

    useEffect(()=> {
        axios.get(`http://localhost:8000/api/equipment/${id}`)
        .then((response) => {
            console.log(response)
            setRes(response.data)})
        .catch((err) => console.log(err)) // could add ternary operator or some conditional for a validation check i.e. redirect user to a picture if value of url doesn't exist
    },[])

    if (res === null) {
        return null
    } 

    return <div>
    <h2 style={{textAlign : 'left', marginLeft: 20}}>{res.title}</h2>
    <h3 style={{textAlign : 'left', marginLeft: 20}}>Price: ${res.price}</h3>
    <h3 style={{textAlign : 'left', marginLeft: 20}}>Description: {res.description}</h3>
    </div>
}

export default Details;