import axios from "axios";
import { useEffect, useState } from "react";
// import getImage from "./hooks/getImage";
const Home = () => {
  // const first = getImage();
  const [first, setFirst] = useState({});
  const [pageNumber, setPageNumber] = useState(1);

  const buildUrl = () => {
    let url = new URL("https://api.pexels.com/v1/search");

    url.search = new URLSearchParams({
      query: "nature",
      orientation: "squre",
      size: "small",
      per_page: 4,
      page: pageNumber,
    });
    return url;
  };

  const getPixelImage = async () => {
    const data = await axios.get(buildUrl(), {
      headers: {
        Authorization:
          "563492ad6f91700001000001fc7d03f8d9a349888e996a8ed2935c4d",
      },
    });
    console.log(data.data);
    setPageNumber(data.data.page);
    setFirst(data.data);
  };

  useEffect(() => {
    getPixelImage();
  }, [pageNumber]);

  console.log("xdgdxgb", pageNumber === 1);

  return (
    <div>
      {first?.photos?.map((x, id) => {
        return (
          <div key={id} className="flex justify-center items-center h-screen">
            <img src={x.src.large} alt="" />
            {/* <div>{x.}</div> */}
          </div>
        );
      })}
      <div className="flex justify-center items-center space-x-10 p-10">
        <button
          disabled={pageNumber === 1}
          className="bg-blue-500  text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            setPageNumber((prev) => prev - 1);
            window.scrollTo(0, 0);
          }}
        >
          Previous
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            setPageNumber((prev) => prev + 1);
            window.scrollTo(0, 0);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;
