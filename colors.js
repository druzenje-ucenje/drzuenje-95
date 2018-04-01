document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.color-change').forEach(button => {
        button.onclick = function() {
            var heading = document.querySelector("#hello");
            heading.style.color = button.dataset.color;
            button.style.background = button.dataset.color;
        };
    });
});
