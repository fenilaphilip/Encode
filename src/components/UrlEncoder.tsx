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
      <h1>URL Encode</h1>
      <p>
        URL encoding, officially known as percent-encoding, is a method to
        encode arbitrary data in a uniform resource identifier (URI) using only
        the US-ASCII characters legal within a URI. It is also used in the
        preparation of data of the application/x-www-form-urlencoded media type,
        as is often used in the submission of HTML form data in HTTP requests.
      </p>
      <Input btnName="URL Encode" inputConsumer={inputConsumer} />
      <Result result={result} />
    </>
  );
};

export default UrlEncoder;
