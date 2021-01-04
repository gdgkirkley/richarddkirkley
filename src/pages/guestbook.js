import React from "react";
import Layout from "../components/Layout";
import useComments from "../hooks/useComments";

const GuestBook = () => {
  const { comments, error } = useComments("/guestbook");
  return (
    <Layout>
      <h1>Guest Book</h1>
      <div>
        <p>Coming soon!</p>
        {comments?.length
          ? comments.map((comment) => (
              <div key={comment.id}>{comment.text}</div>
            ))
          : null}
        {error ? error : null}
      </div>
    </Layout>
  );
};

export default GuestBook;
