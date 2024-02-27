import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
  const laodedUsers = useLoaderData();
  const [uusers, setUusers] = useState(laodedUsers);

  const deleteUser = (_id) => {
    console.log(_id);

    fetch(`http://localhost:5000/users/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("user delete is successfully");
          const remaining = uusers.filter((user) => user._id !== _id);
          setUusers(remaining);
        }
      });
  };

  return (
    <div>
      <h1>All users : {laodedUsers.length}</h1>
      {laodedUsers.map((user) => (
        <p key={user._id}>
          {user.name}: {user.email} : {user._id}{" "}
          <Link to={`/updates/${user._id}`}>
            <button>Updates</button>
          </Link>
          <button onClick={() => deleteUser(user._id)}>X</button>
        </p>
      ))}
    </div>
  );
};

export default Users;
