// create image node
const imageNode = document.createElement("img");
// task 2 add src using setAttribute
// imageNode.src="images/1.jpg"
imageNode.setAttribute("src", "images/1.jpg");
imageNode.style.width = "100%";
imageNode.id = "image1";

const imageContainer = document.querySelector(".imageContainer");
const altText = document.getElementById("altText");
// difference between appendChild and insertBefore
// insertBefore requires 2 parameters: what to add, and before what you want to add it.
// imageContainer.appendChild(imageNode);
// imageContainer.parent which is mainContainer
const parentImg = imageContainer.parentNode;
parentImg.insertBefore(imageNode, altText);

// // number of childnode display the number of elements, text, break line
const count = document.getElementById("main").childNodes.length;
console.log("count", count);

// remove child
const mainContainer = document.getElementById("main");
const removedChild = mainContainer.removeChild(
  document.getElementById("image1")
);
console.log("removedChild", removedChild);
