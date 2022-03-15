import axios from "axios";
import { GET_ITEMS, ITEMS_ERROR } from "./types";
export const getItems = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "https://evening-peak-42610.herokuapp.com/api/item"
    );
    const items = res.data;
    items.sort(function (a, b) {
      return a._id - b._id;
    });
    dispatch({
      type: GET_ITEMS,
      payload: items,
    });
  } catch (err) {
    dispatch({
      type: ITEMS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
