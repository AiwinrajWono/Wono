import React from 'react'
import Table from 'react-bootstrap/Table';
import PaginationS from '../components/Pagination';
import "../layout/users.css"

const Users = () => {
  return (
    <>
    <div className='users'>
            <h1>Users</h1>
        </div>
    <Table striped="columns">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Larry the Bird</td>
          <td>silva</td>
          <td>@thin</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Larry the Bird</td>
          <td>@twitter</td>
          <td>@thin</td>

        </tr>
        <tr>
          <td>5</td>
          <td >Larry the Bird</td>
          <td>@twitter</td>
          <td>@thin</td>
        </tr>
        <tr>
          <td>6</td>
          <td>Larry the Bird</td>
          <td>@twitter</td>
          <td>@thin</td>
        </tr>
        <tr>
          <td>7</td>
          <td>Larry the Bird</td>
          <td>@twitter</td>
          <td>@thin</td>
        </tr>
        <tr>
          <td>8</td>
          <td >Larry the Bird</td>
          <td>@twitter</td>
          <td>@thin</td>
        </tr>
        <tr>
          <td>9</td>
          <td >Larry the Bird</td>
          <td>@twitter</td>
          <td>@thin</td>
        </tr>
        <tr>
          <td>10</td>
          <td >Larry the Bird</td>
          <td>@twitter</td>
          <td>@thin</td>
        </tr>
      </tbody>
    </Table>
    <div className='pagination'>
    <PaginationS/>
    </div>

    </>
  )
}

export default Users