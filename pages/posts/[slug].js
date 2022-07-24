import { createClient } from "contentful";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Image from 'next/image'
import Skeleton from "../../components/Skeleton";


  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

export const getStaticPaths = async () => {

  const res = await client.getEntries({content_type: 'blogPosts'});
console.log('res', res);

  const paths = res.items.map(item => {
    return {
      params: { slug: item.fields.slug }
    }
  })

  return{
    paths,
    fallback: true

  }
}

export const getStaticProps = async ({params}) =>{
    const { items } = await client.getEntries({
      content_type: 'blogPosts',
      'fields.slug': params.slug
    })
    //if the slug is not found then redirect to home
    if(!items.length) return {
      redirect: {
        destination : '/',
        permanent: false
      }
    }
    return {
      props: { post: items[0]},
      revalidate: 5
    }
}

export default function BlogPostDetails({post}) {

  //if content loading in background display this...
  if(!post) return <Skeleton />

  // else display normal JSX
  const { title, content, featuredImage} = post.fields;
  console.log('post', post);
  
  return (
    <div className="post-container">
      <div className="banner">
        <Image 
            width={featuredImage.fields.file.details.image.width}
            height={featuredImage.fields.file.details.image.height} 
            src={`https:${featuredImage.fields.file.url}`}
        />
            <h1 key={post.sys.id}>{title}</h1>
      </div>
          <div className="content">
                <span>{documentToReactComponents(content)}</span>
          </div>
          
    <style jsx>{`
        .post-container {
          display:flex;
          flex-direction: column;
          justify-content: center;
          align-items:center;
        }
        .content{

        }
        .banner{
          width:40vw;
          transform: rotateZ(-5deg);
          display: inline-block;
          background-Color: #fff;
          padding: 25px;
          position: relative;
          margin-bottom:5em;
          
          left: -15px;
          border-radius: 12px;
          box-shadow: 5px 10px rgba(0,0,0,.5);
        }
        .info h2{
          text-transform: uppercase;
        }
        .info p{
          font-size: 1em;
          color: #7e7e7e;
        }
        .actions{
          display: flex;
          justify-content: center;
          background: red;
          margin: 0 30%;
          border-radius: 4px;
          
        }
        .actions a{
          color: #fff;
          text-decoration: none;
            padding: 16px 24px;
            
            
          }
    `}</style>
  </div>

  )
}
