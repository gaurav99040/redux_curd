import React,{useEffect,useState} from 'react'
// import {useSelector,useDispatch} from "react-redux"
import {connect} from "react-redux"
import { useNavigate } from 'react-router-dom';
import {Table,Radio} from "antd"
import 'antd/dist/antd.css';
import {DeleteData} from "./Action/Action"


function Show(props) {
  // const selector1=useSelector((state)=>{return state})
  const [selector,setselector]=useState(props.list)
  const [selectionType, setSelectionType] = useState('checkbox');
  let item;
    const navigate = useNavigate();
    //  const dispatch = useDispatch()
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
          item=selectedRowKeys
      }
    }
   
  //   const onHandale=(e)=>{
  //     setdata({...data,[e.target.name]:e.target.value})
  // }


    useEffect(() => {
        
    }, [props.list])

    const home=()=>{
        navigate("/")
    }
    const onSelectDelete=()=>{
      // item.map((item,id)=>(
      //   selector.splice(item,1)
      // ))
     const remaininng= props.list.filter((items) => !item.includes(items.key) )
      console.log("ushfih===>",remaininng)
      setselector(remaininng)
      props.DeleteData(remaininng)
      // dispatch(DeleteData(remaininng))
      // console.log(item)
      // selector.filter((data,id)=>{
      //      console.log(data.key)
      //      return item[id]!==data.key
        
      // })
    }

  //   const onDelete=(id)=>{
  //  dispatch(DeleteData(id))
  //   }

  //   const onUpdate=(id)=>{
  //       navigate(`/update/${id}`);
  //   }

    const columns = [

      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'email',
        dataIndex: 'email',
        key: 'email',
      },
      {
        title: 'mobile',
        dataIndex: 'mobile',
        key: 'mobile',
      },
      {
        title: 'gender',
        dataIndex: 'gender',
        key: 'gender',
      },
       {
        title: 'city',
        dataIndex: 'city',
        key: 'city',
      },
      {
        title: 'mobile',
        dataIndex: 'mobile',
        key: 'mobile',
      },

    ];
    return (
      
        <div className='container'>
             <button type="button" class="btn btn-primary mt-3 mr-3" onClick={home}>Add User</button>
             <button type="button" class="btn btn-primary mt-3" onClick={onSelectDelete}>select delete</button><br/>
             <Radio.Group
        onChange={({ target: { value } }) => {
          setSelectionType(value);
        }}
        value={selectionType}
      >
        <Radio value="checkbox">Checkbox</Radio>
        <Radio value="radio">radio</Radio>
      </Radio.Group>
             <Table 
             rowSelection={{
              type: selectionType,
              ...rowSelection,
            }}
             dataSource={selector} 
             columns={columns} />
            {/* <table class="table table-success table-striped">
            <thead>
    <tr>
      <th scope="col">No</th>
      <th scope="col">name</th>
      <th scope="col">Email</th>
      <th scope="col">Number</th>
      <th scope="col">gender</th>
      <th scope="col">city</th>
    </tr>
  </thead>
  <tbody>{selector.length!==0?
      selector.map((data)=>{
       return <tr key={data.id}>
        <th scope="row">{data.id}</th>
        <td>{data.name}</td>
        <td>{data.email}</td>
        <td>{data.mobile}</td>
        <td>{data.gender}</td>
        <td>{data.city}</td>
        <td><button className="btn btn-primary mb-3" onClick={()=>onDelete(data.id)}>Delete</button></td>
        <td><button className="btn btn-primary mb-3" onClick={()=>onUpdate(data.id)}>Update</button></td>
      </tr>
      }):
      <h3>No Data Found</h3>
      }
  
  </tbody>
</table> */}
        </div>
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
    DeleteData: (data) => dispatch(DeleteData(data)),
  }
};

export default connect(mapStateToProps,mapDispatchToProps) (Show)
