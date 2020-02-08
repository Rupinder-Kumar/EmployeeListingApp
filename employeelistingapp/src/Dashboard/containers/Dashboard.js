import React, { Component } from "react";
import { connect } from 'react-redux';
import { getEmployees } from "../store/DashboardActions";
import EmployeeList from "../components/EmployeeList";

class Dashboard extends Component { 

componentDidMount() {
    this.props.getEmployees();
}

    render() {
        const { employees } = this.props;
        return(
            <EmployeeList employees={employees} />
        )
    }
}



const mapStateToProps = state => ({
    error: state.dashboard.error,
    employees: state.dashboard.data
});

const mapDispatchToProps = dispatch => ({
    getEmployees: () => dispatch(getEmployees())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard);