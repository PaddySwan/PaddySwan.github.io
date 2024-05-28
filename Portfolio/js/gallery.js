document.addEventListener('DOMContentLoaded', function () {
  var imageModal = document.getElementById('imageModal');
  var modalImage = document.getElementById('modalImage');

  imageModal.addEventListener('show.bs.modal', function (event) {
    var triggerElement = event.relatedTarget;
    var imageUrl = triggerElement.getAttribute('data-bs-image');
    modalImage.src = imageUrl;
  });
});
