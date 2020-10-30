(function ($, Drupal){
  Drupal.behaviors.bauhaus = {
    attach: function attach(context) {

      $(".arrow.left").click(function (){
        var leftPos = $('.item-list ul').scrollLeft();
        $(".item-list ul").animate({scrollLeft: leftPos - 300}, 300);

        if(leftPos <= 38) {
          $(this).addClass('hidden');
        } else {
          $(this).removeClass('hidden');
        }
      });

      $(".arrow.right").click(function (){
        var leftPos = $('.item-list ul').scrollLeft();
        $(".item-list ul").animate({scrollLeft: leftPos + 300}, 300);

        $(".arrow.left").removeClass('hidden');
      });
    }
  };
})(jQuery, Drupal);
