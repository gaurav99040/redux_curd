export const AddData=(data)=>{
    return {
        type:"ADD_DATA",
        payload:data
    }
} 
export const DeleteData=(item)=>{
    return {
        type:"DELETE_DATA",
        payload:item
    }
}

export const UpdateData=(data)=>{
    return {
        type:"UPDATA_DATA",
        payload:data,
        key:data.key
    }
}
