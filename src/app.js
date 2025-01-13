/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let extension = [".com", ".es"];

  for (let i = 0; i < pronoun.length; i++) {
    for (let t = 0; t < adj.length; t++) {
      for (let e = 0; e < noun.length; e++) {
        for (let s = 0; e < extension.length; s++) {
          console.log(pronoun[i] + adj[t] + noun[e] + extension[s]);
        }
      }
    }
  }
};
