import React from "react";
import Article from "./Article";

function ArticleList({ posts }) {
	const showPosts = posts.map((post) => (
		<Article
			key={post.id}
			title={post.title}
			date={post.date}
			preview={post.preview}
			minutes={post.minutes}
		/>
	));
	return <main>{showPosts}</main>;
}

export default ArticleList;
