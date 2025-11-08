import { useState, useEffect } from "react";
// import { useNavigate, Link } from "react-router-dom"; // Removed react-router-dom imports
//import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Use a hardcoded API_URL since process.env might not be available in all environments
const API_URL = "http://localhost:5000/api";

/**
 * GlobalStyles component to inject CSS for the glassmorphism effect.
 * This includes a body background and the glass-card styles.
 */
const GlobalStyles = () => (
  <style>
    {`
      /* Added keyframes for the gradient animation */
      @keyframes gradientAnimation {
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

      /* Set a background for the body to see the blur effect */
      body {
        /* New animated gradient: pink -> blue -> pink for a smooth loop */
        background: linear-gradient(135deg, #ec4899 0%, #3b82f6 50%, #ec4899 100%);
        background-size: 200% 200%; /* Make background larger than viewport */
        background-attachment: fixed;
        font-family: 'Inter', sans-serif;

        /* Apply the animation */
        animation: gradientAnimation 12s ease infinite;
      }

      /* The main glassmorphism style */
      .glass-card {
        background: rgba(255, 255, 255, 0.2); /* Semi-transparent white */
        backdrop-filter: blur(15px);
        -webkit-backdrop-filter: blur(15px); /* Safari support */
        border-radius: 1rem; /* We want rounded corners for the glass effect */
        border: 1px solid rgba(255, 255, 255, 0.3);
        box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
      }

      /* A slightly darker glass effect for the left panel */
      .left-panel-glass {
        background: rgba(25, 25, 40, 0.4); /* Darker glass */
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px); /* Safari support */
        border-right: 1px solid rgba(255, 255, 255, 0.2);
      }
      
      /* Style for the inputs to match */
      .glass-input {
        background: rgba(255, 255, 255, 0.3) !important;
        border: 1px solid rgba(255, 255, 255, 0.4) !important;
        color: #333 !important;
        border-radius: 0.5rem; /* rounded-lg */
        padding: 0.75rem 1rem; /* px-4 py-3 */
        width: 100%;
        margin-top: 0.25rem;
      }
      .glass-input::placeholder {
        color: #555;
      }
      .glass-input:focus {
        background: rgba(255, 255, 255, 0.5) !important;
        border-color: rgba(255, 255, 255, 0.7) !important;
        box-shadow: none !important; /* Remove shadcn focus ring */
        outline: none;
      }
    `}
  </style>
);


const Login = () => {
  // const navigate = useNavigate(); // Removed this line
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      /*
      // Mocking the API response for demo
      // const res = await axios.post(${API_URL}/auth/login, {
      //   email,
      //   password,
      // });
      */

      // --- Mock logic ---
      await new Promise(resolve => setTimeout(resolve, 1000));
      if (email !== "test@test.com" || password !== "password123") {
          throw new Error("Invalid credentials. (Hint: test@test.com / password123)");
      }
      const res = { 
        data: { 
          token: "mock-jwt-token", 
          user: { name: "Test User", email: email }
        }
      };
      // --- End mock logic ---

      // Save JWT token
      localStorage.setItem("authToken", res.data.token); // Use 'authToken' to match App.jsx

      // Optionally save user info
      localStorage.setItem("user", JSON.stringify(res.data.user));

      // Redirect to homepage or profile
      // navigate("/"); // Replaced with plain window.location.href
      window.location.href = "/"; // Use standard browser navigation
    } catch (err: any) {
      const msg = err.response?.data?.message || err.message || "Login failed. Please try again.";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* This component injects the global styles */}
      <GlobalStyles />
      
      <div className="min-h-screen flex items-center justify-center p-4">
        {/* The main container now has rounded corners and shadow from the child panels */}
        <div className="w-full max-w-6xl md:grid grid-cols-2 shadow-2xl rounded-2xl overflow-hidden">
          
          {/* Left Side: Welcome / Branding Panel */}
          {/* We apply the new 'left-panel-glass' style here */}
          <div className="hidden md:flex flex-col justify-center items-center p-12 text-white left-panel-glass">
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
            <h1 className="text-4xl font-bold mb-3">Welcome Back!</h1>
            <p className="text-lg text-center text-gray-200">
              Log in to your FASHIONFIT account to see what's new.
            </p>
          </div>

          {/* Right Side: Form Panel (Your existing component) */}
          {/* We apply the 'glass-card' class and remove 'rounded-none' */}
          <Card className="w-full glass-card border-none p-4 md:p-8">
            <CardHeader>
              <CardTitle className="text-center text-3xl font-bold text-gray-800">
                Login to FASHIONFIT
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  // Using the creative theme's error style
                  <div className="p-3 rounded-lg text-center text-sm bg-red-200 text-red-800">
                    {error}
                  </div>
                )}

                <div>
                  <label className="text-sm font-medium text-gray-700">Email</label>
                  {/* Styling inputs to match the glass theme */}
                  <Input
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="glass-input" // Use the new glass-input class
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">Password</label>
                  <Input
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="glass-input" // Use the new glass-input class
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-pink-600 text-white py-3 h-auto rounded-lg font-semibold text-lg hover:bg-pink-700 transition duration-300 disabled:opacity-60"
                  disabled={loading}
                >
                  {loading ? "Logging in..." : "Login"}
                </Button>
              </form>

              <p className="text-sm text-center text-gray-700 mt-6">
                Don’t have an account?{" "}
                {/* Replaced <Link> with <a> tag to remove router dependency */}
                <a
                  href="/signup"
                  className="text-pink-600 hover:text-pink-800 font-medium"
                >
                  Sign up
                </a>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Login;