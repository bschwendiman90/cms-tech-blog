
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

    const submitCommentButton = document.querySelectorAll('.submit-comment');

    submitCommentButton.forEach(button => {
        console.log(button);
        button.addEventListener('click', async function (event) {
            event.preventDefault();
            const postId = this.getAttribute('data-id');
            const text = document.querySelector(`#comment-${postId}`).value.trim();
            console.log(postId);
            console.log(text);
            if (text) {
                const response = await fetch('/api/comment', {
                    method: 'POST',
                    body: JSON.stringify({ postId, text }),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                if (response.ok) {
                    document.location.reload();
                } else {
                    alert('Failed to create comment');
                }
            }
        });
    });

    document.querySelectorAll('.see-comments').forEach(button => {
        button.addEventListener('click', function (event) {
            const postId = this.getAttribute('data-id');
            window.location.href = `/comment/${postId}`; // Redirect to the comment page with post ID
        });
    });
    
    
    // const seeCommentsButton = document.querySelectorAll('.see-comments');

    // seeCommentsButton.forEach(button => {
    //     console.log(button);
    //     button.addEventListener('click', async function (event) {
    //         event.preventDefault();
    //         const postId = this.getAttribute('data-id');
    //         console.log(postId);
    //         const response = await fetch(`/api/comment/${postId}`, {
    //             method: 'GET',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //         });
    //         if (response.ok) {
    //             response.render('comment', { comment
    //             });
    //         } else {
    //             alert('Failed to get comments');
    //         }
    //     });
    // });