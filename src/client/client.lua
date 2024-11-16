-- client.lua

local playerPed = nil

Citizen.CreateThread(function()
    while true do
        Citizen.Wait(1000) -- Check every second
        playerPed = PlayerPedId()
    end
end)

Citizen.CreateThread(function()
    while true do
        Citizen.Wait(0)
        -- Use cached playerPed
        if IsPedInAnyVehicle(playerPed, false) then
            -- Do something
        end
    end
end)

-- Receive memory usage updates
RegisterNetEvent('updateMemoryUsage')
AddEventHandler('updateMemoryUsage', function(memoryUsage)
    SendNUIMessage({
        action = 'updateMemory',
        memory = memoryUsage
    })
end)
