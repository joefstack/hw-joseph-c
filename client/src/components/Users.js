import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Users() {
  const [users, setUsers] = useState([]);
  const fetchUsers = async () => {
    const users = await axios.get(
      "https://jwq34ern4h.execute-api.us-east-2.amazonaws.com/dev/api/users"
    );
    return users.data;
  };

  useEffect(() => {
    fetchUsers().then((users) => setUsers(users));
  }, []);

  let userRows = users.map((user) => {
    return (
      <tr key={user._id}>
        <td>{user.firstName}</td>
        <td>{user.lastName}</td>
        <td>{user.phoneNumber}</td>
        <td>
          <Link to={`/users/${user._id}`}>Details</Link>
        </td>
      </tr>
    );
  });
  return (
    <div>
      <h1>Saved Users</h1>
      <table>
        <thead>
          <tr>
            <th>First name</th>
            <th>Last name</th>
            <th>Phone Number</th>
            <th>View Details</th>
          </tr>
        </thead>
        <tbody>{userRows}</tbody>
      </table>
    </div>
  );
}
