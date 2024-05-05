import { Link } from "react-router-dom";


const Home = () => {
    return (
        <div className="bg-blue-400 text-white">
         <div className="w-96 mx-auto min-h-screen my-auto gap-5 flex items-center justify-center">
         <Link>
           <button className="btn">Login</button>
         </Link>
           <Link>
           <button className="btn">SignUp</button>
           </Link>
         </div>
        </div>
    );
};

export default Home;