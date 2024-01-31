// Mapping of button flag classes to corresponding background colors
const colorMappings = {
    "green": "rgba(50, 199, 90, .2)",
    "red": "rgba(255, 59, 48, .2)",
    "blue": "rgba(91, 199, 251, .2)",
    "orange": "rgba(255, 149, 0, .2)",
    "purple": "rgba(175, 81, 222, .2)",
    "yellow": "rgba(254, 204, 3, .2)"
};

// Function to highlight divs based on the button flag color
const highlightDivs = () => {
    // Select all rows
    var rows = document.querySelectorAll("div.ynab-grid-body-row");
    rows.forEach((row) => {
        // Find the button in the row
        var button = row.querySelector("div:nth-child(3) > button:nth-child(1)");
        if (button) {
            // Determine if the button has a flag color class
            var colorKey = Object.keys(colorMappings).find(key => button.classList.contains(`ynab-flag-pill-${key}`));
            // Apply the corresponding color or reset to transparent
            row.style.backgroundColor = colorKey ? colorMappings[colorKey] : "transparent";
        }
    });
}

// Function to observe DOM changes and apply highlight
const observeChanges = () => {
    // Create a new MutationObserver
    var observer = new MutationObserver(() => {
        // Highlight divs when DOM changes are observed
        highlightDivs();
    });

    // Start observing the document body for changes in the child elements
    observer.observe(document.body, { childList: true, subtree: true });
}

// Initial call to highlight divs based on current DOM
highlightDivs();
// Start observing the DOM for changes
observeChanges();
