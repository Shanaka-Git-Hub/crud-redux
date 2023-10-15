import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useDispatch } from 'react-redux'
import { updateUser } from './redux/User'
import { ToastContainer, toast } from 'react-toastify';

function Update({ u }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch()
  const schema = yup.object().shape({
    id: yup.string().required(),
    name: yup.string().required(),
    age: yup.number().positive().integer().required()
  })
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema)
  })
  const formData = (data) => {
    if (u.id == data.id && u.name == data.name && u.age == data.age) {
      toast('You did not made any changes')
    }
    else {
      dispatch(updateUser(data))
      toast('User Updated Successfully...!')
      reset();
    }
  }

  return (
    <>
      <Button variant="success" size='sm' onClick={handleShow}>
        Update
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form action="" onSubmit={handleSubmit(formData)}
            className='d-flex flex-column align-items-center justify-content-around'
            style={{ width: '100%', height: '300px' }}>
            <input type="text" {...register('id')} defaultValue={u.id} className='form-control' placeholder='User Id' />
            <p>{errors.id?.message}</p>
            <input type="text" {...register('name')} defaultValue={u.name} className='form-control' placeholder='User Name' />
            <p>{errors.name?.message}</p>
            <input type="text" {...register('age')} defaultValue={u.age} className='form-control' placeholder='Age' />
            <p>{errors.age?.message}</p>
            <button className='btn btn-outline-secondary col-8'
              onClick={errors.name?.message ? handleShow:handleClose}>Update</button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer />
    </>
  );
}

export default Update;