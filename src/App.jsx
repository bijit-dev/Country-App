import { Suspense } from "react";
import Countries from "./components/Countries";


const contriesPromise = fetch("https://restcountries.com/v3.1/all")
  .then(res => res.json());
  // console.log(contriesPromise);
  

const App = () => {
  return (
    <>
      <Suspense fallback={<p>waiting for message...</p>}>
        <Countries contriesPromise={contriesPromise}></Countries>
      </Suspense>
    </>
  );
};

export default App;
