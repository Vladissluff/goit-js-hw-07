const listItems = document.querySelectorAll("#categories .item");
console.log("Number of categories:", listItems.length);
listItems.forEach(item => {
  const categoryTitle = item.querySelector("h2");
  const categoryItems = item.querySelectorAll("li");
  console.log("Category:", categoryTitle.textContent);
  console.log("Elements:", categoryItems.length);
});