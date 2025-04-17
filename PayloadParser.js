function parseUplink(device, payload) {
    var parsed = JSON.parse(payload.asString());
    env.log(parsed);
    

    if (parsed[0] && parsed[0].payload && parsed[0].payload.variables) {
        var variables = parsed[0].payload.variables;

        var e1 = device.endpoints.byAddress("1");
        var e2 = device.endpoints.byAddress("2"); 
        var e3 = device.endpoints.byAddress("3"); 
        var e4 = device.endpoints.byAddress("4"); 
        var e5 = device.endpoints.byAddress("5"); 
        var e6 = device.endpoints.byAddress("6"); 
        env.log(variables[0]);

        //Variables consumos

        if (variables[0] != null && e1 != null) {
            e1.updateGenericSensorStatus(variables[0].dato1);
        }
        if (variables[0] != null && e2 != null) {
            e2.updateGenericSensorStatus(variables[0].dato2);
        }
        if (variables[0] != null && e3 != null) {
            e3.updateGenericSensorStatus(variables[0].dato3);
        }
        if (variables[0] != null && e4 != null) {
            e4.updateGenericSensorStatus(variables[0].dato4);
        }
        if (variables[0] != null && e5 != null) {
            e5.updateGenericSensorStatus(variables[0].dato5);
        }
        if (variables[0] != null && e6 != null) {
            e6.updateGenericSensorStatus(variables[0].dato6);
        }


 
    }



    

}

function buildDownlink(device, endpoint, command, payload) 
{ 
	// Esta función permite convertir un comando de la plataforma en un
	// payload que pueda enviarse al dispositivo.
	// Más información en https://wiki.cloud.studio/page/200

	// Los parámetros de esta función, son:
	// - device: objeto representando el dispositivo al cual se enviará el comando.
	// - endpoint: objeto endpoint representando el endpoint al que se enviará el 
	//   comando. Puede ser null si el comando se envía al dispositivo, y no a 
	//   un endpoint individual dentro del dispositivo.
	// - command: objeto que contiene el comando que se debe enviar. Más
	//   información en https://wiki.cloud.studio/page/1195.

	// Este ejemplo está escrito asumiendo un dispositivo que contiene un único 
	// endpoint, de tipo appliance, que se puede encender, apagar y alternar. 
	// Se asume que se debe enviar un solo byte en el payload, que indica el tipo 
	// de operación.

/*
	 payload.port = 25; 	 	 // Este dispositivo recibe comandos en el puerto LoRaWAN 25 
	 payload.buildResult = downlinkBuildResult.ok; 

	 switch (command.type) { 
	 	 case commandType.onOff: 
	 	 	 switch (command.onOff.type) { 
	 	 	 	 case onOffCommandType.turnOn: 
	 	 	 	 	 payload.setAsBytes([30]); 	 	 // El comando 30 indica "encender" 
	 	 	 	 	 break; 
	 	 	 	 case onOffCommandType.turnOff: 
	 	 	 	 	 payload.setAsBytes([31]); 	 	 // El comando 31 indica "apagar" 
	 	 	 	 	 break; 
	 	 	 	 case onOffCommandType.toggle: 
	 	 	 	 	 payload.setAsBytes([32]); 	 	 // El comando 32 indica "alternar" 
	 	 	 	 	 break; 
	 	 	 	 default: 
	 	 	 	 	 payload.buildResult = downlinkBuildResult.unsupported; 
	 	 	 	 	 break; 
	 	 	 } 
	 	 	 break; 
	 	 default: 
	 	 	 payload.buildResult = downlinkBuildResult.unsupported; 
	 	 	 break; 
	 }
*/

}