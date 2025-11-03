// JS Functionality here

// Storage
const settings = {};
const settingsForm = document.getElementById("settingsForm");
const shortsBox = document.getElementById("shorts")
const thumbnailsBox = document.getElementById("thumbnails")
// Store checkbox values
settingsForm.addEventListener("change", (event) => {
  settings.shorts = shortsBox.checked;
  settings.thumbnails = thumbnailsBox.checked;
  chrome.storage.local.set({settings});
  console.log("Settings: ", settings)
}); 