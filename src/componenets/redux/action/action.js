import axios from 'axios';
const SERVER_URL=process.env.REACT_APP_SERVER_URL;
export const getProducts = () => async (dispatch) => {
    try {
        const response = await axios.get(`${SERVER_URL}/getproducts`, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        const res = response.data;
        console.log(res);
        dispatch({ type: "SUCCESS_GET_PRODUCTS", payload: res });
    } catch (error) {
        dispatch({ type: "FAIL_GET_PRODUCTS", payload: error.response });
    }
};
export const getProductsW = () => async (dispatch) => {
    try {
        const response = await axios.get(`${SERVER_URL}/getProductsW`, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        const res = response.data;
        console.log(res);
        dispatch({ type: "SUCCESS_GET_PRODUCTSW", payload: res });
    } catch (error) {
        dispatch({ type: "FAIL_GET_PRODUCTSW", payload: error.response });
    }
};
export const getProductsS = () => async (dispatch) => {
    try {
        const response = await axios.get(`${SERVER_URL}/getProductsS`, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        const res = response.data;
        console.log(res);
        dispatch({ type: "SUCCESS_GET_PRODUCTSS", payload: res });
    } catch (error) {
        dispatch({ type: "FAIL_GET_PRODUCTSS", payload: error.response });
    }
};
export const getProductggy = () => async (dispatch) => {
    try {
        const response = await axios.get(`${SERVER_URL}/getProductggy`, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        const res = response.data;
        console.log(res);
        dispatch({ type: "SUCCEggy_GET_PRODUCTggy", payload: res });
    } catch (error) {
        dispatch({ type: "FAIL_GET_PRODUCTggy", payload: error.response });
    }
};
export const getProductllap = () => async (dispatch) => {
    try {
        const response = await axios.get(`${SERVER_URL}/getProductllap`, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        const res = response.data;
        console.log(res);
        dispatch({ type: "SUCCEllap_GET_PRODUCTllap", payload: res });
    } catch (error) {
        dispatch({ type: "FAIL_GET_PRODUCTllap", payload: error.response });
    }
};