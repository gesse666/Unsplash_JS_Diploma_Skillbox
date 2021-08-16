const clientId = "Fk9XeNjOfV6yHM2OUB7EZaS9CAb1dYcnEvIDjjbca-M";
const redirectUrl = "http://localhost:3000/auth";

const code = window.location.search.split("code=")[1];

export default function GetCode () {
    window.location.assign(
        `https://unsplash.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUrl}&response_type=code&scope=public+write_likes`
    );
}

    //   const fakePost = async () => {
    export  async function GetToken () {
        try {
          const res = await fetch("https://unsplash.com/oauth/token", {
            method: "POST",
            body: JSON.stringify({
              grant_type: "authorization_code",
              client_id: clientId,
              client_secret: "eFs7wRL5f4iZIl82XS_F6JnmtoH3QoqqNz4BnirYlJk",
              redirect_uri: redirectUrl,
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
 
  