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

const RecycleIndex = ({ recycles }) => {
  return (
    <>
      <div className="recycles-body">
        <h1>Recent Listings</h1>
        <div className="flex-recycles">
          {recycles?.map((recycle, index) => {
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
                  </div>
                  <NavLink
                    to={`/recycleshow/${recycle.id}`}
                    className="nav-link"
                  >
                    <Button className="recycle-button">More Details</Button>
                  </NavLink>
                </CardBody>
              </Card>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default RecycleIndex;
