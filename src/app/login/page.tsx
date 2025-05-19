import { LoginForm } from "@/features/Login/LoginForm";
// import { LoginSwiper } from "@/features/LoginSwiper";
import { LoginAnimation } from "@/features/Login/Animation";

const LoginPage = () => {
  return (
    <section className="relative h-screen bg-[url('/images/bg_gradient.svg')] bg-cover">
      <div className="flex w-full mx-auto  h-full ">
        <div className="left w-3/5 bg-violet-100 pb-6 px-5 rounded-e-2xl hidden lg:block">
          {/* <LoginSwiper /> */}
          {/* <video
            autoPlay
            loop
            muted
            playsInline
            style={{
              backgroundImage:
                'url("https://uploads-ssl.webflow.com/5fcf5cffc0333cf6b6778946/5fe48b14d7bed20939d36012_loop-faster-poster-00001.jpg")',
              objectFit: "cover",
            }}
            data-wf-ignore="true"
            className="w-full h-full"
          >
            <source
              src="https://uploads-ssl.webflow.com/5fcf5cffc0333cf6b6778946/5fe48b14d7bed20939d36012_loop-faster-transcode.mp4"
              data-wf-ignore="true"
            />
            <source
              src="https://uploads-ssl.webflow.com/5fcf5cffc0333cf6b6778946/5fe48b14d7bed20939d36012_loop-faster-transcode.webm"
              data-wf-ignore="true"
            />
          </video> */}

          <LoginAnimation />
        </div>

        <div className="right w-full lg:w-2/5 self-center md:px-6 px-2">
          <div className="mx-auto max-w-[600px] w-full bg-white md:p-10 px-4 py-6 rounded-lg">
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
      </div>
    </section>
  );
};

export default LoginPage;
