import "./styles.css";
import Graph from "./graph";

export default function App() {
  return (
    <main className="flex flex-col flex-1 ">
      <header className="bg-gradient-to-t from-gray-50-to-white via-white dark:via-gray-950 pt-10">
        <div className="container relative">
          <h1 className="flex items-center flex-wrap md:text-xl mb-3">
            <p className="font-mono font-semibold">skill name</p>
          </h1>
        </div>
      </header>
      <div
        className="container relative space-y-4 flex flex-col md:grid md:space-y-0 w-full
		md:grid-cols-12
		md:flex-1 md:grid-rows-full 
		md:gap-6	
	"
      >
        <div className="pt-8 border-gray-100 md:col-span-7 pb-24 relative ">
          <Graph />
        </div>
        <div className="pt-8 border-gray-100 md:col-span-5 pt-6 md:pb-24 md:pl-6 md:border-l order-first md:order-none">
          test 2
        </div>
      </div>
    </main>
  );
}
