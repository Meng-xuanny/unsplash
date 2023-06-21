import { useQuery } from "@tanstack/react-query";
import React from "react";
import axios from "axios";
import { useGlobalContext } from "../context";

const url = `https://api.unsplash.com/search/photos?page=2&client_id=${
  import.meta.env.VITE_API_KEY
}`;

const Gallery = () => {
  const { searchTerm } = useGlobalContext();

  const result = useQuery({
    queryKey: ["images", searchTerm],
    queryFn: async () => {
      const { data } = await axios(`${url}&query=${searchTerm}`);
      return data;
    },
  });
  // console.log(result);
  if (result.isError)
    return (
      <section className="image-container">
        <h4>There was an error...</h4>
      </section>
    );

  if (result.isLoading)
    return (
      <section className="image-container">
        <h4>Loading...</h4>
      </section>
    );

  if (result.data.results.length < 1)
    return (
      <section className="image-container">
        <h4>No image found</h4>
      </section>
    );

  return (
    <section className="image-container">
      {result.data.results.map((item) => {
        const url = item?.urls?.regular;
        return (
          <img
            src={url}
            alt={item.alt_description}
            key={item.id}
            className="img"
          />
        );
      })}
    </section>
  );
};

export default Gallery;
