import React from 'react'

function Article(title,date="january 1,1970",preview) {
  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <P>{preview}</P>

    </article>
  );
}

export default Article