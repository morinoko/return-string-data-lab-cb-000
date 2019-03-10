$(function () {
  $(".js-more").on('click', getProductInfo);

  function getProductInfo() {
    let $product = $(this);
    let id = $product.data("id");

    displayDescription(id);
    displayInventory(id);
  }

  function displayDescription(id) {
    $.get("/products/" + id + "/description", function(description) {
      $("#product-" + id).html("<p>" + description + "</p>");
    });
  }

  function displayInventory(id) {
    $.get("/products/" + id + "/inventory", function(inventory) {
      let availibility = inventory === "true" ? "Available" : "Sold Out";
      $("#product-" + id).append("<p><strong>" + availibility + "</strong></p>");
    });
  }
});
