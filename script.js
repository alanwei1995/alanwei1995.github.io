document.getElementById('yahooLogin').addEventListener('click', function () {
    var clientId = 'dj0yJmk9SW9NTEwyaEtXOGJOJmQ9WVdrOWJ6bHlkalZaWjIwbWNHbzlNQT09JnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PWE1';
    var redirectUri = encodeURIComponent('https://alanwei1995.github.io/');
    var yahooAuthUrl = `https://api.login.yahoo.com/oauth2/request_auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code`;

    window.location.href = yahooAuthUrl;
});
