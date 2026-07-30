import { useEffect, useState } from "react";
import { getArticles } from "./articleService";

import { useEffect, useState } from "react";
import { getArticles } from "../api/articleService";

import Navbar from "../components/Navbar";
import PostCard from "../components/PostCard";

export default function Home(){

    const [articles,setArticles] = useState([]);

    useEffect(()=>{

        getArticles()
            .then(response=>{
                setArticles(response.data);
            })
            .catch(console.error);

    },[]);

    return(

        <>
            <Navbar/>

            <div className="grid grid-cols-3 gap-8">

                {articles.map(article=>(
                    <PostCard
                        key={article.id}
                        post={article}
                    />
                ))}

            </div>

        </>

    )

}

export default Home;
