document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // e.preventDefault();

            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);

            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });

                // const adjustScroll = () => {
                //     window.scrollBy(0, -100); // Adjust this value based on your navbar height
                // };

                // requestAnimationFrame(() => {
                //     setTimeout(adjustScroll, 250); // Adjust the timeout value if necessary
                // });

                setTimeout(() => {
                    window.scrollBy(0, -100); // Adjust this value based on your navbar height
                }, 500);
            } else {
                console.warn(`Element with id ${targetId} not found.`);
            }
        });
    });
});