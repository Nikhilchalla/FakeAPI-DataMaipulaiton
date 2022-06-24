import axios from 'axios'
import {useEffect,useState} from 'react'
function Useeffectdemo(){

    let [users,setUsers]=useState([])
    let [error,setError]=useState('')
    //make api call
    useEffect(()=>{
        //fetch("https://jsonplaceholder.typicode.com/posts")
        //.then(response=>response.json())
        //.then(apiData=>setUsers(apiData))
        //.catch(err=>console.log(err))
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response=>setUsers(response.data))
        .catch(err=>setError(err.message))
    },[])

    console.log('users data is :',users)
    return(
        <div className='container text-center'>
            {/*if error in api call disply error message*/}
            {error!=='' && <p className='h1 text-danger'>{error}</p>}
        {/* if user array is empty ,it should display message*/}
        {users.length==0 && <p className='display-1 test-danger'>No User Data</p>}
        
        {  users.length!==0 && 
        <table className='table text-center'>
            <thead>
                <tr>
                    <th>UserId</th>
                    <th>Id</th>
                    <td>Title</td>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((userObj)=><tr key={userObj.id}> 
                        <td>{userObj.userId}</td>
                        <td>{userObj.id}</td>
                        <td>{userObj.title} </td>
                    </tr>)
                }
            </tbody>

        </table>
            }
        </div>
      
    )
}

export default Useeffectdemo