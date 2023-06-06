import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'
import Button from '@/components/button/Button'
const About = () => {
  return (
    <div className={styles.container}>

    <div className={styles.imgContainer}>
      <Image src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" fill={true} alt="" className={styles.img}/>
      <div className={styles.imgText}>
        <h1 className={styles.imgTitle}>Designful Idea's</h1>
        <h2 className={styles.desc}>Design your own and idea experience</h2>
      </div>
    </div>
    <div className={styles.textContainer}>

    <div className={styles.item}>
      <h1>Who are we?</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam possimus sequi cupiditate accusantium fugiat saepe officiis aut adipisci porro alias quo optio, deleniti ipsa vitae repellat aliquid eos dignissimos tenetur.
      Dolor tempore eum deleniti quod sit distinctio earum repellendus. Exercitationem odio quo sint quam vel, dolore aspernatur blanditiis amet, inventore fuga eius? Est praesentium ex dolores, fugiat velit amet quaerat?
      <br/>
      <br/>
      Dolorem quaerat porro totam incidunt, facilis, dignissimos aliquam eius nobis quos atque earum neque ipsa et fugiat in officiis laudantium praesentium deserunt suscipit voluptatibus ducimus consectetur magnam sit accusantium. Est!
   
  
   </p>
    </div>
    <div className={styles.item}>
    <h1>What we do?</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam possimus sequi cupiditate accusantium fugiat saepe officiis aut adipisci porro alias quo optio, deleniti ipsa vitae repellat aliquid eos dignissimos tenetur.
      Dolor tempore eum deleniti quod sit distinctio earum repellendus. Exercitationem odio quo sint quam vel, dolore aspernatur blanditiis amet, inventore fuga eius? Est praesentium ex dolores, fugiat velit amet quaerat?
      <br/>
      <br/>
      Dolorem quaerat porro totam incidunt, facilis, dignissimos aliquam eius nobis quos atque earum neque ipsa et fugiat in officiis laudantium praesentium deserunt suscipit voluptatibus ducimus consectetur magnam sit accusantium. Est!
   
  
   </p>
   <Button url="/contact" text={'Contact'}/>
    </div>
    </div>
    </div>
  )
}

export default About