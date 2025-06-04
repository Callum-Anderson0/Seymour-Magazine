 const form = document.getElementById('newsletter-form');
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const formData = {
        //name: form.name.value,
        email: form.email.value,
        //message: form.message.value,
      };

      try {
        const res = await fetch('http://localhost:3000/send-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });

        const result = await res.json();
        alert(result.message);
      } catch (err) {
        alert('Error sending email');
        console.error(err);
      }
    });