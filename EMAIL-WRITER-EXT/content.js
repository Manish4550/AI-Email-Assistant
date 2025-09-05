console.log("Email Writer");



function findComposeToolbar() {
    // ✅ Fixed: Added missing comma and quotes
    const selectors = ['.btC', '.aDh', '[role="toolbar"]', '.gU.Up'];

    for (const selector of selectors) {
        const toolbar = document.querySelector(selector);
        if (toolbar) {
            return toolbar;
        }
    }
    // ✅ Fixed: Moved return null outside the loop
    return null;
}

function createAIButton() {
    const button = document.createElement('div');
    button.className = 'T-I J-J5-Ji aoO v7 T-I-atl L3 ai-reply-button'; // Added ai-reply-button class
    button.style.marginRight = '8px';
    button.innerText = 'AI Reply';
    button.setAttribute('role', 'button');
    button.setAttribute('data-tooltip', 'Generate AI Reply');
    
    // Add click handler
    button.onclick = function() {
        console.log("AI Reply button clicked!");
        generateEmailReply();
    };
    
    return button;
}

function injectButton() {
    const existingButton = document.querySelector('.ai-reply-button');
    if (existingButton) {
        existingButton.remove(); // Remove existing button to avoid duplicates
    }

    const toolbar = findComposeToolbar();
    if (!toolbar) {
        console.log("Compose toolbar not found");
        return;
    }
    
    console.log("Toolbar found:", toolbar);
    const button = createAIButton();
    
    // ✅ Fixed: Removed extra dot in classList.add
    // (already added the class in createAIButton)
    
    toolbar.insertBefore(button, toolbar.firstChild); // Insert button at the beginning of the toolbar
    console.log("AI Reply button injected");
} // ✅ Fixed: Added missing closing brace

// Placeholder function for AI reply generation
async function generateEmailReply() {
    try {
        console.log("Generating AI reply...");
        
        // Get original email content for context
        const originalContent = getOriginalEmailContent();
        
        // Call your backend API
        const response = await fetch('http://localhost:8080/api/email/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                emailContent: originalContent,
                tone: 'professional'
            })
        });

        if (response.ok) {
            const generatedReply = await response.text();
            insertReplyIntoCompose(generatedReply);
        } else {
            console.error('Failed to generate reply:', response.status);
        }
    } catch (error) {
        console.error('Error generating reply:', error);
    }
}

function getOriginalEmailContent() {
    // Try to find the original email content
    const originalEmail = document.querySelector('[role="main"] .ii.gt .a3s.aiL');
    return originalEmail ? originalEmail.innerText : '';
}

function insertReplyIntoCompose(content) {
    // Find the compose text area
    const composeArea = document.querySelector('[contenteditable="true"]');
    if (composeArea) {
        composeArea.innerHTML = content.replace(/\n/g, '<br>');
        composeArea.dispatchEvent(new Event('input', { bubbles: true }));
        console.log("Reply inserted into compose area");
    }
}

const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
        const addedNodes = Array.from(mutation.addedNodes);
        const hasComposeElements = addedNodes.some(node =>
            node.nodeType === Node.ELEMENT_NODE &&
            (node.matches('.aDh, .btC, [role="dialog"]') || node.querySelector('.aDh, .btC, [role="dialog"]'))
        );

        if (hasComposeElements) {
            console.log("Compose window detected");
            setTimeout(injectButton, 500); // Delay to ensure elements are fully loaded
        }
    }
});

observer.observe(document.body, { childList: true, subtree: true });