function tanggalAcara() {

  // Set the date we're counting down to
  const countDownDate = new Date("Aug 24, 2024 00:07:00").getTime();

  // Update the count down every 1 second
  const hitungMundur = setInterval(function() {

    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the count down date
    const distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      const hari = document.querySelector('.hari');
      const jam = document.querySelector('.jam');
      const menit = document.querySelector('.menit');
      const detik = document.querySelector('.detik');


      
    // Display the result in the element with id="demo"
      hari.innerHTML = days;
      jam.innerHTML = hours;
      menit.innerHTML = minutes;
      detik.innerHTML = seconds;


    // If the count down is finished, write some text
      if (distance < 0) {
          clearInterval(hitungMundur);
          const cd = document.querySelector('.countdown');
          cd.classList.add('bg')
          cd.innerHTML = "Terimakasih Sudah Berhadir";
      }
  }, 1000);
}

tanggalAcara();


function rubahMenu() {
  const listMenu = document.querySelectorAll('.listMenu');

  if (screen.width <= 900) {
    listMenu[0].innerHTML = '<i class="fa-solid fa-envelope-open-text"></i>'
    listMenu[1].innerHTML = '<i class="fa-solid fa-user-group"></i>'
    listMenu[2].innerHTML = '<i class="fa-solid fa-images"></i>'
    listMenu[3].innerHTML = '<i class="fa-solid fa-box"></i>'
    listMenu[4].innerHTML = '<i class="fa-solid fa-message"></i>'
  }

  
}

rubahMenu();