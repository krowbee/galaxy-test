import { useMobile } from "../../../hooks/useMobile";
import { BurgerMenu } from "./burger-menu/BurgerMenu";

export function Header() {
  const isMobile = useMobile();
  return (
    <header className="fixed flex flex-row md:m-4 top-0 w-full bg-linear-to-r justify-between items-center from-white/35 to-white/20  px-6 py-4 z-20 rounded-3xl">
      <div className="relative">
        <h1 className="relative uppercase text-3xl font-bold z-10 font-montserrat ">
          Test task
        </h1>
        <div className="absolute rounded-full w-6 h-6 -top-1 -left-1.5 z-0 bg-blue-500" />
      </div>
      <nav className="hidden md:flex md:flex-row  font-montserrat gap-10">
        <a href="#" className="text-blue-600 active">
          Home
        </a>
        <a href="#">How It Works</a>
        <a href="#">Latest Contracts Post</a>
      </nav>
      <div className="hidden md:flex md:flex-row justify-center items-center gap-6 font-montserrat">
        <a href="#" className="text-lg">
          Login
        </a>
        <a href="#">
          <button className="py-2 px-4 rounded-3xl border cursor-pointer border-blue-600 text-blue-600 text-lg">
            Sign up
          </button>
        </a>
      </div>
      {isMobile && <BurgerMenu />}
    </header>
  );
}
