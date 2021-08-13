import React from "react";
import { connect } from "react-redux";
import GetCode from "./api";
import { fetchProducts } from "./productActions";

class Home extends React.Component {
  componentDidMount() {
    // this.props.dispatch(fetchProducts());

    // window.location.assign("https://www.google.com");
    const code = window.location.search.split("code=")[1];

      GetCode()
      // window.location.assign(
      //   "https://unsplash.com/oauth/authorize?client_id=Fk9XeNjOfV6yHM2OUB7EZaS9CAb1dYcnEvIDjjbca-M&redirect_uri=http://localhost:3000/auth&response_type=code&scope=public+write_likes"
      // );

    if (code) {
      const fakePost = async () => {
        try {
          const res = await fetch("https://unsplash.com/oauth/token", {
            method: "POST",
            body: JSON.stringify({
              grant_type: "authorization_code",
              client_id: "Fk9XeNjOfV6yHM2OUB7EZaS9CAb1dYcnEvIDjjbca-M",
              client_secret: "eFs7wRL5f4iZIl82XS_F6JnmtoH3QoqqNz4BnirYlJk",
              redirect_uri: "http://localhost:3000/auth",
              code: code,
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
          });
          const data = await res.json();
          // return data;
          // console.log(data.access_token);
          localStorage.setItem('Authorization', "Bearer " + data.access_token);
          debugger;
        } catch (err) {
          console.error(err);
          return err.message;
        }
      };
      fakePost ();
    }
  }
  // }

  //     if (typeof window !== 'undefined') {
  //       window.location.href = "https://unsplash.com/oauth/authorize?client_id=Fk9XeNjOfV6yHM2OUB7EZaS9CAb1dYcnEvIDjjbca-M&redirect_uri=http://localhost:3000/auth&response_type=code&scope=public+write_likes";
  //  }

  render() {
    const { error, loading, products } = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.products.items,
  loading: state.products.loading,
  error: state.products.error
});

export default connect(mapStateToProps)(Home);
