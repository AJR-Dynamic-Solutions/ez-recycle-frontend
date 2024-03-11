import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { useNavigate } from "react-router-dom";

const RecycleNew = ({ createRecycle, currentUser }) => {
  const navigate = useNavigate();
  const [myRecycle, setMyRecycle] = useState({
    item: "",
    category: "",
    description: "",
    price: "",
    city: "",
    state: "",
    email: "",
    whatsapp_user: "",
    image: "",
    user_id: currentUser?.id,
  });

  const handleChange = (e) => {
    setMyRecycle({ ...myRecycle, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    createRecycle(myRecycle);
    navigate("/myrecycles");
  };

  return (
    <>
      {currentUser?.id && (
        <div className="form-container">
          <h1>List Your Items</h1>
          <Form className="form" action="/recycles" method="POST">
            <FormGroup className="form-group item">
              <Label for="item">Item: </Label>
              <Input
                type="text"
                name="item"
                onChange={handleChange}
                value={myRecycle.item}
              />
            </FormGroup>
            <FormGroup className="form-group group category">
              <Label for="category">Category: </Label>
              <Input
                type="text"
                name="category"
                onChange={handleChange}
                value={myRecycle.category}
              />
            </FormGroup>
            <FormGroup className="form-group description">
              <Label for="description">Description: </Label>
              <Input
                type="text"
                name="description"
                onChange={handleChange}
                value={myRecycle.description}
              />
            </FormGroup>
            <FormGroup className="form-group price">
              <Label for="price">Price: </Label>
              <Input
                type="text"
                name="price"
                onChange={handleChange}
                value={myRecycle.price}
              />
            </FormGroup>
            <FormGroup className="form-group group city">
              <Label for="city">City: </Label>
              <Input
                type="text"
                name="city"
                onChange={handleChange}
                value={myRecycle.city}
              />
            </FormGroup>
            <FormGroup className="form-group state">
              <Label for="state">State: </Label>
              <Input
                type="text"
                name="state"
                onChange={handleChange}
                value={myRecycle.state}
              />
            </FormGroup>
            <FormGroup className="form-group email">
              <Label for="email">Email: </Label>
              <Input
                type="email"
                name="email"
                onChange={handleChange}
                value={myRecycle.email}
              />
            </FormGroup>
            <FormGroup className="form-group whatsapp_user">
              <Label for="whatsapp_user">WhatsApp Username: </Label>
              <Input
                type="text"
                name="whatsapp_user"
                onChange={handleChange}
                value={myRecycle.whatsapp_user}
              />
            </FormGroup>
            <FormGroup className="form-group image">
              <Label for="image">Image URL: </Label>
              <Input
                type="text"
                name="image"
                onChange={handleChange}
                value={myRecycle.image}
              />
            </FormGroup>
            <div className="submit">
              <Button onClick={handleSubmit} className="new-button">
                Submit
              </Button>
            </div>
          </Form>
        </div>
      )}
    </>
  );
};

export default RecycleNew;
