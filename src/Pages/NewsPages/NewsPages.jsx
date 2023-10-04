import { useParams } from "react-router-dom";
import Header from "../Shayed/Header/Header";
import RightSideNav from "../Shayed/RightSideNav/RightSideNav";
import Navbar from "../Shayed/Navbar/Navbar";

const NewsPages = () => {
  // const { title, thumbnail_url,details,_id} = News;
const {id}=useParams()
  return (

    <div>
      <Header></Header>
      <Navbar></Navbar>
      <div className="grid md:grid-cols-4">
        <div className="col-span-3">
            <p>news details</p>
            {id}
        </div>
        <div className="col-span-1">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default NewsPages;
