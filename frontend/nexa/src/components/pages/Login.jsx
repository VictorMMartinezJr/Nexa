import { useContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";

const Login = () => {
  const [isCreateAccount, setIsCreateAccount] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { isLoggedIn, setIsLoggedIn, getUserAccount, setUserData } =
    useContext(AppContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    axios.defaults.withCredentials = true;
    setLoading(true);

    try {
      if (isCreateAccount) {
        // Register api call
        const response = await axios.post(
          "http://localhost:8080/api/register",
          {
            name,
            email,
            password,
          },
          { withCredentials: true }
        );
        if (response.status === 201) {
          navigate("/");
          toast.success("Account created successfully.");
        } else {
          toast.error("Email already exists.");
        }
      } else {
        // Login api call
        const response = await axios.post(
          "http://localhost:8080/api/login",
          {
            email,
            password,
          },
          { withCredentials: true }
        );

        if (response.status === 200) {
          setIsLoggedIn(true);
          await getUserAccount();
          navigate("/");
          toast.success(`Welcome Back!`);
        }
      }
    } catch (error) {
      if (error.response.status === 400) {
        toast.error("Email or Password incorrect.");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async (e) => {
    axios.defaults.withCredentials = true;
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/logout");

      if (response.status === 200) {
        setIsLoggedIn(false);
        setUserData(null);
        navigate("/");
        toast.success("Logged out successfully.");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center w-full h-full px-4">
      <div className="flex justify-center h-full w-full md:max-w-[70%] xl:max-w-[30%]">
        {/* Form header */}
        <div className="p-4 w-full">
          <AnimatePresence mode="wait">
            <motion.h2
              key={isCreateAccount ? "create" : "login"}
              className="text-center mb-4 text-2xl lg:text-3xl lg:mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              {isLoggedIn
                ? "Logout?"
                : isCreateAccount
                ? "Create Account"
                : "Login"}
            </motion.h2>
          </AnimatePresence>

          {/* Form */}
          <form
            onSubmit={isLoggedIn ? handleLogout : submitHandler}
            className="flex flex-col gap-5"
          >
            {/* Name only if isCreateAccount is true */}
            {isCreateAccount && (
              <div className="flex ">
                <label htmlFor="name" className="w-16 lg:text-lg lg:w-20">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="border-1 rounded-md ml-4 pl-2 py-2 flex-1"
                  placeholder="Name*"
                  value={name}
                  required
                  onChange={(e) => setName(e.target.value)}
                  disabled={isLoggedIn}
                />
              </div>
            )}

            {/* Email */}
            <div className="mt-3 flex lg:mt-6">
              <label htmlFor="email" className="w-16 lg:text-lg lg:w-20">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="border-1 rounded-md ml-4 pl-2 py-2 flex-1"
                placeholder="Email*"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoggedIn}
              />
            </div>

            {/* Password */}
            <div className="my-3 flex lg:my-6">
              <label htmlFor="password" className="w-16 lg:text-lg lg:w-20">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="border-1 rounded-md ml-4 pl-2 py-2  flex-1"
                placeholder="Password*"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoggedIn}
              />
            </div>

            {/* Primary button */}
            {isLoggedIn ? (
              <button
                type="submit"
                className="cursor-pointer bg-red-600 text-white py-4 rounded-full w-full xl:text-xl"
                disabled={loading}
              >
                {loading ? "Loading" : "Logout"}
              </button>
            ) : (
              <button
                type="submit"
                className="cursor-pointer bg-black text-white py-4 rounded-full w-full xl:text-xl"
                disabled={loading}
              >
                {loading ? "Loading" : isCreateAccount ? "Register" : "Login"}
              </button>
            )}
          </form>

          {/* Form footer to switch between register/login */}
          {!isLoggedIn && (
            <div className="text-center mt-3">
              <p className="mb-0">
                {isCreateAccount ? (
                  <>
                    Already have an account?{" "}
                    <span
                      className="underline cursor-pointer"
                      onClick={() => setIsCreateAccount(false)}
                    >
                      Login
                    </span>
                  </>
                ) : (
                  <>
                    Don't have an account?{" "}
                    <span
                      className="underline cursor-pointer"
                      onClick={() => setIsCreateAccount(true)}
                    >
                      Register
                    </span>
                  </>
                )}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
