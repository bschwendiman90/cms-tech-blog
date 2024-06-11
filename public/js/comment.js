    // Get all post title links
    const postTitle = document.querySelectorAll('.post');
  
    postTitle.forEach(title => {
        console.log(title)
      title.addEventListener('click', function (event) {
        event.preventDefault();
        console.log('clicked');
        const postId = this.getAttribute('data-id');
        const form = document.querySelector(`.update-form[data-id="${postId}"]`);
        
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

    const updateButton = document.querySelector('.update-button');

    updateButton.addEventListener('click', async function (event) {

        event.preventDefault();

        const postId = this.getAttribute('data-id');
        const updatedContent = document.querySelector(`#update-${postId}`).value;
    

        const data = {
            content: updatedContent
        };

        try {
            const response = await fetch(`/api/dashboard/${postId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                console.log('Post updated');
            window.location.reload();
            }
            else {
                console.error('Failed to update post');
            }
            }
                catch (error) {
                    console.error('Error:', error);
                }
            });

    const deleteButton = document.querySelector('.delete-button');

    deleteButton.addEventListener('click', async function(event) {
        event.preventDefault();
      
        const postId = this.getAttribute('data-id');
      
        try {
          const response = await fetch(`/api/dashboard/${postId}`, {
            method: 'DELETE',
          });
      
          if (response.ok) {
            console.log('Post deleted');
            window.location.href = '/';
          } else {
            console.error('Failed to delete post');
          }
        } catch (error) {
          console.error('Error:', error);
        }
      });