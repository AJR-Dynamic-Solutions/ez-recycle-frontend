import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import { NavLink } from "react-router-dom";

const RecycleProtectedIndex = ({ recycles, currentUser }) => {
  const myRecycles = recycles?.filter(
    (recycle) => recycle.user_id === currentUser.id
  );

  return (
    <div className="recycles-body">
      <h1>My Listings</h1>
      <div className="flex-recycles">
        {myRecycles?.map((recycle, index) => {
          return (
            <Card key={index} className="recycle-cards">
              <CardImg
                top
                width="100%"
                src={recycle.image}
                alt=""
                className="recycle-picture"
              />
              <CardBody>
                <div className="recycle-text">
                  <CardTitle>
                    <b>${recycle.price}</b>
                  </CardTitle>
                  <CardSubtitle>
                    {recycle.item}, {recycle.city}, {recycle.state}
                  </CardSubtitle>
                  <CardSubtitle>
                    {recycle.email} {recycle.whatsapp_user}{" "}
                  </CardSubtitle>
                </div>
                <NavLink to={`/recycleshow/${recycle.id}`} className="nav-link">
                  <Button className="recycle-button">More Details</Button>
                </NavLink>
                <Button className="recycle-button">Edit Listing </Button>
                <Button className="recycle-button">Delete Listing</Button>
              </CardBody>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default RecycleProtectedIndex;
