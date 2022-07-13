import React, { useContext, useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom';
import PropertyContext from '../../../Context/propertyContext'

const PropertyDetails = () => {
    const context = useContext(PropertyContext)
    const { properties, addTenent, deleteTenent, editTenent } = context;
    let { name } = useParams();
    const navigate = useNavigate();
    const [tenentName, setTenentName] = useState("");
    const [tenentRent, setTenentRent] = useState("");
    const [editing, setEditing] = useState(false);
    const [editableTenent, setEditableTenent] = useState("");

    const nameChangeHandler = (e) => {
        setTenentName(e.target.value)
    }
    const rentChangeHandler = (e) => {
        setTenentRent(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addTenent(name, tenentName, tenentRent);
        setTenentName("");
        setTenentRent("");
    }
    const deleteHandler = (tenentId) => {
        if (editing === true) {
            setEditing(false);
        }
        deleteTenent(name, tenentId);
    }
    const editClickHandler = (tenentId) => {
        setEditableTenent(tenentId);
        setEditing(true);
    }
    const handleEditSubmit = (e) => {
        e.preventDefault();
        editTenent(name, editableTenent, tenentName, tenentRent);
        setTenentName("");
        setTenentRent("");
        setEditing(false);
    }
    const goBack = () =>{
        navigate("/")
    }
    const property = properties.map(pro => {
        if (pro.name === name) {
            const tenents = pro.tenents.map(ten => {
                return (
                    <div className="my-3" key={ten.name}>
                        <p>{ten.name} - {ten.rent}
                            <button className="btn btn-danger btn-sm mx-2" onClick={() => deleteHandler(ten.id)}>Delete Tenent</button>
                            <button className="btn btn-outline-info btn-sm mx-1"onClick={() => editClickHandler(ten.id)}>Edit Tenent</button>
                        </p>
                    </div>
                )
            })
            return (
                <div key={pro.name}>
                    <div className="card" style={{ width: " 25rem" }}>
                        <img src={pro.src} className="card-img-top" alt="image" />
                        <div className="card-body">
                            <h5 className="card-title">{pro.name}</h5>
                            <h6 className="card-title text-muted">size {pro.size}</h6>
                            <h6 className="card-title text-muted">{pro.noOfFlats} Flats</h6>
                            <h6 className="card-title text-muted">Flats Occupied {pro.noOfTenents}</h6>
                            {tenents}
                        </div>
                    </div>
                </div>
            )
        }
    })
    return (
        <>
        <div className="d-flex flex-row flex-wrap justify-content-around my-5">
            <div className="shadow p-3 mb-5 bg-white rounded ">
                {property}
            </div>
            <div className="shadow p-3 mb-5 bg-gray rounded ">
                <form style={{ width: "100%", alignItems: "center" }} onSubmit={editing === false ? handleSubmit : handleEditSubmit}>
                    {editing === false ? <h2 style = {{fontFamily:"monospace"}}>Add Tenent</h2> : <h2 style = {{fontFamily:"monospace"}}>Edit Tenent</h2>}
                    <div className="mb-3">
                        <label htmlFor="" className="form-label"> {editing === false ? "Name" : "New Name"} </label>
                        <input type="text" className="form-control" value={tenentName} name="name" onChange={nameChangeHandler} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="" className="form-label">{editing === false ? "Rent" : "New Rent"}</label>
                        <input type="text" className="form-control" value={tenentRent} name="rent" onChange={rentChangeHandler} />
                    </div>
                    <button type="submit" className="btn btn-success">{editing === false ? "Add" : "Edit"}</button>
                </form>
            </div>
        </div>
        <div className=" w-25 mx-auto my-3">
                <button className="btn btn-outline-primary btn-lg" onClick={goBack}>View Properties</button>
        </div>
        </>
        
    )
}

export default PropertyDetails