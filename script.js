document.getElementById('rec-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('rec-name').value;
    const text = document.getElementById('rec-text').value;
    
    if (name && text) {
        const recList = document.getElementById('rec-list');
        const newRec = document.createElement('div');
        newRec.className = 'recommendation';
        newRec.innerHTML = `<p>"${text}"</p><cite>- ${name}</cite>`;
        recList.appendChild(newRec);
        
        // Clear form
        document.getElementById('rec-name').value = '';
        document.getElementById('rec-text').value = '';
        
        // Show confirmation
        alert('Thank you for your recommendation!');
    }
});