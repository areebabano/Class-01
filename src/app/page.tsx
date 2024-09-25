import React from "react";
import Link from "next/link";

function Home(){
  return(
    <div>
      <header>
      <ul className="flex bg-pink-800 gap-4">
        <Link href="/"><li>Home</li></Link>
        <Link href="/about"><li>About</li></Link>
        <Link href="/contact"><li>Contact</li></Link>
      </ul>
      </header>
      <h1>Hello!</h1>
    </div>
  )
}

export default Home;
