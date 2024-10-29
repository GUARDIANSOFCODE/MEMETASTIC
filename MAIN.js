// Select elements from the DOM
const generateMemeButton = document.querySelector(".meme-gen .gen-meme-btn");
const memeImage = document.querySelector(".meme-gen img");
const memeTitle = document.querySelector(".meme-gen .meme-title");
const memeAuthor = document.querySelector(".meme-gen .meme-author");

// Function to update meme details in the DOM
const updateMemeDetails = (url, title, author) => {
  memeImage.setAttribute("src", url);
  memeTitle.innerHTML = title;
  memeAuthor.innerHTML = `Meme by: ${author}`;
};

// Function to generate a new meme
const generateMeme = async () => {
  try {
    const response = await fetch("https://meme-api.com/gimme/wholesomememes");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    updateMemeDetails(data.url, data.title, data.author);
  } catch (error) {
    console.error("Error fetching meme data:", error);
    memeTitle.innerHTML = "Failed to load meme. Please try again.";
    memeAuthor.innerHTML = "";
    memeImage.setAttribute("src", ""); // Clear the image if there's an error
  }
};

// Add event listener to the generate meme button
generateMemeButton.addEventListener("click", generateMeme);

// Generate a meme on page load
generateMeme();
