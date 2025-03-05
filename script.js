function checkMessage() {
    let message = prompt("Enter the message to verify:");
    let status = "";

    if(message.includes("FR") && (message.includes("aI") || message.includes("Ai"))) {
        status = "tampered with";
    } else if (message.includes("FR") ) {
        status = "legitimate";
    } else if (message.includes("AI")) {
        status = "tampered with";
    } else if (message.includes("aI") || message.includes("Ai")) {
        status = "tampered with";
    } else {
        status = "yet to be encoded";
    }

    document.getElementById("result").innerText = `The message "${message}" is ${status}.`;
}
