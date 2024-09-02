Citizen.CreateThread(function()
    while true do
        Citizen.Wait(100)
        local playerPed = PlayerPedId()
        local vehicle = GetVehiclePedIsIn(playerPed, false)

        if vehicle ~= 0 and vehicle ~= nil then
            local speed = math.floor(GetEntitySpeed(vehicle) * 3.6)
            local gear = GetVehicleCurrentGear(vehicle)
            local rpm = math.floor(GetVehicleCurrentRpm(vehicle) * 100)
            local fuel = GetVehicleFuelLevel(vehicle)

            SendNUIMessage({
                action = "updateSpeed",
                value = speed
            })

            SendNUIMessage({
                action = "updateGear",
                value = gear
            })

            SendNUIMessage({
                action = "updateRPM",
                percentage = rpm
            })

            SendNUIMessage({
                action = "updateFuel",
                percentage = fuel
            })
        else
            SendNUIMessage({
                action = "hideUI"
            })
        end
    end
end)
