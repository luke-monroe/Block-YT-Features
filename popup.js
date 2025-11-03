// JS Functionality here

// Storage
const settings = {};
const settingsForm = document.getElementById("settingsForm");
const shortsBox = document.getElementById("shorts")
const thumbnailsBox = document.getElementById("thumbnails")
// Store checkbox values
settingsForm.addEventListener("change", (event) => {
  shorts = shortsBox.checked;
  thumbnails = thumbnailsBox.checked;
  chrome.storage.local.set({"shorts":shorts, "thumbnails": thumbnails});
}); 
// Load settings from storage
chrome.storage.local.get(["shorts", "thumbnails"]).then((data) => {
  // console.log("shorts " + result.shorts);
  shortsBox.checked = data.shorts
  thumbnailsBox.checked = data.thumbnails
});
