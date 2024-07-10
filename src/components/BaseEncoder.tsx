import { useState } from "react";
import Input from "./UI/Input.tsx";
import Result from "./UI/Result.tsx";
import { Buffer } from "buffer";

const BaseEncoder: React.FC = () => {
  const [result, setResult] = useState("");
  const inputConsumer = (input: string) => {
    setResult(Buffer.from(input, "binary").toString("base64"));
  };
  return (
    <>
      <div className="mx-auto max-w-7xl px-2 py-4 sm:px-6 lg:px-8 bg-slate-200">
        <h1 className="flex justify-center text-xl">Base 64 Encode</h1>
        <div className="container py-4">
          <Input btnName="Convert to Base 64" inputConsumer={inputConsumer} />

          {result && <h2 className="px-4">Encoded Text:</h2>}
          <div className="text-center">
            <Result result={result} />
          </div>
        </div>
<<<<<<< HEAD
        <div className="bg-blue-300 container rounded-lg p-4 border-solid border-4 border-cyan-700 lg:w-9/12 sm:w-full ">
=======
        <div className="bg-blue-300 container rounded-lg p-4 border-solid border-4 border-cyan-700  ">
>>>>>>> cc35c651cbb88516b7f8742446b69d6e7fa876c9
          <h2 className="text-lg text-cyan-700">What is Base 64 Encoding?</h2>
          <p className="">
            Base64 is a group of binary-to-text encoding schemes that transforms
            binary data into a sequence of printable characters, limited to a
            set of 64 unique characters.Base64 is also widely used for sending
            e-mail attachments, because SMTP – in its original form – was
            designed to transport 7-bit ASCII characters only.
          </p>
        </div>
      </div>
    </>
  );
};

export default BaseEncoder;
