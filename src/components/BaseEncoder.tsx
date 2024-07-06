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
      <h1>Base 64 Encode</h1>
      <p>
        Base64 is a group of binary-to-text encoding schemes that transforms
        binary data into a sequence of printable characters, limited to a set of
        64 unique characters.Base64 is also widely used for sending e-mail
        attachments, because SMTP – in its original form – was designed to
        transport 7-bit ASCII characters only
      </p>
      <Input btnName="Convert to Base 64" inputConsumer={inputConsumer} />
      <Result result={result} />
    </>
  );
};

export default BaseEncoder;
