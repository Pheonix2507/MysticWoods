import CircularProgress from "./CircularProgress";

const Loader = () => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center h-screen">
      <CircularProgress/>
      <p>Loading ...</p>
    </div>
  );
};

export default Loader;
