import { useEffect, useState } from "react";
import axios from "axios";
import "./Items.css";
require("dotenv").config();
const Items = (props) => {
  const [ImageURL, SetImageURL] = useState("");
  useEffect(() => {
    axios
      .get(
        `https://api.unsplash.com/search/photos?page=1&query=${props.itemName}&client_id=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => SetImageURL(res.data.results[2].urls.full))
      .catch((err) => {
        SetImageURL(
          `https://clickup.com/blog/wp-content/uploads/2020/01/note-taking.png`
        );
        console.log(err);
      });
  }, []);
  return (
    <>
      <div className="items">
        <div className="item-id">{props.itemid}</div>
        <div className="item-name">{props.itemName}</div>
        <div className="item-image">
          <img src={ImageURL}></img>
        </div>
      </div>
    </>
  );
};

export default Items;
