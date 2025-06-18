import SignupForm from "./SignupForm/SignupForm";
import SignupSidebar from "./SignupSidebar/SignupSidebar";

const SignupPage = () => {
  return (
    <div className="min-h-screen flex">
      <SignupSidebar />
      <SignupForm />
    </div>
  );
};

export default SignupPage;
