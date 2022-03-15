import { useEffect } from "react";
import { connect } from "react-redux";
import "./Landingpage.css";
import { getItems } from "../actions/items";
import PropTypes from "prop-types";
import Items from "./Items";

const Landingpage = (props) => {
  useEffect(() => {
    props.getItems();
  }, [props.getItems]);
  return (
    <>
      <main className="landingpage">
        <section className="glass">
          <div className="main">
            <div className="heading">
              <h1>Items List</h1>
            </div>

            <div className="Itemdata">
              {props.item.items.map((item) => (
                <Items
                  key={item._id}
                  itemid={item._id}
                  itemName={item.Name}
                ></Items>
              ))}
            </div>
          </div>
        </section>
        <div className="circle1"></div>
        <div className="circle2"></div>
      </main>
    </>
  );
};

Landingpage.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  item: state.items,
});

export default connect(mapStateToProps, { getItems })(Landingpage);
