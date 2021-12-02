import Button from "../components/Button";
import Input from "../components/Input";
import Link from "next/link";

import Icon from "../styles/SVC.module.css";

export default function Login() {
  return (
    // Whole Container
    <div className={`relative min-h-screen flex`}>
      <div className={`flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 bg-white`}>
        {/* Left Side Image */}
        
        <div 
          className={`
            sm:w-1/5 xl:3/5 h-full hidden md:flex flex-auto items-center justify-center
            overflow-hidden p-10 relative bg-cover bg-no-repeat bg-gray-400 text-white
          `} style={{
            backgroundImage: `url("/assets/login-bg.jpg")`
          }}
        > 
        <div className="absolute bg-gradient-to-b from-gray-400 to-gray-600 opacity-20 inset-0 z-0"></div>
          <div className="w-full max-w-sm z-10">
            <div className="sm:text-4xl xl:text-5xl font-bold leading-loose mb-6">Launch Control</div>
            <div className="sm:text-sm xl:text-md text-gray-200 laeding-loose font-normal"> Hi! Welcome to the launch control!
            register and you will be able to use my free API and monitor it, it is 100% free all you need to do is 
            simply register. You can register either using Gmail or Github.
            </div>
          </div>
        </div>

        {/* Right Side Bar */}
        <div className={`
          flex items-center justify-center w-full h-full
          sm:w-full md:h-full md:w-2/5 p-8
          md:p-10 lg:p-14 sm:rounded-lg md:rounded-none bg-white
        `}>
          <div className={`max-w-md w-full space-y-6`}>
            <div className={`text-center`}>
              <h2 className="mt-6 text-2xl font-bold text-gray-900">
                Welcome to Launch Control !
              </h2>
              <p class="mt-2text-sm text-gray-500">Sign in with</p>
              {/* Google button */}
            </div>

            <div className={"flex"}>
                <Link href="/dashboard">
                  <a className={`
                    hover:ring-blue-500  hover:ring
                    flex items-center justify-center 
                    w-full px-4 py-3 border-2 border-blue-400 space-x-2
                    hover:border-transparent hover:outline-none
                    font-semibold rounded-md hover:text-blue-500
                    transition duration-200
                  `}>
                    <div className={`${Icon.GoogleIcon} w-6 h-6`}/>
                    <span>Sign in with Google</span>
                  </a>
                </Link>
            </div>

            <div class="flex items-center justify-center space-x-2">
              <span class="h-px w-16 bg-gray-200"></span>
              <span class="text-gray-300 font-normal">or continue with</span>
              <span class="h-px w-16 bg-gray-200"></span>
            </div>
            
            <div class="flex flex-col">
              <label class="mb-2 text-base sm:text-sm font-bold text-gray-700 tracking-wide">Email</label>
              <Input placeholder="Email"/>
            </div>

            <div class="flex flex-col">
              <label class="mb-2 text-base sm:text-sm font-bold text-gray-700 tracking-wide">Password</label>
              <Input placeholder="Password"/>
            </div>

            <div className={`flex flex-row-reverse items-center`}>
              <div class="text-sm">
                <a href="#" class="text-gray-400 hover:text-gray-500">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div className={`flex flex-row`}>
              <Button>Sign in</Button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
