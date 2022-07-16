import React from 'react';

function makeEmojiList(minutes) {
  const interval = minutes < 30 ? 5 : 10;
  const emoji = minutes < 30 ? "☕️" : "🍱";

  let emojis = "";
  for (let i = 0; i < minutes; i += interval) {
    emojis += emoji;
  }

  return emojis;
}


function Article(minutes,title,date="january 1,1970",preview) {
  const emojis = makeEmojiList(minutes);

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}.{emojis} {minutes} min read</small>
      <P>{preview}</P>

    </article>
  );
}

export default Article