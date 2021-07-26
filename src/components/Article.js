import React from "react";

function makeEmojiList(minutes) {
	const interval = minutes < 30 ? 5 : 10;
	const emoji = minutes < 30 ? "☕️" : "🍱";
	let output = "";
	for (let index = 0; index < minutes; index += interval) {
		output += emoji;
	}
	return output;
}

function Article({ title, date = "January 1, 1970", preview, minutes }) {
	const emojis = makeEmojiList(minutes);
	return (
		<article>
			<h3>{title}</h3>
			<small>
				{date} • {emojis} min read
			</small>
			<small> {minutes}</small>
			<p>{preview}</p>
		</article>
	);
}

export default Article;
