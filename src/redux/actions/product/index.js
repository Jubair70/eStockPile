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
export const getProductCategories = () =>async(dispatch)=>{
    dispatch({
        type:actionTypes.PRODUCT_CATEGORY,
        data:productCategories
    })
}