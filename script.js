document.addEventListener("DOMContentLoaded", function () {

    // submit feedback response
    const feedbackForm = document.getElementById('feedbackForm');
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', function (event) {
            event.preventDefault(); 
            alert("Thank you for your feedback!");
            feedbackForm.reset();   
        });
    }

    // gift voucher page purchase response
    const purchaseBtns = document.querySelectorAll('.purchase-btn');
    purchaseBtns.forEach(function(btn) {
        btn.addEventListener('click', function () {
            alert("Thank you for your purchase!");
        });
    });

});