// function _getDefaultPackeryOptions() {
//   return {
//     percentPosition: true,
//     gutter: 5,
//     resize: true,
//   };
// }
//
// (function init() {
//   $(window).on("load", function () {
//     let packeries = [];
//     let nodeGalleries = document.querySelectorAll(".gallery");
//
//     nodeGalleries.forEach((nodeGallery) => {
//       // TODO : implement a reader of Packery configuration _getPackeryOptions; for example by reading data-attribute
//       let packery = new Packery(nodeGallery, _getDefaultPackeryOptions());
//       packeries.push(packery);
//     });
//     console.groupEnd();
//   });
// })();
//
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
      // Initialize Packery
      let packery = new Packery(nodeGallery, _getDefaultPackeryOptions());
      packeries.push(packery);

      // Add download functionality to each button
      nodeGallery.querySelectorAll(".gallery-item").forEach((item) => {
        const img = item.querySelector("img");
        const downloadButton = item.querySelector(".download-btn");

        // Set up the button to download the image on click
        downloadButton.addEventListener("click", () => {
          let link = document.createElement("a");
          link.href = img.src; // Use the image's source as the link
          link.download = img.src.split("/").pop(); // Set the filename for download
          link.click(); // Programmatically trigger the download
        });
      });
    });
    console.groupEnd();
  });
})();
