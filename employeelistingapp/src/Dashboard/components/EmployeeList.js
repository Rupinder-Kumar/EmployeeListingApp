import React from "react";

const EmployeeList = props => {
    const { employees } = props;
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 mt-5 mb-5">
                    <h3 className="mb-4">Employee Dashboard</h3>
                    {employees.length > 0 ?
                    <table className="table table-dark">
                        <thead>
                            <tr>
                                <th scope="col">Emp Id</th>
                                <th scope="col">Name</th>
                                <th scope="col">Gender</th>
                                <th scope="col">Email</th>
                                <th scope="col">Contact No.</th>
                            </tr>
                        </thead>
                        <tbody>
                        {employees && (employees.length > 0) ?
                            employees.map((employee) => {
                                return(
                                <tr key={employee.id}>
                                    <td>{employee.id}</td>
                                    <td>{employee.name}</td>
                                    <td>{employee.gender}</td>
                                    <td>{employee.email}</td>
                                    <td>{employee.phoneNo}</td>
                                </tr>
                                )
                            })
                         
                            : "Fetching Employee List"}
                        </tbody>
                    </table>
                     : "No Employees Available" }
                </div>
            </div>
        </div >
    )
}

export default EmployeeList;