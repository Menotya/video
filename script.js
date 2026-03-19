const form = document.getElementById('appointmentForm');
const successMessage = document.getElementById('successMessage');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const requiredIds = ['fullName', 'phone', 'email', 'service', 'date', 'time', 'agree'];
  const isValid = requiredIds.every((id) => {
    const el = document.getElementById(id);
    if (el.type === 'checkbox') return el.checked;
    return el.value.trim() !== '';
  });

  if (!isValid) {
    alert('Пожалуйста, заполните обязательные поля.');
    return;
  }

  form.classList.add('hidden');
  successMessage.classList.remove('hidden');
});
