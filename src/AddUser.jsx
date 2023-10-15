import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import {useDispatch} from 'react-redux'
import {saveUser} from './redux/User'
import { toast,ToastContainer } from 'react-toastify';

function AddUser({uid}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch=useDispatch()
  const schema=yup.object().shape({
    id:yup.string().required(),
    name:yup.string().required(),
    age:yup.number().positive().integer().required()
  })
  const {register,handleSubmit,formState:{errors},reset}=useForm({
    resolver:yupResolver(schema)
  })
  const formData=(data)=>{
    dispatch(saveUser(data))
    reset();
    toast('user saved successfully')
  }

  return (
    <>
      <Button variant="success col-5 mt-5 " size='sm' onClick={handleShow}>
        Add User
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form action="" onSubmit={handleSubmit(formData)} 
            className='d-flex flex-column align-items-center justify-content-around' 
            style={{width:'100%',height:'300px'}}>
                <input type="text" {...register('id')}defaultValue={uid.substring(0,17)} className='form-control' placeholder='User Id' />
                <p>{errors.id?.message}</p>
                <input type="text" {...register('name')}className='form-control' placeholder='User Name' />
                <p>{errors.name?.message}</p>
                <input type="text" {...register('age')}className='form-control' placeholder='Age' />
                <p>{errors.age?.message}</p>
                <button className='btn btn-primary col-8'>Save User</button>
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer/>
    </>
  );
}

export default AddUser;