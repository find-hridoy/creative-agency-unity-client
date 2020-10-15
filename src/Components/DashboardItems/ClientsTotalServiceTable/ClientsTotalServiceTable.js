import React from 'react';
import './ClientsTotalServiceTable.css';

const ClientsTotalServiceTable = ({ service }) => {
    const { name, email, title, details } = service;
    return (
        <tbody>
            <tr>
                <td className="t_data">{name}</td>
                <td className="t_data">{email}</td>
                <td className="t_data">{title}</td>
                <td className="t_data">{details}</td>
                <td>
                    <select className="form-select select_field" aria-label="Default select example">
                        <option selected>Pending</option>
                        <option value="1">Done</option>
                        <option value="2">On Going</option>
                    </select>
                </td>
            </tr>
        </tbody>
    );
};

export default ClientsTotalServiceTable;