function Wrapper({ children }: any) {
  return (
    <div
      className="w-screen h-screen flex  bg-cover"
      style={{ backgroundImage: "url('/assets/background.svg')" }}
    >
      {children}
    </div>
  );
}

export default Wrapper;
