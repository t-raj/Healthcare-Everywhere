
//dignostic code

$(document).ready(function ($, window, document, undefined) {

  var matcherPlugin = "symptomMatcher",
    defaults = {
      plugin_ver: "v0.1",
      disease_element: '.disease',
      disease_data_cat: 'category',
      sortContainer: '#diseases'
    };

  function Plugin (element, options) {
    this.element = element;
    this.settings = $.extend({}, defaults, options);
    this._defaults = defaults;
    this._name = matcherPlugin;
    this.init();
  }
  
  var globalSymptomsList = [];

  $.extend(Plugin.prototype, {
    init: function () {
      if ($(this.element).attr('data-symptom'))
        this.settings.symptom = $(this.element).data('symptom');
      var that = this;
      $(this.element).click(function() {
        that.match(this.element, this.settings)
      });
    },
    match: function () {
      var that = this;
      var symptom = this.settings.symptom;
      var checked = $(this.element).is(':checked');
      checked ? globalSymptomsList.push(symptom) : (globalSymptomsList = jQuery.grep(globalSymptomsList, function(value) {
        return value != symptom;
      }));
      var diseases = $(this.settings.disease_element);
      diseases.each(function() {
        var symptoms = $(this).data(that.settings.disease_data_cat).split(' ');
        $(this).data('disease-count', $.grep(globalSymptomsList, function(v,i) {
          return $.inArray(v, symptoms) !== -1;
        }).length);
      });
      diseases.sort(function(a, b){ // I think jQuery.sort is O(n log n)
        return $(b).data("disease-count") - $(a).data("disease-count");
      });
      $(this.settings.sortContainer).html(diseases);
    }
  });

  $.fn[matcherPlugin] = function (options) {
    this.each(function() {
      if (!$.data(this, "plugin_" + matcherPlugin)) {
        $.data(this, "plugin_" + matcherPlugin, new Plugin(this, options));
      }
    });
    this.pop();
    return this;
  };

})//(jQuery, window, document);

// treatment and inofrmation popup box 
var pop = $(document).ready(function(){
  $(document).on("click", "#Malaria", function(){
    $("#d1").slideToggle();
  });

   $(document).on("click", "#d1", function(){
    $("#d1").slideToggle();
  });
     $(document).on("click", "#Typhoid", function(){
    $("#d2").slideToggle();
  });

   $(document).on("click", "#d2", function(){
    $("#d2").slideToggle();
  });
     $(document).on("click", "#Hepatitis", function(){
    $("#d3").slideToggle();
  });

   $(document).on("click", "#d3", function(){
    $("#d3").slideToggle();
  });
     $(document).on("click", "#Dengue", function(){
    $("#d4").slideToggle();
  });

   $(document).on("click", "#d4", function(){
    $("#d4").slideToggle();
  });
     $(document).on("click", "#Rabies", function(){
    $("#d5").slideToggle();
  });

   $(document).on("click", "#d5", function(){
    $("#d5").slideToggle();
  });
     $(document).on("click", "#Dysentery", function(){
    $("#d6").slideToggle();
  });

   $(document).on("click", "#d6", function(){
    $("#d6").slideToggle();
  });
   });

  












 