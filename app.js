// Delgetstei ajillah controller
var uiController = (function () {
  
})
// Sanhuutei ajillah controller
var financeController = (function() {})();

// Programm holbogch controller
var appController = (function(uiController, financeController) {
    document.querySelector(".add__btn").addEventListener("click", function() {
    // 1. Oruulah ogogdliig delgetsnees olj avna.
    // 2. Olj avsan ogogdluudee sanhuugiin contollert damjuulj tend hadgalns.
    // 3. Olj avsan ogogdluudee web deer tohiroh hesegt gargana.
    // 4. Tosoviig tootsoolno.
    // 5. Etsesiin uldegdel, tootsoog delgetsend gargana.
    })

  document.addEventListener("keypress", function(event) {
    if (event.keyCode === 13 || event.which === 13) {
      ctrlAddItem();
    }
  });
})(uiController, financeController);