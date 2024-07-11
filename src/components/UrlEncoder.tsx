import { useState, useEffect } from "react";
import Input from "./UI/Input.tsx";
import Result from "./UI/Result.tsx";
import History from "./UI/History.tsx";
import InfoBox from "./UI/InfoBox.tsx";

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
    <div className="mx-auto max-w-7xl px-2 py-4 sm:px-6 lg:px-8 bg-slate-200">
      <h1 className="flex justify-center text-xl">URL Encode</h1>
      <div className="container py-4 lg:w-8/12 sm:w-full ">
        <Input btnName="Convert to URL Encode" inputConsumer={inputConsumer} />
        {result && <Result result={result} />}

        <InfoBox heading="What is Url Encoding?">
          URL encoding, officially known as percent-encoding, is a method to
          encode arbitrary data in a uniform resource identifier (URI) using
          only the US-ASCII characters legal within a URI. It is also used in
          the preparation of data of the application/x-www-form-urlencoded media
          type, as is often used in the submission of HTML form data in HTTP
          requests.
        </InfoBox>
      </div>
      <button
        type="button"
        onClick={handleViewButtonClick}
        className="text-white bg-gray-800 hover:bg-gray-400 hover:text-black focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
      >
        {historyView ? "Hide " : "View "} Old Encoded Texts
      </button>
      {historyView && <History history={userUrlEncoded} />}
    </div>
  );
};

export default UrlEncoder;
