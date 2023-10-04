import { useLoaderData } from "react-router-dom";
import Header from "../Shayed/Header/Header";
import LeftSideNav from "../Shayed/LeftSideNav/LeftSideNav";
import Navbar from "../Shayed/Navbar/Navbar";
import RightSideNav from "../Shayed/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";

const Home = () => {
    const news = useLoaderData()
    console.log(news)
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="">
                <LeftSideNav></LeftSideNav>
            </div>

            <div className="md:col-span-2">
               {
                news?.map(aNew => <NewsCard key={aNew._id} News={aNew}></NewsCard>)
               }
            </div>

            <div className="">
                <RightSideNav></RightSideNav>
            </div>
            </div>
        </div>
    );
};

export default Home;