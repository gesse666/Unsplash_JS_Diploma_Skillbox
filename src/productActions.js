function getProducts() {
  return fetch("/products")
    .then(handleErrors)
    .then((res) => res.json());
}

function fakeGetProducts() {
  return new Promise((resolve) => {
    // Resolve after a timeout so we can see the loading indicator
    setTimeout(
      () =>
        resolve({
          products: [
            {
              id: 0,
              name: "Apple"
            },
            {
              id: 1,
              name: "Bananas"
            },
            {
              id: 2,
              name: "Strawberries"
            }
          ]
        }),
      1000
    );
  });
}

export function fetchProducts() {
  return (dispatch) => {
    dispatch(fetchProductsBegin());
    fetch("https://unsplash.com/oauth/authorize", {
      // method: "GET",
      client_id: "Fk9XeNjOfV6yHM2OUB7EZaS9CAb1dYcnEvIDjjbca-M",
      redirect_uri: "https://4kpk1.csb.app/auth",
      response_type: "code",
      scope: "public+write_likes"
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        dispatch(fetchProductsSuccess(res.products));
        return res.products;
      })
      .catch((error) => {
        dispatch(fetchProductsFailure(error));
      });
  };
}

//       .then(json => {
//         dispatch(fetchProductsSuccess(json.products));
//         return json.products;
//       })
//       .catch(error =>
//         dispatch(fetchProductsFailure(error))
//       );
//   };
// }

// function fetchProducts() {
//   return (dispatch) => {
//     dispatch(fetchProductsPending());
//     fetch("https://exampleapi.com/products")
//       .then((res) => res.json())
//       .then((res) => {
//         if (res.error) {
//           throw res.error;
//         }
//         dispatch(fetchProductsSuccess(res.products));
//         return res.products;
//       })
//       .catch((error) => {
//         dispatch(fetchProductsError(error));
//       });
//   };
// }

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export const FETCH_PRODUCTS_BEGIN = "FETCH_PRODUCTS_BEGIN";
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const FETCH_PRODUCTS_FAILURE = "FETCH_PRODUCTS_FAILURE";

export const fetchProductsBegin = () => ({
  type: FETCH_PRODUCTS_BEGIN
});

export const fetchProductsSuccess = (products) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: { products }
});

export const fetchProductsFailure = (error) => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: { error }
});
