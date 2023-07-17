import React, { useState } from "react";
import {BsSearch} from "react-icons/bs";
import Form from 'react-bootstrap/Form';

export default function SearchBar(props) {
    const [dataForm, setDataForm] = useState("")

    const handleChange = (event) => {
        setDataForm(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleSearch(dataForm)
    }

    return (
        <Form onSubmit={handleSubmit}>
            <div className="col-8 mx-auto mt-5">
                <div className="input-group">
                    <div style={{backgroundColor: "#F5F5F5"}} className="input-group-text">
                        <button type="submit" style={{backgroundColor: "#F5F5F5"}}>
                            <BsSearch />
                        </button>
                    </div>
                    
                    <input 
                        style={{backgroundColor: "#F5F5F5"}}
                        className="form-control p-3" 
                        type="text"  
                        placeholder="Search Products"
                        onChange={handleChange}
                        value={dataForm}
                    />
                </div>
            </div>
        </Form>

    )
}