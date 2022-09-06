import React, { useState , useEffect } from 'react'
import { useHistory , useParams} from 'react-router'
import axios from 'axios';
import { Link } from "react-router-dom";

const DetailsPage = () => {

    


        const {id} = useParams();
        const history = useHistory();
        const [pet, setPet] = useState({})
        const [likes , setLikes] = useState(0)
        

        useEffect(() => {
            axios.get('http://localhost:8000/api/pet/'+id)
            .then(res => setPet(res.data.pet))
            .catch(err => console.error(err))
        }, []);


        const deletepet = (petID) => {
            axios.delete('http://localhost:8000/api/pet/' +petID)
                .then(res => {
                    console.log(petID)
                    history.push("/")
                })
                .catch(err => console.error(err));
        }

        const incLikes = (pet) => { // Black Belt 4 : Include a button to like a pet, disable it when clicked until the component reloads
            setLikes(likes+1)
            const LKS = pet.likes
            axios.put('http://localhost:8000/api/pet/'+id , {...pet, LKS : 1})
            .then(res=>{
                console.log(res)
            })
            .catch(err=>{
                console.log(err)
            })
        }



  return (
    <>
    <div className='container mb-5 mt-5 pt-5 col-7'>
    <div className='form-border p-5'>

    <div className='d-flex justify-content-between mt-3 mb-5'>
        <div className='text-primary'><h5>Pet Shelter</h5></div>
        <div><Link to="/" className="btn btn-outline-secondary rounded-pill ms-2 ">Back to HOME</Link></div>
    </div>


        <div className='d-flex justify-content-between'>
            <div><h6 className='fw-bold'>Details About : <span className='text-primary text-opacity-75'>{pet.name}</span> </h6></div>
            <div>
                <button onClick={(e) => {deletepet(pet._id)}} className='btn btn-danger rounded-pill'>Adopt {pet.name} </button>
            </div>
        </div>
        <hr/>

        <p className=''><span className='fw-bold'>Pet Type : </span><span className='text-primary text-opacity-75'>{pet.type}</span></p>

        <p><span className='fw-bold'>Description :</span> <span className='text-primary text-opacity-75'>{pet.desc}</span></p>

        {/* <ul> */}
            {/* {pet.skill1 !== " " ? <p>{pet.skill1}</p> : " " } */}
           <div className='mt-2'>
            <p className='fw-bold'>Skills : </p>
           <p className='text-primary text-opacity-75'>{pet.skill1}</p>
            <p className='text-primary text-opacity-75'>{pet.skill2}</p>
            <p className='text-primary text-opacity-75'>{pet.skill3}</p>
           </div>
        {/* </ul> */}


        <div className='d-flex justify-content-between'>
       
        {/* <p>Like(s) : {pet.likes} </p> */}
        <p>Like(s) : <span className='text-primary'>{likes}</span> </p>
        <button onClick={() => incLikes(pet)}  className="btn btn-success rounded-pill mt-5">Like {pet.name} </button>
        </div>


    </div>

    </div>

        

    </>
  )
}

export default DetailsPage