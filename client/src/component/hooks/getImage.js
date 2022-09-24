import axios from "axios";
import React, { useEffect, useState } from "react";
// const randon = () => Math.round(Math.random() * (10 - 1) + 1);

const GetImage = () => {
  const [first, setfirst] = useState([]);
  
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
  const photos = async () => {
    const data = await axios.get(buildUrl(), {
      headers: {
        Authorization:
          "563492ad6f91700001000001fc7d03f8d9a349888e996a8ed2935c4d",
      },
    });
    console.log(data.data);
    setPageNumber(data.data.page);
    setfirst(data.data);
  };
  useEffect(() => {
    photos();
  }, []);
  return first;
};

export default GetImage;
