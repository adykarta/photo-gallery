/* eslint-disable @next/next/no-img-element */
'use client'
import styles from "./page.module.css";


export default function Home() {
  return (

    <div className={styles.container}>
      <div className={styles.inner}>
        {
          Array(15).fill(null).map((_,idx)=>{
            return (
              <div className={styles.boxes} key={idx}>
              <img src={`${idx+1}.jpeg`} style={{width:"100%", height:"100%", objectFit:"cover", aspectRatio:"2", borderRadius:"8px"}} alt={`${idx}+1`}/>
            </div>
            )
          })
        }
  
      </div>


  </div>

  );
}
