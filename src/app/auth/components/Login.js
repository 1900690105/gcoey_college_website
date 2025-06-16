import { useState } from "react";
import { Eye, EyeOff, User, Lock, GraduationCap } from "lucide-react";

export default function StudentLogin() {
  const [formData, setFormData] = useState({
    prnNumber: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.prnNumber.trim()) {
      newErrors.prnNumber = "PRN Number is required";
    } else if (!/^\d+$/.test(formData.prnNumber)) {
      newErrors.prnNumber = "PRN Number must contain only digits";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setIsLoading(true);

    // Simulate login API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Login attempt:", formData);
      alert("Login successful!");
      window.location.href = "/profile";
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* College Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-3 rounded-full shadow-lg">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            College Portal
          </h1>
          <p className="text-gray-600">
            Sign in to access your student dashboard
          </p>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
          <div className="space-y-6">
            {/* PRN Number Field */}
            <div>
              <label
                htmlFor="prnNumber"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                PRN Number
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  id="prnNumber"
                  name="prnNumber"
                  value={formData.prnNumber}
                  onChange={handleInputChange}
                  className={`block w-full pl-10 pr-3 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                    errors.prnNumber
                      ? "border-red-500 bg-red-50"
                      : "border-gray-300 focus:border-blue-500"
                  }`}
                  placeholder="Enter your PRN number"
                />
              </div>
              {errors.prnNumber && (
                <p className="mt-1 text-sm text-red-600">{errors.prnNumber}</p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className={`block w-full pl-10 pr-10 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                    errors.password
                      ? "border-red-500 bg-red-50"
                      : "border-gray-300 focus:border-blue-500"
                  }`}
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">{errors.password}</p>
              )}
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-700"
                >
                  Remember me
                </label>
              </div>
              <button
                type="button"
                className="text-sm text-blue-600 hover:text-blue-800 font-medium"
              >
                Forgot password?
              </button>
            </div>

            {/* Login Button */}
            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
              {isLoading ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Signing in...
                </>
              ) : (
                "Sign in to Portal"
              )}
            </button>
          </div>

          {/* Additional Options */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Need help? Contact{" "}
              <a
                href="mailto:support@college.edu"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                IT Support
              </a>
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-sm text-gray-500">
          <p>&copy; 2025 College Portal. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

// "use client";
// import { useRouter } from "next/navigation";
// import { useState, useEffect, useRef } from "react";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [otp, setOtp] = useState(["", "", "", "", "", ""]); // OTP inputs as an array
//   const [isOtpSent, setIsOtpSent] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState("");
//   const inputRefs = useRef([]); // Reference for inputs

//   const router = useRouter();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setError("");

//     // Simulate login API call
//     if (email === "admin@gmail.com" && password === "123456") {
//       // Simulate sending OTP
//       setIsOtpSent(true);
//     } else {
//       setError("Invalid email or password.");
//     }

//     setIsLoading(false);
//   };

//   const handleVerifyOtp = (e) => {
//     e.preventDefault();

//     // Check if the OTP is correct (simulated)
//     if (otp.join("") === "   ") {
//       // Navigate to admin dashboard or another page upon successful login
//       router.push("/admin");
//     } else {
//       setError("Invalid OTP.");
//     }
//   };

//   const handleOtpChange = (index, value) => {
//     // Convert value to a single digit
//     const newOtp = [...otp];
//     newOtp[index] = value.substring(0, 1); // Allow only one character
//     setOtp(newOtp);

//     // Move focus to next input
//     if (value && index < otp.length - 1) {
//       inputRefs.current[index + 1].focus();
//     }

//     // Move focus to previous input if backspace is pressed
//     if (!value && index > 0) {
//       inputRefs.current[index - 1].focus();
//     }
//   };

//   return (
//     <div className="flex items-center justify-center h-screen bg-gray-100">
//       <div className="bg-white shadow-md rounded-lg p-8 w-96">
//         <h2 className="text-2xl font-bold mb-6">Admin Login</h2>
//         {error && <p className="text-red-500 mb-4">{error}</p>}
//         {!isOtpSent ? (
//           <form onSubmit={handleLogin}>
//             <div className="mb-4">
//               <label className="block text-gray-700 text-sm font-bold mb-2">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Enter your email"
//                 required
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 text-sm font-bold mb-2">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="Enter your password"
//                 required
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               />
//             </div>
//             <button
//               type="submit"
//               className={`bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
//                 isLoading ? "opacity-50 cursor-not-allowed" : ""
//               }`}
//               disabled={isLoading}
//             >
//               {isLoading ? "Loading..." : "Login"}
//             </button>
//           </form>
//         ) : (
//           <form
//             onSubmit={handleVerifyOtp}
//             className="flex flex-col items-center"
//           >
//             <label className="block text-gray-700 text-sm font-bold mb-2">
//               Enter OTP
//             </label>
//             <div className="flex space-x-2 mb-4">
//               {otp.map((digit, index) => (
//                 <input
//                   key={index}
//                   type="text"
//                   value={digit}
//                   onChange={(e) => handleOtpChange(index, e.target.value)}
//                   ref={(ref) => (inputRefs.current[index] = ref)}
//                   maxLength="1"
//                   className="shadow appearance-none border rounded w-12 py-2 px-3 text-gray-700 text-center leading-tight focus:outline-none focus:shadow-outline"
//                   onFocus={(e) => e.target.select()} // Autofocus/select on focus
//                 />
//               ))}
//             </div>
//             <button
//               type="submit"
//               className={`bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
//                 isLoading ? "opacity-50 cursor-not-allowed" : ""
//               }`}
//               disabled={isLoading}
//             >
//               Verify OTP
//             </button>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Login;
