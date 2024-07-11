import { useState } from "react";
import Input from "./UI/Input.tsx";
import Result from "./UI/Result.tsx";
import { Buffer } from "buffer";
import InfoBox from "./UI/InfoBox.tsx";

const BaseEncoder: React.FC = () => {
  const [result, setResult] = useState("");
  const inputConsumer = (input: string) => {
    setResult(Buffer.from(input, "binary").toString("base64"));
  };
  return (
    <>
      <div className="mx-auto max-w-7xl px-2 py-4 sm:px-6 lg:px-8 bg-slate-200">
        <h1 className="flex justify-center text-xl">Base 64 Encode</h1>
        <div className="container py-4  lg:w-8/12 sm:w-full ">
          <Input btnName="Convert to Base 64" inputConsumer={inputConsumer} />
          {result && <Result result={result} />}
          <InfoBox heading="What is Base 64 Encoding?">
            Base64 is a group of binary-to-text encoding schemes that transforms
            binary data into a sequence of printable characters, limited to a
            set of 64 unique characters.Base64 is also widely used for sending
            e-mail attachments, because SMTP – in its original form – was
            designed to transport 7-bit ASCII characters only.
          </InfoBox>
        </div>
      </div>
    </>
  );
};

export default BaseEncoder;
