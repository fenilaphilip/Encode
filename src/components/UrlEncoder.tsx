import { useState, useEffect } from "react";
import Input from "./UI/Input.tsx";
import Result from "./UI/Result.tsx";
import History from "./UI/History.tsx";

const UrlEncoder: React.FC = () => {
  const [userUrlEncoded, setUserUrlEncoded] = useState<string[]>([]);
  const [result, setResult] = useState("");
  const [historyView, setHistoryView] = useState(false);

  useEffect(() => {
    localStorage.setItem(
      "previousUserUrlEncoded",
      JSON.stringify(userUrlEncoded)
    );
  }, [userUrlEncoded]);

  const inputConsumer = (input: string) => {
    setResult(encodeURIComponent(input));
    setUserUrlEncoded((prevUrlEncode) => {
      return [...prevUrlEncode, input];
    });
  };

  const handleViewButtonClick = () => {
    console.log("I got clicked.");
    setHistoryView((prev) => !prev);
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
          <div className="text-center font-bold text-xl">
            <Result result={result} />
          </div>
        </div>
        <button
          type="button"
          onClick={handleViewButtonClick}
          className="text-white bg-gray-800 hover:bg-gray-400 hover:text-black focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          {historyView ? "Hide " : "View "} Old Encoded Texts
        </button>
        {historyView && <History history={userUrlEncoded} />}
        <div className="bg-blue-300 container rounded-lg p-4 border-solid border-4 border-cyan-700 lg:w-9/12 sm:w-full ">
          <h2 className="text-lg text-cyan-700">What is Url Encoding?</h2>
          <p>
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
