import React from "react";  
export default function Table() {
  function deleteInput(index) {
    let totalrecords = [...inputarr]
    totalrecords.splice(index,1)
    setInputarr(totalrecords)
  }
  function updateInput(index) {
    let {name, email, dob, address} = inputarr[index]
    setInputdata({name, email, dob, address})
    setBoolean(true)
    setIndex(index)
}
  return (
    <div className="container">
      <table className="table my-3">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">DOB</th>
            <th scope="col">Address</th>
            <th scope="col">Delete</th>
            <th scope="col">Update</th>
          </tr>
        </thead>
        <tbody>
          {/* Function to map through the input array */}
          {inputarr.map((value, index) => {
            return (
              <tr key={index + 1}>
                <td>{index + 1}</td>
                <td>{value.name}</td>
                <td>{value.email}</td>
                <td>{value.dob}</td>
                <td>{value.address}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => {
                      deleteInput(index);
                    }}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {
                      updateInput(index);
                    }}
                  >
                    Update
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}