import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './redux/Counter'
import AddUser from './AddUser'
import { deleteUser, updateUser } from './redux/User'
import Update from './Update'

export default function App() {
  const dispatch = useDispatch()
  const {user}=useSelector(state=> state.users)
  const { count } = useSelector(state => state.counter)
  return (
    <div className='container d-flex flex-column align-items-center justify-content-center' style={{ height: '100vh' }}>
      <div className="main-outer w-25 h-25 p-2 border border-dark rounded-5">
        <div className="header mt-2 w-100 h-25 d-flex align-items-center justify-content-center"><h2>Counter</h2></div>
        <div className="count-outer d-flex w-100 h-75 align-items-center justify-content-center">
          <div className='w-25 h-25 d-flex align-items-center justify-content-center'>
            <button className='btn btn-outline-dark me-5 ms-3'
              onClick={() => dispatch(increment())}>Increment</button>
          </div>
          <div className='w-25 h-25 d-flex align-items-center justify-content-center'>
            <h2>{count}</h2>
          </div>
          <div className='w-25 h-25 d-flex align-items-center justify-content-center'>
            <button className='btn btn-outline-dark ms-5 me-3'
              onClick={() => dispatch(decrement())}>Decrement</button>
          </div>

        </div>
      </div>
      <AddUser uid={crypto.randomUUID()}/>
      <div className='tbl-outer w-100' style={{height:'auto',overflow:'auto'}}>
        <table className='table table-hover mt-5'>
          <thead>
             <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Age</th>
             </tr>
            </thead> 
            <tbody>
              {
                user.map((e,index)=>{
                  return(
                    <tr key={index}>
                      <td>{e.id}</td>
                      <td>{e.name}</td>
                      <td>{e.age}</td>
                      <td><Update u={e}/></td>
                      <td><button className='btn btn-danger'
                      onClick={()=> dispatch(deleteUser(e.id))}>Delete</button></td>
                    </tr>
                  )
                })
              }
              </tbody>         
        </table>
      </div>
    </div>
  )
}
