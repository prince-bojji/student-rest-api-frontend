import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

export default function Home() {
  const [students, setstudents] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadstudents();
  }, []);

  const loadstudents = async () => {
    const result = await axios.get('http://localhost:8080/api/students');
    setstudents(result.data);
  };

  const deletestudent = async id => {
    await axios.delete(`http://localhost:8080/api/students/${id}`);
    loadstudents();
  };

  return (
    <div className='container'>
      <div className='py-4'>
        <table className='table border shadow'>
          <thead>
            <tr>
              <th scope='col'>S.N</th>
              <th scope='col'>Name</th>
              <th scope='col'>Age</th>
              <th scope='col'>Contact Number</th>
              <th scope='col'>Address</th>
              <th scope='col'>Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr>
                <th scope='row' key={index}>
                  {index + 1}
                </th>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.contact}</td>
                <td>{student.address}</td>
                <td>
                  <Link
                    className='btn btn-primary mx-2'
                    to={`/viewstudent/${student.id}`}>
                    View
                  </Link>
                  <Link
                    className='btn btn-outline-primary mx-2'
                    to={`/editstudent/${student.id}`}>
                    Edit
                  </Link>
                  <button
                    className='btn btn-danger mx-2'
                    onClick={() => deletestudent(student.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
