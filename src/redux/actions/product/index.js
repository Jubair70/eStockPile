import * as actionTypes from './types';

const productCategories = [
    {
        Id:1,
        Category:'Kids',
        SubCategory:[{
            Id:1,
            Name:'Dresses'
        },{
            Id:2,
            Name:'Jacket'
        }]
    },
    {
        Id:2,
        Category:'Men',
        SubCategory:[{
            Id:1,
            Name:'TShirt'
        },{
            Id:2,
            Name:'Jacket'
        }]
    }
]

const product = [
    {
        Id:1,
        imageSrc:require('../../../assets/img/shop/shop-1.jpg'),
        name:'Product 1',
        price:'$10'
    },
    {
        Id:2,
        imageSrc:require("../../../assets/img/shop/shop-2.jpg"),
        name:'Product 2',
        price:'$20'
    },
    {
        Id:3,
        imageSrc:require("../../../assets/img/shop/shop-3.jpg"),
        name:'Product 3',
        price:'$30'
    },
    {
        Id:4,
        imageSrc:require("../../../assets/img/shop/shop-4.jpg"),
        name:'Product 4',
        price:'$40'
    },
    {
        Id:5,
        imageSrc:require("../../../assets/img/shop/shop-5.jpg"),
        name:'Product 5',
        price:'$50'
    },
]

export const getProductCategories = () =>async(dispatch)=>{
    dispatch({
        type:actionTypes.PRODUCT_CATEGORY,
        data:productCategories
    })
}

export const getProducts = () =>async(dispatch)=>{
    dispatch({
        type:actionTypes.PRODUCT,
        data:product
    })
}