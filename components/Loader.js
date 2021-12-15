import { XlviLoader } from "react-awesome-loaders";

function Loader() {
  return (
    <div className="flex items-center justify-center h-screen">
      <XlviLoader
        boxColors={["#f97316", "#fbbf24", "#7c2d12"]}
        desktopSize={"128px"}
        mobileSize={"100px"}
      />
    </div>
  );
}

export default Loader;
