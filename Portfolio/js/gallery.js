// JavaScript for Modal Functionality
document.addEventListener("DOMContentLoaded", function () {
  const modalImage = document.getElementById('modalImage');

  // Select all images with class "modal-trigger"
  const modalTriggerElements = document.querySelectorAll('.modal-trigger');

  // Add click event listener to each image
  modalTriggerElements.forEach(function (element) {
    element.addEventListener('click', function () {
      // Set the src attribute of the modal image to the src of the clicked image
      modalImage.src = element.src;
      // Show the modal
      var modal = new bootstrap.Modal(document.getElementById('imageModal'));
      modal.show();
    });
  });
});
