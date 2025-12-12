document.addEventListener('DOMContentLoaded', () => {
    // 1. Get all the service list items
    const serviceItems = document.querySelectorAll('.service-item');

    // 2. Loop through each service item to attach a click listener
    serviceItems.forEach(item => {
        // Find the clickable title area
        const title = item.querySelector('.service-title');
        
        // Add the click event listener
        title.addEventListener('click', () => {
            // Find the active service (if any) and close it
            const currentlyActive = document.querySelector('.service-item.active');
            
            // If there is another active item AND it's not the one we just clicked, close it
            if (currentlyActive && currentlyActive !== item) {
                currentlyActive.classList.remove('active');
            }
            
            // Toggle the 'active' class on the clicked item. 
            // This class triggers the CSS animation (max-height: 500px)
            item.classList.toggle('active');
        });
    });
});
