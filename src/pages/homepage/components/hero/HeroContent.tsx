import { SearchIcon } from "lucide-react";

export function HeroContent() {
  return (
    <div className="flex flex-col w-full items-center justify-center z-10 gap-2">
      <div className="flex flex-col font-montserrat text-white text-center gap-4">
        <h1 className="text-5xl font-medium">Run Your Business</h1>
        <p className="text-lg font-normal">
          Find better suppliers. Secure real contracts. Build lasting
          partnership
        </p>
      </div>
      <form className="mx-auto flex py-2 w-[95%] max-w-5xl items-center rounded-full border border-white/70 bg-white/20 px-5 backdrop-blur-md">
        <SearchIcon className="text-white" />

        <input
          type="text"
          className="min-w-0 flex-1 bg-transparent text-white outline-none font-montserrat px-2"
        />

        <button
          type="submit"
          className="rounded-full bg-blue-600 px-8 py-3 text-sm font-medium text-white shadow-md transition cursor-pointer hover:bg-blue-700"
        >
          Search
        </button>
      </form>
    </div>
  );
}
