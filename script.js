const audioclass = document.querySelectorAll(".audio");
const audiotest = document.querySelectorAll(".audiotest");

audioclass.forEach(element => {
  element.addEventListener('click', function() {
        audioclass.forEach(function (el, index) {
        el.classList.remove('active');
        audiotest[index].pause();
        audiotest[index].currentTime = 0;  
        });
        element.classList.add('active');
        

// Get all the elements with the "active" class
    const activeElements = document.querySelectorAll('.active');

// Loop through each active element and get its associated audio element
    activeElements.forEach(activeElement => {
    const audio = activeElement.querySelector('audio');
    audio.play();

    });
    
  });
});
