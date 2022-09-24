let mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "var(--main-bg)";
mainEl.innerHTML = "<h1>SEI Rocks!</h1>";
mainEl.classList.add("flex-ctr");

let topMenuEl = document.getElementById("top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");

const menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];

menuLinks.forEach(function (navLink) {
  let newLink = document.createElement("a");
  newLink.innerHTML = navLink.text;
  newLink.setAttribute("href", navLink.href);
  topMenuEl.append(newLink);
});

let subMenuEl = document.getElementById("sub-menu");
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.classList.add("flex-around");
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";

let showingSubMenu = false;
let topMenuLinks = topMenuEl.querySelectorAll("#top-menu a");

topMenuEl.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.tagName !== "A") {
    return;
  } else {
    // console.log(e.target.textContent);
    if (e.target.classList.contains("active")) {
      e.target.classList.remove("active");
      showingSubMenu = false;
      subMenuEl.style.top = "0";
      return;
    }

    mainEl.innerHTML = `<h1>${e.target.innerText}</h1>`;

    topMenuLinks.forEach((link) => {
      link.classList.remove("active");
    });

    e.target.classList.add("active");
    console.log(topMenuLinks);
  }
  // Task 5.6
  let linkData = menuLinks.find(function (linkObject) {
    return linkObject.text === e.target.textContent;
  });
  showingSubMenu = "subLinks" in linkData;

  if (showingSubMenu) {
    buildSubMenu(linkData.subLinks);
    subMenuEl.style.top = "100%";
  } else {
    subMenuEl.style.top = 0;
  }
});
// Task 5.8
let buildSubMenu = function (subLinks) {
  subMenuEl.innerHTML = "";
  subLinks.forEach(function (link) {
    let newElement = document.createElement("a");
    newElement.setAttribute("href", link.href);
    newElement.innerHTML = link.text;
    subMenuEl.append(newElement);
  });
};
// Task 6.0
subMenuEl.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.tagName !== "A") {
    return;
  } else {
    console.log(e.target.innerHTML);
  }
  showingSubMenu = false;
  subMenuEl.style.top = 0;
  topMenuLinks.forEach((link) => {
    link.classList.remove("active");
  });
  mainEl.innerHTML = `<h1>${e.target.innerHTML}</h1>`;
});
