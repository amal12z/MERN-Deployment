import React, { useState } from 'react'
// import Form from '../components/Form'
import { useHistory , useParams} from 'react-router'
import axios from 'axios';
import { Link } from "react-router-dom";

const Form = (props) => {

    const[errors , setErrors] = useState([])
    const[success , setSuccess] = useState(false)


    const [name, setName] = useState(props.initName)
    const [type, setType] = useState(props.initType)
    const [desc, setDesc] = useState(props.initDesk)

    const [skill1, setSkill1] = useState(props.initSkill1)
    const [skill2, setSkill2] = useState(props.initSkill2)
    const [skill3, setSkill3] = useState(props.initSkill3)


    const onSubmitHandler = e => {
        e.preventDefault();
        props.onSubmitHandler({name, type , desc , skill1 , skill2 , skill3})
    }


    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleType = (e) => {
        setType(e.target.value)
    }

    const handleDesc = (e) => {
        setDesc(e.target.value)
    }

    // Skills Handlers 
    const handleSkill1 = (e) => {
        setSkill1(e.target.value)
    }

    const handleSkill2 = (e) => {
        setSkill2(e.target.value)
    }

    const handleSkill3 = (e) => {
        setSkill3(e.target.value)
    }


  return (
    <>
    <form onSubmit={onSubmitHandler}>

    <div className='row mt-5'>
        <div className='col'>
            <sup className='text-secondary'>Pet Information</sup>
            <p>
            <label>Pet Name <span className="text-danger">*</span>:</label>
            <input name="name" type="text" onChange={handleName} value={name} className="form-control"/>
            </p>

            <p>
                <label>Pet Type <span className="text-danger">*</span> :</label>
                <input name="name" type="text" onChange={handleType} value={type} className="form-control"/>
            </p>

            <p>
                <label>Pet Description <span className="text-danger">*</span>:</label>
                <input name="name" type="text" onChange={handleDesc} value={desc} className="form-control"/>
            </p>
        </div>


        <div className='col'>
            <sup className='text-secondary'>Skills (Optional)</sup>
            <p>
            <label>Skill 1 :</label>
            <input name="name" type="text" onChange={handleSkill1} value={skill1} className="form-control"/>
            </p>

            <p>
                <label>Skill 2 :</label>
                <input name="name" type="text" onChange={handleSkill2} value={skill2} className="form-control"/>
            </p>

            <p>
                <label>Skill 3 :</label>
                <input name="name" type="text" onChange={handleSkill3} value={skill3} className="form-control"/>
            </p>
        </div>

    </div>

    <div className="d-flex justify-content-center mt-5">
    <div className="text-center"><input type="submit" value="Add Pet" className="btn btn-primary rounded-pill"/></div>
    <Link to="/" className="btn btn-outline-secondary rounded-pill ms-2 "> Cancel </Link>
    </div>
    
</form>
</>
  )
}

export default Form