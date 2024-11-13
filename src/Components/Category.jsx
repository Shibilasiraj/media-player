import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addCategory, getAllCategory } from '../service/allAPI';

function Category() {
  const [show, setShow] = useState(false);
  const [categoryName,setCategoryName]=useState("")
  const [allCategory,setAllCategory]=useState([])
  console.log(categoryName);
  console.log(allCategory);
  


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(()=>{
    getCategory()
  },[])


  const handleAddCategory=async()=>{

    if(categoryName){
      // api call
      try{
        await addCategory({categoryName,allVideos:[]})
        handleClose()
        getCategory()

      }
      catch(err){
        console.log(err);
        

      }
      
    }
    else{
      toast.warning("Enter the Category Name")

    }
  }

  const getCategory=async()=>{
    try{
      const result=await getAllCategory()
      setAllCategory(result.data);
      
    }
    catch(err){
      console.log(err);
      
    }

  }
  return (
    <>
    <div className='d-flex justify-content-around'>
      <h3 className='text-warning'>All Categories</h3>
      <button  onClick={handleShow} className='btn btn-info fs-5 rounded-circle ms-3 fw-bolder'>+</button>
    </div>

    {
      allCategory.length>0?
      allCategory?.map(category=>(
        <div className='container-fluid mt-3'>
      <div className='border border-light border-3 rounded p-3 mb-3'>
        <div className='d-flex justify-content-between'>
          <h5>{category.categoryName}</h5>
          <button className='btn'><i class="fa-solid fa-trash" style={{color:'red'}}></i></button>
        </div>
      </div>
    </div>


      ))
      :
      <div className='text-danger fw-bold fs-3'>Category not Added yet</div>
    }
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title  className='text-warning'>Category Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <div className='p-3 border border-3 border-info rounded'>
      <FloatingLabel controlId="categoryName" label="category">
        <Form.Control onChange={(e)=>setCategoryName(e.target.value)} type="text" placeholder="category" />
      </FloatingLabel>

         </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAddCategory}>Add</Button>
        </Modal.Footer>
      </Modal>

      {/* react toastify */}
<ToastContainer position="top-right" autoClose={3000} theme="colored"/>

    </>
  )
}

export default Category