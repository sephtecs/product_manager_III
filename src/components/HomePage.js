import React, { useState, useEffect } from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';

const Homepage = (props) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    
    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/equipment', {
            title: title,
            price: price,
            description: description,
        })
        .then((res) => {
            console.log(res.data);
            setTitle("");
            setPrice("");
            setDescription("");
        })
        .catch((err) => {
            console.log(err);
        })
    }

    return (
        <div style={{textAlign: "center", marginTop: "20px"}}>
            <h2>Product Manager</h2>
            <form onSubmit= {submitHandler}>
                <div>
                    <label>Title: </label>
                    <input type="text"
                        style={{marginBottom: "5px"}}
                        name="title"
                        value={title}
                        onChange={ (e) => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <label>Price: </label>
                    <input type=""
                        style={{marginBottom: "5px"}}
                        name="number"
                        min="1"
                        value={price}
                        onChange={ (e) => setPrice(e.target.value)}
                        />
                </div>
                <div>
                    <label>Description: </label>
                    <input type="text"
                        style={{marginBottom: "10px"}}
                        name="description"
                        value={description}
                        onChange={ (e) => setDescription(e.target.value)}
                    />
                </div>
                <div>
                    <button type="submit">Create</button>
                </div>
            </form>
            <br />
            <hr />
        </div>
    )
}

export default Homepage;