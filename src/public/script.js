document.getElementById('proxyForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const url = document.getElementById('urlInput').value;
    const resultDiv = document.getElementById('result');

    try {
        const response = await fetch('/proxy', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ url }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.text();
        resultDiv.innerHTML = `<iframe srcdoc="${data.replace(/"/g, '&quot;')}" width="100%" height="400px"></iframe>`;
    } catch (error) {
        resultDiv.textContent = `Error: ${error.message}`;
    }
});
