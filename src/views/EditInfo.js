import React, {useEffect, useState} from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from 'axios';


const EditInfo = (props) => {
    const { id } = useParams(); // this is extracting the id out of the URL. It's called id because app.js has :id in the path
    const history = useHistory();
    const [equip, setEquip] = useState(null);

    useEffect(()=> {
        axios.get(`http://localhost:8000/api/equipment/${id}`)
        .then((response) => {
            console.log(response)
            setEquip(response.data)})
        .catch((err) => console.log(err)) // could add ternary operator or some conditional for a validation check i.e. redirect user to a picture if value of url doesn't exist
    },[id])

    const handleOnChange = (e) => {
        const keyBeingUpdated = e.target.name;
        const newValue = e.target.value;

        setEquip({... equip, [keyBeingUpdated]: newValue});
    /*The setEquip aobve can be written like this as well: */
        // const updatedEquip =  {...equip}
        // updatedEquip[keyBeingUpdated] = newValue;
        // setEquip(updatedEquip)
    }

    const handleEditSubmit = (e) => {
        e.preventDefault();
        // when using an object from the database you have to use _id
        axios.put(`http://localhost:8000/api/equipment/${equip._id}/edit`, equip)
        .then((res) => {
            console.log(res.data);
            // setTitle("");
            // setPrice("");
            // setDescription("");
            history.push(`/equipment/${res.data._id}`)
        })
        .catch((err) => {
            console.log(err);
        })

    }

    if (equip === null) {
        return "Loading..."
    } 


    return (
    <div style={{textAlign: "center", marginTop: "20px"}}>
    <h2>Edit Your Product</h2>
    <form onSubmit= {(e) => {
        handleEditSubmit(e);
    }}>
        <div>
            <label>Title: </label>
            <input type="text"
                style={{marginBottom: "5px"}}
                name="title"
                value={equip.title}
                onChange={ (e) => handleOnChange(e)}
            />
        </div>
        <div>
            <label>Price: </label>
            <input type=""
                style={{marginBottom: "5px"}}
                name="price"
                min="1"
                value={equip.price}
                onChange={ (e) => handleOnChange(e)}
                />
        </div>
        <div>
            <label>Description: </label>
            <input type="text"
                style={{marginBottom: "10px"}}
                name="description"
                value={equip.description}
                onChange={ (e) => handleOnChange(e)}
            />
        </div>
        <div>
            <button type="submit">Update</button>
        </div>
    </form>
    <br />
    <hr />
</div>
)}

export default EditInfo;