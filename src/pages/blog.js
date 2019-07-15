import React from "react";
import { useRouteData } from "react-static";
// import { navigate } from "@reach/router";
//
import { Link, Redirect } from "components/Router";

export default function Blog() {
  const { posts } = useRouteData();

  // navigate("/about");
  return (
    <div>
      <h1>It's blog time.</h1>
      <Redirect to="/about" noThrow />;
      <div>
        <a href="#bottom" id="top">
          Scroll to bottom!
        </a>
      </div>
      <br />
      All Posts:
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link to={`/blog/post/${post.id}/`}>{post.title}</Link>
          </li>
        ))}
      </ul>
      <a href="#top" id="bottom">
        Scroll to top!
      </a>
    </div>
  );
}
