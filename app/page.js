import Image from 'next/image'
import Link from 'next/link';
import Userbtn from './Userbtn';


export default function Home() {
  
  return (
    <main>
      <h1 className='text-blue-500'>hello world</h1>
    <Link href="/user">names</Link>
    <Userbtn/>
    </main>
  )
}
