window.onload = function () {
    //get settings
    let hideThumbnails = false;

    chrome.storage.local.get(["thumbnails"]).then((data) => {
        //true if thumbnails should be hidden and false if thumbnails should be shown
        hideThumbnails = data.thumbnails; 
    });



    //get new thumbnails after scrolling
    document.addEventListener('wheel', function(event) {
        toggleThumbnails(hideThumbnails);
    });

    function getThumbnails(){
        return document.querySelectorAll('.ytThumbnailViewModelImage');
    }

    function toggleThumbnails(hide) {
        let thumbnails = getThumbnails()
        thumbnails.forEach(thumbnail => {
            thumbnail.style.display = hide ? 'none' : 'block';
        });
    }
}
