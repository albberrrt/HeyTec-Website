import sty from "./signup.module.scss";

import Input from "../components/Input/Input";
import Button from "../components/Button/Button";


export default function SignUp() {
    return (
      <>
        <main className={sty.main}>
          <div className={sty.container}>
            <h1><span>Create Your </span><span>Hey!Tec</span><span> Account</span></h1>
            <form>
              <Input width="480px" placeholder="Username" id="user" alt="Please fill out this field." />
              <Input width="480px" placeholder="Email" id="email" alt="Please fill out this field." />
              <Input width="480px" placeholder="Password" type="password" id="email" alt="Please fill out this field." />
              <Button value="Sign up" id="signup"/>
            </form>
          </div>
        </main>
      </>
    )
}