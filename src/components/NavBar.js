import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  let keyNum = 0;
  const linkA = links.map((linkName) => {
    keyNum++;
    return <a key={keyNum} href={`#${linkName}`}>{linkName}</a>
  });

  return <nav>{linkA}</nav>;
}

export default NavBar;
