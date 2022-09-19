import Content from "./components/Content";
import Image from "./components/Image";

function App() {
  return (
    <div
      className="h-screen flex flex-col items-center 
    justify-center "
    >
      <div className="background rounded-[20px] bg-white w-[20rem]">
        <Image />
        <Content />
      </div>
 
      <div className="attribution sticky top-[100vh] text-[12px] ">
        Challenge by{" "}
        <a className="underline" href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a className="underline" href="https://github.com/Gonzalo-Barra">Gonzalo Barra</a>.
      </div>
    </div>
  );
}

export default App;
