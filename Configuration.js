function getConfiguration(config) 
{ 
	config.addressLabel = {en: "MAC", es: "MAC"};
}

function getEndpoints(deviceAddress, endpoints)
{
  // Volumenes consumidos
  var n01 = endpoints.addEndpoint("1", "Volumen dia contador grande", endpointType.genericSensor);
  n01.variableTypeId = 1398;
  var n02 = endpoints.addEndpoint("2", "Volumen dia contador pequeño", endpointType.genericSensor);
  n02.variableTypeId = 1399;
  var n03 = endpoints.addEndpoint("3", "Volumen minuto contador grande", endpointType.genericSensor);
  n03.variableTypeId = 1398;
  var n04 = endpoints.addEndpoint("4", "Volumen minuto contador pequeño", endpointType.genericSensor);
  n04.variableTypeId = 1399;
  


}

function updateDeviceUIRules(device, rules)
{
  rules.canCreateEndpoints = true;
}

function updateEndpointUIRules(endpoint, rules)
{
  rules.canDelete = true;
  rules.canEditSubtype = false;
}