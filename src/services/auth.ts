import nookies from "nookies";

const auth = (context: any): any => {
    const token = nookies.get(context).tokenFoodgram;
    const tokenExpiryTime = nookies.get(context).tokenExpiryTimeFoodgram;
    const redirect = {
        redirect: {
            destination: '/',
            permanent: false,
        }
    }
    const authentification = () => {
        nookies.destroy(context,"tokenFoodgram");
        nookies.destroy(context, "tokenExpiryTimeFoodgram");
        return redirect;
    }

    if(!token || Date.now() > parseInt(tokenExpiryTime))
        return authentification();
}

export default auth;