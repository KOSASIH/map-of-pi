/**
 * Initializes and handles the toggle functionality for menu settings.
 */
export default function () {
<<<<<<< HEAD
   /**
    * Sets up the initial state and event listeners once the DOM content is fully loaded.
    */
   document.addEventListener('DOMContentLoaded', () => {
      const menuToggle = document.getElementById('menu-toggle');
      const orderToggleDiv = document.querySelector('.menu-settings__toggle:nth-child(2)');
      const paymentToggleDiv = document.querySelector('.menu-settings__toggle:nth-child(3)');
      const addItemButtonSection = document.querySelector('.menu-setting__floating-button-section');
      const floatingButtonSection = document.querySelector('.menu-setting__floating-button');
      loadToggleStates(); // Load the toggle states as the first action
      
      /**
       * Simulates saving the current states of toggle buttons.
       * Placeholder for backend API call.
       */
      function saveToggleStates() {
            // Placeholder for saving the current state of toggles to the backend
            console.log('Saving toggle states...');
            // Make API call to the backend
      }
      
      /**
       * Loads and applies the saved toggle states from the backend.
       */
      function loadToggleStates() {
=======
    /**
     * Sets up the initial state and event listeners once the DOM content is fully loaded.
     */
    document.addEventListener('DOMContentLoaded', () => {
        const menuToggle = document.getElementById('menu-toggle');
        const orderToggleDiv = document.querySelector('.menu-settings__toggle:nth-child(2)');
        const paymentToggleDiv = document.querySelector('.menu-settings__toggle:nth-child(3)');
        const addItemButtonSection = document.querySelector('.menu-setting__floating-button-section');
        const floatingButtonSection = document.querySelector('.menu-setting__floating-button');

        loadToggleStates(); // Load the toggle states as the first action

        /**
         * Simulates saving the current states of toggle buttons.
         * Placeholder for backend API call.
         */
        function saveToggleStates() {
            // Placeholder for saving the current state of toggles to the backend
            console.log('Saving toggle states...');
            // Make API call to the backend
        }
        

        /**
         * Loads and applies the saved toggle states from the backend.
         */
        function loadToggleStates() {
>>>>>>> 50a4efcff6df38b2ecaee04dd74a73b5d334b34f
            // Placeholder for loading saved toggle states from the backend
            console.log('Loading toggle states...');
            // Simulate fetching data from the backend
            // Make an API call to your backend to fetch saved states
            // Hardcoded states for demonstration:
            const fetchedStates = {
<<<<<<< HEAD
               menuEnabled: true,
               orderEnabled: false,
               paymentEnabled: true,
=======
                menuEnabled: false,
                orderEnabled: true,
                paymentEnabled: true,
>>>>>>> 50a4efcff6df38b2ecaee04dd74a73b5d334b34f
            };
      
            // Apply these states to your toggles
            menuToggle.checked = fetchedStates.menuEnabled;
            orderToggleDiv.querySelector('input').checked = fetchedStates.orderEnabled;
            paymentToggleDiv.querySelector('input').checked = fetchedStates.paymentEnabled;
      
            // Update the UI based on these states
            updateToggleLabels();
            updateSliderAppearance();
            updateFloatingButtonVisibility();
      }
      
      // Initialize the toggles based on the menu setting
      initializeToggles();     

      /**
       * Updates the visibility of the floating add item button based on the menu toggle state.
       */
      function updateFloatingButtonVisibility() {
            if (menuToggle.checked) {
               floatingButtonSection.classList.remove('hidden');
            } else {
               floatingButtonSection.classList.add('hidden');
            }
<<<<<<< HEAD
      }

      
      /**
       * Updates the labels next to toggles to reflect their current state off/on.
       */
      function updateToggleLabels() {
         const menuStatusLabel = document.querySelector('label[for="menu-toggle"] .toggle-status');
         const orderStatusLabel = document.querySelector('label[for="order-toggle"] .toggle-status');
         const paymentStatusLabel = document.querySelector('label[for="payment-toggle"] .toggle-status');
      
         menuStatusLabel.textContent = menuToggle.checked ? 'on' : 'off';
         orderStatusLabel.textContent = orderToggleDiv.querySelector('input').checked ? 'on' : 'off';
         paymentStatusLabel.textContent = paymentToggleDiv.querySelector('input').checked ? 'on' : 'off';
      }

      // Initialize labels based on the current state
      updateToggleLabels();
      
      // Update labels on toggle change
      document.querySelectorAll('.menu-settings__toggle input').forEach(toggle => {
=======
        }

         /**
          * Updates the labels next to toggles to reflect their current state off/on.
          */
         function updateToggleLabels() {
            const menuStatusLabel = document.querySelector('label[for="menu-toggle"] .toggle-status');
            const orderStatusLabel = document.querySelector('label[for="order-toggle"] .toggle-status');
            const paymentStatusLabel = document.querySelector('label[for="payment-toggle"] .toggle-status');
         
            menuStatusLabel.textContent = menuToggle.checked ? 'on' : 'off';
            orderStatusLabel.textContent = orderToggleDiv.querySelector('input').checked ? 'on' : 'off';
            paymentStatusLabel.textContent = paymentToggleDiv.querySelector('input').checked ? 'on' : 'off';
         }

        // Initialize labels based on the current state
        updateToggleLabels();
        
        // Update labels on toggle change
        // Set label text based on toggle state
        document.querySelectorAll('.menu-settings__toggle input').forEach(toggle => {
>>>>>>> 50a4efcff6df38b2ecaee04dd74a73b5d334b34f
            toggle.addEventListener('change', updateToggleLabels);
      });

      // Initialize floating button visibility based on the current state of the menu toggle
      updateFloatingButtonVisibility();

      // Add event listener to menu toggle to update floating button visibility on change
      menuToggle.addEventListener('change', updateFloatingButtonVisibility);

      // Update appearance on changes
      document.querySelectorAll('.menu-settings__toggle input').forEach(toggle => {
            toggle.addEventListener('change', function() {
               updateSliderAppearance();
               // Additional logic based on specific toggle
               if (toggle.id === 'menu-toggle') {
                  if (toggle.checked) {
                        orderToggleDiv.classList.remove('hidden');
                        paymentToggleDiv.classList.remove('hidden');
                        addItemButtonSection.classList.remove('hidden');
                  } else {
                        orderToggleDiv.classList.add('hidden');
                        paymentToggleDiv.classList.add('hidden');
                        addItemButtonSection.classList.add('hidden');
                  }
               }
            });
      });

<<<<<<< HEAD
      document.querySelectorAll('.menu-settings__toggle input').forEach(toggle => {
=======
        // Setup event listeners for toggles
        document.querySelectorAll('.menu-settings__toggle input').forEach(toggle => {
>>>>>>> 50a4efcff6df38b2ecaee04dd74a73b5d334b34f
            toggle.addEventListener('change', function() {
               updateSliderAppearance();
               updateToggleLabels();
               saveToggleStates(); // Save the new states after any toggle changes
            });
<<<<<<< HEAD
      });

      function initializeToggles() {
=======
        });

        function initializeToggles() {
>>>>>>> 50a4efcff6df38b2ecaee04dd74a73b5d334b34f
            // Initial state update
            updateSliderAppearance();
            if (menuToggle.checked) {
               orderToggleDiv.classList.remove('hidden');
               paymentToggleDiv.classList.remove('hidden');
               addItemButtonSection.classList.remove('hidden');
            } else {
               orderToggleDiv.classList.add('hidden');
               paymentToggleDiv.classList.add('hidden');
               addItemButtonSection.classList.add('hidden');
            }
      }
      });

<<<<<<< HEAD
   /**
   * Updates the appearance of sliders to reflect their state.
   */
   function updateSliderAppearance() {
      const toggles = document.querySelectorAll('.menu-settings__toggle input');
   
      toggles.forEach(toggle => {
            const slider = toggle.nextElementSibling; // Accurately select the slider span related to each toggle
            const sliderCircle = slider.querySelector('.menu-settings__slider:before'); // Assuming you want to target the pseudo-element (note: pseudo-elements cannot be directly manipulated via JS like this)

            if (toggle.checked) {
               slider.classList.remove('menu-settings__slider--off');
            } else {
               slider.classList.add('menu-settings__slider--off');
               // If you have a specific class to indicate the "off" state that affects the appearance, toggle it here
            }
      });
   }
}


=======
    /** 
     * Updates the appearance of sliders to reflect their state.
     */
    function updateSliderAppearance() {
     const toggles = document.querySelectorAll('.menu-settings__toggle input');
 
     toggles.forEach(toggle => {
         const slider = toggle.nextElementSibling; // Select the slider span related to each toggle
         const sliderCircle = slider.querySelector('.menu-settings__slider:before');

         if (toggle.checked) {
          
         } else {
             slider.classList.add('menu-settings__slider--off');
         }
     });
   }
}

>>>>>>> 50a4efcff6df38b2ecaee04dd74a73b5d334b34f
