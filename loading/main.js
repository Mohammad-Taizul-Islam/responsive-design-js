      // Capture start time immediately when script executes
      const startTime = performance.now();
        


      // Update timer every 100ms
      const loadTimeElement = document.getElementById('load-time');
      const timerInterval = setInterval(() => {
          const currentTime = performance.now();
          const elapsed = (currentTime - startTime) / 1000;
          loadTimeElement.textContent = `Loading: ${elapsed.toFixed(2)}s`;
      }, 100);
      




      // When page is fully loaded
      window.addEventListener('load', function() {
          const loader = document.getElementById('loader');
          const finalTime = (performance.now() - startTime) / 1000;
          
          // Update final load time display
          document.getElementById('final-load-time').textContent = finalTime.toFixed(2);
          
          // Stop the interval timer
          clearInterval(timerInterval);
          
          // Update loader text one last time
          loadTimeElement.textContent = `Loaded in ${finalTime.toFixed(2)}s`;
          
          // Hide the loader
          setTimeout(() => {
              loader.classList.add('loader-hidden');
              
              // Remove the loader after the fade out completes
              loader.addEventListener('transitionend', function() {
                  if (loader.classList.contains('loader-hidden')) {
                      document.body.removeChild(loader);
                  }
              });
          }, 500); // Small delay to show the final time
      });
      


      // Simulation button for testing
      document.getElementById('simulate-load').addEventListener('click', function() {
          // Show loader again
          const loader = document.createElement('div');
          loader.id = 'loader';
          loader.innerHTML = `
              <img src="https://i.gifer.com/LLuC.gif" alt="Loading...">
              <div id="load-time">Loading: 0.00s</div>
          `;
          document.body.appendChild(loader);   
          
          const simStartTime = performance.now();
          const simLoadTimeElement = document.getElementById('load-time');
          const simInterval = setInterval(() => {
              const currentTime = performance.now();
              const elapsed = (currentTime - simStartTime) / 1000;
              simLoadTimeElement.textContent = `Loading: ${elapsed.toFixed(2)}s`;
          }, 100);
          
          // Simulate a 3-second load
          setTimeout(() => {
              clearInterval(simInterval);
              const finalTime = (performance.now() - simStartTime) / 1000;
              simLoadTimeElement.textContent = `Loaded in ${finalTime.toFixed(2)}s`;
              
              setTimeout(() => {
                  loader.classList.add('loader-hidden');
                  loader.addEventListener('transitionend', function() {
                      if (loader.classList.contains('loader-hidden')) {
                          document.body.removeChild(loader);
                      }
                  });
              }, 500);
          }, 3000);
      });