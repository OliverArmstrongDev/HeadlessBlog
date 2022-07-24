import Link from 'next/link'
import Image from 'next/image'

export default function BlogPostCardList({post}) {
    const { title, slug, description, thumbnail} = post.fields;
  return (
    <div className="card">
        <div className="featured">
        <Image 
        className='post-image'
        width={thumbnail.fields.file.details.image.width} 
        height={thumbnail.fields.file.details.image.height} 
        src={`https:${thumbnail.fields.file.url}`}/>
        </div>
        <div className="content">
            <div className="info">
                <h2 key={post.sys.id}>{title}</h2>
                <p>{description}</p>
            </div>
            <div className="actions">
                <Link href={`/posts/${slug}`}>
                <a>Read More</a>
                </Link>
            </div>
        </div>

        <style jsx>{`
        .card {
            transform: rotateZ(-3deg);
        }
    
        .content{
            display: flex;
            justify-content: center;
            flex-direction: column;
            background-Color: #fff;
            padding: 0.7em;
            position: relative;
            margin:0;
            top: -20px;
            left: -15px;
            border-radius: 12px;
            box-shadow: 5px 10px rgba(0,0,0,.5);
        }
        .info h2{
            text-transform: uppercase;
            font-size: 1em;
        }
        .info p{
            font-size: 0.8em;
            color: #7e7e7e;
        }
        .actions{
            display: flex;
            justify-content: center;
            background: red;
            margin: 0 35%;
            border-radius: 4px;
            
        }
        .actions a{
            color: #fff;
            text-decoration: none;
            padding: 9px 10px;
            font-size: 0.8em;
            
            
        }
      `}</style>
    </div>
  )
}


