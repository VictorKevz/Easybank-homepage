import React from "react";
import "../css/articles.css";
import articlesData from "./ArticlesData";

function Articles({isDark}) {
  return (
    <section className={`articles-container ${isDark?'bg-dark':''}`}>
      <h4 className={`articles-main-title  ${isDark?'text-color':''}`}>Latest Articles</h4>

      <div className="articles-wrapper">
        {articlesData.map((article) => {
          const articleCardStyle = {
            backgroundImage: `url(${article.imgSrc})`,
            backgroundRepeat:'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '200px',
            width:'100%',
            borderRadius:'.48rem .48rem 0 0'
          };

          return (
            <article key={article.id} className="article-card">
              <div className={`article-inner-card ${isDark?'bg-semi-dark dark-edges':''}`} >
                <div style={articleCardStyle}></div>
                <div className="article-text-container">
                  <span className="article-author">{article.author}</span>
                  <h5 className={`article-title ${isDark?'text-color':''}`}>{article.title}</h5>
                  <p className="article-description">
                    {article.description}
                  </p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Articles;