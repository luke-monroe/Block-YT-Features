window.onload = function () {
    //get settings
    let hideThumbnails = false;

    chrome.storage.local.get(["thumbnails"]).then((data) => {
        //true if thumbnails should be hidden and false if thumbnails should be shown
        hideThumbnails = data.thumbnails; 

        //start timer to run until thumbnails are loaded initially
        loadTimer = setInterval(function(){
            if(getThumbnails().length > 0){
                toggleThumbnails(hideThumbnails);
                clearTimeout(loadTimer);
            }
        }, 200); //check every 200ms
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
