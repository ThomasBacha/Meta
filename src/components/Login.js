import CommonHeader from "./CommonHeader";
import CenteredImage from "./Construction";

function Login(){
    return (
        <>
            <CommonHeader
                title={"Login"}/>
            {/* Style the login to be in the center of page */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <form>
                    <label>
                        Username:
                        <input type="text" name="name" />
                    </label>
                    <label>
                        Password:
                        <input type="text" name="name" />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
            <CenteredImage altText={"Under Construction"}/>
        </>
    );
}

export default Login;