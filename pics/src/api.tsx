import axios from "axios";

export type TermProps = string;

const searchImages = async (term: TermProps) => {
  const perpag = 30;
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID 8Qdvo9UdacqBUlwFiIxXrD-O0aWcnGFGWEL20kR2ts4",
    },
    params: {
      query: term,
      per_page: perpag,
    },
  });

  return response.data.results;
};

export default searchImages;
