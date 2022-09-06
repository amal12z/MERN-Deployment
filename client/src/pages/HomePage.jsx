import React, { useState, useEffect } from 'react'
import Table from '../components/Table'
import axios from 'axios';
import { Link } from "react-router-dom";
const HomePage = (props) => {


    const [pets ,setPets] = useState([])

    useEffect(()=> {
        axios.get('http://localhost:8000/api/pet')
        .then(res=> setPets(res.data.pets))
        .catch(err=> console.log("Error : " , err))
    }, [])
  
  
    

    
    // const addToDom = authorId => {
    //     setAuthors([...authors , authorId])
    // }


    const deleteHandler = petId => {
        axios.delete('http://localhost:8000/api/pet/' + petId)
        .then(res => {
            setPets(pets.filter(pet => pet._id !==  petId))
            console.log(petId)
        })
        .catch(err => console.error(err));
    }


return (
    <>
<div className='container mb-5 mt-5 pt-5 col-7 text-center'>

<div className='form-border'>

<div className='d-flex justify-content-between mt-3 mb-5'>
<div className='text-secondary'><h1>Pet Shelter</h1></div>
<div><Link to='/new' className="btn btn-outline-secondary rounded-pill ms-2 ">Add a pet to the shelter</Link></div>
</div>

<div className='container mt-5  text-center mb-5'>
<p className='text-primary mb-5'>"These Pets are looking for a good home"</p>
<table className="table mt-3 text-center">

    <thead>
        <tr>
        <th scope="col">Name</th>
        <th scope="col">Type</th>
        <th scope="col">Actions</th>
        </tr>
    </thead>

    <tbody>
        {pets.map((pet, idx) => 
        <tr key={idx}>
        <th scope="row">{pet.name}</th>
        <th scope="row">{pet.type}</th>
        <td><Link className='btn btn-primary rounded-pill' to={'/edit/' + pet._id}> Edit </Link>  <Link className='btn btn-outline-secondary rounded-pill' to={'/pets/' + pet._id}> Detaile </Link> <button className='btn btn-outline-danger rounded-pill' onClick={(e) => {deleteHandler(pet._id)}} > Delete </button> </td>
        </tr>
    )}
    </tbody>

</table>
</div>
</div>


</div>
    
    </>
)
}

export default HomePage