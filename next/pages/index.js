import Link from "next/link";

const Index = () => (
  <p>
    <h1>Index Page</h1>
    <Link href="/about">
      <a>to about</a>
    </Link>
    <p>Hello Next .js</p>
  </p>
);

Index.getInitialProps = async function() {
  return {
    isServer: typeof window === "undefined"
  };
};
export default Index;
