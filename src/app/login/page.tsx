import { LoginForm } from "@/features/Login/LoginForm";
import { LoginSwiper } from "@/features/LoginSwiper";

const LoginPage = () => {
  return (
    <section className="relative h-screen bg-[url('/images/bg_gradient.svg')] bg-cover">
      <div className="grid grid-cols-2 gap-6  max-w-[1440px] w-full mx-auto  h-full">
        <div className="left bg-white p-10 rounded-lg self-center">
          <LoginSwiper />
        </div>

        <div className="right  max-w-[500px] bg-white p-10 rounded-lg self-center">
          <h1 className="text-3xl text-center font-interSemiBold mb-3 text-slate-800">
            Tizimga kirish
          </h1>
          <p className="text-center text-slate-500 text-sm mb-5">
            Avgust LMS ga xush kelibsiz
          </p>
          <div className="">
            <LoginForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
