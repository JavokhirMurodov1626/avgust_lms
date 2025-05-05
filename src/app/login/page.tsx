import { LoginForm } from "@/features/Login/LoginForm";
import { LoginSwiper } from "@/features/LoginSwiper";

const LoginPage = () => {
  return (
    <section className="relative h-screen bg-[url('/images/bg_gradient.svg')] bg-cover">
      <div className="grid grid-cols-2 gap-6  max-w-[1440px] w-full mx-auto  h-full">
        <div className="left    bg-white p-4 rounded-lg">
          <LoginSwiper />
        </div>

        <div className="right  max-w-[500px] bg-white p-4 rounded-lg">
          <h1 className="text-2xl text-center font-interMedium mb-3">
            Tizimga kirish
          </h1>
          <div className="">
            <LoginForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
