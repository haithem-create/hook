import React from "react";
import ReactStars from "react-rating-stars-component";
import {Card} from "react-bootstrap";

const MovieCard = ({ film }) => {
  return (
    <div>
      <Card style={{ width: "400px", height:"800px" }}>
        <Card.Img style={{ width: "380px", height:"400px" }} variant="top" src={film.posterURL} />
        <Card.Body>
          <Card.Title style={{ color: "black" }}>{film.title}</Card.Title>
          <Card.Text style={{ color: "black" }}> {film.description}</Card.Text>
          <ReactStars
            count={5}
            value={film.rate}
            edit = {false}
            // onChange={ratingChanged}
            size={24}
            activeColor="#ffd700"
          />

        </Card.Body>
 
      </Card>
    </div>
  );
};

export default MovieCard;