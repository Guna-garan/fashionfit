import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

// This component injects the global styles and animations into the document head.
const GlobalStyles = () => {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      body {
        font-family: 'Inter', sans-serif;
        /* The animated gradient background is applied to the body */
        background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
        background-size: 400% 400%;
        animation: gradientBG 15s ease infinite;
      }

      @keyframes gradientBG {
        0% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
        100% {
          background-position: 0% 50%;
        }
      }

      /* Glassmorphism effect */
      .glass-card {
        background: rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.3);
      }
    `;
    document.head.appendChild(style);

    // Load the Inter font
    const fontLink = document.createElement("link");
    fontLink.href =
      "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";
    fontLink.rel = "stylesheet";
    document.head.appendChild(fontLink);

    // Cleanup function to remove the style when the component unmounts
    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
      if (document.head.contains(fontLink)) {
        document.head.removeChild(fontLink);
      }
    };
  }, []);

  return null; // This component doesn't render anything itself
};

const Signup = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      // Your existing signup logic
      // await signup(name, email, password);
      console.log("Submitting:", { name, email, password });
      // Mock success:
      await new Promise((resolve) => setTimeout(resolve, 1000));
      // Uncomment the line below to test error state
      // if (email.includes("test")) throw new Error("This is a test error!");
      navigate("/"); // redirect on success
    } catch (err: any) {
      setError(err?.response?.data?.message || err.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <GlobalStyles />
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-6xl md:grid grid-cols-2 shadow-2xl rounded-2xl overflow-hidden">
          {/* Left Side: Welcome / Branding Panel */}
          <div className="hidden md:flex flex-col justify-center items-center p-12 bg-gray-900 bg-opacity-40 text-white">
            <svg
              className="w-20 h-20 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              ></path>
            </svg>
            <h1 className="text-4xl font-bold mb-3">Welcome to Fashion Fit!</h1>
            <p className="text-lg text-center text-gray-200">
              Create an account to start your fashion journey with us.
            </p>
          </div>

          {/* Right Side: Form Panel */}
          <div className="w-full p-8 md:p-12 glass-card relative overflow-hidden">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              Create an Account
            </h2>
            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="signupName"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="signupName"
                  className="w-full px-4 py-3 bg-white bg-opacity-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="signupEmail"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="signupEmail"
                  className="w-full px-4 py-3 bg-white bg-opacity-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="signupPassword"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="signupPassword"
                  className="w-full px-4 py-3 bg-white bg-opacity-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  minLength={6}
                  required
                />
              </div>

              {/* Styled Error Message */}
              {error && (
                <div className="p-3 rounded-lg text-center text-sm bg-red-200 text-red-800">
                  {error}
                </div>
              )}

              <button
                className="w-full bg-pink-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-pink-700 transition duration-300 disabled:opacity-60"
                disabled={loading}
                type="submit"
              >
                {loading ? "Creating..." : "Sign up"}
              </button>
            </form>

            <p className="text-center text-gray-700 mt-6">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-pink-600 font-medium hover:text-pink-800"
              >
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;