import React, { Component } from "react";
import { Nav } from "./nav";
import { connect } from "react-redux";
import custom from "../styles/custom.css";
import employee from "../styles/employee.css";

import { saveName, saveAddress, savePhone, saveRecord } from "../actions/empAction";

class EmployeeRecords extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { name, address, phone, changeName, changeAddress, changePhone, save } = this.props;
        return (
            <div>
                <div styleName={"custom.container"}>
                    <Nav {...this.props} />
                    <h3 styleName={"employee.heading"}>Employee registration form:</h3>
                    <label htmlFor="name">Name : </label><input id="name" type="text" value={name} onChange={(e) => changeName(e)} />
                    <label htmlFor="address">Address : </label><input id="address" type="text" value={address} onChange={(e) => changeAddress(e)} />
                    <label htmlFor="phone">Phone No : </label><input id="phone" type="text" value={phone} onChange={(e) => changePhone(e)} />
                    <button id="submit" onClick={() => save()}>Save</button>
                </div>
                <div styleName={"custom.container"}>
                    <h3 styleName={"employee.heading"}>Saved records:</h3>
                    <table>
                        <tbody>
                            <tr>
                                <th>Name :</th>
                                <th>Address:</th>
                                <th>Phone No :</th>
                            </tr>
                            {this.renderEmployees()}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

    renderEmployees() {
        const employees = this.props.employees;
        return employees.map((item, key) => {
            return (
                <tr key={key}>
                    <td>{item.name}</td>
                    <td>{item.address}</td>
                    <td>{item.phone}</td>
                </tr>
            );
        });
    }
}

const mapStateToProps = (state) => {
    return {
        employees: state.empReducer.records || [],
        name: state.empReducer.name,
        address: state.empReducer.address,
        phone: state.empReducer.phone
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeName: (e) => dispatch(saveName(e.target.value)),
        changeAddress: (e) => dispatch(saveAddress(e.target.value)),
        changePhone: (e) => dispatch(savePhone(e.target.value)),
        save: () => dispatch(saveRecord())
    };
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EmployeeRecords);
