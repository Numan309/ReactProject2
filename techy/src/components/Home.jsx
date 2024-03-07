import React from 'react'
import vg from '../assests/image4.jpg'
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram
}from "react-icons/ai";

const Home = () => {
  return (
    <>
    <div className="home" id="home">
     <main>
        <h1>TechyStar.</h1>
        <p>Solution to all your problems</p>
     </main>
    </div>
    <div className="home2">
        <img className="img1"src={vg} alt="Graphics" />
<div>
    <p>We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.

    </p>
</div>
    </div>
    <div className="home3" id="about">
      <div>
        <h1>Who we are?</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati perspiciatis assumenda illo, voluptatem atque fuga consectetur molestiae, nihil optio quidem in culpa. Eos soluta veritatis aliquam! Minima dolore nam beatae velit quia vero unde, impedit eligendi incidunt accusantium cumque animi! Velit hic, suscipit nesciunt officiis eligendi, sunt, dolores aliquam sequi tempore quis rem necessitatibus porro voluptatum atque odit. Minima perspiciatis nesciunt assumenda nam nobis reprehenderit minus repellat ipsum illum veritatis omnis quia delectus modi in, nulla quasi nisi aliquam ut cupiditate. Quos, dolorum iusto? Adipisci tempora illo soluta beatae? Asperiores excepturi quod laborum porro vitae delectus minus molestias voluptates obcaecati.</p>
      </div>
    </div>
   <div className="home4"id="brands">
    <div>
      <h1>Brands</h1>
      <article>
        <div style={{animationDelay:"0.3s"}}>
          <AiFillGoogleCircle/>
          <p>Google</p>
        </div>

        <div style={{animationDelay:"0.5s"}}>
          <AiFillAmazonCircle/>
          <p>Amazon</p>
        </div>

        <div style={{animationDelay:"0.7s"}}>
          <AiFillYoutube/>
          <p>Youtube</p>
        </div>

        <div style={{animationDelay:"1s"}}>
          <AiFillInstagram/>
          <p>Instagram</p>
        </div>
      </article>
    </div>
   </div>
    </>
  )
}

export default Home
