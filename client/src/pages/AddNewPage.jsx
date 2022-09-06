import React, { useState } from 'react'
// import Form from '../components/Form'
import { useHistory , useParams} from 'react-router'
import axios from 'axios';
import { Link } from "react-router-dom";
import Form from '../components/Form';


const AddNewPage = (props) => {


    

    const {id} = useParams();
    const history = useHistory();
    const[errors , setErrors] = useState([])
    const[success , setSuccess] = useState(false)




    const onSubmitHandler = (pet) => {
        setSuccess(false)
        setErrors([])
        axios.post('http://localhost:8000/api/pet', pet)
            .then(res=>{
                console.log(res)
                setSuccess(true)
                history.push("/")
            })
            .catch(err=>{
                console.log(err)
                const dataUnique = err.response
                const data = err.response.data
                const errorMessages = [];
                if("errors" in data){
                    for(let field in data.errors){
                        const validationError = data.errors[field]
                        errorMessages.push(validationError.message)
                    }
                }
                if("keyValue" in data){
                    console.log(err.response.message)
                    errorMessages.push("The Pet Name Already Exists")
                }
                setErrors(errorMessages)

                
                
            })
    }










  return (
    <>
    <div className='container mb-5 mt-5 pt-5 col-7 '>
        <div  className='form-border'>

            {/* <Link to="/"> HOME </Link> */}
            <div className='container mt-5'>
            {errors.map((errMsg , i) => <p key={i} className='alert alert-danger'> {errMsg} </p>)}
            {success && <p  className='alert alert-success'>Pet has been successafully Add</p>}
            {/* <Link to="/"> HOME </Link> */}

            {/* <div className='container mt-5  text-center'> */}
            {/* <h5 className='text-primary'>we have quotes by :</h5> */}
            {/* </div> */}

            <div className='d-flex justify-content-between mt-3'>
            <div className='text-primary'><h5>Pet Shelter</h5></div>
            <div><Link to="/" className="btn btn-outline-secondary rounded-pill ms-2 ">Back to HOME</Link></div>
            </div>

            <sup className='text-primary mb-5'>Know a pet needing a home ?</sup>
            <Form onSubmitHandler ={onSubmitHandler} />
            </div>

        </div>
    </div>
    </>
  )
}

export default AddNewPage