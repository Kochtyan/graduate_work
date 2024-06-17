import DotLoader from "react-spinners/DotLoader";

function Loader() {
  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <DotLoader color="#6C29A3" />
      </div>
    </>
  );
}

export default Loader;
