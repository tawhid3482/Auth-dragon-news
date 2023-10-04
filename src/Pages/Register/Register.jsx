import { Link } from "react-router-dom";
import Navbar from "../Shayed/Navbar/Navbar";
import UseHooks from "../CustomHook/UseHooks";

const Register = () => {
  const {LoginWithEmail} = UseHooks()
    const handleRegister = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')

        console.log(email,password,name,photo)
        LoginWithEmail(email,password)
        .then(res =>{
            console.log(res.user)
        })
        .catch(error =>{
            console.error(error)
        })
      };
    return (
        <div>
            <Navbar></Navbar>
            <div className="text-center">
        <h2 className="text-3xl text-center">Please Register here!!</h2>
        <form onSubmit={handleRegister} className="card-body lg:w-1/2 md:w-2/3 mx-auto ">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Photo URL"
              className="input input-bordered"
              required
            />
          </div>
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
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
        <p>Already have an account? <Link className="text-red-500" to='/login'>Login</Link></p>
      </div>
            
        </div>
    );
};

export default Register;