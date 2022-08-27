import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./_sidebar.scss";
import * as actions from "../../redux/actions/product";

const Sidebar = () => {
  const dispatch = useDispatch();
  const { product } = useSelector((obj) => obj);
  const [categoryFilter,setCategoryFilter] = useState([]);
  const [filter,setFilter] = useState({});
  useEffect(() => {
    dispatch(actions.getProductCategories());
  }, []);

  const applyFilter=(item)=>{
    let tmpFilter= {
      ...filter,
      categoryId:item.map(x=>x.Id)
    }
    setFilter(tmpFilter);
    if(tmpFilter.categoryId.length>0)
    dispatch(actions.applyFilter(tmpFilter,product))
    else
    dispatch(actions.applyFilter(null,product))
    console.log(tmpFilter);
  }

  const chechboxchange = (e,item) =>{
    let categories = [...categoryFilter];
    let index = categories.indexOf(item);
    if(e.target.checked){
      categories.push(item);
    }
    else categories.splice(index,1);
    setCategoryFilter(categories);
    applyFilter(categories);
  }

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
                            {/* <a href={null} onClick={()=>applyFilter(subitem)}>{subitem.Name}</a> */}
                            <div className="form-check">
                            <input type="checkbox" value={subitem.Id} name={subitem.Name} className="form-check-input"
                            onChange={(e)=>chechboxchange(e,subitem)}></input>
                            <label className="form-check-label" style={{color:'#000'}}>{subitem.Name}</label>
                            </div>
                            
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
