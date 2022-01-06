import React,{useState} from 'react'
import {useSelector,useDispatch} from "react-redux"
import {useParams} from "react-router-dom"
import {UpdateData}from "./Action/Action"
import { useNavigate } from 'react-router-dom';


function Update() {
 const params =useParams()
const navigate=useNavigate()
 const dispatch = useDispatch();
 const selector=useSelector((state)=>{return state})
    const [data, setdata] = useState({
        name:selector[params.id].name,
        email:selector[params.id].email,
        mobile:selector[params.id].mobile,
        gender:selector[params.id].gender,
        city:selector[params.id].city
})
    
    console.log(selector[params.id])

 
 
     const onHandale=(e)=>{
        setdata({...data,[e.target.name]:e.target.value})
    }

    const onUpdate=(id)=>{
        const obj1 ={
            id:selector[params.id].id,
            name:data.name,
        email:data.email,
        mobile:data.mobile,
        gender:data.gender,
        city:data.city
        }
        selector[params.id]=obj1
        dispatch(UpdateData(obj1))
        navigate("/showdata")
    }
    return (
        <div>
            <div className='container'>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="">Name</label>
                <input type="email" className="form-control" id="exampleFormControlInput1"  name="name" placeholder="name@example.com" onChange={onHandale} value={data.name}/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="" >Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1"name="email" placeholder="name@example.com"  onChange={onHandale} value={data.email}/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="" >Mobile No</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" name="mobile" placeholder="name@example.com"  onChange={onHandale} value={data.mobile}/>
            </div>
            <div className="mb-3">
                <label htmlFor="" className="">gender</label>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="gender"  onChange={onHandale} id="flexRadioDefault1" value="male" checked={data.gender==="male"?true:false}/>
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                        male
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="gender" id="flexRadioDefault2" value="female"  onChange={onHandale} checked={data.gender==="female"?true:false}/>
                    <label className="" htmlFor="flexRadioDefault2">
                        female
                    </label>
                </div>
            </div>
            <div className="mb-3">
                <label className="" htmlFor="flexRadioDefault2">
                    City
                </label>
                <select className="form-select" aria-label="Default select example" name='city'  onChange={onHandale} value={data.city}>
                    <option selected>Ahmadabad</option>
                    <option value="Surat">Surat</option>
                    <option value="Navsari">Navsari</option>
                    <option value="Botad">Botad</option>
                </select>
            </div>
            {/* <div className="form-check">
                <label className="" htmlFor="">
                    Hobby
                </label>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="" htmlFor="flexCheckDefault">
                        playing
                    </label>
                </div>
                
            </div> */}
            <button type="button" class="btn btn-primary mt-3" onClick={()=>onUpdate(params.id)} >update</button>
            </div>
        </div>
    )
}

export default Update
