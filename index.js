window.onload = function() {
  setTimeout(function() {
    document.getElementsByClassName("loading")[0].style.display = 'none';
    document.getElementsByClassName("page")[0].style.display = 'flex';
  }, 2000);
};
