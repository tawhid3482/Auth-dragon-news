import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shayed/Navbar/Navbar";
import UseHooks from "../CustomHook/UseHooks";

const Login = () => {
  const location = useLocation()
  const navigate = useNavigate()
    const {loginEmailandPass}=UseHooks()
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get('password')
    loginEmailandPass(email,password)
    .then(res =>{
        console.log(res.user)
        // after login navigate
        navigate(location?.state ? location.state : '/')

    })
    .catch(error =>{
        console.error(error)
    })
};
  return (
    <div>
      <Navbar></Navbar>

      <div className="text-center">
        <h2 className="text-3xl text-center">Please Login here!!</h2>
        <form
          onSubmit={handleLogin}
          className="card-body lg:w-1/2 md:w-2/3 mx-auto "
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <p>
          Do not have an account?{" "}
          <Link className="text-red-500" to="/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
