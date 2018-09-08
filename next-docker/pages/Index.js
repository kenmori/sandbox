import React from "react";
import Link from "next/link";

const Index = props => (
  <div>
    <h1>Index page.</h1>
    <p>This page was renderd on the server sid: {props.isServer.toString()}</p>
    <Link href="/About">
      <a>About</a>
    </Link>
  </div>
);

Index.getInitialProps = async function() {
  return {
    isServer: typeof window === "undefined"
  };
};

export default Index;
