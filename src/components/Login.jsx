import { useEffect, useState } from 'react';
import { useAppContext } from './../context/AppContext';
import {
  signInWithGoogle,
  signInWithFacebook,
  auth,
  setAuthPersistence,
} from '../firebase';
import {
  sendPasswordResetEmail,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import toast from 'react-hot-toast';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaUser, FaPhoneAlt, FaLock } from "react-icons/fa";
import { AiOutlineMail, AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { assets } from '../assets/assets';

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

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const animatedImages = [
    assets.animation3,
    assets.animation4,
    assets.animation5,
  ];

  useEffect(() => {
    const rememberedEmail = localStorage.getItem('rememberedEmail');
    if (rememberedEmail) {
      setEmail(rememberedEmail);
      setRememberMe(true);
    }

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % animatedImages.length);
    }, 3000);

    return () => clearInterval(interval);
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

      let userCredential;
      if (mode === 'register') {
        userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(userCredential.user, {
          displayName: `${firstName} ${lastName}`,
          photoURL: `https://ui-avatars.com/api?name=${firstName}+${lastName}&background=random`,
        });
      } else {
        userCredential = await signInWithEmailAndPassword(auth, email, password);
      }

      loginUser(userCredential.user);
      setShowUserLogin(false);
      navigate("/");
    } catch (error) {
      console.error(error);
      if (error.code === 'auth/user-not-found') {
        toast.error("No user found. Please register first.");
      } else if (error.code === 'auth/wrong-password') {
        toast.error("Incorrect password. Please try again.");
      } else if (error.code === 'auth/email-already-in-use') {
        toast.error("This email is already registered. Please login instead.");
      } else {
        toast.error(error.message || "Something went wrong");
      }
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
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-[95%] max-w-6xl flex flex-col md:flex-row rounded-lg overflow-hidden shadow-lg"
      >
        {/* Left - Login Form */}
        <form onSubmit={handleSubmit} className="w-full md:w-1/2 p-6 space-y-4">
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

        {/* Right - Animated Image Section with Fade */}
        <div className="hidden md:flex w-1/2 relative overflow-hidden">
          {animatedImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`slide-${index}`}
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                index === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Login;
