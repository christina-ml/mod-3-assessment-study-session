import React from "react";
import "../App.css";

class Employees extends React.Component {
    constructor(){
        super();

        this.state = {
            employees: [],
            currentEmployee: null, // `null` is falsy, an `empty object` is truthy.
        }
    }

    fetchEmployees = () => {
        fetch("https://pursuit-veterinarian.herokuapp.com/api/employees")
            .then((res)=> res.json())
            .then((data)=>{
            this.setState({
                employees: data,
            })
        })
    }

    componentDidMount = () => {
        this.fetchEmployees();
    }

    handleDropdownChange = (event) => {
        this.setState({
            currentEmployee: event.target.value,
        })
    }


    // Map through employee data and return the name of each one
    render() {
    let dropDownOptions = this.state.employees.map((employee)=>{
        return (
            <option>{employee.firstName}</option>
        )
    })

    let currentEmployeeObject = this.state.employees.find((employee)=>{
        return employee.firstName === this.state.currentEmployee;
    })

    console.log(currentEmployeeObject)

    return (
    <div className="Employees">
        <h1>this is the Employees page!</h1>
        <select onChange={this.handleDropdownChange}>
            <option>Select an Employee</option>
            {dropDownOptions}
        </select>
        <h1>
            {currentEmployeeObject ? currentEmployeeObject.firstName : null}
            {currentEmployeeObject.lastName}
        </h1>
    </div>
    )
  }
}

export default Employees;
