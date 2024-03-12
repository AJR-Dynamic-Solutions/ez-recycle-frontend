import React, { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { useParams } from "react-router-dom";

const RecycleEdit = ({ currentUser, recycles, updateRecycle }) => {
  let { id } = useParams();
  const recycle = recycles?.find((recycle) => recycle.id === +id);
  const [myRecycle, setMyRecycle] = useState({
    item: recycle.item,
    category: recycle.category,
    description: recycle.description,
    city: recycle.city,
    state: recycle.state,
    price: recycle.price,
    email: recycle.email,
    whatsapp_user: recycle.whatsapp_user,
    image: recycle.image,
    user_id: currentUser.id,
  });

  const handleChange = (e) => {
    setMyRecycle({ ...myRecycle, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    updateRecycle(myRecycle, currentUser.id);
  };

  return (
    <>
      <div className="new-body">
        <h1>List Your items</h1>
        <Form className="form">
          <FormGroup className="form-group item">
            <Label for="item">Item: </Label>
            <Input
              type="text"
              name="item"
              onChange={handleChange}
              value={myRecycle.item}
            />
          </FormGroup>
          <FormGroup className="form-group category">
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
          <FormGroup className="form-group price">
            <Label for="price">Price: </Label>
            <Input
              type="text"
              name="price"
              onChange={handleChange}
              value={myRecycle.price}
            />
          </FormGroup>
          <FormGroup className="form-group email">
            <Label for="bedrooms">Email: </Label>
            <Input
              type="email"
              name="email"
              onChange={handleChange}
              value={myRecycle.email}
            />
          </FormGroup>
          <FormGroup className="form-group whatsapp_user">
            <Label for="bathrooms">WhatsApp Username: </Label>
            <Input
              type="whatsapp_user"
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
    </>
  );
};

export default RecycleEdit;
