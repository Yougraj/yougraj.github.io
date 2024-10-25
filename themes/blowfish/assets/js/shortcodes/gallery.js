// function _getDefaultPackeryOptions() {
//     return {
//         percentPosition: true,
//         gutter: 5,
//         resize: true
//     };
// }
//
// (function init() {
//
//     $(window).on("load", function () {
//         let packeries = [];
//         let nodeGalleries = document.querySelectorAll('.gallery');
//
//         nodeGalleries.forEach(nodeGallery => {
//             // TODO : implement a reader of Packery configuration _getPackeryOptions; for example by reading data-attribute
//             let packery = new Packery(nodeGallery, _getDefaultPackeryOptions());
//             packeries.push(packery);
//         });
//         console.groupEnd();
//     });
// })();
//
//

function _getDefaultPackeryOptions() {
  return {
    percentPosition: true,
    gutter: 5,
    resize: true,
  };
}

(function init() {
  $(window).on("load", function () {
    let packeries = [];
    let nodeGalleries = document.querySelectorAll(".gallery");

    nodeGalleries.forEach((nodeGallery) => {
      // Initialize Packery with default options
      let packery = new Packery(nodeGallery, _getDefaultPackeryOptions());
      packeries.push(packery);

      // Find each image within the gallery
      nodeGallery.querySelectorAll("img").forEach((img) => {
        // Create a download button
        let downloadButton = document.createElement("button");
        downloadButton.className = "download-btn";
        downloadButton.innerText = "Download";

        // Set up the button to download the image on click
        downloadButton.addEventListener("click", () => {
          let link = document.createElement("a");
          link.href = img.src; // Use the image's source as the link
          link.download = img.src.split("/").pop(); // Set the filename for download
          link.click(); // Programmatically trigger the download
        });

        // Add the download button after the image
        img.after(downloadButton);
      });
    });
    console.groupEnd();
  });
})();

