document.addEventListener('DOMContentLoaded', function() {

    document.getElementById('home').classList.add('active');

    document.getElementById('contact').onclick = function() {
        var content = document.getElementById('contact_content');
        document.getElementById('home_content').style.display = 'none';
        document.getElementById('home').classList.remove('active');
        document.getElementById('about_content').style.display = 'none';
        document.getElementById('about').classList.remove('active');
        content.style.display = 'block';
        this.classList.add('active');
    }
    document.getElementById('home').onclick = function() {
        var content = document.getElementById('home_content');
        document.getElementById('contact_content').style.display = 'none';
        document.getElementById('contact').classList.remove('active');
        document.getElementById('about_content').style.display = 'none';
        document.getElementById('about').classList.remove('active');

        content.style.display = 'block';
        this.classList.add('active');
    }
    document.getElementById('about').onclick = function() {
        var content = document.getElementById('about_content');
        document.getElementById('contact_content').style.display = 'none';
        document.getElementById('contact').classList.remove('active');
        document.getElementById('home_content').style.display = 'none';
        document.getElementById('home').classList.remove('active');;
        content.style.display = 'block';
        this.classList.add('active');
    }
});
