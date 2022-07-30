// Colors variables
const mainColor = "#fff";
const grayColor = "#eae9ea";
const greenColor = "#17956b";

window.onload = function () {
  const domLinks = document.links
  const li = document.getElementsByTagName("li");
  
  for (let i = 0; i < domLinks.length; i += 1) {
    domLinks[i].style.textDecoration = "none";
  }
  
  for (let i = 0; i < li.length; i += 1) {
    li[i].style.listStyleType = "none"
  }
}

// Header
const header = document.createElement("header");
header.className = "header";

// Logo
const logo = document.createElement("h2");
const logoText = document.createTextNode("Elzero");
logo.append(logoText);

// Navbar
const navLinks = document.createElement("nav");
const ul = document.createElement("ul");
const linksName = ["Home", "About", "Services", "Contact"];

// Links
for (let i = 0; i < linksName.length; i += 1) {
  const li = document.createElement("li");
  const link = document.createElement("a");
  link.style.color = "gray";
  const linkText = document.createTextNode(linksName[i]);
  link.append(linkText);
  link.href = "#";
  li.append(link);
  ul.append(li);
}

navLinks.appendChild(ul);

header.append(logo);
header.append(navLinks);

document.body.lastElementChild.before(header);

const contentSection = document.createElement("section");
contentSection.className = "content";

for (let i = 0; i < 15; i += 1) {
  const card = document.createElement("div");
  card.style.cssText = `
    display: grid;
    place-content: center;
    text-align: center;
    padding: 20px;
    background-color: ${mainColor}
  `;
  const number = document.createElement("span");
  number.style.fontSize = "30px";
  const name = document.createElement("span");
  name.style.fontSize = "20px";
  const productWord = document.createTextNode("Product");
  number.className = "number";
  name.className = "name";
  name.append(productWord);
  number.append(i + 1);
  card.append(number);
  card.append(name);
  card.className = "card";
  contentSection.append(card);
}

const footer = document.createElement("footer");
footer.className = "footer";
const footerText = "Copyright all right reserved";
footer.append(footerText);
footer.style.cssText = `
  font-size: 18px;
  text-align: center;
  padding: 20px;
  background-color: ${greenColor}
`;

document.body.firstElementChild.after(contentSection);
document.body.lastElementChild.before(footer);

document.body.style.cssText = `
  margin: 0px;
  padding: 0px;
  height: 100vh;
`;

header.style.cssText = `
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

logo.style.cssText = `
  color: ${greenColor};
  font-size: 30px;
  margin: 0px;
`;

ul.style.cssText = `
  display: flex;
  align-items: center;
  gap: 20px;
`;

contentSection.style.cssText = `
  height: calc(100vh - 180px);
  max-width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 20px;
  padding: 20px;
  background-color: ${grayColor};
`;
