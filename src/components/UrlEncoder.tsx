import { useState } from "react";
import Input from "./UI/Input.tsx";
import Result from "./UI/Result.tsx";

const UrlEncoder: React.FC = () => {
  const [result, setResult] = useState("");
  const inputConsumer = (input: string) => {
    setResult(encodeURIComponent(input));
  };
  return (
    <>
      <div className="mx-auto max-w-7xl px-2 py-4 sm:px-6 lg:px-8 bg-slate-200">
        <h1 className="flex justify-center text-xl">URL Encode</h1>
        <div className="container py-4">
          <Input
            btnName="Convert to URL Encode"
            inputConsumer={inputConsumer}
          />

          {result && <h2 className="px-4">Encoded Text:</h2>}
          <div className="text-center">
            <Result result={result} />
          </div>
        </div>

        <div className="bg-blue-300 container rounded-lg p-4 border-solid border-4 border-cyan-700  ">
          <h2 className="text-lg text-cyan-700">What is Url Encoding?</h2>
          <p className="">
            URL encoding, officially known as percent-encoding, is a method to
            encode arbitrary data in a uniform resource identifier (URI) using
            only the US-ASCII characters legal within a URI. It is also used in
            the preparation of data of the application/x-www-form-urlencoded
            media type, as is often used in the submission of HTML form data in
            HTTP requests.
          </p>
        </div>
      </div>
    </>
  );
};

export default UrlEncoder;
