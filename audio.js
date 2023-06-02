
    // Menyimpan posisi audio saat berpindah halaman
    window.onbeforeunload = function() {
      var audio = document.getElementById("background-music");
      sessionStorage.setItem("audioPosition", audio.currentTime);
    };
    
    // Memutar audio dari posisi terakhir saat halaman dimuat
    window.onload = function() {
      var audio = document.getElementById("background-music");
      var savedPosition = sessionStorage.getItem("audioPosition");
      if (savedPosition) {
        audio.currentTime = savedPosition;
      }
      audio.play();
    };