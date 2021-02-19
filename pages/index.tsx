import { getAllPosts } from "../lib/api";
import Head from "next/head";
import Link from "next/link";
import Post from "../types/post";

interface Props {
  allPosts: Post[];
}

const Index = ({ allPosts }: Props) => {
  return (
    <>
      <Head>
        <title>Ponce.la</title>
      </Head>

      <main>
        <p>🌮 Howdy, I'm Ryan!</p>
        <p>
          I'm a software engineer, amateur taquero, and walker. I live in
          Glassell Park, a neighborhood in Los Angeles. Right now, I lead front
          end engieering at [Say](https://saytechnologies.com).
        </p>

        {allPosts.map((post) => (
          <Link href={`/posts/${post.slug}`} key={post.slug}>
            <a>
              <h2>{post.title}</h2>
              <p>{post.date}</p>
              <p>{post.excerpt}</p>
            </a>
          </Link>
        ))}
      </main>
    </>
  );
};

export default Index;

export const getStaticProps = async () => {
  const allPosts = getAllPosts(["title", "date", "slug", "excerpt"]);

  return {
    props: { allPosts },
  };
};
