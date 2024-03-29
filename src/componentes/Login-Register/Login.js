import './Login.css'
import { useRef, useState } from "react";
import { signup, login, useAuth } from '../../api/firebaseConfiguration';
import ucablogo from "../../resources/logo-white.png";
import ucabguayana from "../../resources/ucab_guayana - Copy.jpg";
import ucabinformatica from "../../resources/escuela-ING.JPG";
import showpassword from "../../resources/show.png";
import hidepassword from "../../resources/hide.png";
import {logIn,signUp} from "../../api/auth"

export default function Login() {

  const [ loading, setLoading ] = useState(false);
  const [ hasAccount, setHasAccount ] = useState(false);
  const [ passwordShown, setPasswordShown ] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();

  async function handleSignup() {

    setLoading(true);
    let res= await signUp({email: emailRef.current.value,password: passwordRef.current.value});
    if (!res.ok) {
      alert(res.error);
      window.location.href = window.location.href;
    }
  }

  async function handleLogin() {

    setLoading(true);
    let res= await logIn({email: emailRef.current.value,password: passwordRef.current.value});
    if (!res.ok) {
      alert(res.error);
      window.location.href = window.location.href;
    }
  }

  const account = (e) => {
    e.preventDefault();
    setHasAccount(!hasAccount);
  };

  const togglePassword = (e) => {
    e.preventDefault();
    setPasswordShown(!passwordShown);
  };

  return (

    <div className="bodyInicio">
      <header>
        <nav className="navInicio">
          <img src={ucablogo} alt="Ucab Form Logo"/>
        </nav>
      </header>
      <main>
        <section className="sectionInicio">
          <div className="container">
              <div className="user signinBx">
                {!hasAccount ? (
                    <>
                      <div className="imgBx"><img src={ucabguayana} alt=""/></div>
                    </>
                  ) : (
                    <>
                      <div className="imgBx"><img src={ucabinformatica} alt=""/></div>
                    </>
                )}
                <div className="formBx">
                  <form action="">
                  {!hasAccount ? (
                        <>
                          <h2>Iniciar sesión</h2>
                        </>
                      ) : (
                        <>
                          <h2>Registrar</h2>
                        </>
                    )}
                    <input  ref={emailRef} type="email" placeholder="Correo electrónico" name="email"/>
                    <div className="inputPass">
                      <input ref={passwordRef} type={passwordShown ? "text" : "password"} id="inputPass" name="inputPass" placeholder="Contraseña"/>
                      <button onClick={togglePassword}>
                        {!passwordShown ? (
                          <>
                            <img src={showpassword} alt=""/>
                          </>
                        ) : (
                          <>
                            <img src={hidepassword} alt=""/>
                          </>
                        )}
                      </button>
                    </div>
                    <div className="btnContainer">
                      {!hasAccount ? (
                        <>
                          <input disabled={ loading  }  onClick={handleLogin} type="submit" value="Iniciar sesión" />
                          <p className="signup">¿No tienes una cuenta? <a href="0#" onClick={account}>Registrarse</a></p>
                        </>
                      ) : (
                        <>
                          <input disabled={ loading } onClick={handleSignup} type="submit" value="Registrarse"/>
                          <p className="signup">¿Ya tienes una cuenta? <a href="0#" onClick={account}>Iniciar sesión</a></p>
                        </>
                      )}
                    </div>
                  </form>
                </div>
              </div>
          </div>
        </section>
      </main>
    </div>
  );
}