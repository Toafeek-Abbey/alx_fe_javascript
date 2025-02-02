const quotes = [
    { text: "The only limit to our realization of tomorrow is our doubts of today.", category: "Motivation" },
    { text: "In the middle of every difficulty lies opportunity.", category: "Inspiration" },
    { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", category: "Perseverance" }
];

 function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); 
}

// Function to display a random quote
function displayRandomQuote() {
    if (quotes.length === 0) {
        console.log("No quotes available.");
        return;
    }
    const quoteDisplay = document.getElementById('quoteDisplay')
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    quoteDisplay.innerHTML = `"${quote.text}" - [${quote.category}]`;
}

// Function to create and add a new quote through form submission
function createAddQuoteForm(taskText, save = true) {
    const form = document.createElement("form");

    // Quote Text Input
    const textInput = document.createElement("input");
    textInput.type = "text";
    textInput.placeholder = "Enter quote text";
    textInput.required = true;

    // Category Input
    const categoryInput = document.createElement("input");
    categoryInput.type = "text";
    categoryInput.placeholder = "Enter category";
    categoryInput.required = true;

    // Submit Button
    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.textContent = "Add Quote";

    form.appendChild(textInput);
    form.appendChild(categoryInput);
    form.appendChild(submitButton);

    // Handle form submission
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const newQuote = {
            text: textInput.value.trim(),
            category: categoryInput.value.trim()
        };

        if (newQuote.text && newQuote.category) {
            quotes.push(newQuote);
            alert("Quote added successfully!", newQuote);
            form.reset();
        } else {
            alert("Both fields are required!");
        }
    });

    if (save) {
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            toredTasks.push(taskText);
            localStorage.setItem('tasks', JSON.stringify(storedTasks));
     }

    document.body.appendChild(form);
}
function importFromJsonFile(event) {
    const fileReader = new FileReader();
    fileReader.onload = function(event) {
      const importedQuotes = JSON.parse(event.target.result);
      quotes.push(...importedQuotes);
      saveQuotes();
      alert('Quotes imported successfully!');
    };
    fileReader.readAsText(event.target.files[0]);
  }
function exportQuotesToJSON() {
    const jsonData = JSON.stringify(quotes, null, 2);
    const blob = new Blob([jsonData], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const downloadLink = document.createElement("a");
    downloadLink.href = url;
    downloadLink.download = "quotes.json";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    URL.revokeObjectURL(url);
}
// Example usage
showRandomQuote();
createAddQuoteForm();
createAddQuoteForm()

