// DOMContentLoaded to ensure the DOM is fully loaded before executing the script
document.addEventListener('DOMContentLoaded', () => {
    // FAQ Section: Toggle visibility of answers
    const faqButtons = document.querySelectorAll('#button-f');
    faqButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const icon = button.querySelector('i');
        // Toggle content visibility
        if (button.classList.contains('active')) {
          button.classList.remove('active');
          icon.classList.replace('ri-subtract-line', 'ri-add-line');
        } else {
          faqButtons.forEach((btn) => {
            btn.classList.remove('active');
            btn.querySelector('i').classList.replace('ri-subtract-line', 'ri-add-line');
          });
          button.classList.add('active');
          icon.classList.replace('ri-add-line', 'ri-subtract-line');
        }
      });
    });
  
    // Email Validation and Submit Button Behavior
    const emailInputs = document.querySelectorAll('.email__input');
    const primaryButtons = document.querySelectorAll('.primary__button');
    emailInputs.forEach((emailInput) => {
      emailInput.addEventListener('input', () => {
        const value = emailInput.value.trim();
        if (validateEmail(value)) {
          emailInput.classList.remove('error');
          primaryButtons.forEach((button) => (button.disabled = false));
        } else {
          emailInput.classList.add('error');
          primaryButtons.forEach((button) => (button.disabled = true));
        }
      });
    });
  
    // Language Dropdown
    const languageButtons = document.querySelectorAll('#footer-button, #button-left');
    languageButtons.forEach((languageButton) => {
      languageButton.addEventListener('click', () => {
        alert('Language selection is currently a placeholder feature.');
      });
    });
  
    // Helper Function: Validate Email Format
    function validateEmail(email) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    }
  });
  