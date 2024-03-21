//dark mode button for each page
document.getElementById('toggle').addEventListener('click', function(){
    document.body.style.backgroundColor = 'lightgrey';
    document.querySelector('header').style.backgroundColor = 'lightgrey';
    document.querySelector('nav').style.backgroundColor = 'lightgrey';
    document.querySelector('footer').style.backgroundColor = 'white';
    document.querySelector('button').style.backgroundColor = 'lightgrey';
    document.querySelector('button').style.backgroundColor = 'white';

    var texts = document.getElementsByClassName('text');
    for (var i = 0; i < texts.length; i++) {
      texts[i].style.backgroundColor = 'white';
    }
});