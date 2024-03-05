import React from "react";
import { useParams, NavLink } from "react-router-dom";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

const RecycleShow = ({ recycles }) => {
  let { id } = useParams();
  const currentRecycle = recycles?.find((recycle) => recycle.id === +id);

  return (
    <div className="recycles-body">
      {currentRecycle && (
        <Card className="recycle-card">
          <CardImg className="card-image" src={currentRecycle?.image} alt="" />
          <CardBody className="recycle-text recycle-font-size">
            <div className="grid-row">
              <div className="show-recycle-info">
                <CardTitle>
                  <b>${currentRecycle?.price}</b>
                </CardTitle>
                <CardSubtitle>
                  {currentRecycle?.item}, {currentRecycle?.city},{" "}
                  {currentRecycle?.state}
                </CardSubtitle>
                <CardSubtitle>Email: {currentRecycle.email} </CardSubtitle>
                <CardSubtitle>
                  {" "}
                  WhatsApp User: {currentRecycle?.whatsapp_user}{" "}
                </CardSubtitle>
              </div>
            </div>
            <NavLink to={`/recycleindex`} className="nav-link">
              <Button className="recycle-button">Back to Listings</Button>
            </NavLink>
          </CardBody>
        </Card>
      )}
    </div>
  );
};

export default RecycleShow;
