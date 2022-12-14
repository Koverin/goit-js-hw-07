import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const options = {
  /*
   * Prevents the lightbox from closing when clicking its background.
   */
  closable: true,
  /*
   * One or more space separated classes to be added to the basicLightbox element.
   */
  className: "",
  /*
   * Function that gets executed before the lightbox will be shown.
   * Returning false will prevent the lightbox from showing.
   */
  onShow: (instance) => {
    console.log("что это");
  },

  /*
   * Function that gets executed before the lightbox closes.
   * Returning false will prevent the lightbox from closing.
   */
  onClose: (instance) => {
    console.log("это то");
  },
};

console.log(basicLightbox);
const instance = basicLightbox.create(
  `<img src = "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg" alt = "Aerial Beach View">`,
  options
);

instance.show();
