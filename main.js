window.onload = function() {
  setTimeout(function() {
    hideLoader();
    addContent();
  }, 5000);
}

function hideLoader() {
  document.getElementById('preload').style.display = "none";
}
function addContent() {
  fetch('prices.json')
  .then(response => response.json())
  .then(items => {
    // Select a random item from the list
    const randomIndex = Math.floor(Math.random() * items.length);
    const item = items[randomIndex];

    // Extract the image URL and price for the item
    const title = item['Title'];
    const imageUrl = item['Image'];
    const price = 'Price: ' + item['Price'];
    const idVal = 'Item ID: ' + item['nlproduct__code'];

    // Create HTML elements for the image and price
    const name = document.createElement('h2');
    name.textContent = title;
    const image = document.createElement('img');
    image.src = imageUrl;
    const priceElement = document.createElement('h3');
    priceElement.textContent = price;
    const id = document.createElement('h3');
    id.textContent = idVal;

    // Add the HTML elements to the DOM
    const container = document.createElement('div');
    container.appendChild(name);
    container.appendChild(image);
    container.appendChild(priceElement);
    container.appendChild(id);
    document.body.appendChild(container);
  })
  .catch(error => {
    console.log('Error loading image data: ' + error);
  });

}
