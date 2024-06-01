import logo from "../../assets/img/logo.png";

import LoginTextInput from "../../Components/LoginTextInput";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
const EmployeeLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorMsg, setErrMsg] = useState("");

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    if (event.target.name === "email") {
      setEmail(event.target.value);
    }
    if (event.target.name === "password") {
      setPassword(event.target.value);
    }
  };
  const doLogin = () => {
    let isLogin;
    if (email === "firstlast@gmail.com" && password === "password") {
      isLogin = "employee";
    }
    console.log("1" + isLogin + email + password);

    if (isLogin) {
      localStorage.setItem("isLogin", isLogin);
      navigate("/employee/home");
      navigate(0);
    } else {
      setErrMsg("Check email and password");
      console.log(errorMsg);
    }
  };

  return (
    <section className="">
      <div className="container min-h-[900px] h-[calc(100vh-82.8px)] px-6 py-20 ">
        <div className="flex h-full flex-wrap items-center justify-center lg:justify-between">
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
            <img
              src="/src/assets/img/EmployeeLogin.png"
              className="w-full"
              alt="Phone image"
            />
          </div>
          <div className="md:w-8/12 lg:ms-6 lg:w-5/12">
            <div className="flex flex-col items-center justify-center mb-10">
              <img src={logo} className=" w-1/4" />
              <h3 className="text-3xl font-bold dark:text-white text-employee mt-10 mb-5">
                Employee Portal{" "}
              </h3>
            </div>

            <div>
              <LoginTextInput
                htmlFor="employee"
                title="Email"
                name="email"
                type="text"
                handleInputChange={handleInputChange}
                value={email}
                errMessage=""
              />

              <LoginTextInput
                htmlFor="employee"
                title="Password"
                name="password"
                type="password"
                handleInputChange={handleInputChange}
                value={password}
                errMessage=""
              />

              <div className="mb-6 flex items-center justify-between">
                <Link
                  to="#!"
                  className="text-employee focus:outline-none dark:text-employee-400"
                >
                  Forgot password?
                </Link>
              </div>

              <button
                onClick={doLogin}
                type="button"
                className="inline-block w-full rounded bg-employee px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-employee-3 transition duration-150 ease-in-out hover:bg-employee-accent-300 hover:shadow-employee-2 focus:bg-employee-accent-300 focus:shadow-employee-2 focus:outline-none focus:ring-0 active:bg-employee-600 active:shadow-employee-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                data-twe-ripple-init
                data-twe-ripple-color="light"
              >
                Sign in
              </button>

              <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300 dark:before:border-neutral-500 dark:after:border-neutral-500">
                <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                  OR
                </p>
              </div>

              <button
                type="submit"
                className="inline-block w-full rounded border-2 border-employee px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-employee shadow-employee-3 transition duration-150 ease-in-out hover:bg-employee-accent-300 hover:shadow-employee-2 focus:bg-employee-accent-300 focus:shadow-employee-2 focus:outline-none focus:ring-0 active:bg-employee-600 active:shadow-employee-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                data-twe-ripple-init
                data-twe-ripple-color="light"
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmployeeLogin;
