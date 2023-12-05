import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

const Subscription = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [addplan, setAddPlan] = useState([]);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("");
  const [users, setUsers] = useState("");
  const [projects, setProjects] = useState("");
  const [storagespace, setStorageSpace] = useState("");
  const [desc, setDesc] = useState("");
  const [msg, updateMsg] = useState("");

  // const getAddPlanDetails = () => {
  //   fetch('http://localhost:1234/addplan')
  //     .then(response => response.json())
  //     .then(data => console.log(data))
  //     .catch(error => console.error(error));
  // }
  // useEffect(() => {
  //   getAddPlanDetails();
  // }, [1])

  const Submit = () => {
    var url = "http://localhost:1234/addplan";
    var data = {
      "pname": name,
      "pamount": amount,
      "ptype": type,
      "puser": users,
      "pproject": projects,
      "pstorage": storagespace,
      "pdesc": desc
    }
    axios.post(url, data)
      .then(response => {
        updateMsg(name + "Added Successfully");
        console.log(data);
      })
  }
  return (
    <div className='container mt-2'>
      <div className='row'>
        <div className='col-lg-2'>
          <h4 className='header1'> Subscriptions </h4>
          <h6> Dashboard / <span className='head'>Subscriptions</span></h6>
        </div>
        <div className='col-lg-2 offset-8'>
          <Button variant="primary" className='text-white btn btn-warning' id="pill" onClick={handleShow}>
            <i className='fa fa-plus m-1'></i>
            Add Subscription
          </Button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>
                <h6 className='addheading'> Add Plan </h6>
              </Modal.Title>
              <p className="text-center text-danger">  {msg} </p>
            </Modal.Header>
            <Modal.Body>
              <div className='container'>
                <div className='row offset-1'>
                  <div className='col-lg-5'>
                    <label className='mb-2 formfont'> Plan Name </label>
                    <input type="text" placeholder="Free Trail" className='form-control' value={name}
                      onChange={e => setName(e.target.value)} />
                  </div>

                  <div className='col-lg-5'>
                    <label className='mb-2 formfont'> Plan Amount </label>
                    <input type="text" className='form-control' value={amount}
                      onChange={e => setAmount(e.target.value)} />
                  </div>
                </div>
                <div className='row offset-1'>
                  <div className='col-lg-5'>
                    <label className='mt-3 mb-2 formfont'> Plan Type </label>
                    <select className='form-control formfont' onChange={e => setType(e.target.value)}>
                      <option className='sethighlite'> Weekly </option>
                      <option className='sethighlite'> Monthly </option>
                      <option className='sethighlite'> Yearly </option>
                    </select>
                  </div>
                  <div className='col-lg-5'>
                    <label className='mt-3 mb-2 formfont'> No Of Users </label>
                    <select className='form-control formfont' onChange={e => setUsers(e.target.value)}>
                      <option className='sethighlite'> 1 User </option>
                      <option className='sethighlite'> 2 User </option>
                      <option className='sethighlite'> 3 User </option>
                      <option className='sethighlite'> 4 User </option>
                    </select>
                  </div>
                </div>
                <div className='row offset-1'>
                  <div className='col-lg-5'>
                    <label className='mt-3 mb-2 formfont'> No Of Projects </label>
                    <select className='form-control formfont' onChange={e => setProjects(e.target.value)}>
                      <option className='sethighlite'>Project 1</option>
                      <option className='sethighlite'>Project 2</option>
                      <option className='sethighlite'>Project 3</option>
                      <option className='sethighlite'>Project 4</option>
                      <option className='sethighlite'>Project 5</option>
                    </select>
                  </div>
                  <div className='col-lg-5'>
                    <label className='mt-3 mb-2 formfont'> No Of Storage Space </label>
                    <select className='form-control formfont' onChange={e => setStorageSpace(e.target.value)}>
                      <option className='sethighlite'>1GB</option>
                      <option className='sethighlite'>2GB</option>
                      <option className='sethighlite'>3GB</option>
                      <option className='sethighlite'>4GB</option>
                      <option className='sethighlite'>5GB</option>
                    </select>
                  </div>
                </div>

                <div className='row offset-1'>
                  <div className='col-lg-10 mt-3'>
                    <label className='formfont'>Plan Description</label>
                    <textarea className='form-control w-20 mt-2' value={desc}
                      onChange={e => setDesc(e.target.value)}>
                    </textarea>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div>
                  <label className='halign formfont'>Status</label> <br />
                  <label class="switch halign">
                    <input type="checkbox" />
                    <span class="slider round"></span>
                  </label>
                </div>
              </div>
              <div className='row offset-4'>
                <div className='col-lg-2'>
                  <button className='mt-3 submitvalue' id='modalpill' onClick={Submit}> SUBMIT </button>
                </div>
              </div>
            </Modal.Body>
          </Modal>
        </div>
      </div>

      <div className='row offset-5'>
        <div className='col-lg-6 mt-2'>
          <div className="btn-group" role="group" aria-label="Second group">
            <button className='btn-sm text'>Monthly Plan</button>
            <button className="btn-sm text">Annual Plan</button>
          </div>
        </div>
      </div>

      <div className='row mt-3 offset-2 g-3'>
        <div className='col-lg-3 shadow m-3'>
          <h6 className='text-center mt-2 header'> Free </h6>
          <h3 className='text-center mt-2'>
            <i className="fa fa-dollar"></i>0</h3>

          <p className='weight'><i className="fa fa-check text-success"></i> 30 Users </p>
          <p><i className="fa fa-check text-success"></i> 50 Projects </p>
          <p><i className="fa fa-check text-success"></i> 100 GB Storage </p>
          <button className='mb-4 btn btn-secondary btn1 mt-5'> Edit </button>
        </div>

        <div className='col-lg-3 m-3 shadow'>
          <h6 className='text-center mt-2 header'> Professional </h6>
          <h3 className='text-center mt-2'>
            <i class="fa fa-dollar"></i>
            199<sub className='head'>/mo</sub></h3>
          <p className='weight'><i className="fa fa-check text-success weight"></i> 5 User </p>
          <p><i className="fa fa-check text-success"></i> 50 Projects </p>
          <p><i className="fa fa-check text-success"></i> 100GB Storage </p>
          <button className='mb-4 btn btn-secondary btn1 mt-5'> Edit </button>
        </div>

        <div className='col-lg-3 m-3 shadow'>
          <h6 className='text-center mt-2 header'> Enterprise </h6>
          <h3 className='text-center mt-2'>
            <i className="fa fa-dollar"></i>399<sub className='head'>/mo</sub></h3>
          <p className='weight'><i className="fa fa-check text-success weight"></i> Unlimited User </p>
          <p><i className="fa fa-check text-success"></i> 5 Projects </p>
          <p><i className="fa fa-check text-success"></i> 5GB Storage </p>
          <button className='mb-4 btn btn-secondary btn1 mt-5'> Edit </button>
        </div>
      </div>
      <div className='row offset-2 g-3'>
        <div className='col-lg-10'>
          <p className='tableheading shadow'> Plan Details </p>
        </div>
      </div>
      <div className='row offset-2 g-3'>
        <div className='col-lg-10'>
          <table className='table shadow'>
            <thead>
              <tr className='tableheadrow'>
                <th>Plan<i className="fa fa-arrow-down"></i></th>
                <th>Plan Type<i className="fa fa-arrow-down"></i></th>
                <th>Create Date<i className="fa fa-arrow-down"></i> </th>
                <th>Modified Date<i className="fa fa-arrow-down"></i> </th>
                <th>Amount<i className="fa fa-arrow-down"></i> </th>
                <th>Subscribed User<i className="fa fa-arrow-down"></i></th>
              </tr>
            </thead>
            {/* <tbody>
              {
                addplan.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item.pname} </td>
                      <td>{item.id} </td>
                      <td> {item.pamount} </td>
                      <td> {item.ptype} </td>
                      <td> {item.pusers} </td>
                      <td> {item.pprojects} </td>
                      <td> {item.pstorage} </td>
                      <td> {item.pdesc} </td>
                    </tr>
                  )
                })
              }
            </tbody> */}

            <tbody>
              <tr>
                <td><p> Free Trail </p></td>
                <td><p> Yearly </p></td>
                <td><p> 01 Nov 2023 </p></td>
                <td><p> 10 Dec 2023 </p></td>
                <td><p> Free </p></td>
                <td><button className='btn btn-primary btn-sm'> 60 Users</button></td>
              </tr>
              <tr>
                <td><p> Professional </p></td>
                <td><p> Yearly </p></td>
                <td><p> 01 Nov 2023 </p></td>
                <td><p> 10 Dec 2023 </p></td>
                <td><p><i className="fa fa-dollar"></i>199 </p></td>
                <td><button className='btn btn-primary btn-sm'> 80 Users</button></td>
              </tr>
            </tbody>
          </table>

        </div>
      </div>
    </div>
  )
}
export default Subscription;