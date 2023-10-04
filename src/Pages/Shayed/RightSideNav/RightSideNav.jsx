import { FcGoogle } from "react-icons/fc";
import { BsGithub, BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import qzon from "../../../assets/images/qZone1.png";
import qzon2 from "../../../assets/images/qZone2.png";
import qzon3 from "../../../assets/images/qZone3.png";
import UseHooks from "../../CustomHook/UseHooks";
const RightSideNav = () => {
  const {googleLogin}=UseHooks()
  const handleLogin = (media) => {
    media()
  };
  return (
    <div>
      <div className="p-4 space-y-3 mb-5 ">
        <h2 className="text-3xl ">Login With</h2>
        <button onClick={()=>handleLogin(googleLogin)} className="btn btn-outline w-full">
          <FcGoogle></FcGoogle>
          Login with google
        </button>
        <button className="btn btn-outline w-full">
          <BsGithub></BsGithub>
          Login with github
        </button>
      </div>
      <div className="p-4  mb-5">
        <h2 className="text-3xl mb-3 ">Find Us On</h2>
        <a
          href=" "
          className="border-2 rounded-tl-lg flex p-3 gap-4 items-center text-lg "
        >
          <BsFacebook className="mr-2"></BsFacebook> facebook
        </a>
        <a
          href=" "
          className="border-x-2 rounded-tl-lg flex p-3 gap-4 items-center text-lg "
        >
          <BsTwitter className="mr-2" /> Twitter
        </a>
        <a
          href=" "
          className="border-2 rounded-tl-lg flex p-3 gap-4 items-center text-lg "
        >
          <BsInstagram className="mr-2"> </BsInstagram> Instagram
        </a>
      </div>
      <div className="">
        <h1 className="text-3xl">Q zone</h1>
        <img src={qzon} alt="" />
        <img src={qzon2} alt="" />
        <img src={qzon3} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;
