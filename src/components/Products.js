import React from 'react';
import { Link } from 'react-router-dom';

function Products({ list }) {
  console.log(list);
  return (
    <span className="box">
      <h3>List names</h3>
      {list.map((user, index) => (
        <li key={index}>
          name: {user.name}, email: {user.email}
        </li>
      ))}

      <br></br>
      <Link to="/">Home</Link>
    </span>
  );
}

export default Products;
