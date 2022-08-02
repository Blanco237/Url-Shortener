import { useCallback } from "react";
import { useState, createContext } from "react";

export const LinkContext = createContext();

const LinkProvider = ({ children }) => {
  const [link, setLink] = useState([]);

  const fetchLinks = useCallback(() => {
    let links = JSON.parse(localStorage.getItem("links"));
    if (links) {
      setLink(links);
    }
  });

  const addLink = (link) => {
    let links = JSON.parse(localStorage.getItem("links"));
    if (links) {
      links.push(link);
      localStorage.setItem("links", JSON.stringify(links));
      fetchLinks();
    } else {
      localStorage.setItem("links", JSON.stringify([link]));
      fetchLinks();
    }
  };

  return (
    <LinkContext.Provider value={{ link, fetchLinks, addLink }}>
      {children}
    </LinkContext.Provider>
  );
};

export default LinkProvider;
