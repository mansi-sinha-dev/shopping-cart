import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from '../components/Product';


const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";

  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  async function fetchProductData(){
    setLoading(true);
    try{
      const res = await fetch(API_URL);
      const data = await res.json();
      setPosts(data);

    }
    catch(error){
      console.log(error);
      setPosts([]);
    }
    setLoading(false);
  }
  
  useEffect(()=>{
    fetchProductData();
  },[])

  return(
    <div >
      {
        loading ? <Spinner/> :
        posts.length >0 ? (<div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 space-x-5 space-y-10 lg:grid-cols-4 max-w-6xl mx-auto p-2 ">
          {
            posts.map((post) => (<Product key={post.id} post={post} />))
          }
        </div>):
        <div className=" flex justify-center items-center">
          <p>
            No Data found
          </p>
        </div>
      }
    </div>
  );
};

export default Home;
