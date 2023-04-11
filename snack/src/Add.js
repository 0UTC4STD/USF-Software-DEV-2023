import React from "react";
import ItemForm from "./ItemForm";
import { useState } from "react";
import { Link } from "react-router-dom";

function Add() {
    const [data, setData] = useState("")

    if (data) {
        return (
            <div>
            <p>{data.name} added!</p>
            <Link to="/">Go Home</Link>
            </div>
            )
    }
    return <ItemForm setData={setData}/>
    
}

export default Add;