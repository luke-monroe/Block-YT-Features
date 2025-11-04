window.onload = function () {
    // Get all thumbnail elements
    var thumbnails = getThumbnails();
    let hideThumbnails = false;
    //get settings
    chrome.storage.local.get(["shorts", "thumbnails"]).then((data) => {
        //true if thumbnails should be hidden and false if thumbnails should be shown
        hideThumbnails = data.thumbnails; 
        // initially hide thumbnails
        toggleThumbnails(thumbnails, hideThumbnails);
    });
    


    //get new thumbnails after scrolling
    document.addEventListener('wheel', function(event) {
        thumbnails = getThumbnails();
        toggleThumbnails(thumbnails, hideThumbnails);
    });

    function getThumbnails(){
        return document.querySelectorAll('#dismissible [id="thumbnail"]');
    }

    function toggleThumbnails(thumbnails, hide) {
        thumbnails.forEach(thumbnail => {
            thumbnail.style.display = hide ? 'none' : 'block';
        });
    }
}
