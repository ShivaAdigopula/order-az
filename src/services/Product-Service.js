import axios from "axios";


export function _loadProducts() {
    return axios.get('https://fakestoreapi.com/products')
    .then(successResponse => {
      if (successResponse && successResponse.data) {
            return successResponse.data;
      }
    }).catch(errorResponse => {
      console.log('unable to load products', errorResponse);
      return {
          error: errorResponse
      }
    })
}

