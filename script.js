document.getElementById('patientForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const condition = document.getElementById('condition').value;

    const patientItem = document.createElement('li');
    patientItem.textContent = `${name}, Age: ${age}, Condition: ${condition}`;
    document.getElementById('patientList').appendChild(patientItem);

    // Clear the form
    this.reset();
});
