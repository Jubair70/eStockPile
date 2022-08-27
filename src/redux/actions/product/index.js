import * as actionTypes from "./types";
import axios from "axios";
const productCategories = [
  {
    Id: 1,
    Category: "Kids",
    SubCategory: [
      {
        Id: 1,
        Name: "Dresses",
      },
      {
        Id: 2,
        Name: "Jacket",
      },
    ],
  },
  {
    Id: 2,
    Category: "Men",
    SubCategory: [
      {
        Id: 1,
        Name: "TShirt",
      },
      {
        Id: 2,
        Name: "Jacket",
      },
    ],
  },
];

const product = [
  {
    Id: 1,
    imageSrc: require("../../../assets/img/shop/shop-1.jpg"),
    name: "Product 1",
    price: "$10",
  },
  {
    Id: 2,
    imageSrc: require("../../../assets/img/shop/shop-2.jpg"),
    name: "Product 2",
    price: "$20",
  },
  {
    Id: 3,
    imageSrc: require("../../../assets/img/shop/shop-3.jpg"),
    name: "Product 3",
    price: "$30",
  },
  {
    Id: 4,
    imageSrc: require("../../../assets/img/shop/shop-4.jpg"),
    name: "Product 4",
    price: "$40",
  },
  {
    Id: 5,
    imageSrc: require("../../../assets/img/shop/shop-5.jpg"),
    name: "Product 5",
    price: "$50",
  },
];

export const getProductCategories = () => async (dispatch) => {
  let tempCat = [];
  await axios({
    method: "get",
    url: "http://localhost:5000/product/api/getCategories",
  })
    .then((res) => {
      let parentCat = res.data.data.filter((x) => x.parentcategoryid === null);
      parentCat.map((item) => {
        let t = {
          Id: item.id,
          Category: item.category,
          SubCategory: res.data.data
            .filter((x) => x.parentcategoryid === item.id)
            .map((y) => {
              return {
                Id: y.id,
                Name: y.category,
              };
            }),
        };
        return tempCat.push(t);
      });
    })
    .catch((err) => {
      console.log("RESPONSE ERROR", err);
    });

  dispatch({
    type: actionTypes.PRODUCT_CATEGORY,
    data: tempCat,
  });
};

export const getProducts = () => async (dispatch) => {
  let productList = [];
  await axios({
    method: "get",
    url: "http://localhost:5000/product/api/getProducts",
  })
    .then((res) => {
      let parentCat = res.data.data;
      parentCat.map((item) => {
        let t = {
          Id: item.id,
          categoryId:item.categoryid,
          imageSrc: `http://localhost:5000/${item.productimg}`,
          name: item.productname,
          price: item.price,
        };
        return productList.push(t);
      });
    })
    .catch((err) => {
      console.log("RESPONSE ERROR", err);
    });
  dispatch({
    type: actionTypes.PRODUCT,
    data: productList,
  });
  dispatch(_getFilteredProducts(productList));
};

export const _getProducts = (data) => {
    return {
        type:actionTypes.PRODUCT,
        data
    }
}

export const _getFilteredProducts = (data) => {
    return {
        type:actionTypes.FILTER_PRODUCT,
        data
    }
}

export const applyFilter = (param,data) => async(dispatch)=>{
    let query = buildQuery(param);
    console.log("Build query ",query);
    let filteredData = filterData(data.products,query)
    dispatch(_getFilteredProducts(filteredData));
}

const buildQuery = (filter) => {
    let query = {};
    for(let keys in filter){
        query[keys] = filter[keys];
    }
    return query;
}

const filterData = (data,query) => {
    
    const keysHavingMinMax = ['price'];
    const filterData = data.filter(item=>{
        for(let keys in query){
            if(query[keys]===undefined) return false;
            else if(keysHavingMinMax.includes(keys)){
              if(query[keys]['min'] !== null && item[keys]<query[keys]['min'])
                return false;
                if(query[keys]['max'] !== null && item[keys]>query[keys]['max'])
                return false;
            }
            else if(!query[keys].includes(item[keys])) return false;
        }
        return true;
    });
    return filterData;
}
