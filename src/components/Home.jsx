import { useEffect, useState } from "react";
import { getArticles } from "./articleService";

function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles().then((response) => {
      setArticles(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Latest News</h1>

      {articles.map((article) => (
        <div key={article.articleId}>
          <img src={article.imageUrl} width="300" alt={article.title} />

          <h2>{article.title}</h2>

          <p>{article.summary}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
