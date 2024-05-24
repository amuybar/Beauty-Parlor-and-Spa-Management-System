document.addEventListener("DOMContentLoaded", () => {
    const appointmentForm = document.getElementById('appointmentForm');
    const feedbackForm = document.getElementById('feedbackForm');

    appointmentForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(appointmentForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const service = formData.get('service');
        const date = formData.get('date');

        console.log('Appointment Booked:', { name, email, service, date });

        // For demonstration, simply alert the user
        alert(`Appointment booked for ${name} on ${date} for ${service} treatment.`);
        appointmentForm.reset();
    });

    feedbackForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(feedbackForm);
        const name = formData.get('feedbackName');
        const comments = formData.get('comments');

        console.log('Feedback Submitted:', { name, comments });

        // For demonstration, simply alert the user
        alert(`Thank you for your feedback, ${name}!`);
        feedbackForm.reset();
    });
});
