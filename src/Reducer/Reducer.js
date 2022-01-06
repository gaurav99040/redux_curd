

const inistialstate=[]

const Reducer=(state=inistialstate,action)=>{
    switch(action.type){
        case "ADD_DATA":
            //  state.push({...action.payload})
            // console.log('state1',state);
            //  state.inistialstate[state.inistialstate.length] = action.payload;
            //  console.log('state2',state);
            //  console.log('action', action.payload)
            return [...state,action.payload]
            // return state
        
    
        case "DELETE_DATA":{
            // state=state.filter((item)=>action.payload!==item.id)
            // console.log("action.payload------>",action.payload)
            // state=state.filter((item,id)=>(action.payload[id] != item.key))
            
            // state=state.map((data,id)=>(
            //  action.payload.map((item,index)=>{
             
            //          state.splice(item,1)
            //         console.log("state--------->",state)
            //     })
                return action.payload
            // ))
           
        }

        case "UPDATA_DATA":{
            state[action.key]=action.payload
            return state
        }
        default:
            return state
    }
}
export default Reducer