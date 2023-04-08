import Link from "next/link";

import sty from "./page.module.scss";


export default function HomePage() {
  return (
    <>
    
    <main className={sty.main}>
      <div className={sty.container}>
        <div>
          <h1 className={sty.title}>
            <span className={`${sty.titlespan} ${sty.send}`}>
              <span>Send.</span>
            </span>
            <span className={`${sty.titlespan} ${sty.messages}`}>
              <span>Messages.</span>
            </span>
            
          </h1>
        </div>
        <div>
          <p>Hey!Tec is the platform for Etec, providing the efficiency
              and tools students need to share and collaborate with each other</p>
        </div>
        <Link href={"/signup"}>
          <div className={sty.button}>
            <span>Start Messaging</span>
          </div>
        </Link>
      </div>
    </main>

    </>
  )
}