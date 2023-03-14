import React from "react";
import api from "../api/data";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Button, Stack } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


const Post = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  
  const [user, setUser] = React.useState({});
  const [edit, setEdit] = React.useState(false);
  const [createdUser, setCreatedUser] = React.useState({
    id: null,
    name: "",
    email: "",
  });

  const [userEdit, setUserEdit] = React.useState({
    id: null,
    name: "",
    email: "",
  });

  // const deleteUser = async (id) => {
  //   await api.delete("/users/" + id);
  //   const newUsersList = users.filter((user) => {
  //     return user.id !== id;
  //   });

  // };

  const editUser = async (ID) => {
    const addData = {
      name: userEdit.name,
      email: userEdit.email,
    };
    const response = await api.put("/users/" + ID, addData);
    const { id, name, email } = response.data;
    console.log(response.data);
    setUserEdit({ id: null, name: "", email: "" });
    setEdit(false)
    navigate('/posts');
  };

  React.useEffect(() => {
    const fetchData = async () => {
      const res = await api.get(`/users/${userId}`);
      setUser(res.data)
      
    };

    fetchData();
  }, [userEdit]);

  return (
    <>
    <Stack gap={2} className="col-md-5 mx-auto">
      
      <h3 className="text-center">{user.name}</h3>
      
        <Button variant="secondary" onClick={() => {setUserEdit({id: user.id, name: user.name, email: user.email});setEdit(true)}}>edit</Button>
        <Button variant="outline-secondary" onClick={() => {}}>delete</Button>
        
        {edit && (
          <div className="d-flex flex-column">
          <InputGroup className="mb-3">
            
            <Form.Control
              onChange={(e) => {
                setUserEdit({ ...userEdit, name: e.target.value });
              }}
              value={userEdit.name}
              placeholder="name"
              type="text"
            />

            <Form.Control
              onChange={(e) => {
                setUserEdit({ ...userEdit, email: e.target.value });
              }}
              value={userEdit.email}
              placeholder="email"
              type="email"
            />
          </InputGroup>

          <Button variant="primary" className="mb-2" onClick={() => {editUser(user.id)}}>Save changes</Button>
          <Button
          variant="danger"
            onClick={() => {
              setUserEdit({ id: null, name: "", email: "" });
              setEdit(false)
            }}
          >
            Discard
          </Button>
        </div>
        )}
    </Stack>
      
    </>
  );
};

export default Post;
