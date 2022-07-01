import React from "react";
import { useForm } from "react-hook-form";
import { Form, Button, Container } from "react-bootstrap";
import { MdLogin } from "react-icons/md";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onFormSubmit = (userObj) => {
    //http post req
    console.log(userObj)
    axios.post("http://localhost:3000/user-api/login", userObj)
      .then((response) => {
        alert(response.data.message);
        //if user created
        if (response.data.message === "login success") {
          //navigate to login
          navigate("/Home");
        }
      })
      .catch((error) => {
        console.log(error);
        alert("Something went wrong in Logging in");
      });
  };

  return (
    <Container className="bg-dark">
      <div className="text-center display-6 fw-bold mt-5" style={{color:'#610C63'}}>Login</div>
      <div className="row ">
        <div className="col-12 col-sm-6 col-md-4  mx-auto">
      <Form onSubmit={handleSubmit(onFormSubmit)}>
        {/* username */}
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Username"
            {...register("username", { required: true })}
          />
          {/* validation error message for username */}
          {errors.username && (
            <p className="text-danger">* Username is required</p>
          )}
        </Form.Group>

        {/* password */}
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            {...register("password", { required: true })}
          />
          {/* validation error message for password */}
          {errors.password && (
            <p className="text-danger">* Password is required</p>
          )}
        </Form.Group>

        

        <Button variant="primary" type="submit">
          Login <MdLogin />
        </Button>
      </Form>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      </div>
      </div>
    </Container>
  );
}

export default Login;