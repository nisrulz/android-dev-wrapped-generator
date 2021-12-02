new Vue({
    el: '#app',
    data: {
      executedCommands: "Invalidate Caches and Restart",
      forgotPermission: "19 times",
      daggerWars: "7 times",
      gradleBuildTime: "45 days",
      confusedWord: "Compose",
    },
    methods: {
      downloadImg: function (event) {
        html2canvas(document.getElementById("render"),
          {
            useCORS: true
          }
        ).then(function (canvas) {
          var link = document.createElement("a");
          document.body.appendChild(link);
          link.download = "androiddev_wrapped_2021.jpg";
          link.href = canvas.toDataURL();
          link.target = '_blank';
          link.click();
        });
      }
    }
  });  