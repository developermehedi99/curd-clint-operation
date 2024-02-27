import { useLoaderData } from "react-router-dom";

const Updates = () => {
  const loadedUsers = useLoaderData();

  const handleSubmitUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const userUpdate = { name, email };
    console.log(userUpdate);

    fetch(`http://localhost:5000/users/${loadedUsers._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userUpdate),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert("user update is successfully done");
        }
      });
  };
  return (
    <div>
      <h1>update this users : {loadedUsers.name}</h1>
      <form onSubmit={handleSubmitUpdate}>
        <input type="text" defaultValue={loadedUsers.name} name="name" /> <br />
        <input
          type="email"
          defaultValue={loadedUsers.email}
          name="email"
          id=""
        />{" "}
        <br />
        <input type="submit" value="updates" />
      </form>
    </div>
  );
};

export default Updates;
