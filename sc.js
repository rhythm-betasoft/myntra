$(document).ready(function () {
  $.get({
    url: "https://fakestoreapi.com/products",
    success: function(data) {
      console.log(data);
      let i = 0;

      while (i < 18) {
        const product = data[i];
        const card = `
          <div class="text-center mb-3 d-flex flex-column align-items-center p-2  rounded" style="width: 200px; height: 300px;">
            <img src="${product.image}" class="img-fluid z" style="max-width: 150px; height: 150px; object-fit: contain;" alt="">
            <p class="z fw-bold text-center overflow-hidden text-truncate w-100" style="max-height: 3em;">${product.title}</p>

            <button class="btn btn-sm add-to-cart-btn   fw-bold " style="background-color:pink" >Add to Cart</button>
          </div>
        `;
        $("#aq").append(card);
        i++;
      }
      $("#aq").addClass("d-flex flex-wrap justify-content-center gap-3 w-100");

 
      $(".z").css({
        position: "relative",
        left: "-300px", 
        display: "block"
      }).animate({
        left: "0px"
      }, 1500);
    }
  });
  let cartCount = 0;

$(document).on("click", ".add-to-cart-btn", function () {
  cartCount++;
  $("#cart-count").text(cartCount);
});
});
