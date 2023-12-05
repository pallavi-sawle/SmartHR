// import React ,{ useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';

// const AddPlan = () => {
//     const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
//     return (
//         <div className='container'>
//             <h5 className=' mt-3 mb-3 text-center'> Add Plan </h5>
//             <div className='row'>
//                 <div className='col-lg-2 offset-4'>
//                     <label className='mb-2'> Plan Name </label>
//                     <input type="text" placeholder="Free Trail" className='form-control' />
//                 </div>

//                 <div className='col-lg-2'>
//                     <label className='mb-2'> Plan Amount </label>
//                     <input type="text" className='form-control' />
//                 </div>
//             </div>
//             <div className='row'>
//                 <div className='col-lg-2 offset-4'>
//                     <label className='mt-3 mb-2'> Plan Type </label>
//                     <select className='form-control'>
//                         <option> Weekly </option>
//                         <option> Monthly </option>
//                         <option> Yearly </option>
//                     </select>
//                 </div>
//                 <div className='col-lg-2'>
//                     <label className='mt-3 mb-2'> No Of Users </label>
//                     <select className='form-control'>
//                         <option> 1 User </option>
//                         <option> 2 User </option>
//                         <option> 3 User </option>
//                         <option> 4 User </option>
//                     </select>
//                 </div>
//             </div>
//             <div className='row'>
//                 <div className='col-lg-2 offset-4'>
//                     <label className='mt-3 mb-2'> No Of Projects </label>
//                     <select className='form-control'>
//                         <option>Project 1</option>
//                         <option>Project 2</option>
//                         <option>Project 3</option>
//                         <option>Project 4</option>
//                         <option>Project 5</option>
//                     </select>
//                 </div>
//                 <div className='col-lg-2'>
//                     <label className='mt-3 mb-2'> No Of Storage Space </label>
//                     <select className='form-control'>
//                         <option>1GB</option>
//                         <option>2GB</option>
//                         <option>3GB</option>
//                         <option>4GB</option>
//                         <option>5GB</option>
//                     </select>
//                 </div>
//             </div>

//             <div className='row'>
//                 <div className='col-lg-4 offset-4 mt-3 '>
//                     <label>Plan Description</label>
//                     <textarea className='form-control w-20 mt-2'>

//                     </textarea>
//                 </div>
//             </div>
//             <div className='row'>
//                 <button className='col-lg-1 offset-5 mt-5'> SUBMIT </button>
//             </div>
//         </div>
//     )
// }

// export default AddPlan;