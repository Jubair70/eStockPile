import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./_sidebar.scss";
import * as actions from "../../redux/actions/product";

const Sidebar = () => {
  const dispatch = useDispatch();
  const { product } = useSelector((obj) => obj);
  useEffect(() => {
    dispatch(actions.getProductCategories());
  }, []);
  return (
    <div>
      <div className="sidebar_category">
        <div className="section-title">
          <h4>Categories</h4>
        </div>
        {product.categories.map((item, index) => {
          return (
            <div className="category_accordian">
              <div className="accordian">
                <div className="card">
                  <div className="card-heading">
                    <a>{item.Category}</a>
                  </div>
                  <div className="card-body">
                    <ul>
                      {item.SubCategory.map((subitem, ind) => {
                        return (
                          <li key={ind}>
                            <a>{subitem.Name}</a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
