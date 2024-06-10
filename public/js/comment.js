    // Get all post title links
    const postTitles = document.querySelectorAll('.post');
  
    postTitles.forEach(title => {
        console.log(title)
      title.addEventListener('click', function (event) {
        event.preventDefault();
        console.log('clicked');
        const postId = this.getAttribute('data-id');
        const form = document.querySelector(`.comment-form[data-id="${postId}"]`);
        
        if (form) {
          // Toggle form visibility
          if (form.style.display === 'none') {
            form.style.display = 'block';
          } else {
            form.style.display = 'none';
          }
        }
      });
    });