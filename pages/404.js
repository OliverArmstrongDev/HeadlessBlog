import {useEffect} from 'react';
import Link from "next/link";
import {useRouter} from "next/router";

const NotFound = () => {

  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    },3000)
  },[])

    return ( 
      <div className="not-found">
        <h1>404</h1>
        <h2>Ooooops that was not found! :(</h2>
        <p>Redirecting to <Link href={'/'}>Homepage</Link></p>

        <style jsx>{`
        .not-found{
          background: #fff;
          padding: 30px;
          box-shadow: 5px 10px rgba(0,0,0,.5);
          text-align: center;
          transform: rotateZ(-1deg);
          border-radius: 12px;
        }
        h1{
          font-size: 3em;
        }
        `}</style>
      </div>
         );
}
 
export default NotFound;