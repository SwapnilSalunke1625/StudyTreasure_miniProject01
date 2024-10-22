  // Get all the links in the body
  const links = document.querySelectorAll('a');

  // Add event listeners to each link
  links.forEach(link => {
      link.addEventListener('click', function(event) {
          // Prevent the default behavior of the link
          event.preventDefault();

          // Get the href attribute of the clicked link
          const href = this.getAttribute('href');

          // Navigate to the specified page or section
          window.location.href = href;
      });
  });