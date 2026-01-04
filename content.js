window.onload = function () {
    //get settings
    let hideThumbnails = false;
    let hideShorts = false;

    chrome.storage.local.get(["shorts", "thumbnails"]).then((data) => {
        //true if thumbnails should be hidden and false if thumbnails should be shown
        hideThumbnails = data.thumbnails; 
        //toggle for hiding shorts button
        hideShorts = data.shorts;

        
    });

    document.addEventListener('DOMContentLoaded', (event) => {
        //toggle thumbnails
        toggleThumbnails(hideThumbnails);
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
