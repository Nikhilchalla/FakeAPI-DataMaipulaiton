import {useState} from 'react'

function Child2(props){
    let [Child2Data,setChild2Data]=useState('hello there !')


    return(
        <div className="bg-success ">
            <h1>child-2 component</h1>
            <h3 className="text-secondary text-white">
                {props.username}
            </h3>
            <h3 className="text-secondary text-white"> 
                    {props.city} 
            </h3>
            <button className='btn btn-danger' onClick={()=>props.getDataFromChild(Child2Data)}>
                send to parent
            </button>
        </div>
    )
}

export default Child2;

