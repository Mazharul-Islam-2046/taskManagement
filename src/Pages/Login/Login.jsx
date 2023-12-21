import Footer from "../SharedComponents/Footer/Footer";
import Navbar from "../SharedComponents/Navbar/Navbar";

const Login = () => {
    // const handleLogin = (data) => {
    //     const email = data.email;
    //     const password = data.password;
    //     signIn(email, password)
    //             .then(result => {
    //                 const user = result.user;
    //                 console.log(user);
    //                 Swal.fire({
    //                     title: 'User Login Successful.',
    //                     showClass: {
    //                         popup: 'animate__animated animate__fadeInDown'
    //                     },
    //                     hideClass: {
    //                         popup: 'animate__animated animate__fadeOutUp'
    //                     }
    //                 });
    //                 navigate(from, { replace: true });
    //             })
    //   };
    return (
        <div>
            <Navbar/>
            <div>
                <div>
                    <h2 className="text-3xl font-bold">Login</h2>
                    <form>
                        <input type="email" name="email" id="" />
                    </form>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Login;