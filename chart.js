$(document).ready(function () {
  $.getJSON("./data.json", function (data) {
    createChart(data);
  });

  function createChart(data) {
    const today = new Date().getDay() - 1;

    const bars = $(".bar");
    const amounts = $(".bar-label");

    bars.each(function (index, bar) {
      $(bar).height(data[index].amount * 2 + "px");

      if (index === today) {
        $(bar).css("background-color", "hsl(186, 34%, 60%)");
      } else {
        $(bar).css("background-color", "hsl(10, 79%, 65%)");
      }

      $(amounts[index]).css("visibility", "hidden");

      $(bar).on("mouseenter", function () {
        $(this).prev().text("$" + data[index].amount.toFixed(2)).css("visibility", "visible");
      });

      $(bar).on("mouseleave", function () {
        $(amounts[index]).css("visibility", "hidden");
      });
    });
  }
});