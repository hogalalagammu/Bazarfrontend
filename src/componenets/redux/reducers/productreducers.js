
const products =[];
const Watch =[];
const Smart =[];
const gym=[];
const lap=[];

export const getProductreducer = (state={products} ,action )=>{
    switch(action.type){
        case "SUCCESS_GET_PRODUCTS":
            return {products : action.payload}
        case "FAIL_GET_PRODUCTS":
            return {products:action.payload}
        default: return state
    }
} 
export const getProductreducerW = (state={Watch} ,action )=>{
    switch(action.type){
        case "SUCCESS_GET_PRODUCTSW":
            return {Watch : action.payload}
        case "FAIL_GET_PRODUCTSW":
            return {Watch:action.payload}
        default: return state
    }
} 
export const getProductreducerS = (state={Smart} ,action )=>{
    switch(action.type){
        case "SUCCESS_GET_PRODUCTSS":
            return {Smart : action.payload}
        case "FAIL_GET_PRODUCTSS":
            return {Smart:action.payload}
        default: return state
    }
} 
export const getProductreducerg = (state={gym} ,action )=>{
    switch(action.type){
        case "SUCCEggy_GET_PRODUCTggy":
            return {gym : action.payload}
        case "FAIL_GET_PRODUCTggy":
            return {gym:action.payload}
        default: return state
    }
} 
export const getProductreducerl = (state={lap} ,action )=>{
    switch(action.type){
        case "SUCCEllap_GET_PRODUCTllap":
            return {lap : action.payload}
        case "FAIL_GET_PRODUCTllap":
            return {lap:action.payload}
        default: return state
    }
} 