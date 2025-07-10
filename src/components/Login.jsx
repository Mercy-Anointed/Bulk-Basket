import { useEffect, useState } from 'react';
import { useAppContext } from './../context/AppContext';
import { signInWithGoogle, signInWithFacebook, auth, setAuthPersistence } from '../firebase';
import { sendPasswordResetEmail } from 'firebase/auth';
import toast from 'react-hot-toast';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaUser, FaPhoneAlt, FaLock } from "react-icons/fa";
import { AiOutlineMail, AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Login = () => {
  const { setShowUserLogin, loginUser, navigate } = useAppContext();
  const [mode, setMode] = useState('login');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    const rememberedEmail = localStorage.getItem('rememberedEmail');
    if (rememberedEmail) {
      setEmail(rememberedEmail);
      setRememberMe(true);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (mode === 'register' && password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      await setAuthPersistence(rememberMe);

      if (rememberMe && email) {
        localStorage.setItem('rememberedEmail', email);
      } else {
        localStorage.removeItem('rememberedEmail');
      }

      const user = {
        name: mode === 'register' ? `${firstName} ${lastName}` : "User",
        email,
        photoURL: `https://ui-avatars.com/api/?name=${firstName + "+" + lastName}&background=random`,
      };

      loginUser(user);
      setShowUserLogin(false);
      navigate("/");
    } catch (error) {
      toast.error("Login failed.");
      console.error(error);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await setAuthPersistence(rememberMe);
      const result = await signInWithGoogle();
      loginUser(result.user);
      setShowUserLogin(false);
      navigate("/");
    } catch (error) {
      console.error("Google login error", error);
      toast.error("Google login failed. Try again.");
    }
  };

  const handleFacebookLogin = async () => {
    try {
      await setAuthPersistence(rememberMe);
      const result = await signInWithFacebook();
      loginUser(result.user);
      setShowUserLogin(false);
      navigate("/");
    } catch (error) {
      console.error("Facebook login error", error);
      toast.error("Facebook login failed. Try again.");
    }
  };

  const handleForgotPassword = async () => {
    if (!email) return toast.error("Enter your email to reset password.");
    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Reset link sent to your email.");
    } catch (error) {
      console.error(error);
      toast.error("Failed to send reset email.");
    }
  };

  return (
    <div
      onClick={() => setShowUserLogin(false)}
      className="fixed top-0 left-0 right-0 bottom-0 z-50 bg-black/50 flex justify-center items-center"
    >
      <form
        onClick={(e) => e.stopPropagation()}
        onSubmit={handleSubmit}
        className="bg-white w-[90%] max-w-md p-6 rounded-lg shadow-md space-y-4"
      >
        <h2 className="text-xl font-bold text-center">
          {mode === 'login' ? 'User Login' : 'Create Account'}
        </h2>

        {mode === 'register' && (
          <>
            <div className="flex gap-2">
              <div className="w-1/2 relative">
                <FaUser className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="First Name"
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 shadow-md rounded outline-none"
                />
              </div>
              <div className="w-1/2 relative">
                <FaUser className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Last Name"
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 shadow-md rounded outline-none"
                />
              </div>
            </div>

            <div className="relative">
              <FaPhoneAlt className="absolute left-3 top-3 text-gray-400" />
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone Number"
                className="w-full pl-10 pr-3 py-2 border border-gray-300 shadow-md rounded outline-none"
              />
            </div>
          </>
        )}

        <div className="relative">
          <AiOutlineMail className="absolute left-3 top-3 text-gray-400" />
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            className="w-full pl-10 pr-3 py-2 border border-gray-300 shadow-md rounded outline-none"
          />
        </div>

        <div className="relative">
          <FaLock className="absolute left-3 top-3 text-gray-400" />
          <input
            type={showPassword ? "text" : "password"}
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full pl-10 pr-10 py-2 border border-gray-300 shadow-md rounded outline-none"
          />
          <div
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-3 cursor-pointer"
          >
            {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
          </div>
        </div>

        {mode === 'login' && (
          <div className="flex items-center justify-between text-sm mt-1">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="accent-primary"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <span>Remember me</span>
            </label>
            <span
              className="text-primary cursor-pointer hover:underline"
              onClick={handleForgotPassword}
            >
              Forgot password?
            </span>
          </div>
        )}

        {mode === 'register' && (
          <div className="relative">
            <FaLock className="absolute left-3 top-3 text-gray-400" />
            <input
              type={showConfirmPassword ? "text" : "password"}
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
              className="w-full pl-10 pr-10 py-2 border border-gray-300 shadow-md rounded outline-none"
            />
            <div
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-3 cursor-pointer"
            >
              {showConfirmPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
            </div>
          </div>
        )}

        <button
          type="submit"
          className="bg-primary text-white w-full py-2 rounded font-medium"
        >
          {mode === 'login' ? 'Login' : 'Create Account'}
        </button>

        <div className="flex items-center gap-2">
          <div className="h-px bg-gray-300 flex-1" />
          <span className="text-sm text-gray-500">or continue with</span>
          <div className="h-px bg-gray-300 flex-1" />
        </div>

        <div className="flex gap-3">
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="flex-1 flex items-center justify-center gap-2 border border-gray-300 shadow-md py-2 rounded hover:bg-gray-100 transition"
          >
            <FcGoogle size={20} />
            <span className="text-sm">Google</span>
          </button>
          <button
            type="button"
            onClick={handleFacebookLogin}
            className="flex-1 flex items-center justify-center gap-2 border border-gray-300 shadow-md py-2 rounded hover:bg-gray-100 transition text-blue-600"
          >
            <FaFacebook size={20} />
            <span className="text-sm">Facebook</span>
          </button>
        </div>

        <p className="text-center text-sm">
          {mode === 'login' ? (
            <>
              Don&apos;t have an account?{" "}
              <span
                onClick={() => setMode('register')}
                className="text-primary cursor-pointer font-medium"
              >
                Register
              </span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span
                onClick={() => setMode('login')}
                className="text-primary cursor-pointer font-medium"
              >
                Login
              </span>
            </>
          )}
        </p>
      </form>
    </div>
  );
};

export default Login;
