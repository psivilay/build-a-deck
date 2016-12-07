$(document).ready(function() {
  $("form#user-input").submit(function(event) {
    event.preventDefault();
    var sentence = $("#sentence").val();

    var sentenceArrays = sentence.split([" "]);
    var newArrays = [];

    sentenceArrays.map(function(sentenceElement) {
      if (sentenceElement.length >= 3) {
        return newArrays.push(sentenceElement);
      } else {

      }
    });

    $("#result .sentence").text(newArrays.reverse().join(" "));

    $("#result").show();

  });
});
