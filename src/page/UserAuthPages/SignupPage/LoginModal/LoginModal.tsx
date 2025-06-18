import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Eye, EyeOff, X } from "lucide-react";
import { toast } from "sonner";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setLoginData((prev) => ({ ...prev, [field]: value }));
  };

  const handleLogin = () => {
    if (!loginData.email || !loginData.password) {
      toast.error("Missing Information", {
        description: "Please fill in all fields.",
      });
      return;
    }

    toast.success("Login Successful!", {
      description: "Welcome back!",
    });

    console.log("Login submitted:", loginData);
    onClose();
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-opacity-20 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={handleOverlayClick}
    >
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        <div className="flex h-[600px]">
          {/* Left side - Image */}
          <div className="hidden md:flex md:w-1/2 relative">
            <img
              src="/login.jpg"
              alt="Login background"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right side - Login Form */}
          <div className="w-full md:w-1/2 p-8 relative">
            <button
              onClick={onClose}
              className="cursor-pointer absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
            >
              <X size={24} />
            </button>

            <div className="flex flex-col justify-center h-full max-w-sm mx-auto">
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  Welcome back!
                </h3>
                <p className="text-gray-600">
                  Enter your credentials to access your account
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <Label
                    htmlFor="login-email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email address
                  </Label>
                  <Input
                    id="login-email"
                    type="email"
                    value={loginData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="Enter your email"
                    className="w-full"
                    required
                  />
                </div>

                <div>
                  <Label
                    htmlFor="login-password"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="login-password"
                      type={showPassword ? "text" : "password"}
                      value={loginData.password}
                      onChange={(e) =>
                        handleInputChange("password", e.target.value)
                      }
                      placeholder="Enter your password"
                      className="w-full pr-10"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                </div>

                <Button
                  onClick={handleLogin}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 transition-colors duration-200"
                >
                  Login
                </Button>

                <div className="text-center text-sm text-gray-600">
                  Don't have an account?{" "}
                  <button
                    onClick={onClose}
                    className="text-blue-600 hover:underline font-medium"
                  >
                    Sign up here
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
