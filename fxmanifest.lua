-- fxmanifest.lua
fx_version 'cerulean'
game 'gta5'

ui_page '/src/ui/index.html'

files {
    '/src/ui/*.html',
    '/src/ui/*.css',
    '/src/ui/*.js',
    '/src/ui/components/*.html',
    '/src/ui/themes/*.css',
    '/src/ui/blockly.html',
    '/src/ui/tutorial.js',
    '/src/ui/settings.html',
    '/src/ui/feedback.html'
}

client_scripts {
    '/src/client/client.lua'
}

server_scripts {
    '/src/server/server.lua'
}
