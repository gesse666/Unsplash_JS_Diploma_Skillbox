export default function GetCode () {
    window.location.assign(
        "https://unsplash.com/oauth/authorize?client_id=Fk9XeNjOfV6yHM2OUB7EZaS9CAb1dYcnEvIDjjbca-M&redirect_uri=http://localhost:3000/auth&response_type=code&scope=public+write_likes"
    );
}

// const clientId = "Fk9XeNjOfV6yHM2OUB7EZaS9CAb1dYcnEvIDjjbca-M";
// const redirectUrl = "http://localhost:3000/auth";

// export default function GetCode () {
//     window.location.assign(
//         `https://unsplash.com/oauth/authorize?client_id=`{clientId}`&redirect_uri=`{redirectUrl}`&response_type=code&scope=public+write_likes`
//     );
// }