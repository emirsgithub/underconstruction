document.addEventListener('DOMContentLoaded', function() {
    const description = document.querySelector('.description');
    const originalText = description.textContent;
    description.textContent = '';
    
    let charIndex = 0;
    const typeInterval = setInterval(() => {
        description.textContent += originalText[charIndex];
        charIndex++;
        
        if (charIndex >= originalText.length) {
            clearInterval(typeInterval);
        }
    }, 50);
    
});


