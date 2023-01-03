import './App.css';
import Form from './components/Form';
import Table from './components/Table';
import { useState } from 'react';

function App() { 
  const [inputarr, setInputarr] = useState([]);
  const [boolean, setBoolean] = useState(false)
  const [index, setIndex] = useState([]);
  const [inputdata, setInputdata] = useState({
    name: "",
    email: "",
    dob: "",
    address: "",
  });
  //function to handle changes in input field
  function changehandle(event) {
    setInputdata({ ...inputdata, [event.target.name]: event.target.value });
  }
  //function to add record in array
  let { name, email, dob, address } = inputdata;
  function addrecordhandle() {
    setInputarr([...inputarr, { name, email, dob, address }]);
    //clear the input field again
    setInputdata({ name: "", email: "", dob: "", address: "" });
  }
  // function to remove record from array
  function deleteInput(index) {
    let totalrecords = [...inputarr]
    totalrecords.splice(index,1)
    setInputarr(totalrecords)
  }
  //function to update input fields
  function updateInput(index) {
      let {name, email, dob, address} = inputarr[index]
      setInputdata({name, email, dob, address})
      setBoolean(true)
      setIndex(index)
  }
  // function to splice the previous record from that particular index
  function updateData(){
    let total = [...inputarr]
    total.splice(index,1,{name, email, dob, address})
    setInputarr(total)
    setBoolean(false)
    setInputdata({ name: "", email: "", dob: "", address: "" });
  }


  return (
      <>
        <Form inputdata={inputdata} changehandle={changehandle} boolean={boolean} updateData={updateData} addrecordhandle={addrecordhandle}/>
        <Table updateInput={updateInput} deleteInput={deleteInput} inputarr={inputarr}/>
      </>
  );
}

export default App;
