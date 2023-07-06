// We make a funtion thats return a funtion which contain an image to load it.
// This funtion called EventListener so, Let's start.
function LoadPic(url){
    return new Promise((reject, resolved) => {

        const Picture = new Pic();

        Picture.addEventListener('load', () => resolved(Picture));

        Picture.addEventListener('error', () => {

            reject(new Error(`Failed to load ${url}`)) // Reject state execute from the
                                                   // given condition and generate error.
        });
        // This is source of image to sent by unique URL.
        Picture.src = url;
    })
};
(async() =>{
    try{
        let image = await LoadPic('https://www.github.com');
        document.getElementById('nothing').appendChild(image)
    }
    catch(error){
        console.error(error);
    }
})
     // This is an empty promise
();
