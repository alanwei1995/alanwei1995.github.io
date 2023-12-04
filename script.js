function updateStatus(message) {
    document.getElementById('status').innerText = message;
}

document.getElementById('yahooLogin').addEventListener('click', function () {
    var clientId = 'dj0yJmk9SW9NTEwyaEtXOGJOJmQ9WVdrOWJ6bHlkalZaWjIwbWNHbzlNQT09JnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PWE1';
    var redirectUri = encodeURIComponent('https://alanwei1995.github.io/');
    var yahooAuthUrl = `https://api.login.yahoo.com/oauth2/request_auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&language=en-us`;

    window.location.href = yahooAuthUrl;
});

function getAuthorizationCode() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const code = urlParams.get('code');
    if (code) {
        updateStatus("Authorization code received: " + code);
        return code;
    }
    return null;
}

const authorizationCode = getAuthorizationCode();

function exchangeAuthorizationCodeForToken(code) {
    updateStatus("Exchanging authorization code for access token...");
    const clientId = 'dj0yJmk9SW9NTEwyaEtXOGJOJmQ9WVdrOWJ6bHlkalZaWjIwbWNHbzlNQT09JnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PWE1';
    const clientSecret = '12084c3398df5529a988f2a87a192c9f020f7cfb'; // Warning: Exposing client secret client-side is a security risk
    const redirectUri = 'https://alanwei1995.github.io/';
    const tokenUrl = 'https://api.login.yahoo.com/oauth2/get_token';

    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Authorization', 'Basic ' + btoa(clientId + ':' + clientSecret));

    const body = new URLSearchParams({
        code: code,
        redirect_uri: redirectUri,
        grant_type: 'authorization_code'
    });

    fetch(tokenUrl, {
        method: 'POST',
        headers: headers,
        body: body
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // Use the access token contained in data.access_token
        })
        .catch(error => console.error('Error:', error));
}

if (authorizationCode) {
    exchangeAuthorizationCodeForToken(authorizationCode);
}
