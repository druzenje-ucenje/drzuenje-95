document.addEventListener('DOMContentLoaded', function() {

    // add defult class to home page
    document.getElementById('home').classList.add('active');
    var homeContent = document.getElementById('home_content');
    var contactContent = document.getElementById('contact_content');
    var aboutContent = document.getElementById('about_content');

    document.getElementById('contact').onclick = function() {
        var content = document.getElementById('contact_content');
        homeContent.style.display = 'none';
        document.getElementById('home').classList.remove('active');
        aboutContent.style.display = 'none';
        document.getElementById('about').classList.remove('active');
        content.style.display = 'block';
        this.classList.add('active');
    }
    document.getElementById('home').onclick = function() {
        var content = document.getElementById('home_content');
        contactContent.style.display = 'none';
        document.getElementById('contact').classList.remove('active');
        aboutContent.style.display = 'none';
        document.getElementById('about').classList.remove('active');

        content.style.display = 'block';
        this.classList.add('active');
    }
    document.getElementById('about').onclick = function() {
        var content = document.getElementById('about_content');
        contactContent.style.display = 'none';
        document.getElementById('contact').classList.remove('active');
        homeContent.style.display = 'none';
        document.getElementById('home').classList.remove('active');;
        content.style.display = 'block';
        this.classList.add('active');
    }
});
