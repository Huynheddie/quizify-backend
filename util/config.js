let AUTHZ_CREDENTIALS = {
    // REDIRECT_URI: 'http://localhost:3000/',
    REDIRECT_URI: 'https://huynheddie.github.io/quizify',
    BACKEND_REDIRECT_URI: 'https://quizify-backend.herokuapp.com/callback',
    SCOPES: ['user-read-private',
             'user-read-playback-state',
             'user-modify-playback-state',
             'streaming',
             'user-read-email',
             'user-top-read',
            ]
};

module.exports = AUTHZ_CREDENTIALS;