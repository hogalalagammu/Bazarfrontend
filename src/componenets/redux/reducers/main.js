import {getProductreducer,getProductreducerW,getProductreducerS,getProductreducerg,getProductreducerl} from "./productreducers"
import {combineReducers} from "redux"

const rootreducers = combineReducers({
    getproductsdata:getProductreducer,
    getproductreducerW:getProductreducerW,
    getproductreducerS:getProductreducerS,
    getProductreducerg:getProductreducerg,
    getProductreducerl:getProductreducerl

})

export default rootreducers;