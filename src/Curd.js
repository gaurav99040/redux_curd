import React,{useState,useEffect} from 'react'
// import {useSelector,useDispatch} from "react-redux"
import {connect} from "react-redux"
import {AddData} from "./Action/Action"
import { useNavigate } from 'react-router-dom';

function Curd( props) {
    // console.log(props)
    const navigate = useNavigate();
    const [error,seterror]=useState({
        err:"",
        err1:"",
        err2:"",
        err3:"",
        err4:"",
        notVal:false
    });
    const [data, setdata] = useState({
        name:"",
        email:"",
        mobile:"",
        gender:"",
        city:""
})

const validation=async()=>{
// console.log("jdfhhg==============>");
   await   data.name===""?seterror((preStat)=>({
          ...preStat,err:"Name is requier",notVal:true
      })):seterror((preStat)=>({
        ...preStat,err:"",notVal:false
      }))

    await  data.email===""?seterror((preStat)=>({
        ...preStat,err1:"email is requier",notVal:true
    })):seterror((preStat)=>({
      ...preStat,err1:"",notVal:false
    }))

   await data.mobile===""?seterror((preStat)=>({
        ...preStat,err2:"mobile is requier",notVal:true
    })):seterror((preStat)=>({
      ...preStat,err2:"",notVal:false
    }))

   await data.gender===""?seterror((preStat)=>({
        ...preStat,err3:"Gender is requier",notVal:true
    })):seterror((preStat)=>({
      ...preStat,err3:"",notVal:false
    }))
  await  data.city===""?seterror((preStat)=>({
        ...preStat,err4:"city is requier",notVal:true
    })):seterror((preStat)=>({
      ...preStat,err4:"",notVal:false
    }))

    
    if((data.name1!=="") && (data.email!=="") && (data.mobile!=="") && (data.gender!=="")){
            
        seterror(pre=>({...pre,notVal:false}))
     }
}
    // const selector=useSelector((state)=>{return state})
    // console.log(selector)
useEffect(() => {
    validation()
}, [])
 
     const onHandale=(e)=>{
        setdata({...data,[e.target.name]:e.target.value})
      validation()

        // if((data.name1!=="") && (data.email!=="") && (data.mobile!=="") && (data.gender!=="")){
            
        //     seterror({notVal:false})
        //  }
      
    }

//     const dispatch = useDispatch()

    const onAddData=async()=>{
      await  validation()
if(error.notVal===false){
        const obj ={
            key:props.list.length!==0?props.list[props.list.length-1].key+1:0,
            name:data.name,
        email:data.email,
        mobile:data.mobile,
        gender:data.gender,
        city:data.city
        }
if(obj.name!==""&&obj.email!==""&&obj.mobile!==""&&obj.gender!==""&&obj.city!==""){
   props.AddData(obj);
   console.log(obj)
        navigate("/showdata")
}
 }

    }
    return (
        // <div className='cover'>
        //     <div className='container'>
        //         <div className='fild'>
        //             <div className='input'>
        //                 <label htmlFor="">Name:-</label>
        //                 <input type="text" name="name" id='name'/>
        //             </div>
        //             <div className='input'>
        //                 <label htmlFor="">Developer:-</label>
        //                 <input type="text" name="name" id='name'/>
        //             </div>
        //             <div className='input'>
        //                 <label htmlFor="">Discription:-</label>
        //                 <textarea rows="10" cols="40"></textarea>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <>
        <div className='container'>
            <div className='section'>
           <div className='main_box'>
            <div className="mb-3 fild">
                <label htmlFor="exampleFormControlInput1" className="">Name</label>
                <input type="email" className="form-control" id="exampleFormControlInput1"  name="name" placeholder="name@example.com" onChange={onHandale} value={data.name}/>
           <span style={{color:"red"}}>{error.err}</span>
            </div>
            <div className="mb-3 fild">
                <label htmlFor="exampleFormControlInput1" className="" >Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1"name="email" placeholder="name@example.com"  onChange={onHandale} value={data.email}/>
                <span style={{color:"red"}}>{error.err1}</span>
            </div>
            <div className="mb-3 fild">
                <label htmlFor="exampleFormControlInput1" className="" >Mobile No</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" name="mobile" placeholder="name@example.com"  onChange={onHandale} value={data.mobile}/>
                <span style={{color:"red"}}>{error.err2}</span>
            </div>
            <div className="mb-3 fild">
                <label htmlFor="" className="">gender</label>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="gender"  onChange={onHandale} id="flexRadioDefault1" value="male" />
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                        male
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="gender" id="flexRadioDefault2" value="female"  onChange={onHandale} />
                    <label className="" htmlFor="flexRadioDefault2">
                        female
                    </label>
                </div>
                <span style={{color:"red"}}>{error.err3}</span>
            </div>
            <div className="mb-3 fild">
                <label className="" htmlFor="flexRadioDefault2">
                    City
                </label>
                <select className="form-select" aria-label="Default select example" name='city'  onChange={onHandale} value={data.city}>
                    <option selected>Ahmadabad</option>
                    <option value="Surat">Surat</option>
                    <option value="Navsari">Navsari</option>
                    <option value="Botad">Botad</option>
                </select>
                <span style={{color:"red"}}>{error.err4}</span>
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
            <button type="button" class="btn btn-primary mt-3" onClick={onAddData}>submit</button>
            </div>
            </div>
            </div>
        </>
    )
}

const mapStateToProps=(state)=>{
    console.log(state);
    return{
        list:state.Reducer
    }
};

const mapDispatchToProps=(dispatch)=>{
    return{
        AddData: (data) => dispatch(AddData(data)),
    }
};

export default connect(mapStateToProps,mapDispatchToProps)  (Curd) 
