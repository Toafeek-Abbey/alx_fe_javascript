const quotes = [
    { text: "The only limit to our realization of tomorrow is our doubts of today.", category: "Motivation" },
    { text: "In the middle of every difficulty lies opportunity.", category: "Inspiration" },
    { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", category: "Perseverance" }
];

// Function to display a random quote
function showRandomQuote() {
    if (quotes.length === 0) {
        console.log("No quotes available.");
        return;
    }
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    console.log(`"${quote.text}" - [${quote.category}]`);
}

// Function to create and add a new quote through form submission
function createAddQuoteForm() {
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
            console.log("Quote added successfully!", newQuote);
            form.reset();
        } else {
            console.log("Both fields are required!");
        }
    });

    document.body.appendChild(form);
}

// Example usage
showRandomQuote();
createAddQuoteForm();

