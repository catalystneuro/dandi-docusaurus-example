import React from "react";
import newsData from "@site/data/news.json";
import styles from "./styles.module.css";

interface NewsItem {
    date: string;
    headline: string;
}

const News: React.FC = () => {
    return (
        <div className={styles.newsContainer}>
            <h1 className={styles.title}>News</h1>
            <div className={styles.newsList}>
                {newsData.map((item: NewsItem, index: number) => (
                    <div key={index} className={styles.newsCard}>
                        <div className={styles.date}>{item.date}</div>
                        <div
                            className={styles.headline}
                            dangerouslySetInnerHTML={{ __html: item.headline }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default News;
