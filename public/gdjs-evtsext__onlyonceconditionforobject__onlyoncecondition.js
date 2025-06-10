
gdjs.evtsExt__OnlyOnceConditionForObject__OnlyOnceCondition = gdjs.evtsExt__OnlyOnceConditionForObject__OnlyOnceCondition || {};

/**
 * Behavior generated from Only Once Condition
 */
gdjs.evtsExt__OnlyOnceConditionForObject__OnlyOnceCondition.OnlyOnceCondition = class OnlyOnceCondition extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__OnlyOnceConditionForObject__OnlyOnceCondition.OnlyOnceCondition.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    

    return true;
  }

  // Network sync:
  getNetworkSyncData() {
    return {
      ...super.getNetworkSyncData(),
      props: {
        
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData) {
    super.updateFromNetworkSyncData(networkSyncData);
    
  }

  // Properties:
  
}

/**
 * Shared data generated from Only Once Condition
 */
gdjs.evtsExt__OnlyOnceConditionForObject__OnlyOnceCondition.OnlyOnceCondition.SharedData = class OnlyOnceConditionSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__OnlyOnceConditionForObject__OnlyOnceCondition.OnlyOnceCondition.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._OnlyOnceConditionForObject_OnlyOnceConditionSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._OnlyOnceConditionForObject_OnlyOnceConditionSharedData = new gdjs.evtsExt__OnlyOnceConditionForObject__OnlyOnceCondition.OnlyOnceCondition.SharedData(
      initialData
    );
  }
  return instanceContainer._OnlyOnceConditionForObject_OnlyOnceConditionSharedData;
}

// Methods:
gdjs.evtsExt__OnlyOnceConditionForObject__OnlyOnceCondition.OnlyOnceCondition.prototype.OnlyOnceContext = {};
gdjs.evtsExt__OnlyOnceConditionForObject__OnlyOnceCondition.OnlyOnceCondition.prototype.OnlyOnceContext.GDObjectObjects1= [];
gdjs.evtsExt__OnlyOnceConditionForObject__OnlyOnceCondition.OnlyOnceCondition.prototype.OnlyOnceContext.GDObjectObjects2= [];


gdjs.evtsExt__OnlyOnceConditionForObject__OnlyOnceCondition.OnlyOnceCondition.prototype.OnlyOnceContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__OnlyOnceConditionForObject__OnlyOnceCondition.OnlyOnceCondition.prototype.OnlyOnceContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__OnlyOnceConditionForObject__OnlyOnceCondition.OnlyOnceCondition.prototype.OnlyOnceContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__OnlyOnceConditionForObject__OnlyOnceCondition.OnlyOnceCondition.prototype.OnlyOnceContext.GDObjectObjects1[i].variableChildExists(gdjs.evtsExt__OnlyOnceConditionForObject__OnlyOnceCondition.OnlyOnceCondition.prototype.OnlyOnceContext.GDObjectObjects1[i].getVariables().get("__OnceExtension"), (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("EventName") : ""))) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__OnlyOnceConditionForObject__OnlyOnceCondition.OnlyOnceCondition.prototype.OnlyOnceContext.GDObjectObjects1[k] = gdjs.evtsExt__OnlyOnceConditionForObject__OnlyOnceCondition.OnlyOnceCondition.prototype.OnlyOnceContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__OnlyOnceConditionForObject__OnlyOnceCondition.OnlyOnceCondition.prototype.OnlyOnceContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__OnlyOnceConditionForObject__OnlyOnceCondition.OnlyOnceCondition.prototype.OnlyOnceContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__OnlyOnceConditionForObject__OnlyOnceCondition.OnlyOnceCondition.prototype.OnlyOnceContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__OnlyOnceConditionForObject__OnlyOnceCondition.OnlyOnceCondition.prototype.OnlyOnceContext.GDObjectObjects1[i].setVariableBoolean(gdjs.evtsExt__OnlyOnceConditionForObject__OnlyOnceCondition.OnlyOnceCondition.prototype.OnlyOnceContext.GDObjectObjects1[i].getVariables().get("__OnceExtension").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("EventName") : "")), false);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__OnlyOnceConditionForObject__OnlyOnceCondition.OnlyOnceCondition.prototype.OnlyOnceContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__OnlyOnceConditionForObject__OnlyOnceCondition.OnlyOnceCondition.prototype.OnlyOnceContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__OnlyOnceConditionForObject__OnlyOnceCondition.OnlyOnceCondition.prototype.OnlyOnceContext.GDObjectObjects1[i].getVariableBoolean(gdjs.evtsExt__OnlyOnceConditionForObject__OnlyOnceCondition.OnlyOnceCondition.prototype.OnlyOnceContext.GDObjectObjects1[i].getVariables().get("__OnceExtension").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("EventName") : "")), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__OnlyOnceConditionForObject__OnlyOnceCondition.OnlyOnceCondition.prototype.OnlyOnceContext.GDObjectObjects1[k] = gdjs.evtsExt__OnlyOnceConditionForObject__OnlyOnceCondition.OnlyOnceCondition.prototype.OnlyOnceContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__OnlyOnceConditionForObject__OnlyOnceCondition.OnlyOnceCondition.prototype.OnlyOnceContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = false; }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__OnlyOnceConditionForObject__OnlyOnceCondition.OnlyOnceCondition.prototype.OnlyOnceContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__OnlyOnceConditionForObject__OnlyOnceCondition.OnlyOnceCondition.prototype.OnlyOnceContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__OnlyOnceConditionForObject__OnlyOnceCondition.OnlyOnceCondition.prototype.OnlyOnceContext.GDObjectObjects1[i].getVariableBoolean(gdjs.evtsExt__OnlyOnceConditionForObject__OnlyOnceCondition.OnlyOnceCondition.prototype.OnlyOnceContext.GDObjectObjects1[i].getVariables().get("__OnceExtension").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("EventName") : "")), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__OnlyOnceConditionForObject__OnlyOnceCondition.OnlyOnceCondition.prototype.OnlyOnceContext.GDObjectObjects1[k] = gdjs.evtsExt__OnlyOnceConditionForObject__OnlyOnceCondition.OnlyOnceCondition.prototype.OnlyOnceContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__OnlyOnceConditionForObject__OnlyOnceCondition.OnlyOnceCondition.prototype.OnlyOnceContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__OnlyOnceConditionForObject__OnlyOnceCondition.OnlyOnceCondition.prototype.OnlyOnceContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__OnlyOnceConditionForObject__OnlyOnceCondition.OnlyOnceCondition.prototype.OnlyOnceContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__OnlyOnceConditionForObject__OnlyOnceCondition.OnlyOnceCondition.prototype.OnlyOnceContext.GDObjectObjects1[i].setVariableBoolean(gdjs.evtsExt__OnlyOnceConditionForObject__OnlyOnceCondition.OnlyOnceCondition.prototype.OnlyOnceContext.GDObjectObjects1[i].getVariables().get("__OnceExtension").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("EventName") : "")), true);
}
}{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__OnlyOnceConditionForObject__OnlyOnceCondition.OnlyOnceCondition.prototype.OnlyOnce = function(EventName, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("OnlyOnceConditionForObject"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("OnlyOnceConditionForObject"),
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
if (argName === "EventName") return EventName;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__OnlyOnceConditionForObject__OnlyOnceCondition.OnlyOnceCondition.prototype.OnlyOnceContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__OnlyOnceConditionForObject__OnlyOnceCondition.OnlyOnceCondition.prototype.OnlyOnceContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__OnlyOnceConditionForObject__OnlyOnceCondition.OnlyOnceCondition.prototype.OnlyOnceContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__OnlyOnceConditionForObject__OnlyOnceCondition.OnlyOnceCondition.prototype.OnlyOnceContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__OnlyOnceConditionForObject__OnlyOnceCondition.OnlyOnceCondition.prototype.OnlyOnceContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__OnlyOnceConditionForObject__OnlyOnceCondition.OnlyOnceCondition.prototype.ResetContext = {};
gdjs.evtsExt__OnlyOnceConditionForObject__OnlyOnceCondition.OnlyOnceCondition.prototype.ResetContext.GDObjectObjects1= [];
gdjs.evtsExt__OnlyOnceConditionForObject__OnlyOnceCondition.OnlyOnceCondition.prototype.ResetContext.GDObjectObjects2= [];


gdjs.evtsExt__OnlyOnceConditionForObject__OnlyOnceCondition.OnlyOnceCondition.prototype.ResetContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__OnlyOnceConditionForObject__OnlyOnceCondition.OnlyOnceCondition.prototype.ResetContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__OnlyOnceConditionForObject__OnlyOnceCondition.OnlyOnceCondition.prototype.ResetContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__OnlyOnceConditionForObject__OnlyOnceCondition.OnlyOnceCondition.prototype.ResetContext.GDObjectObjects1[i].variableChildExists(gdjs.evtsExt__OnlyOnceConditionForObject__OnlyOnceCondition.OnlyOnceCondition.prototype.ResetContext.GDObjectObjects1[i].getVariables().get("__OnceExtension"), (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("EventName") : ""))) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__OnlyOnceConditionForObject__OnlyOnceCondition.OnlyOnceCondition.prototype.ResetContext.GDObjectObjects1[k] = gdjs.evtsExt__OnlyOnceConditionForObject__OnlyOnceCondition.OnlyOnceCondition.prototype.ResetContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__OnlyOnceConditionForObject__OnlyOnceCondition.OnlyOnceCondition.prototype.ResetContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__OnlyOnceConditionForObject__OnlyOnceCondition.OnlyOnceCondition.prototype.ResetContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__OnlyOnceConditionForObject__OnlyOnceCondition.OnlyOnceCondition.prototype.ResetContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__OnlyOnceConditionForObject__OnlyOnceCondition.OnlyOnceCondition.prototype.ResetContext.GDObjectObjects1[i].setVariableBoolean(gdjs.evtsExt__OnlyOnceConditionForObject__OnlyOnceCondition.OnlyOnceCondition.prototype.ResetContext.GDObjectObjects1[i].getVariables().get("__OnceExtension").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("EventName") : "")), false);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__OnlyOnceConditionForObject__OnlyOnceCondition.OnlyOnceCondition.prototype.ResetContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__OnlyOnceConditionForObject__OnlyOnceCondition.OnlyOnceCondition.prototype.ResetContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__OnlyOnceConditionForObject__OnlyOnceCondition.OnlyOnceCondition.prototype.ResetContext.GDObjectObjects1[i].setVariableBoolean(gdjs.evtsExt__OnlyOnceConditionForObject__OnlyOnceCondition.OnlyOnceCondition.prototype.ResetContext.GDObjectObjects1[i].getVariables().get("__OnceExtension").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("EventName") : "")), false);
}
}}

}


};

gdjs.evtsExt__OnlyOnceConditionForObject__OnlyOnceCondition.OnlyOnceCondition.prototype.Reset = function(EventName, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("OnlyOnceConditionForObject"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("OnlyOnceConditionForObject"),
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
if (argName === "EventName") return EventName;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__OnlyOnceConditionForObject__OnlyOnceCondition.OnlyOnceCondition.prototype.ResetContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__OnlyOnceConditionForObject__OnlyOnceCondition.OnlyOnceCondition.prototype.ResetContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__OnlyOnceConditionForObject__OnlyOnceCondition.OnlyOnceCondition.prototype.ResetContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__OnlyOnceConditionForObject__OnlyOnceCondition.OnlyOnceCondition.prototype.ResetContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__OnlyOnceConditionForObject__OnlyOnceCondition.OnlyOnceCondition.prototype.ResetContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__OnlyOnceConditionForObject__OnlyOnceCondition.OnlyOnceCondition.prototype.ResetAllContext = {};
gdjs.evtsExt__OnlyOnceConditionForObject__OnlyOnceCondition.OnlyOnceCondition.prototype.ResetAllContext.GDObjectObjects1= [];
gdjs.evtsExt__OnlyOnceConditionForObject__OnlyOnceCondition.OnlyOnceCondition.prototype.ResetAllContext.GDObjectObjects2= [];


gdjs.evtsExt__OnlyOnceConditionForObject__OnlyOnceCondition.OnlyOnceCondition.prototype.ResetAllContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__OnlyOnceConditionForObject__OnlyOnceCondition.OnlyOnceCondition.prototype.ResetAllContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__OnlyOnceConditionForObject__OnlyOnceCondition.OnlyOnceCondition.prototype.ResetAllContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__OnlyOnceConditionForObject__OnlyOnceCondition.OnlyOnceCondition.prototype.ResetAllContext.GDObjectObjects1[i].variableClearChildren(gdjs.evtsExt__OnlyOnceConditionForObject__OnlyOnceCondition.OnlyOnceCondition.prototype.ResetAllContext.GDObjectObjects1[i].getVariables().get("__OnceExtension"));
}
}}

}


};

gdjs.evtsExt__OnlyOnceConditionForObject__OnlyOnceCondition.OnlyOnceCondition.prototype.ResetAll = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("OnlyOnceConditionForObject"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("OnlyOnceConditionForObject"),
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__OnlyOnceConditionForObject__OnlyOnceCondition.OnlyOnceCondition.prototype.ResetAllContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__OnlyOnceConditionForObject__OnlyOnceCondition.OnlyOnceCondition.prototype.ResetAllContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__OnlyOnceConditionForObject__OnlyOnceCondition.OnlyOnceCondition.prototype.ResetAllContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__OnlyOnceConditionForObject__OnlyOnceCondition.OnlyOnceCondition.prototype.ResetAllContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__OnlyOnceConditionForObject__OnlyOnceCondition.OnlyOnceCondition.prototype.ResetAllContext.GDObjectObjects2.length = 0;


return;
}

gdjs.evtsExt__OnlyOnceConditionForObject__OnlyOnceCondition.OnlyOnceCondition.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("OnlyOnceConditionForObject::OnlyOnceCondition", gdjs.evtsExt__OnlyOnceConditionForObject__OnlyOnceCondition.OnlyOnceCondition);
