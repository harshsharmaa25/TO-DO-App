import React from "react";
import TodoContainer from "./components/TodoContainer";

const App = () => {
  return (
    <>
      <main className="min-h-screen w-full bg-slate-950 flex items-center justify-center">
        <TodoContainer />
      </main>
    </>
  );
};

export default App;
