var Calculator = window.Katuma.Calculator = {};

var tierPrices = {
  1: '2€/mes',
  2: '15€/mes',
  3: '30€/mes',
  4: '50€ + 1% de vendes / mes',
};

Calculator.updatePrice = function (tier) {
  $('.k-pricing__calculator__value').text(tierPrices[tier]);
}

Calculator.updateActiveDot = function (tier) {
  $('.k-slider__dot').removeClass('k-slider__dot--active');
  $('.k-slider__dot[data-tier=' + tier + ']').addClass('k-slider__dot--active');
}

$(document).ready(function () {
  $('.k-slider__dot').click(function () {
    var selectedPricing = $(this).data('tier');

    Calculator.updatePrice(selectedPricing);
    Calculator.updateActiveDot(selectedPricing);
  });

  Calculator.updatePrice(1);
  Calculator.updateActiveDot(1);
});
