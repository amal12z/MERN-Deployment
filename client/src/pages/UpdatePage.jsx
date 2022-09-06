import React, { useState , useEffect } from 'react'
import { useHistory , useParams} from 'react-router'
import axios from 'axios';
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const UpdatePage = (props) => {
    
    const {id} = useParams();
    const history = useHistory();
    const[errors , setErrors] = useState([])
    const[success , setSuccess] = useState(false)
    // const[pet , setPet] = useState(false)
    

    
    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [desc, setDesc] = useState('')

    const [skill1, setSkill1] = useState('')
    const [skill2, setSkill2] = useState('')
    const [skill3, setSkill3] = useState('')


    useEffect(() => {
        axios.get('http://localhost:8000/api/pet/'+id)
        .then(res => {
            // setPet(res.data.pet)
            setName(res.data.pet.name)
            setType(res.data.pet.type)
            setDesc(res.data.pet.desc)
            setSkill1(res.data.pet.skill1)
            setSkill2(res.data.pet.skill2)
            setSkill3(res.data.pet.skill3)


            console.log(res.data.pet)

            })
    }, []);




    const onSubmitHandler = (e) => {
        e.preventDefault();
        setSuccess(false)
        setErrors([])
        axios.put('http://localhost:8000/api/pet/'+id , {name, type , desc , skill1 , skill2 , skill3})
            .then(res=>{
                setSuccess(true)
                history.push("/")
            })
            .catch(err=>{ // Black Belt 2 : Apply validations when updating
                console.log(err)
                const data = err.response.data
                const errorMessages = [];
                if("errors" in data){
                    for(let field in data.errors){
                        const validationError = data.errors[field]
                        errorMessages.push(validationError.message)
                    }
                }
                if("keyValue" in data){ // Black Belt 1 : Ensure the pet name is unique when adding it to the database
                    console.log(err.response.message)
                    errorMessages.push("The Pet Name Already Exists")
                }
                setErrors(errorMessages)
            })
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

    <div className='container mb-5 mt-5 pt-5 col-7'>
        <div className="form-border">


        {errors.map((errMsg , i) => <p key={i} className='alert alert-danger'>{errMsg} </p>)}
        {success && <p  className='alert alert-success'>Pet has been successafully updated</p>}
        {/* <Link to="/"> HOME </Link> */}
        <div className='d-flex justify-content-between mt-3'>
            <div className='text-primary'><h5>Pet Shelter</h5></div>
            <div><Link to="/" className="btn btn-outline-secondary rounded-pill ms-2 ">Back to HOME</Link></div>
        </div>

        {/* <Form initName={name} initType={type} initDesk={desc} initSkill1={skill1} initSkill2={skill2} initSkill3={skill3} /> */}
        <p className='text-danger'> Edit : {name}</p>
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
        <div className="text-center"><input type="submit" value="Edit Pet" className="btn btn-primary rounded-pill"/></div>
        <Link to="/" className="btn btn-outline-secondary rounded-pill ms-2 "> Cancel </Link>
        </div>
        
        </form>




        </div>
    </div>

    </>
  )
}

export default UpdatePage