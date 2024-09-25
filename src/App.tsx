import { useState } from 'react';

function App() {
  const [showGameModal, setShowGameModal] = useState(false);
  const [showGameLostModal, setShowGameLostModal] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  return (
    <div className="flex flex-col items-center w-11/12 md:w-3/4 lg:w-7/12 mx-auto mt-14">
      <h1 className="text-black text-4xl font-semibold my-4 ml-4">
        Connections
      </h1>
      <hr className="mb-4 md:mb-4 w-full" />
      <h2 className="text-black mb-4 text-2xl">Create four groups of four</h2>
    </div>
  );
}

export default App;
