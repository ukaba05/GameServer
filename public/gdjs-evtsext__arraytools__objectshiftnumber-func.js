
if (typeof gdjs.evtsExt__ArrayTools__ObjectShiftNumber !== "undefined") {
  gdjs.evtsExt__ArrayTools__ObjectShiftNumber.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ArrayTools__ObjectShiftNumber = {};
gdjs.evtsExt__ArrayTools__ObjectShiftNumber.GDObjectObjects1= [];


gdjs.evtsExt__ArrayTools__ObjectShiftNumber.userFunc0x113e410 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
/** @type {gdjs.Variable} */
const array = eventsFunctionContext.getArgument("Array");

// Cast to array to ensure getAllChildrenArray returns the real array
array.castTo("array");

eventsFunctionContext.returnValue = array.getAllChildrenArray().shift().getAsNumber();

};
gdjs.evtsExt__ArrayTools__ObjectShiftNumber.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ArrayTools__ObjectShiftNumber.userFunc0x113e410(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__ArrayTools__ObjectShiftNumber.func = function(runtimeScene, Object, Array, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": gdjs.objectsListsToArray(Object)
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ArrayTools"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ArrayTools"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Array") return Array;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__ArrayTools__ObjectShiftNumber.GDObjectObjects1.length = 0;

gdjs.evtsExt__ArrayTools__ObjectShiftNumber.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ArrayTools__ObjectShiftNumber.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__ArrayTools__ObjectShiftNumber.registeredGdjsCallbacks = [];