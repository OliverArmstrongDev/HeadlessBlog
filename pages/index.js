import { createClient } from "contentful";
import BlogPostCardList from "../components/BlogPostCardList";

export const getStaticProps = async () =>
{

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({content_type: 'blogPosts' });

  return{
      props: {
          blogPosts: res.items
          }
      }
}


export default function PostList({blogPosts}) {
 { blogPosts.map(post => console.log(post))}
  
  return (
    <div className="post-list">
      {blogPosts.map(post => (
        <BlogPostCardList key={post.sys.id} post={post}/>
      ))}

      <style jsx>{`
        .post-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 20px 60px;
        }
      `}</style>
    </div>
  )
}
