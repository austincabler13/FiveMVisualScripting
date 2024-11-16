-- server.lua

RegisterNUICallback('submitFeedback', function(data, cb)
    local feedback = data.feedback
    local source = source
    local playerName = GetPlayerName(source)

    -- Save feedback to a file
    local file = io.open('feedback.txt', 'a')
    if file then
        file:write(string.format("Player: %s (%s)\nFeedback: %s\n\n", playerName, source, feedback))
        file:close()
    end

    cb('ok')
end)

Citizen.CreateThread(function()
    while true do
        local memoryUsage = math.floor(collectgarbage("count"))
        TriggerClientEvent('updateMemoryUsage', -1, memoryUsage)
        Citizen.Wait(5000) -- Update every 5 seconds
    end
end)
