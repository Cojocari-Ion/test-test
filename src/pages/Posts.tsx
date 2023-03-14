import React from "react";
import api from "../api/data";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

type Props = {};

interface User {
  id: number | null;
  name: string;
  email: string;
}

const Posts: React.FC<Props> = () => {
  const navigate = useNavigate();
  const [users, setUsers] = React.useState<any[]>([]);
  const [createdUser, setCreatedUser] = React.useState<User>({
    id: null,
    name: "",
    email: "",
  });

  const getID = (): void => {
    setCreatedUser({ ...createdUser, id: Math.floor(Math.random() * 100000) });
  };

  const addUser = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    getID();
    const req = {
      id: createdUser.id,
      name: createdUser.name,
      email: createdUser.email,
    };

    const res = await api.post("/users", req);
    console.log(res.data);
    setUsers([...users, res.data]);
    setCreatedUser({ id: null, name: "", email: "" });
  };

  const createUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCreatedUser({ ...createdUser, name: e.target.value });
  };

  const createUserEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCreatedUser({ ...createdUser, email: e.target.value });
  };

  const seeUser = (id: number) => {
    navigate("/posts/" + id);
  };

  React.useEffect(() => {
    const fetchData = async () => {
      const res = await api.get("/users");
      setUsers(res.data);
    };

    fetchData();
  }, []);

  return (
    <div>
      {users?.map((x, i) => (
        <Card key={i} className="mt-2 mb-4 mx-auto" style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>{x.name}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button
              onClick={() => {
                seeUser(x.id);
              }}
              variant="primary"
            >
              See user
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Posts;
