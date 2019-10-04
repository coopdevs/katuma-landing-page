var Calculator = window.Katuma.Calculator = {};

var tierPrices = function () {
  return {
    1: i18n.t('pricing:prices.tier_1'),
    2: i18n.t('pricing:prices.tier_2'),
    3: i18n.t('pricing:prices.tier_3'),
    4: i18n.t('pricing:prices.tier_4')
  };
};

var groupTierDescriptions = function () {
  return {
    1: i18n.t('pricing:groups.description_1'),
    2: i18n.t('pricing:groups.description_2'),
    3: i18n.t('pricing:groups.description_3'),
    4: i18n.t('pricing:groups.description_4')
  };
};

var producerTierDescriptions =  function () {
  return {
    1: i18n.t('pricing:producers.description_1'),
    2: i18n.t('pricing:producers.description_2'),
    3: i18n.t('pricing:producers.description_3'),
    4: i18n.t('pricing:producers.description_4')
  };
};

Calculator._updatePrice = function (tier) {
  $('.k-pricing__calculator__value').text(tierPrices()[tier]);
}

Calculator._updateDescription = function (tier, descriptions) {
  $('.k-pricing__calculator__description').text(descriptions()[tier]);
}

Calculator._updateActiveDot = function (tier) {
  $('.k-slider__dot').removeClass('k-slider__dot--active');
  $('.k-slider__dot[data-tier=' + tier + ']').addClass('k-slider__dot--active');
}

Calculator.update = function (tier, descriptions) {
  Calculator._updatePrice(tier);
  Calculator._updateActiveDot(tier);
  Calculator._updateDescription(tier, descriptions);
}

$(document).ready(function () {
  $('.js-groups-slider .k-slider__dot').click(function () {
    var selectedPricing = $(this).data('tier');

    Calculator.update(selectedPricing, groupTierDescriptions);
  });

  $('.js-producers-slider .k-slider__dot').click(function () {
    var selectedPricing = $(this).data('tier');

    Calculator.update(selectedPricing, producerTierDescriptions);
  });
});
