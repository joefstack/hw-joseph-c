import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function User() {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const fetchUser = async (userId) => {
    const user = await axios.get(
      `https://jwq34ern4h.execute-api.us-east-2.amazonaws.com/dev/api/users/${userId}`
    );
    return user.data;
  };

  useEffect(() => {
    fetchUser(id).then((user) => setUser(user));
  }, [id]);

  return (
    <div>
      <h1>User Detail</h1>
      <table>
        <thead>
          <tr>
            <th>First name</th>
            <th>Last name</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>{user.firstName}</th>
            <th>{user.lastName}</th>
            <th>{user.phoneNumber}</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
