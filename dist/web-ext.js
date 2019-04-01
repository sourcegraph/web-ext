require("source-map-support").install();
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectSpread.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectSpread.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      defineProperty(target, key, source[key]);
    });
  }

  return target;
}

module.exports = _objectSpread;

/***/ }),

/***/ "./node_modules/@cliqz-oss/firefox-client/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/@cliqz-oss/firefox-client/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/browser */ "./node_modules/@cliqz-oss/firefox-client/lib/browser.js");

/***/ }),

/***/ "./node_modules/@cliqz-oss/firefox-client/lib/browser.js":
/*!***************************************************************!*\
  !*** ./node_modules/@cliqz-oss/firefox-client/lib/browser.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var extend = __webpack_require__(/*! ./extend */ "./node_modules/@cliqz-oss/firefox-client/lib/extend.js"),
    ClientMethods = __webpack_require__(/*! ./client-methods */ "./node_modules/@cliqz-oss/firefox-client/lib/client-methods.js"),
    Client = __webpack_require__(/*! ./client */ "./node_modules/@cliqz-oss/firefox-client/lib/client.js"),
    Tab = __webpack_require__(/*! ./tab */ "./node_modules/@cliqz-oss/firefox-client/lib/tab.js"),
    Webapps = __webpack_require__(/*! ./webapps */ "./node_modules/@cliqz-oss/firefox-client/lib/webapps.js"),
    Device = __webpack_require__(/*! ./device */ "./node_modules/@cliqz-oss/firefox-client/lib/device.js"),
    SimulatorApps = __webpack_require__(/*! ./simulator */ "./node_modules/@cliqz-oss/firefox-client/lib/simulator.js");

const DEFAULT_PORT = 6000;
const DEFAULT_HOST = "localhost";

module.exports = FirefoxClient;

function FirefoxClient(options) {
  var client = new Client(options);
  var actor = 'root';

  client.on("error", this.onError.bind(this));
  client.on("end", this.onEnd.bind(this));
  client.on("timeout", this.onTimeout.bind(this));

  this.initialize(client, actor);
}

FirefoxClient.prototype = extend(ClientMethods, {
  connect: function(port, host, cb) {
    if (typeof port == "function") {
      // (cb)
      cb = port;
      port = DEFAULT_PORT;
      host = DEFAULT_HOST;

    }
    if (typeof host == "function") {
      // (port, cb)
      cb = host;
      host = DEFAULT_HOST;
    }
    // (port, host, cb)

    this.client.connect(port, host, cb);

    this.client.expectReply(this.actor, function(packet) {
      // root message
    });
  },

  disconnect: function() {
    this.client.disconnect();
  },

  onError: function(error) {
    this.emit("error", error);
  },

  onEnd: function() {
    this.emit("end");
  },

  onTimeout: function() {
    this.emit("timeout");
  },

  selectedTab: function(cb) {
    this.request("listTabs", function(resp) {
      var tab = resp.tabs[resp.selected];
      return new Tab(this.client, tab);
    }.bind(this), cb);
  },

  listTabs: function(cb) {
    this.request("listTabs", function(err, resp) {
      if (err) {
        return cb(err);
      }

      if (resp.simulatorWebappsActor) {
        // the server is the Firefox OS Simulator, return apps as "tabs"
        var apps = new SimulatorApps(this.client, resp.simulatorWebappsActor);
        apps.listApps(cb);
      }
      else {
        var tabs = resp.tabs.map(function(tab) {
          return new Tab(this.client, tab);
        }.bind(this));
        cb(null, tabs);
      }
    }.bind(this));
  },

  getWebapps: function(cb) {
    this.request("listTabs", (function(err, resp) {
      if (err) {
        return cb(err);
      }
      var webapps = new Webapps(this.client, resp);
      cb(null, webapps);
    }).bind(this));
  },

  getDevice: function(cb) {
    this.request("listTabs", (function(err, resp) {
      if (err) {
        return cb(err);
      }
      var device = new Device(this.client, resp);
      cb(null, device);
    }).bind(this));
  },

  getRoot: function(cb) {
    this.request("listTabs", (function(err, resp) {
      if (err) {
        return cb(err);
      }
      if (!resp.consoleActor) {
        return cb("No root actor being available.");
      }
      var root = new Tab(this.client, resp);
      cb(null, root);
    }).bind(this));
  }
})


/***/ }),

/***/ "./node_modules/@cliqz-oss/firefox-client/lib/client-methods.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@cliqz-oss/firefox-client/lib/client-methods.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var events = __webpack_require__(/*! events */ "events"),
    extend = __webpack_require__(/*! ./extend */ "./node_modules/@cliqz-oss/firefox-client/lib/extend.js");

// to be instantiated later - to avoid circular dep resolution
var JSObject;

var ClientMethods = extend(events.EventEmitter.prototype, {
  /**
   * Intialize this client object.
   *
   * @param  {object} client
   *         Client to send requests on.
   * @param  {string} actor
   *         Actor id to set as 'from' field on requests
   */
  initialize: function(client, actor) {
    this.client = client;
    this.actor = actor;

    this.client.on('message', function(message) {
      if (message.from == this.actor) {
        this.emit(message.type, message);
      }
    }.bind(this));
  },

  /**
   * Make request to our actor on the server.
   *
   * @param  {string}   type
   *         Method name of the request
   * @param  {object}   message
   *         Optional extra properties (arguments to method)
   * @param  {Function}   transform
   *         Optional tranform for response object. Takes response object
   *         and returns object to send on.
   * @param  {Function} callback
   *         Callback to call with (maybe transformed) response
   */
  request: function(type, message, transform, callback) {
    if (typeof message == "function") {
      if (typeof transform == "function") {
        // (type, trans, cb)
        callback = transform;
        transform = message;
      }
      else {
        // (type, cb)
        callback = message;
      }
      message = {};
    }
    else if (!callback) {
      if (!message) {
        // (type)
        message = {};
      }
      // (type, message, cb)
      callback = transform;
      transform = null;
    }

    message.to = this.actor;
    message.type = type;

    this.client.makeRequest(message, function(resp) {
      delete resp.from;

      if (resp.error) {
        var err = new Error(resp.message);
        err.name = resp.error;

        callback(err);
        return;
      }

      if (transform) {
        resp = transform(resp);
      }

      if (callback) {
        callback(null, resp);
      }
    });
  },

  /*
   * Transform obj response into a JSObject
   */
  createJSObject: function(obj) {
    if (obj == null) {
      return;
    }
    if (!JSObject) {
      // circular dependencies
      JSObject = __webpack_require__(/*! ./jsobject */ "./node_modules/@cliqz-oss/firefox-client/lib/jsobject.js");
    }
    if (obj.type == "object") {
      return new JSObject(this.client, obj);
    }
    return obj;
  },

  /**
   * Create function that plucks out only one value from an object.
   * Used as the transform function for some responses.
   */
  pluck: function(prop) {
    return function(obj) {
      return obj[prop];
    }
  }
})

module.exports = ClientMethods;

/***/ }),

/***/ "./node_modules/@cliqz-oss/firefox-client/lib/client.js":
/*!**************************************************************!*\
  !*** ./node_modules/@cliqz-oss/firefox-client/lib/client.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var net = __webpack_require__(/*! net */ "net"),
    events = __webpack_require__(/*! events */ "events"),
    extend = __webpack_require__(/*! ./extend */ "./node_modules/@cliqz-oss/firefox-client/lib/extend.js");

var colors = __webpack_require__(/*! colors */ "colors");

module.exports = Client;

// this is very unfortunate! and temporary. we can't
// rely on 'type' property to signify an event, and we
// need to write clients for each actor to handle differences
// in actor protocols
var unsolicitedEvents = {
  "tabNavigated": "tabNavigated",
  "styleApplied": "styleApplied",
  "propertyChange": "propertyChange",
  "networkEventUpdate": "networkEventUpdate",
  "networkEvent": "networkEvent",
  "propertyChange": "propertyChange",
  "newMutations": "newMutations",
  "appOpen": "appOpen",
  "appClose": "appClose",
  "appInstall": "appInstall",
  "appUninstall": "appUninstall",
  "frameUpdate": "frameUpdate",
  "tabListChanged": "tabListChanged"
};

/**
 * a Client object handles connecting with a Firefox remote debugging
 * server instance (e.g. a Firefox instance), plus sending and receiving
 * packets on that conection using the Firefox remote debugging protocol.
 *
 * Important methods:
 * connect - Create the connection to the server.
 * makeRequest - Make a request to the server with a JSON message,
 *   and a callback to call with the response.
 *
 * Important events:
 * 'message' - An unsolicited (e.g. not a response to a prior request)
 *    packet has been received. These packets usually describe events.
 */
function Client(options) {
  this.options = options || {};

  this.incoming = new Buffer("");

  this._pendingRequests = [];
  this._activeRequests = {};
}

Client.prototype = extend(events.EventEmitter.prototype, {
  connect: function(port, host, cb) {
    this.client = net.createConnection({
      port: port,
      host: host
    });

    this.client.on("connect", cb);
    this.client.on("data", this.onData.bind(this));
    this.client.on("error", this.onError.bind(this));
    this.client.on("end", this.onEnd.bind(this));
    this.client.on("timeout", this.onTimeout.bind(this));
  },

  disconnect: function() {
    if (this.client) {
      this.client.end();
    }
  },

  /**
   * Set a request to be sent to an actor on the server. If the actor
   * is already handling a request, queue this request until the actor
   * has responded to the previous request.
   *
   * @param {object} request
   *        Message to be JSON-ified and sent to server.
   * @param {function} callback
   *        Function that's called with the response from the server.
   */
  makeRequest: function(request, callback) {
    this.log("request: " + JSON.stringify(request).green);

    if (!request.to) {
      var type = request.type || "";
      throw new Error(type + " request packet has no destination.");
    }
    this._pendingRequests.push({ to: request.to,
                                 message: request,
                                 callback: callback });
    this._flushRequests();
  },

  /**
   * Activate (send) any pending requests to actors that don't have an
   * active request.
   */
  _flushRequests: function() {
    this._pendingRequests = this._pendingRequests.filter(function(request) {
      // only one active request per actor at a time
      if (this._activeRequests[request.to]) {
        return true;
      }

      // no active requests for this actor, so activate this one
      this.sendMessage(request.message);
      this.expectReply(request.to, request.callback);

      // remove from pending requests
      return false;
    }.bind(this));
  },

  /**
   * Send a JSON message over the connection to the server.
   */
  sendMessage: function(message) {
    if (!message.to) {
      throw new Error("No actor specified in request");
    }
    if (!this.client) {
      throw new Error("Not connected, connect() before sending requests");
    }
    var str = JSON.stringify(message);

    // message is preceded by byteLength(message):
    str = (new Buffer(str).length) + ":" + str;

    this.client.write(str);
  },

  /**
   * Arrange to hand the next reply from |actor| to |handler|.
   */
  expectReply: function(actor, handler) {
    if (this._activeRequests[actor]) {
      throw Error("clashing handlers for next reply from " + uneval(actor));
    }
    this._activeRequests[actor] = handler;
  },

  /**
   * Handler for a new message coming in. It's either an unsolicited event
   * from the server, or a response to a previous request from the client.
   */
  handleMessage: function(message) {
    if (!message.from) {
      if (message.error) {
        throw new Error(message.message);
      }
      throw new Error("Server didn't specify an actor: " + JSON.stringify(message));
    }

    if (!(message.type in unsolicitedEvents)
        && this._activeRequests[message.from]) {
      this.log("response: " + JSON.stringify(message).yellow);

      var callback = this._activeRequests[message.from];
      delete this._activeRequests[message.from];

      callback(message);

      this._flushRequests();
    }
    else if (message.type) {
      // this is an unsolicited event from the server
      this.log("unsolicited event: ".grey + JSON.stringify(message).grey);

      this.emit('message', message);
      return;
    }
    else {
      throw new Error("Unexpected packet from actor " +  message.from
      +  JSON.stringify(message));
    }
  },

  /**
   * Called when a new data chunk is received on the connection.
   * Parse data into message(s) and call message handler for any full
   * messages that are read in.
   */
  onData: function(data) {
    this.incoming = Buffer.concat([this.incoming, data]);

    while(this.readMessage()) {};
  },

  /**
   * Parse out and process the next message from the data read from
   * the connection. Returns true if a full meassage was parsed, false
   * otherwise.
   */
  readMessage: function() {
    var sep = this.incoming.toString().indexOf(':');
    if (sep < 0) {
      return false;
    }

    // beginning of a message is preceded by byteLength(message) + ":"
    var count = parseInt(this.incoming.slice(0, sep));

    if (this.incoming.length - (sep + 1) < count) {
      this.log("no complete response yet".grey);
      return false;
    }
    this.incoming = this.incoming.slice(sep + 1);

    var packet = this.incoming.slice(0, count);

    this.incoming = this.incoming.slice(count);

    var message;
    try {
      message = JSON.parse(packet.toString());
    } catch(e) {
      throw new Error("Couldn't parse packet from server as JSON " + e
        + ", message:\n" + packet);
    }
    this.handleMessage(message);

    return true;
  },

  onError: function(error) {
    var code = error.code ? error.code : error;
    this.log("connection error: ".red + code.red);
    this.emit("error", error);
  },

  onEnd: function() {
    this.log("connection closed by server".red);
    this.emit("end");
  },

  onTimeout: function() {
    this.log("connection timeout".red);
    this.emit("timeout");
  },

  log: function(str) {
    if (this.options.log) {
      console.log(str);
    }
  }
})


/***/ }),

/***/ "./node_modules/@cliqz-oss/firefox-client/lib/console.js":
/*!***************************************************************!*\
  !*** ./node_modules/@cliqz-oss/firefox-client/lib/console.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var select = __webpack_require__(/*! js-select */ "js-select"),
    extend = __webpack_require__(/*! ./extend */ "./node_modules/@cliqz-oss/firefox-client/lib/extend.js"),
    ClientMethods = __webpack_require__(/*! ./client-methods */ "./node_modules/@cliqz-oss/firefox-client/lib/client-methods.js"),
    JSObject = __webpack_require__(/*! ./jsobject */ "./node_modules/@cliqz-oss/firefox-client/lib/jsobject.js");

module.exports = Console;

function Console(client, actor) {
  this.initialize(client, actor);

  this.on("consoleAPICall", this.onConsoleAPI.bind(this));
  this.on("pageError", this.onPageError.bind(this));
}

Console.prototype = extend(ClientMethods, {
  types: ["PageError", "ConsoleAPI"],

  /**
   * Response object:
   *   -empty-
   */
  startListening: function(cb) {
    this.request('startListeners', { listeners: this.types }, cb);
  },

  /**
   * Response object:
   *   -empty-
   */
  stopListening: function(cb) {
    this.request('stopListeners', { listeners: this.types }, cb);
  },

  /**
   * Event object:
   *   level - "log", etc.
   *   filename - file with call
   *   lineNumber - line number of call
   *   functionName - function log called from
   *   timeStamp - ms timestamp of call
   *   arguments - array of the arguments to log call
   *   private -
   */
  onConsoleAPI: function(event) {
    var message = this.transformConsoleCall(event.message);

    this.emit("console-api-call", message);
  },

  /**
   * Event object:
   *   errorMessage - string error message
   *   sourceName - file error
   *   lineText
   *   lineNumber - line number of error
   *   columnNumber - column number of error
   *   category - usually "content javascript",
   *   timeStamp - time in ms of error occurance
   *   warning - whether it's a warning
   *   error - whether it's an error
   *   exception - whether it's an exception
   *   strict -
   *   private -
   */
  onPageError: function(event) {
    this.emit("page-error", event.pageError);
  },

  /**
   * Response object: array of page error or console call objects.
   */
  getCachedLogs: function(cb) {
    var message = {
      messageTypes: this.types
    };
    this.request('getCachedMessages', message, function(resp) {
      select(resp, ".messages > *").update(this.transformConsoleCall.bind(this));
      return resp.messages;
    }.bind(this), cb);
  },

  /**
   * Response object:
   *   -empty-
   */
  clearCachedLogs: function(cb) {
    this.request('clearMessagesCache', cb);
  },

  /**
   * Response object:
   *   input - original input
   *   result - result of the evaluation, a value or JSObject
   *   timestamp - timestamp in ms of the evaluation
   *   exception - any exception as a result of the evaluation
   */
  evaluateJS: function(text, cb) {
    this.request('evaluateJS', { text: text }, function(resp) {
      return select(resp, ".result, .exception")
             .update(this.createJSObject.bind(this));
    }.bind(this), cb)
  },

  transformConsoleCall: function(message) {
    return select(message, ".arguments > *").update(this.createJSObject.bind(this));
  }
})


/***/ }),

/***/ "./node_modules/@cliqz-oss/firefox-client/lib/device.js":
/*!**************************************************************!*\
  !*** ./node_modules/@cliqz-oss/firefox-client/lib/device.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var extend = __webpack_require__(/*! ./extend */ "./node_modules/@cliqz-oss/firefox-client/lib/extend.js"),
    ClientMethods = __webpack_require__(/*! ./client-methods */ "./node_modules/@cliqz-oss/firefox-client/lib/client-methods.js");

module.exports = Device;

function Device(client, tab) {
  this.initialize(client, tab.deviceActor);
}

Device.prototype = extend(ClientMethods, {
  getDescription: function(cb) {
    this.request("getDescription", function(err, resp) {
      if (err) {
        return cb(err);
      }

      cb(null, resp.value);
    });
  },
  getRawPermissionsTable: function(cb) {
    this.request("getRawPermissionsTable", function(err, resp) {
      if (err) {
        return cb(err);
      }

      cb(null, resp.value.rawPermissionsTable);
    });
  }
})


/***/ }),

/***/ "./node_modules/@cliqz-oss/firefox-client/lib/dom.js":
/*!***********************************************************!*\
  !*** ./node_modules/@cliqz-oss/firefox-client/lib/dom.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var extend = __webpack_require__(/*! ./extend */ "./node_modules/@cliqz-oss/firefox-client/lib/extend.js"),
    ClientMethods = __webpack_require__(/*! ./client-methods */ "./node_modules/@cliqz-oss/firefox-client/lib/client-methods.js"),
    Node = __webpack_require__(/*! ./domnode */ "./node_modules/@cliqz-oss/firefox-client/lib/domnode.js");

module.exports = DOM;

function DOM(client, actor) {
  this.initialize(client, actor);
  this.walker = null;
}

DOM.prototype = extend(ClientMethods, {
  document: function(cb) {
    this.walkerRequest("document", function(err, resp) {
      if (err) return cb(err);

      var node = new Node(this.client, this.walker, resp.node);
      cb(null, node);
    }.bind(this))
  },

  documentElement: function(cb) {
    this.walkerRequest("documentElement", function(err, resp) {
      var node = new Node(this.client, this.walker, resp.node);
      cb(err, node);
    }.bind(this))
  },

  querySelector: function(selector, cb) {
    this.document(function(err, node) {
      if (err) return cb(err);

      node.querySelector(selector, cb);
    })
  },

  querySelectorAll: function(selector, cb) {
    this.document(function(err, node) {
      if (err) return cb(err);

      node.querySelectorAll(selector, cb);
    })
  },

  getComputedStyle: function(node, cb) {
    this.styleRequest("getComputed", { node: node.actor },
                      this.pluck('computed'), cb);
  },

  getUsedFontFaces: function(node, options, cb) {
    var message = {
      node: node.actor,
      includePreviews: options.includePreviews,
      previewText: options.previewText,
      previewFontSize: options.previewFontSize
    };

    this.styleRequest("getUsedFontFaces", message,
                      this.pluck('fontFaces'), cb);
  },

  getFontPreview: function(node, font, cb) {
    this.styleRequest("getFontPreview", { node: node.actor, font: font }, cb);
  },

  walkerRequest: function(type, message, cb) {
    this.getWalker(function(err, walker) {
      walker.request(type, message, cb);
    });
  },

  getWalker: function(cb) {
    if (this.walker) {
      return cb(null, this.walker);
    }
    this.request('getWalker', function(err, resp) {
      this.walker = new Walker(this.client, resp.walker);
      cb(err, this.walker);
    }.bind(this))
  },

  styleRequest: function(type, message, transform, cb) {
    this.getStyle(function(err, style) {
      if (err) throw err;

      style.request(type, message, transform, cb);
    })
  },

  getStyle: function(cb) {
    if (this.style) {
      return cb(null, this.style);
    }
    this.request('getPageStyle', function(err, resp) {
      this.style = new Style(this.client, resp.pageStyle);
      cb(err, this.style);
    }.bind(this))
  }
})

function Walker(client, walker) {
  this.initialize(client, walker.actor);

  this.root = new Node(client, this, walker.root);
}

Walker.prototype = extend(ClientMethods, {});

function Style(client, style) {
  this.initialize(client, style.actor);
}

Style.prototype = extend(ClientMethods, {});


/***/ }),

/***/ "./node_modules/@cliqz-oss/firefox-client/lib/domnode.js":
/*!***************************************************************!*\
  !*** ./node_modules/@cliqz-oss/firefox-client/lib/domnode.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var extend = __webpack_require__(/*! ./extend */ "./node_modules/@cliqz-oss/firefox-client/lib/extend.js"),
    ClientMethods = __webpack_require__(/*! ./client-methods */ "./node_modules/@cliqz-oss/firefox-client/lib/client-methods.js");

module.exports = Node;

function Node(client, walker, node) {
  this.initialize(client, node.actor);
  this.walker = walker;

  this.getNode = this.getNode.bind(this);
  this.getNodeArray = this.getNodeArray.bind(this);
  this.getNodeList = this.getNodeList.bind(this);

  walker.on('newMutations', function(event) {
    //console.log("on new mutations! ", JSON.stringify(event));
  });

  ['nodeType', 'nodeName', 'namespaceURI', 'attrs']
  .forEach(function(attr) {
    this[attr] = node[attr];
  }.bind(this));
}

Node.prototype = extend(ClientMethods, {
  getAttribute: function(name) {
    for (var i in this.attrs) {
      var attr = this.attrs[i];
      if (attr.name == name) {
        return attr.value;
      }
    }
  },

  setAttribute: function(name, value, cb) {
    var mods = [{
      attributeName: name,
      newValue: value
    }];
    this.request('modifyAttributes', { modifications: mods }, cb);
  },

  parentNode: function(cb) {
    this.parents(function(err, nodes) {
      if (err) {
        return cb(err);
      }
      var node = null;
      if (nodes.length) {
        node = nodes[0];
      }
      cb(null, node);
    })
  },

  parents: function(cb) {
    this.nodeRequest('parents', this.getNodeArray, cb);
  },

  children: function(cb) {
    this.nodeRequest('children', this.getNodeArray, cb);
  },

  siblings: function(cb) {
    this.nodeRequest('siblings', this.getNodeArray, cb);
  },

  nextSibling: function(cb) {
    this.nodeRequest('nextSibling', this.getNode, cb);
  },

  previousSibling: function(cb) {
    this.nodeRequest('previousSibling', this.getNode, cb);
  },

  querySelector: function(selector, cb) {
    this.nodeRequest('querySelector', { selector: selector },
                     this.getNode, cb);
  },

  querySelectorAll: function(selector, cb) {
    this.nodeRequest('querySelectorAll', { selector: selector },
                     this.getNodeList, cb);
  },

  getUniqueSelector: function(cb) {
    this.request('getUniqueSelector', cb);
  },

  innerHTML: function(cb) {
    this.nodeRequest('innerHTML', function(resp) {
      return resp.value;
    }, cb)
  },

  outerHTML: function(cb) {
    this.nodeRequest('outerHTML', function(resp) {
      return resp.value;
    }, cb)
  },

  remove: function(cb) {
    this.nodeRequest('removeNode', function(resp) {
      return new Node(this.client, this.walker, resp.nextSibling);
    }.bind(this), cb);
  },

  highlight: function(cb) {
    this.nodeRequest('highlight', cb);
  },

  release: function(cb) {
    this.nodeRequest('releaseNode', cb);
  },

  getNode: function(resp) {
    if (resp.node) {
      return new Node(this.client, this.walker, resp.node);
    }
    return null;
  },

  getNodeArray: function(resp) {
    return resp.nodes.map(function(form) {
      return new Node(this.client, this.walker, form);
    }.bind(this));
  },

  getNodeList: function(resp) {
    return new NodeList(this.client, this.walker, resp.list);
  },

  nodeRequest: function(type, message, transform, cb) {
    if (!cb) {
      cb = transform;
      transform = message;
      message = {};
    }
    message.node = this.actor;

    this.walker.request(type, message, transform, cb);
  }
});

function NodeList(client, walker, list) {
  this.client = client;
  this.walker = walker;
  this.actor = list.actor;

  this.length = list.length;
}

NodeList.prototype = extend(ClientMethods, {
  items: function(start, end, cb) {
    if (typeof start == "function") {
      cb = start;
      start = 0;
      end = this.length;
    }
    else if (typeof end == "function") {
      cb = end;
      end = this.length;
    }
    this.request('items', { start: start, end: end },
      this.getNodeArray.bind(this), cb);
  },

  // TODO: add this function to ClientMethods
  getNodeArray: function(resp) {
    return resp.nodes.map(function(form) {
      return new Node(this.client, this.walker, form);
    }.bind(this));
  }
});


/***/ }),

/***/ "./node_modules/@cliqz-oss/firefox-client/lib/extend.js":
/*!**************************************************************!*\
  !*** ./node_modules/@cliqz-oss/firefox-client/lib/extend.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function extend(prototype, properties) {
  return Object.create(prototype, getOwnPropertyDescriptors(properties));
}

function getOwnPropertyDescriptors(object) {
  var names = Object.getOwnPropertyNames(object);

  return names.reduce(function(descriptor, name) {
    descriptor[name] = Object.getOwnPropertyDescriptor(object, name);
    return descriptor;
  }, {});
}

/***/ }),

/***/ "./node_modules/@cliqz-oss/firefox-client/lib/jsobject.js":
/*!****************************************************************!*\
  !*** ./node_modules/@cliqz-oss/firefox-client/lib/jsobject.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var select = __webpack_require__(/*! js-select */ "js-select"),
    extend = __webpack_require__(/*! ./extend */ "./node_modules/@cliqz-oss/firefox-client/lib/extend.js"),
    ClientMethods = __webpack_require__(/*! ./client-methods */ "./node_modules/@cliqz-oss/firefox-client/lib/client-methods.js");

module.exports = JSObject;

function JSObject(client, obj) {
  this.initialize(client, obj.actor);
  this.obj = obj;
}

JSObject.prototype = extend(ClientMethods, {
  type: "object",

  get class() {
    return this.obj.class;
  },

  get name() {
    return this.obj.name;
  },

  get displayName() {
    return this.obj.displayName;
  },

  ownPropertyNames: function(cb) {
    this.request('ownPropertyNames', function(resp) {
      return resp.ownPropertyNames;
    }, cb);
  },

  ownPropertyDescriptor: function(name, cb) {
    this.request('property', { name: name }, function(resp) {
      return this.transformDescriptor(resp.descriptor);
    }.bind(this), cb);
  },

  ownProperties: function(cb) {
    this.request('prototypeAndProperties', function(resp) {
      return this.transformProperties(resp.ownProperties);
    }.bind(this), cb);
  },

  prototype: function(cb) {
    this.request('prototype', function(resp) {
      return this.createJSObject(resp.prototype);
    }.bind(this), cb);
  },

  ownPropertiesAndPrototype: function(cb) {
    this.request('prototypeAndProperties', function(resp) {
      resp.ownProperties = this.transformProperties(resp.ownProperties);
      resp.safeGetterValues = this.transformGetters(resp.safeGetterValues);
      resp.prototype = this.createJSObject(resp.prototype);

      return resp;
    }.bind(this), cb);
  },

  /* helpers */
  transformProperties: function(props) {
    var transformed = {};
    for (var prop in props) {
      transformed[prop] = this.transformDescriptor(props[prop]);
    }
    return transformed;
  },

  transformGetters: function(getters) {
    var transformed = {};
    for (var prop in getters) {
      transformed[prop] = this.transformGetter(getters[prop]);
    }
    return transformed;
  },

  transformDescriptor: function(descriptor) {
    descriptor.value = this.createJSObject(descriptor.value);
    return descriptor;
  },

  transformGetter: function(getter) {
    return {
      value: this.createJSObject(getter.getterValue),
      prototypeLevel: getter.getterPrototypeLevel,
      enumerable: getter.enumerable,
      writable: getter.writable
    }
  }
})

/***/ }),

/***/ "./node_modules/@cliqz-oss/firefox-client/lib/memory.js":
/*!**************************************************************!*\
  !*** ./node_modules/@cliqz-oss/firefox-client/lib/memory.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var extend = __webpack_require__(/*! ./extend */ "./node_modules/@cliqz-oss/firefox-client/lib/extend.js"),
    ClientMethods = __webpack_require__(/*! ./client-methods */ "./node_modules/@cliqz-oss/firefox-client/lib/client-methods.js");

module.exports = Memory;

function Memory(client, actor) {
  this.initialize(client, actor);
}

Memory.prototype = extend(ClientMethods, {
  measure: function(cb) {
    this.request('measure', function (err, resp) {
      cb(err, resp);
    });
  }
})


/***/ }),

/***/ "./node_modules/@cliqz-oss/firefox-client/lib/network.js":
/*!***************************************************************!*\
  !*** ./node_modules/@cliqz-oss/firefox-client/lib/network.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var extend = __webpack_require__(/*! ./extend */ "./node_modules/@cliqz-oss/firefox-client/lib/extend.js");
var ClientMethods = __webpack_require__(/*! ./client-methods */ "./node_modules/@cliqz-oss/firefox-client/lib/client-methods.js");

module.exports = Network;

function Network(client, actor) {
  this.initialize(client, actor);

  this.on("networkEvent", this.onNetworkEvent.bind(this));
}

Network.prototype = extend(ClientMethods, {
  types: ["NetworkActivity"],

  startLogging: function(cb) {
    this.request('startListeners', { listeners: this.types }, cb);
  },

  stopLogging: function(cb) {
    this.request('stopListeners', { listeners: this.types }, cb);
  },

  onNetworkEvent: function(event) {
    var networkEvent = new NetworkEvent(this.client, event.eventActor);

    this.emit("network-event", networkEvent);
  },

  sendHTTPRequest: function(request, cb) {
    this.request('sendHTTPRequest', { request: request }, function(resp) {
      return new NetworkEvent(this.client, resp.eventActor);
    }.bind(this), cb);
  }
})

function NetworkEvent(client, event) {
  this.initialize(client, event.actor);
  this.event = event;

  this.on("networkEventUpdate", this.onUpdate.bind(this));
}

NetworkEvent.prototype = extend(ClientMethods, {
  get url() {
   return this.event.url;
  },

  get method() {
    return this.event.method;
  },

  get isXHR() {
    return this.event.isXHR;
  },

  getRequestHeaders: function(cb) {
    this.request('getRequestHeaders', cb);
  },

  getRequestCookies: function(cb) {
    this.request('getRequestCookies', this.pluck('cookies'), cb);
  },

  getRequestPostData: function(cb) {
    this.request('getRequestPostData', cb);
  },

  getResponseHeaders: function(cb) {
    this.request('getResponseHeaders', cb);
  },

  getResponseCookies: function(cb) {
    this.request('getResponseCookies', this.pluck('cookies'), cb);
  },

  getResponseContent: function(cb) {
    this.request('getResponseContent', cb);
  },

  getEventTimings: function(cb) {
    this.request('getEventTimings', cb);
  },

  onUpdate: function(event) {
    var types = {
      "requestHeaders": "request-headers",
      "requestCookies": "request-cookies",
      "requestPostData": "request-postdata",
      "responseStart": "response-start",
      "responseHeaders": "response-headers",
      "responseCookies": "response-cookies",
      "responseContent": "response-content",
      "eventTimings": "event-timings"
    }

    var type = types[event.updateType];
    delete event.updateType;

    this.emit(type, event);
  }
})






/***/ }),

/***/ "./node_modules/@cliqz-oss/firefox-client/lib/simulator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@cliqz-oss/firefox-client/lib/simulator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var extend = __webpack_require__(/*! ./extend */ "./node_modules/@cliqz-oss/firefox-client/lib/extend.js"),
    ClientMethods = __webpack_require__(/*! ./client-methods */ "./node_modules/@cliqz-oss/firefox-client/lib/client-methods.js"),
    Tab = __webpack_require__(/*! ./tab */ "./node_modules/@cliqz-oss/firefox-client/lib/tab.js");

module.exports = SimulatorApps;

function SimulatorApps(client, actor) {
  this.initialize(client, actor);
}

SimulatorApps.prototype = extend(ClientMethods, {
  listApps: function(cb) {
    this.request('listApps', function(resp) {
      var apps = [];
      for (var url in resp.apps) {
        var app = resp.apps[url];
        apps.push(new Tab(this.client, app));
      }
      return apps;
    }.bind(this), cb);
  }
})


/***/ }),

/***/ "./node_modules/@cliqz-oss/firefox-client/lib/stylesheets.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@cliqz-oss/firefox-client/lib/stylesheets.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var extend = __webpack_require__(/*! ./extend */ "./node_modules/@cliqz-oss/firefox-client/lib/extend.js");
var ClientMethods = __webpack_require__(/*! ./client-methods */ "./node_modules/@cliqz-oss/firefox-client/lib/client-methods.js");

module.exports = StyleSheets;

function StyleSheets(client, actor) {
  this.initialize(client, actor);
}

StyleSheets.prototype = extend(ClientMethods, {
  getStyleSheets: function(cb) {
    this.request('getStyleSheets', function(resp) {
      return resp.styleSheets.map(function(sheet) {
        return new StyleSheet(this.client, sheet);
      }.bind(this));
    }.bind(this), cb);
  },

  addStyleSheet: function(text, cb) {
    this.request('addStyleSheet', { text: text }, function(resp) {
      return new StyleSheet(this.client, resp.styleSheet);
    }.bind(this), cb);
  }
})

function StyleSheet(client, sheet) {
  this.initialize(client, sheet.actor);
  this.sheet = sheet;

  this.on("propertyChange", this.onPropertyChange.bind(this));
}

StyleSheet.prototype = extend(ClientMethods, {
  get href() {
    return this.sheet.href;
  },

  get disabled() {
    return this.sheet.disabled;
  },

  get ruleCount() {
    return this.sheet.ruleCount;
  },

  onPropertyChange: function(event) {
    this.sheet[event.property] = event.value;
    this.emit(event.property + "-changed", event.value);
  },

  toggleDisabled: function(cb) {
    this.request('toggleDisabled', function(err, resp) {
      if (err) return cb(err);

      this.sheet.disabled = resp.disabled;
      cb(null, resp.disabled);
    }.bind(this));
  },

  getOriginalSources: function(cb) {
    this.request('getOriginalSources', function(resp) {
      if (resp.originalSources === null) {
        return [];
      }
      return resp.originalSources.map(function(form) {
        return new OriginalSource(this.client, form);
      }.bind(this));
    }.bind(this), cb);
  },

  getMediaRules: function(cb) {
    this.request('getMediaRules', function(resp) {
      return resp.mediaRules.map(function(form) {
        return new MediaRule(this.client, form);
      }.bind(this));
    }.bind(this), cb);
  },

  update: function(text, cb) {
    this.request('update', { text: text, transition: true }, cb);
  },

  getText: function(cb) {
    this.request('getText', this.pluck('text'), cb);
  }
});

function MediaRule(client, rule) {
  this.initialize(client, rule.actor);
  this.rule = rule;

  this.on("matchesChange", function(event) {
    this.emit("matches-change", event.matches);
  }.bind(this));
}
MediaRule.prototype = extend(ClientMethods, {
  get mediaText() {
    return this.rule.mediaText;
  },

  get matches() {
    return this.rule.matches;
  }
})

function OriginalSource(client, source) {
  console.log("source", source);
  this.initialize(client, source.actor);

  this.source = source;
}

OriginalSource.prototype = extend(ClientMethods, {
  get url()  {
    return this.source.url
  },

  getText: function(cb) {
    this.request('getText', this.pluck('text'), cb);
  }
});


/***/ }),

/***/ "./node_modules/@cliqz-oss/firefox-client/lib/tab.js":
/*!***********************************************************!*\
  !*** ./node_modules/@cliqz-oss/firefox-client/lib/tab.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var extend = __webpack_require__(/*! ./extend */ "./node_modules/@cliqz-oss/firefox-client/lib/extend.js"),
    ClientMethods = __webpack_require__(/*! ./client-methods */ "./node_modules/@cliqz-oss/firefox-client/lib/client-methods.js"),
    Console = __webpack_require__(/*! ./console */ "./node_modules/@cliqz-oss/firefox-client/lib/console.js"),
    Memory = __webpack_require__(/*! ./memory */ "./node_modules/@cliqz-oss/firefox-client/lib/memory.js"),
    DOM = __webpack_require__(/*! ./dom */ "./node_modules/@cliqz-oss/firefox-client/lib/dom.js"),
    Network = __webpack_require__(/*! ./network */ "./node_modules/@cliqz-oss/firefox-client/lib/network.js"),
    StyleSheets = __webpack_require__(/*! ./stylesheets */ "./node_modules/@cliqz-oss/firefox-client/lib/stylesheets.js");

module.exports = Tab;

function Tab(client, tab) {
  this.initialize(client, tab.actor);

  this.tab = tab;
  this.updateInfo(tab);

  this.on("tabNavigated", this.onTabNavigated.bind(this));
}

Tab.prototype = extend(ClientMethods, {
  updateInfo: function(form) {
    this.url = form.url;
    this.title = form.title;
  },

  get StyleSheets() {
    if (!this._StyleSheets) {
      this._StyleSheets = new StyleSheets(this.client, this.tab.styleSheetsActor);
    }
    return this._StyleSheets;
  },

  get DOM() {
    if (!this._DOM) {
      this._DOM = new DOM(this.client, this.tab.inspectorActor);
    }
    return this._DOM;
  },

  get Network() {
    if (!this._Network) {
      this._Network = new Network(this.client, this.tab.consoleActor);
    }
    return this._Network;
  },

  get Console() {
    if (!this._Console) {
      this._Console = new Console(this.client, this.tab.consoleActor);
    }
    return this._Console;
  },

  get Memory() {
    if (!this._Memory) {
      this._Memory = new Memory(this.client, this.tab.memoryActor);
    }
    return this._Memory;
  },

  onTabNavigated: function(event) {
    if (event.state == "start") {
      this.emit("before-navigate", { url: event.url });
    }
    else if (event.state == "stop") {
      this.updateInfo(event);

      this.emit("navigate", { url: event.url, title: event.title });
    }
  },

  attach: function(cb) {
    this.request("attach", cb);
  },

  detach: function(cb) {
    this.request("detach", cb);
  },

  reload: function(cb) {
    this.request("reload", cb);
  },

  navigateTo: function(url, cb) {
    this.request("navigateTo", { url: url }, cb);
  }
})


/***/ }),

/***/ "./node_modules/@cliqz-oss/firefox-client/lib/webapps.js":
/*!***************************************************************!*\
  !*** ./node_modules/@cliqz-oss/firefox-client/lib/webapps.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var extend = __webpack_require__(/*! ./extend */ "./node_modules/@cliqz-oss/firefox-client/lib/extend.js"),
    ClientMethods = __webpack_require__(/*! ./client-methods */ "./node_modules/@cliqz-oss/firefox-client/lib/client-methods.js"),
    Tab = __webpack_require__(/*! ./tab */ "./node_modules/@cliqz-oss/firefox-client/lib/tab.js"),
    fs = __webpack_require__(/*! fs */ "fs"),
    spawn = __webpack_require__(/*! child_process */ "child_process").spawn;

module.exports = Webapps;

var CHUNK_SIZE = 20480;

// Also dispatch appOpen/appClose, appInstall/appUninstall events
function Webapps(client, tab) {
  this.initialize(client, tab.webappsActor);
}

Webapps.prototype = extend(ClientMethods, {
  watchApps: function(cb) {
    this.request("watchApps", cb);
  },
  unwatchApps: function(cb) {
    this.request("unwatchApps", cb);
  },
  launch: function(manifestURL, cb) {
    this.request("launch", {manifestURL: manifestURL}, cb);
  },
  close: function(manifestURL, cb) {
    this.request("close", {manifestURL: manifestURL}, cb);
  },
  getInstalledApps: function(cb) {
    this.request("getAll", function (err, resp) {
      if (err) {
        cb(err);
        return;
      }
      cb(null, resp.apps);
    });
  },
  listRunningApps: function(cb) {
    this.request("listRunningApps", function (err, resp) {
      if (err) {
        cb(err);
        return;
      }
      cb(null, resp.apps);
    });
  },
  getApp: function(manifestURL, cb) {
    this.request("getAppActor", {manifestURL: manifestURL}, (function (err, resp) {
      if (err) {
        cb(err);
        return;
      }
      var actor = new Tab(this.client, resp.actor);
      cb(null, actor);
    }).bind(this));
  },
  installHosted: function(options, cb) {
    this.request(
      "install",
      { appId: options.appId,
        metadata: options.metadata,
        manifest: options.manifest },
      function (err, resp) {
        if (err || resp.error) {
          cb(err || resp.error);
          return;
        }
        cb(null, resp.appId);
      });
  },
  _upload: function (path, cb) {
    // First create an upload actor
    this.request("uploadPackage", function (err, resp) {
      var actor = resp.actor;
      fs.readFile(path, function(err, data) {
        chunk(actor, data);
      });
    });
    // Send push the file chunk by chunk
    var self = this;
    var step = 0;
    function chunk(actor, data) {
      var i = step++ * CHUNK_SIZE;
      var m = Math.min(i + CHUNK_SIZE, data.length);
      var c = "";
      for(; i < m; i++)
        c += String.fromCharCode(data[i]);
      var message = {
        to: actor,
        type: "chunk",
        chunk: c
      };
      self.client.makeRequest(message, function(resp) {
        if (resp.error) {
          cb(resp);
          return;
        }
        if (i < data.length) {
          setTimeout(chunk, 0, actor, data);
        } else {
          done(actor);
        }
      });
    }
    // Finally close the upload
    function done(actor) {
      var message = {
        to: actor,
        type: "done"
      };
      self.client.makeRequest(message, function(resp) {
        if (resp.error) {
          cb(resp);
        } else {
          cb(null, actor, cleanup.bind(null, actor));
        }
      });
    }

    // Remove the temporary uploaded file from the server:
    function cleanup(actor) {
      var message = {
        to: actor,
        type: "remove"
      };
      self.client.makeRequest(message, function () {});
    }
  },
  installPackaged: function(path, appId, cb) {
    this._upload(path, (function (err, actor, cleanup) {
      this.request("install", {appId: appId, upload: actor},
        function (err, resp) {
          if (err) {
            cb(err);
            return;
          }
          cb(null, resp.appId);
          cleanup();
        });
    }).bind(this));
  },
  installPackagedWithADB: function(path, appId, cb) {
    var self = this;
    // First ensure the temporary folder exists
    function createTemporaryFolder() {
      var c = spawn("adb", ["shell", "mkdir -p /data/local/tmp/b2g/" + appId], {stdio:"inherit"});
      c.on("close", uploadPackage);
    }
    // then upload the package to the temporary directory
    function uploadPackage() {
      var child = spawn("adb", ["push", path, "/data/local/tmp/b2g/" + appId + "/application.zip"], {stdio:"inherit"});
      child.on("close", installApp);
    }
    // finally order the webapps actor to install the app
    function installApp() {
      self.request("install", {appId: appId},
        function (err, resp) {
          if (err) {
            cb(err);
            return;
          }
          cb(null, resp.appId);
        });
    }
    createTemporaryFolder();
  },
  uninstall: function(manifestURL, cb) {
    this.request("uninstall", {manifestURL: manifestURL}, cb);
  }
})


/***/ }),

/***/ "./node_modules/@cliqz-oss/node-firefox-connect/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@cliqz-oss/node-firefox-connect/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// See https://github.com/jshint/jshint/issues/1747 for context
/* global -Promise */
var Promise = __webpack_require__(/*! es6-promise */ "es6-promise").Promise;
var FirefoxClient = __webpack_require__(/*! @cliqz-oss/firefox-client */ "./node_modules/@cliqz-oss/firefox-client/index.js");

module.exports = connect;

function connect(port) {
  return new Promise(function(resolve, reject) {

    var client = new FirefoxClient();
    client.connect(port, function(err) {
      if (err) {
        reject(err);
      }
      resolve(client);
    });

    client.on('error', reject);
    client.on('timeout', reject);
  });
}


/***/ }),

/***/ "./src/cmd/build.js":
/*!**************************!*\
  !*** ./src/cmd/build.js ***!
  \**************************/
/*! exports provided: safeFileName, getDefaultLocalizedName, defaultPackageCreator, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__filename) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "safeFileName", function() { return safeFileName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultLocalizedName", function() { return getDefaultLocalizedName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultPackageCreator", function() { return defaultPackageCreator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return build; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mz__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mz */ "mz");
/* harmony import */ var mz__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mz__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var parse_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! parse-json */ "parse-json");
/* harmony import */ var parse_json__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(parse_json__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var strip_json_comments__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! strip-json-comments */ "strip-json-comments");
/* harmony import */ var strip_json_comments__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(strip_json_comments__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var event_to_promise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! event-to-promise */ "event-to-promise");
/* harmony import */ var event_to_promise__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(event_to_promise__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _watcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../watcher */ "./src/watcher.js");
/* harmony import */ var _util_zip_dir__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../util/zip-dir */ "./src/util/zip-dir.js");
/* harmony import */ var _util_manifest__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../util/manifest */ "./src/util/manifest.js");
/* harmony import */ var _util_artifacts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../util/artifacts */ "./src/util/artifacts.js");
/* harmony import */ var _util_logger__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../util/logger */ "./src/util/logger.js");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../errors */ "./src/errors.js");
/* harmony import */ var _util_file_filter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../util/file-filter */ "./src/util/file-filter.js");












 // Import flow types.

const log = Object(_util_logger__WEBPACK_IMPORTED_MODULE_10__["createLogger"])(__filename);
function safeFileName(name) {
  return name.toLowerCase().replace(/[^a-z0-9.-]+/g, '_');
} // defaultPackageCreator types and implementation.

async function getDefaultLocalizedName({
  messageFile,
  manifestData
}) {
  let messageData;
  let messageContents;
  let extensionName = manifestData.name;

  try {
    messageContents = await mz__WEBPACK_IMPORTED_MODULE_2__["fs"].readFile(messageFile, {
      encoding: 'utf-8'
    });
  } catch (error) {
    throw new _errors__WEBPACK_IMPORTED_MODULE_11__["UsageError"](`Error reading messages.json file at ${messageFile}: ${error}`);
  }

  try {
    messageData = parse_json__WEBPACK_IMPORTED_MODULE_3___default()(strip_json_comments__WEBPACK_IMPORTED_MODULE_4___default()(messageContents), messageFile);
  } catch (error) {
    throw new _errors__WEBPACK_IMPORTED_MODULE_11__["UsageError"](`Error parsing messages.json ${error}`);
  }

  extensionName = manifestData.name.replace(/__MSG_([A-Za-z0-9@_]+?)__/g, (match, messageName) => {
    if (!(messageData[messageName] && messageData[messageName].message)) {
      const error = new _errors__WEBPACK_IMPORTED_MODULE_11__["UsageError"](`The locale file ${messageFile} ` + `is missing key: ${messageName}`);
      throw error;
    } else {
      return messageData[messageName].message;
    }
  });
  return Promise.resolve(extensionName);
}
async function defaultPackageCreator({
  manifestData,
  sourceDir,
  fileFilter,
  artifactsDir,
  overwriteDest,
  showReadyMessage
}, {
  eventToPromise = event_to_promise__WEBPACK_IMPORTED_MODULE_5___default.a
} = {}) {
  let id;

  if (manifestData) {
    id = Object(_util_manifest__WEBPACK_IMPORTED_MODULE_8__["getManifestId"])(manifestData);
    log.debug(`Using manifest id=${id || '[not specified]'}`);
  } else {
    manifestData = await Object(_util_manifest__WEBPACK_IMPORTED_MODULE_8__["default"])(sourceDir);
  }

  const buffer = await Object(_util_zip_dir__WEBPACK_IMPORTED_MODULE_7__["zipDir"])(sourceDir, {
    filter: (...args) => fileFilter.wantFile(...args)
  });
  let extensionName = manifestData.name;

  if (manifestData.default_locale) {
    const messageFile = path__WEBPACK_IMPORTED_MODULE_0___default.a.join(sourceDir, '_locales', manifestData.default_locale, 'messages.json');
    log.debug('Manifest declared default_locale, localizing extension name');
    extensionName = await getDefaultLocalizedName({
      messageFile,
      manifestData
    });
  }

  const packageName = safeFileName(`${extensionName}-${manifestData.version}.zip`);
  const extensionPath = path__WEBPACK_IMPORTED_MODULE_0___default.a.join(artifactsDir, packageName); // Added 'wx' flags to avoid overwriting of existing package.

  let stream = Object(fs__WEBPACK_IMPORTED_MODULE_1__["createWriteStream"])(extensionPath, {
    flags: 'wx'
  });
  stream.write(buffer, () => stream.end());

  try {
    await eventToPromise(stream, 'close');
  } catch (error) {
    if (!Object(_errors__WEBPACK_IMPORTED_MODULE_11__["isErrorWithCode"])('EEXIST', error)) {
      throw error;
    }

    if (!overwriteDest) {
      throw new _errors__WEBPACK_IMPORTED_MODULE_11__["UsageError"](`Extension exists at the destination path: ${extensionPath}\n` + 'Use --overwrite-dest to enable overwriting.');
    }

    log.info(`Destination exists, overwriting: ${extensionPath}`);
    stream = Object(fs__WEBPACK_IMPORTED_MODULE_1__["createWriteStream"])(extensionPath);
    stream.write(buffer, () => stream.end());
    await eventToPromise(stream, 'close');
  }

  if (showReadyMessage) {
    log.info(`Your web extension is ready: ${extensionPath}`);
  }

  return {
    extensionPath
  };
} // Build command types and implementation.

async function build({
  sourceDir,
  artifactsDir,
  asNeeded = false,
  overwriteDest = false,
  ignoreFiles = []
}, {
  manifestData,
  createFileFilter = _util_file_filter__WEBPACK_IMPORTED_MODULE_12__["createFileFilter"],
  fileFilter = createFileFilter({
    sourceDir,
    artifactsDir,
    ignoreFiles
  }),
  onSourceChange = _watcher__WEBPACK_IMPORTED_MODULE_6__["default"],
  packageCreator = defaultPackageCreator,
  showReadyMessage = true
} = {}) {
  const rebuildAsNeeded = asNeeded; // alias for `build --as-needed`

  log.info(`Building web extension from ${sourceDir}`);

  const createPackage = () => packageCreator({
    manifestData,
    sourceDir,
    fileFilter,
    artifactsDir,
    overwriteDest,
    showReadyMessage
  });

  await Object(_util_artifacts__WEBPACK_IMPORTED_MODULE_9__["prepareArtifactsDir"])(artifactsDir);
  const result = await createPackage();

  if (rebuildAsNeeded) {
    log.info('Rebuilding when files change...');
    onSourceChange({
      sourceDir,
      artifactsDir,
      onChange: () => {
        return createPackage().catch(error => {
          log.error(error.stack);
          throw error;
        });
      },
      shouldWatchFile: (...args) => fileFilter.wantFile(...args)
    });
  }

  return result;
}
/* WEBPACK VAR INJECTION */}.call(this, "src/cmd/build.js"))

/***/ }),

/***/ "./src/cmd/docs.js":
/*!*************************!*\
  !*** ./src/cmd/docs.js ***!
  \*************************/
/*! exports provided: url, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__filename) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "url", function() { return url; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return docs; });
/* harmony import */ var opn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! opn */ "opn");
/* harmony import */ var opn__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(opn__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/logger */ "./src/util/logger.js");


const log = Object(_util_logger__WEBPACK_IMPORTED_MODULE_1__["createLogger"])(__filename);
const url = 'https://developer.mozilla.org/en-US/Add-ons' + '/WebExtensions/Getting_started_with_web-ext';
function docs(params, {
  openUrl = opn__WEBPACK_IMPORTED_MODULE_0___default.a
} = {}) {
  return new Promise((resolve, reject) => {
    openUrl(url, error => {
      if (error) {
        log.debug(`Encountered an error while opening URL ${url}`, error);
        reject(error);
      } else {
        resolve();
      }
    });
  });
}
/* WEBPACK VAR INJECTION */}.call(this, "src/cmd/docs.js"))

/***/ }),

/***/ "./src/cmd/index.js":
/*!**************************!*\
  !*** ./src/cmd/index.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// This module exports entry points for all supported commands. For performance
// reasons (faster start-up), the implementations are not statically imported
// at the top of the file, but lazily loaded in the (exported) functions.
// The latter would slow down start-up by several seconds, as seen in #1302 .
async function build(params, options) {
  // TODO: use async import instead of require - https://github.com/mozilla/web-ext/issues/1306
  const {
    default: runCommand
  } = __webpack_require__(/*! ./build */ "./src/cmd/build.js");

  return runCommand(params, options);
}

async function lint(params, options) {
  // TODO: use async import instead of require - https://github.com/mozilla/web-ext/issues/1306
  const {
    default: runCommand
  } = __webpack_require__(/*! ./lint */ "./src/cmd/lint.js");

  return runCommand(params, options);
}

async function run(params, options) {
  // TODO: use async import instead of require - https://github.com/mozilla/web-ext/issues/1306
  const {
    default: runCommand
  } = __webpack_require__(/*! ./run */ "./src/cmd/run.js");

  return runCommand(params, options);
}

async function sign(params, options) {
  // TODO: use async import instead of require - https://github.com/mozilla/web-ext/issues/1306
  const {
    default: runCommand
  } = __webpack_require__(/*! ./sign */ "./src/cmd/sign.js");

  return runCommand(params, options);
}

async function docs(params, options) {
  // TODO: use async import instead of require - https://github.com/mozilla/web-ext/issues/1306
  const {
    default: runCommand
  } = __webpack_require__(/*! ./docs */ "./src/cmd/docs.js");

  return runCommand(params, options);
}

/* harmony default export */ __webpack_exports__["default"] = ({
  build,
  lint,
  run,
  sign,
  docs
});

/***/ }),

/***/ "./src/cmd/lint.js":
/*!*************************!*\
  !*** ./src/cmd/lint.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__filename) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return lint; });
/* harmony import */ var addons_linter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! addons-linter */ "addons-linter");
/* harmony import */ var addons_linter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(addons_linter__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/logger */ "./src/util/logger.js");
/* harmony import */ var _util_file_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/file-filter */ "./src/util/file-filter.js");


 // import flow types

const log = Object(_util_logger__WEBPACK_IMPORTED_MODULE_1__["createLogger"])(__filename); // Define the needed 'addons-linter' module flow types.

function lint({
  artifactsDir,
  boring,
  ignoreFiles,
  metadata,
  output,
  pretty,
  sourceDir,
  selfHosted,
  verbose,
  warningsAsErrors
}, {
  createLinter = addons_linter__WEBPACK_IMPORTED_MODULE_0__["createInstance"],
  createFileFilter = _util_file_filter__WEBPACK_IMPORTED_MODULE_2__["createFileFilter"],
  shouldExitProgram = true
} = {}) {
  const fileFilter = createFileFilter({
    sourceDir,
    ignoreFiles,
    artifactsDir
  });
  log.debug(`Running addons-linter on ${sourceDir}`);
  const linter = createLinter({
    config: {
      logLevel: verbose ? 'debug' : 'fatal',
      stack: Boolean(verbose),
      pretty,
      warningsAsErrors,
      metadata,
      output,
      boring,
      selfHosted,
      shouldScanFile: fileName => fileFilter.wantFile(fileName),
      // This mimics the first command line argument from yargs,
      // which should be the directory to the extension.
      _: [sourceDir]
    },
    runAsBinary: shouldExitProgram
  });
  return linter.run();
}
/* WEBPACK VAR INJECTION */}.call(this, "src/cmd/lint.js"))

/***/ }),

/***/ "./src/cmd/run.js":
/*!************************!*\
  !*** ./src/cmd/run.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__filename) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return run; });
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _build__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./build */ "./src/cmd/build.js");
/* harmony import */ var _util_desktop_notifier__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/desktop-notifier */ "./src/util/desktop-notifier.js");
/* harmony import */ var _firefox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firefox */ "./src/firefox/index.js");
/* harmony import */ var _firefox_remote__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../firefox/remote */ "./src/firefox/remote.js");
/* harmony import */ var _util_logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/logger */ "./src/util/logger.js");
/* harmony import */ var _util_manifest__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/manifest */ "./src/util/manifest.js");
/* harmony import */ var _extension_runners__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../extension-runners */ "./src/extension-runners/index.js");







 // Import objects that are only used as Flow types.

const log = Object(_util_logger__WEBPACK_IMPORTED_MODULE_5__["createLogger"])(__filename); // Run command types and implementation.

async function run({
  artifactsDir,
  browserConsole = false,
  pref,
  firefox,
  firefoxProfile,
  keepProfileChanges = false,
  ignoreFiles,
  noInput = false,
  noReload = false,
  preInstall = false,
  sourceDir,
  startUrl,
  target,
  // Android CLI options.
  adbBin,
  adbHost,
  adbPort,
  adbDevice,
  firefoxApk,
  args
}, {
  buildExtension = _build__WEBPACK_IMPORTED_MODULE_1__["default"],
  desktopNotifications = _util_desktop_notifier__WEBPACK_IMPORTED_MODULE_2__["showDesktopNotification"],
  firefoxApp = _firefox__WEBPACK_IMPORTED_MODULE_3__,
  firefoxClient = _firefox_remote__WEBPACK_IMPORTED_MODULE_4__["connectWithMaxRetries"],
  reloadStrategy = _extension_runners__WEBPACK_IMPORTED_MODULE_7__["defaultReloadStrategy"],
  MultiExtensionRunner = _extension_runners__WEBPACK_IMPORTED_MODULE_7__["MultiExtensionRunner"],
  getValidatedManifest = _util_manifest__WEBPACK_IMPORTED_MODULE_6__["default"]
} = {}) {
  log.info(`Running web extension from ${sourceDir}`);

  if (preInstall) {
    log.info('Disabled auto-reloading because it\'s not possible with ' + '--pre-install');
    noReload = true;
  } // Create an alias for --pref since it has been transformed into an
  // object containing one or more preferences.


  const customPrefs = pref;
  const manifestData = await getValidatedManifest(sourceDir);
  const runners = [];
  const commonRunnerParams = {
    // Common options.
    extensions: [{
      sourceDir,
      manifestData
    }],
    keepProfileChanges,
    startUrl,
    args,
    desktopNotifications
  };

  if (!target || target.length === 0 || target.includes('firefox-desktop')) {
    const firefoxDesktopRunnerParams = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, commonRunnerParams, {
      // Firefox specific CLI options.
      firefoxBinary: firefox,
      profilePath: firefoxProfile,
      customPrefs,
      browserConsole,
      preInstall,
      // Firefox runner injected dependencies.
      firefoxApp,
      firefoxClient
    });

    const firefoxDesktopRunner = await Object(_extension_runners__WEBPACK_IMPORTED_MODULE_7__["createExtensionRunner"])({
      target: 'firefox-desktop',
      params: firefoxDesktopRunnerParams
    });
    runners.push(firefoxDesktopRunner);
  }

  if (target && target.includes('firefox-android')) {
    const firefoxAndroidRunnerParams = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, commonRunnerParams, {
      // Firefox specific CLI options.
      profilePath: firefoxProfile,
      customPrefs,
      browserConsole,
      preInstall,
      firefoxApk,
      adbDevice,
      adbHost,
      adbPort,
      adbBin,
      // Injected dependencies.
      firefoxApp,
      firefoxClient,
      desktopNotifications: _util_desktop_notifier__WEBPACK_IMPORTED_MODULE_2__["showDesktopNotification"],
      buildSourceDir: (extensionSourceDir, tmpArtifactsDir) => {
        return buildExtension({
          sourceDir: extensionSourceDir,
          ignoreFiles,
          asNeeded: false,
          // Use a separate temporary directory for building the extension zip file
          // that we are going to upload on the android device.
          artifactsDir: tmpArtifactsDir
        }, {
          // Suppress the message usually logged by web-ext build.
          showReadyMessage: false
        });
      }
    });

    const firefoxAndroidRunner = await Object(_extension_runners__WEBPACK_IMPORTED_MODULE_7__["createExtensionRunner"])({
      target: 'firefox-android',
      params: firefoxAndroidRunnerParams
    });
    runners.push(firefoxAndroidRunner);
  }

  const extensionRunner = new MultiExtensionRunner({
    desktopNotifications,
    runners
  });
  await extensionRunner.run();

  if (noReload) {
    log.info('Automatic extension reloading has been disabled');
  } else {
    log.info('The extension will reload if any source file changes');
    reloadStrategy({
      extensionRunner,
      sourceDir,
      artifactsDir,
      ignoreFiles,
      noInput
    });
  }

  return extensionRunner;
}
/* WEBPACK VAR INJECTION */}.call(this, "src/cmd/run.js"))

/***/ }),

/***/ "./src/cmd/sign.js":
/*!*************************!*\
  !*** ./src/cmd/sign.js ***!
  \*************************/
/*! exports provided: extensionIdFile, default, getIdFromSourceDir, saveIdToSourceDir */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__filename) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extensionIdFile", function() { return extensionIdFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return sign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIdFromSourceDir", function() { return getIdFromSourceDir; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveIdToSourceDir", function() { return saveIdToSourceDir; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mz__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mz */ "mz");
/* harmony import */ var mz__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mz__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var sign_addon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sign-addon */ "sign-addon");
/* harmony import */ var sign_addon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sign_addon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _build__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./build */ "./src/cmd/build.js");
/* harmony import */ var _util_manifest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/manifest */ "./src/util/manifest.js");
/* harmony import */ var _util_temp_dir__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/temp-dir */ "./src/util/temp-dir.js");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../errors */ "./src/errors.js");
/* harmony import */ var _util_artifacts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../util/artifacts */ "./src/util/artifacts.js");
/* harmony import */ var _util_logger__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../util/logger */ "./src/util/logger.js");









const log = Object(_util_logger__WEBPACK_IMPORTED_MODULE_8__["createLogger"])(__filename);
const defaultAsyncFsReadFile = mz__WEBPACK_IMPORTED_MODULE_1__["fs"].readFile.bind(mz__WEBPACK_IMPORTED_MODULE_1__["fs"]);
const extensionIdFile = '.web-extension-id'; // Sign command types and implementation.

function sign({
  apiKey,
  apiProxy,
  apiSecret,
  apiUrlPrefix,
  artifactsDir,
  id,
  ignoreFiles = [],
  sourceDir,
  timeout,
  verbose,
  channel
}, {
  build = _build__WEBPACK_IMPORTED_MODULE_3__["default"],
  preValidatedManifest,
  signAddon = sign_addon__WEBPACK_IMPORTED_MODULE_2___default.a
} = {}) {
  return Object(_util_temp_dir__WEBPACK_IMPORTED_MODULE_5__["withTempDir"])(async function (tmpDir) {
    await Object(_util_artifacts__WEBPACK_IMPORTED_MODULE_7__["prepareArtifactsDir"])(artifactsDir);
    let manifestData;

    if (preValidatedManifest) {
      manifestData = preValidatedManifest;
    } else {
      manifestData = await Object(_util_manifest__WEBPACK_IMPORTED_MODULE_4__["default"])(sourceDir);
    }

    const [buildResult, idFromSourceDir] = await Promise.all([build({
      sourceDir,
      ignoreFiles,
      artifactsDir: tmpDir.path()
    }, {
      manifestData,
      showReadyMessage: false
    }), getIdFromSourceDir(sourceDir)]);
    const manifestId = Object(_util_manifest__WEBPACK_IMPORTED_MODULE_4__["getManifestId"])(manifestData);

    if (id && manifestId) {
      throw new _errors__WEBPACK_IMPORTED_MODULE_6__["UsageError"](`Cannot set custom ID ${id} because manifest.json ` + `declares ID ${manifestId}`);
    }

    if (id) {
      log.debug(`Using custom ID declared as --id=${id}`);
    }

    if (manifestId) {
      id = manifestId;
    }

    if (!id && idFromSourceDir) {
      log.info(`Using previously auto-generated extension ID: ${idFromSourceDir}`);
      id = idFromSourceDir;
    }

    if (!id) {
      log.warn('No extension ID specified (it will be auto-generated)');
    }

    const signingResult = await signAddon({
      apiKey,
      apiSecret,
      apiUrlPrefix,
      apiProxy,
      timeout,
      verbose,
      id,
      xpiPath: buildResult.extensionPath,
      version: manifestData.version,
      downloadDir: artifactsDir,
      channel
    });

    if (signingResult.id) {
      await saveIdToSourceDir(sourceDir, signingResult.id);
    } // All information about the downloaded files would have
    // already been logged by signAddon().


    if (signingResult.success) {
      log.info(`Extension ID: ${signingResult.id}`);
      log.info('SUCCESS');
    } else {
      log.info('FAIL');
      throw new _errors__WEBPACK_IMPORTED_MODULE_6__["WebExtError"]('The extension could not be signed');
    }

    return signingResult;
  });
}
async function getIdFromSourceDir(sourceDir, asyncFsReadFile = defaultAsyncFsReadFile) {
  const filePath = path__WEBPACK_IMPORTED_MODULE_0___default.a.join(sourceDir, extensionIdFile);
  let content;

  try {
    content = await asyncFsReadFile(filePath);
  } catch (error) {
    if (Object(_errors__WEBPACK_IMPORTED_MODULE_6__["isErrorWithCode"])('ENOENT', error)) {
      log.debug(`No ID file found at: ${filePath}`);
      return;
    }

    throw error;
  }

  let lines = content.toString().split('\n');
  lines = lines.filter(line => {
    line = line.trim();

    if (line && !line.startsWith('#')) {
      return line;
    }
  });
  const id = lines[0];
  log.debug(`Found extension ID ${id} in ${filePath}`);

  if (!id) {
    throw new _errors__WEBPACK_IMPORTED_MODULE_6__["UsageError"](`No ID found in extension ID file ${filePath}`);
  }

  return id;
}
async function saveIdToSourceDir(sourceDir, id) {
  const filePath = path__WEBPACK_IMPORTED_MODULE_0___default.a.join(sourceDir, extensionIdFile);
  await mz__WEBPACK_IMPORTED_MODULE_1__["fs"].writeFile(filePath, ['# This file was created by https://github.com/mozilla/web-ext', '# Your auto-generated extension ID for addons.mozilla.org is:', id.toString()].join('\n'));
  log.debug(`Saved auto-generated ID ${id} to ${filePath}`);
}
/* WEBPACK VAR INJECTION */}.call(this, "src/cmd/sign.js"))

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! exports provided: applyConfigToArgv, loadJSConfigFile, discoverConfigFiles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__filename) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyConfigToArgv", function() { return applyConfigToArgv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadJSConfigFile", function() { return loadJSConfigFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "discoverConfigFiles", function() { return discoverConfigFiles; });
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! os */ "os");
/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(os__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var require_uncached__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! require-uncached */ "require-uncached");
/* harmony import */ var require_uncached__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(require_uncached__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var camelcase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! camelcase */ "camelcase");
/* harmony import */ var camelcase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(camelcase__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var decamelize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! decamelize */ "decamelize");
/* harmony import */ var decamelize__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(decamelize__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _util_file_exists__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./util/file-exists */ "./src/util/file-exists.js");
/* harmony import */ var _util_logger__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./util/logger */ "./src/util/logger.js");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./errors */ "./src/errors.js");









const log = Object(_util_logger__WEBPACK_IMPORTED_MODULE_7__["createLogger"])(__filename);
function applyConfigToArgv({
  argv,
  argvFromCLI,
  configObject,
  options,
  configFileName
}) {
  let newArgv = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, argv);

  for (const option of Object.keys(configObject)) {
    if (camelcase__WEBPACK_IMPORTED_MODULE_4___default()(option) !== option) {
      throw new _errors__WEBPACK_IMPORTED_MODULE_8__["UsageError"](`The config option "${option}" must be ` + `specified in camel case: "${camelcase__WEBPACK_IMPORTED_MODULE_4___default()(option)}"`);
    } // A config option cannot be a sub-command config
    // object if it is an array.


    if (!Array.isArray(configObject[option]) && typeof options[option] === 'object' && typeof configObject[option] === 'object') {
      // Descend into the nested configuration for a sub-command.
      newArgv = applyConfigToArgv({
        argv: newArgv,
        argvFromCLI,
        configObject: configObject[option],
        options: options[option],
        configFileName
      });
      continue;
    }

    const decamelizedOptName = decamelize__WEBPACK_IMPORTED_MODULE_5___default()(option, '-');

    if (typeof options[decamelizedOptName] !== 'object') {
      throw new _errors__WEBPACK_IMPORTED_MODULE_8__["UsageError"](`The config file at ${configFileName} specified ` + `an unknown option: "${option}"`);
    }

    if (options[decamelizedOptName].type === undefined) {
      // This means yargs option type wasn't not defined correctly
      throw new _errors__WEBPACK_IMPORTED_MODULE_8__["WebExtError"](`Option: ${option} was defined without a type.`);
    }

    const expectedType = options[decamelizedOptName].type === 'count' ? 'number' : options[decamelizedOptName].type;
    const optionType = Array.isArray(configObject[option]) ? 'array' : typeof configObject[option];

    if (optionType !== expectedType) {
      throw new _errors__WEBPACK_IMPORTED_MODULE_8__["UsageError"](`The config file at ${configFileName} specified ` + `the type of "${option}" incorrectly as "${optionType}"` + ` (expected type "${expectedType}")`);
    }

    let defaultValue;

    if (options[decamelizedOptName]) {
      if (options[decamelizedOptName].default !== undefined) {
        defaultValue = options[decamelizedOptName].default;
      } else if (expectedType === 'boolean') {
        defaultValue = false;
      }
    } // This is our best effort (without patching yargs) to detect
    // if a value was set on the CLI instead of in the config.
    // It looks for a default value and if the argv value is
    // different, it assumes that the value was configured on the CLI.


    const wasValueSetOnCLI = typeof argvFromCLI[option] !== 'undefined' && argvFromCLI[option] !== defaultValue;

    if (wasValueSetOnCLI) {
      log.debug(`Favoring CLI: ${option}=${argvFromCLI[option]} over ` + `configuration: ${option}=${configObject[option]}`);
      newArgv[option] = argvFromCLI[option];
      continue;
    }

    newArgv[option] = configObject[option];
    const coerce = options[decamelizedOptName].coerce;

    if (coerce) {
      log.debug(`Calling coerce() on configured value for ${option}`);
      newArgv[option] = coerce(newArgv[option]);
    }
  }

  return newArgv;
}
function loadJSConfigFile(filePath) {
  const resolvedFilePath = path__WEBPACK_IMPORTED_MODULE_2___default.a.resolve(filePath);
  log.debug(`Loading JS config file: "${filePath}" ` + `(resolved to "${resolvedFilePath}")`);
  let configObject;

  try {
    configObject = require_uncached__WEBPACK_IMPORTED_MODULE_3___default()(resolvedFilePath);
  } catch (error) {
    log.debug('Handling error:', error);
    throw new _errors__WEBPACK_IMPORTED_MODULE_8__["UsageError"](`Cannot read config file: ${resolvedFilePath}\n` + `Error: ${error.message}`);
  }

  if (filePath.endsWith('package.json')) {
    log.debug('Looking for webExt key inside package.json file');
    configObject = configObject.webExt || {};
  }

  if (Object.keys(configObject).length === 0) {
    log.debug(`Config file ${resolvedFilePath} did not define any options. ` + 'Did you set module.exports = {...}?');
  }

  return configObject;
}
async function discoverConfigFiles({
  getHomeDir = os__WEBPACK_IMPORTED_MODULE_1___default.a.homedir
} = {}) {
  const magicConfigName = 'web-ext-config.js'; // Config files will be loaded in this order.

  const possibleConfigs = [// Look for a magic hidden config (preceded by dot) in home dir.
  path__WEBPACK_IMPORTED_MODULE_2___default.a.join(getHomeDir(), `.${magicConfigName}`), // Look for webExt key inside package.json file
  path__WEBPACK_IMPORTED_MODULE_2___default.a.join(process.cwd(), 'package.json'), // Look for a magic config in the current working directory.
  path__WEBPACK_IMPORTED_MODULE_2___default.a.join(process.cwd(), magicConfigName)];
  const configs = await Promise.all(possibleConfigs.map(async fileName => {
    const resolvedFileName = path__WEBPACK_IMPORTED_MODULE_2___default.a.resolve(fileName);

    if (await Object(_util_file_exists__WEBPACK_IMPORTED_MODULE_6__["default"])(resolvedFileName)) {
      return resolvedFileName;
    } else {
      log.debug(`Discovered config "${resolvedFileName}" does not ` + 'exist or is not readable');
      return undefined;
    }
  }));
  const existingConfigs = [];
  configs.forEach(f => {
    if (typeof f === 'string') {
      existingConfigs.push(f);
    }
  });
  return existingConfigs;
}
/* WEBPACK VAR INJECTION */}.call(this, "src/config.js"))

/***/ }),

/***/ "./src/errors.js":
/*!***********************!*\
  !*** ./src/errors.js ***!
  \***********************/
/*! exports provided: WebExtError, UsageError, InvalidManifest, RemoteTempInstallNotSupported, MultiExtensionsReloadError, onlyInstancesOf, onlyErrorsWithCode, isErrorWithCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebExtError", function() { return WebExtError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsageError", function() { return UsageError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvalidManifest", function() { return InvalidManifest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoteTempInstallNotSupported", function() { return RemoteTempInstallNotSupported; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiExtensionsReloadError", function() { return MultiExtensionsReloadError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onlyInstancesOf", function() { return onlyInstancesOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onlyErrorsWithCode", function() { return onlyErrorsWithCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isErrorWithCode", function() { return isErrorWithCode; });
/* harmony import */ var es6_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! es6-error */ "es6-error");
/* harmony import */ var es6_error__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(es6_error__WEBPACK_IMPORTED_MODULE_0__);

/*
 * Base error for all custom web-ext errors.
 */

class WebExtError extends es6_error__WEBPACK_IMPORTED_MODULE_0___default.a {
  constructor(message) {
    super(message);
  }

}
/*
 * The class for errors that can be fixed by the developer.
 */

class UsageError extends WebExtError {
  constructor(message) {
    super(message);
  }

}
/*
 * The manifest for the extension is invalid (or missing).
 */

class InvalidManifest extends UsageError {
  constructor(message) {
    super(message);
  }

}
/*
 * The remote Firefox does not support temporary add-on installation.
 */

class RemoteTempInstallNotSupported extends WebExtError {
  constructor(message) {
    super(message);
  }

}
/*
 * The errors collected when reloading all extensions at once
 * (initialized from a map of errors by extensionSourceDir string).
 */

class MultiExtensionsReloadError extends WebExtError {
  constructor(errorsMap) {
    let errors = '';

    for (const [sourceDir, error] of errorsMap) {
      const msg = String(error);
      errors += `\nError on extension loaded from ${sourceDir}: ${msg}\n`;
    }

    const message = `Reload errors: ${errors}`;
    super(message);
    this.errorsBySourceDir = errorsMap;
  }

}
/*
 * Sugar-y way to catch only instances of a certain error.
 *
 * Usage:
 *
 *  Promise.reject(SyntaxError)
 *    .catch(onlyInstancesOf(SyntaxError, (error) => {
 *      // error is guaranteed to be an instance of SyntaxError
 *    }))
 *
 * All other errors will be re-thrown.
 *
 */

function onlyInstancesOf(predicate, errorHandler) {
  return error => {
    if (error instanceof predicate) {
      return errorHandler(error);
    } else {
      throw error;
    }
  };
}
/*
 * Sugar-y way to catch only errors having certain code(s).
 *
 * Usage:
 *
 *  Promise.resolve()
 *    .catch(onlyErrorsWithCode('ENOENT', (error) => {
 *      // error.code is guaranteed to be ENOENT
 *    }))
 *
 *  or:
 *
 *  Promise.resolve()
 *    .catch(onlyErrorsWithCode(['ENOENT', 'ENOTDIR'], (error) => {
 *      // ...
 *    }))
 *
 * All other errors will be re-thrown.
 *
 */

function onlyErrorsWithCode(codeWanted, errorHandler) {
  return error => {
    let throwError = true;

    if (Array.isArray(codeWanted)) {
      if (codeWanted.indexOf(error.code) !== -1 || codeWanted.indexOf(error.errno) !== -1) {
        throwError = false;
      }
    } else if (error.code === codeWanted || error.errno === codeWanted) {
      throwError = false;
    }

    if (throwError) {
      throw error;
    }

    return errorHandler(error);
  };
}
function isErrorWithCode(codeWanted, error) {
  if (Array.isArray(codeWanted) && codeWanted.indexOf(error.code) !== -1) {
    return true;
  } else if (error.code === codeWanted) {
    return true;
  }

  return false;
}

/***/ }),

/***/ "./src/extension-runners/firefox-android.js":
/*!**************************************************!*\
  !*** ./src/extension-runners/firefox-android.js ***!
  \**************************************************/
/*! exports provided: FirefoxAndroidExtensionRunner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__filename) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirefoxAndroidExtensionRunner", function() { return FirefoxAndroidExtensionRunner; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var net__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! net */ "net");
/* harmony import */ var net__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(net__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var readline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! readline */ "readline");
/* harmony import */ var readline__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(readline__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _util_temp_dir__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/temp-dir */ "./src/util/temp-dir.js");
/* harmony import */ var _util_adb__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/adb */ "./src/util/adb.js");
/* harmony import */ var _util_desktop_notifier__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/desktop-notifier */ "./src/util/desktop-notifier.js");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../errors */ "./src/errors.js");
/* harmony import */ var _firefox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../firefox */ "./src/firefox/index.js");
/* harmony import */ var _firefox_remote__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../firefox/remote */ "./src/firefox/remote.js");
/* harmony import */ var _util_logger__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../util/logger */ "./src/util/logger.js");
/* harmony import */ var _util_stdin__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../util/stdin */ "./src/util/stdin.js");


/**
 * This module provide an ExtensionRunner subclass that manage an extension executed
 * in a Firefox for Android instance.
 */











const log = Object(_util_logger__WEBPACK_IMPORTED_MODULE_10__["createLogger"])(__filename);
const ignoredParams = {
  profilePath: '--profile-path',
  keepProfileChanges: '--keep-profile-changes',
  browserConsole: '--browser-console',
  preInstall: '--pre-install',
  startUrl: '--start-url',
  args: '--args'
};

const getIgnoredParamsWarningsMessage = optionName => {
  return `The Firefox for Android target does not support ${optionName}`;
};

/**
 * Implements an IExtensionRunner which manages a Firefox for Android instance.
 */
class FirefoxAndroidExtensionRunner {
  // Wait 3s before the next unix socket discovery loop.
  // Wait for at most 3 minutes before giving up.
  constructor(params) {
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "params", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "adbUtils", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "exiting", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "selectedAdbDevice", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "selectedFirefoxApk", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "selectedArtifactsDir", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "selectedRDPSocketFile", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "selectedTCPPort", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "cleanupCallbacks", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "adbExtensionsPathBySourceDir", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "reloadableExtensions", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "remoteFirefox", void 0);

    this.params = params;
    this.cleanupCallbacks = new Set();
    this.adbExtensionsPathBySourceDir = new Map();
    this.reloadableExtensions = new Map(); // Print warning for not currently supported options (e.g. preInstall,
    // cloned profiles, browser console).

    this.printIgnoredParamsWarnings();
  }

  async run() {
    const {
      adbBin,
      adbHost,
      adbPort,
      ADBUtils = _util_adb__WEBPACK_IMPORTED_MODULE_5__["default"]
    } = this.params;
    this.adbUtils = new ADBUtils({
      adbBin,
      adbHost,
      adbPort
    });
    await this.adbDevicesDiscoveryAndSelect();
    await this.apkPackagesDiscoveryAndSelect();
    await this.adbCheckRuntimePermissions();
    await this.adbForceStopSelectedPackage(); // Create profile prefs (with enabled remote RDP server), prepare the
    // artifacts and temporary directory on the selected device, and
    // push the profile preferences to the remote profile dir.

    await this.adbPrepareProfileDir(); // NOTE: running Firefox for Android on the Android Emulator can be
    // pretty slow, we can run the following 3 steps in parallel to speed up
    // it a bit.

    await Promise.all([// Start Firefox for Android instance on the created profile.
    this.adbStartSelectedPackage(), // Build and push to devices all the extension xpis
    // and keep track of the xpi built and uploaded by extension sourceDir.
    this.buildAndPushExtensions(), // Wait for RDP unix socket file created and
    // Create an ADB forward connection on a free tcp port
    this.adbDiscoveryAndForwardRDPUnixSocket()]); // Connect to RDP socket on the local tcp server, install all the pushed extension
    // and keep track of the built and installed extension by extension sourceDir.

    await this.rdpInstallExtensions();
  } // Method exported from the IExtensionRunner interface.

  /**
   * Returns the runner name.
   */


  getName() {
    return 'Firefox Android';
  }
  /**
   * Reloads all the extensions, collect any reload error and resolves to
   * an array composed by a single ExtensionRunnerReloadResult object.
   */


  async reloadAllExtensions() {
    const runnerName = this.getName();
    const reloadErrors = new Map();

    for (const _ref of this.params.extensions) {
      const {
        sourceDir
      } = _ref;
      const [res] = await this.reloadExtensionBySourceDir(sourceDir);

      if (res.reloadError instanceof Error) {
        reloadErrors.set(sourceDir, res.reloadError);
      }
    }

    if (reloadErrors.size > 0) {
      return [{
        runnerName,
        reloadError: new _errors__WEBPACK_IMPORTED_MODULE_7__["MultiExtensionsReloadError"](reloadErrors)
      }];
    }

    return [{
      runnerName
    }];
  }
  /**
   * Reloads a single extension, collect any reload error and resolves to
   * an array composed by a single ExtensionRunnerReloadResult object.
   */


  async reloadExtensionBySourceDir(extensionSourceDir) {
    const runnerName = this.getName();
    const addonId = this.reloadableExtensions.get(extensionSourceDir);

    if (!addonId) {
      return [{
        sourceDir: extensionSourceDir,
        reloadError: new _errors__WEBPACK_IMPORTED_MODULE_7__["WebExtError"]('Extension not reloadable: ' + `no addonId has been mapped to "${extensionSourceDir}"`),
        runnerName
      }];
    }

    try {
      await this.buildAndPushExtension(extensionSourceDir);
      await this.remoteFirefox.reloadAddon(addonId);
    } catch (error) {
      return [{
        sourceDir: extensionSourceDir,
        reloadError: error,
        runnerName
      }];
    }

    return [{
      runnerName,
      sourceDir: extensionSourceDir
    }];
  }
  /**
   * Register a callback to be called when the runner has been exited
   * (e.g. the Firefox instance exits or the user has requested web-ext
   * to exit).
   */


  registerCleanup(fn) {
    this.cleanupCallbacks.add(fn);
  }
  /**
   * Exits the runner, by closing the managed Firefox instance.
   */


  async exit() {
    const {
      adbUtils,
      selectedAdbDevice,
      selectedArtifactsDir
    } = this;
    this.exiting = true; // If a Firefox for Android instance has been started,
    // we should ensure that it has been stopped when we exit.

    await this.adbForceStopSelectedPackage();

    if (selectedArtifactsDir) {
      log.debug('Cleaning up artifacts directory on the Android device...');
      await adbUtils.clearArtifactsDir(selectedAdbDevice);
    } // Call all the registered cleanup callbacks.


    for (const fn of this.cleanupCallbacks) {
      try {
        fn();
      } catch (error) {
        log.error(error);
      }
    }
  } // Private helper methods.


  getDeviceProfileDir() {
    return `${this.selectedArtifactsDir}/profile`;
  }

  printIgnoredParamsWarnings() {
    Object.keys(ignoredParams).forEach(ignoredParam => {
      if (this.params[ignoredParam]) {
        log.warn(getIgnoredParamsWarningsMessage(ignoredParams[ignoredParam]));
      }
    });
  }

  async adbDevicesDiscoveryAndSelect() {
    const {
      adbUtils
    } = this;
    const {
      adbDevice
    } = this.params;
    let devices = [];
    log.debug('Listing android devices');
    devices = await adbUtils.discoverDevices();

    if (devices.length === 0) {
      throw new _errors__WEBPACK_IMPORTED_MODULE_7__["UsageError"]('No Android device found through ADB. ' + 'Make sure the device is connected and USB debugging is enabled.');
    }

    if (!adbDevice) {
      const devicesMsg = devices.map(dev => ` - ${dev}`).join('\n');
      log.info(`\nAndroid devices found:\n${devicesMsg}`);
      throw new _errors__WEBPACK_IMPORTED_MODULE_7__["UsageError"]('Select an android device using --android-device=<name>');
    }

    const foundDevices = devices.filter(device => {
      return device === adbDevice;
    });

    if (foundDevices.length === 0) {
      const devicesMsg = JSON.stringify(devices);
      throw new _errors__WEBPACK_IMPORTED_MODULE_7__["UsageError"](`Android device ${adbDevice} was not found in list: ${devicesMsg}`);
    }

    this.selectedAdbDevice = foundDevices[0];
    log.info(`Selected ADB device: ${this.selectedAdbDevice}`);
  }

  async apkPackagesDiscoveryAndSelect() {
    const {
      adbUtils,
      selectedAdbDevice,
      params: {
        firefoxApk
      }
    } = this; // Discovery and select a Firefox for Android version.

    const packages = await adbUtils.discoverInstalledFirefoxAPKs(selectedAdbDevice, firefoxApk);

    if (packages.length === 0) {
      throw new _errors__WEBPACK_IMPORTED_MODULE_7__["UsageError"]('No Firefox packages were found on the selected Android device');
    }

    const pkgsListMsg = pkgs => {
      return pkgs.map(pkg => ` - ${pkg}`).join('\n');
    };

    if (!firefoxApk) {
      log.info(`\nPackages found:\n${pkgsListMsg(packages)}`);

      if (packages.length > 1) {
        throw new _errors__WEBPACK_IMPORTED_MODULE_7__["UsageError"]('Select one of the packages using --firefox-apk');
      } // If only one APK has been found, select it even if it has not been
      // specified explicitly on the comment line.


      this.selectedFirefoxApk = packages[0];
      log.info(`Selected Firefox for Android APK: ${this.selectedFirefoxApk}`);
      return;
    }

    const filteredPackages = packages.filter(line => line === firefoxApk);

    if (filteredPackages.length === 0) {
      const pkgsList = pkgsListMsg(filteredPackages);
      throw new _errors__WEBPACK_IMPORTED_MODULE_7__["UsageError"](`Package ${firefoxApk} was not found in list: ${pkgsList}`);
    }

    this.selectedFirefoxApk = filteredPackages[0];
    log.debug(`Selected Firefox for Android APK: ${this.selectedFirefoxApk}`);
  }

  async adbForceStopSelectedPackage() {
    const {
      adbUtils,
      selectedAdbDevice,
      selectedFirefoxApk
    } = this;
    log.info(`Stopping existing instances of ${selectedFirefoxApk}...`);
    await adbUtils.amForceStopAPK(selectedAdbDevice, selectedFirefoxApk);
  }

  async adbCheckRuntimePermissions() {
    const {
      adbUtils,
      selectedAdbDevice,
      selectedFirefoxApk
    } = this;
    log.debug(`Discovering Android version for ${selectedAdbDevice}...`);
    const androidVersion = await adbUtils.getAndroidVersionNumber(selectedAdbDevice);

    if (typeof androidVersion !== 'number' || Number.isNaN(androidVersion)) {
      throw new _errors__WEBPACK_IMPORTED_MODULE_7__["WebExtError"](`Invalid Android version: ${androidVersion}`);
    }

    log.debug(`Detected Android version ${androidVersion}`);

    if (androidVersion < 23) {
      return;
    }

    log.debug('Checking read/write permissions needed for web-ext' + `on ${selectedFirefoxApk}...`); // Runtime permission needed to be able to run Firefox on a temporarily created profile
    // on android versions >= 23 (Android Marshmallow, which is the first version where
    // these permissions are optional and have to be granted explicitly).

    await adbUtils.ensureRequiredAPKRuntimePermissions(selectedAdbDevice, selectedFirefoxApk, ['android.permission.READ_EXTERNAL_STORAGE', 'android.permission.WRITE_EXTERNAL_STORAGE']);
  }

  async adbPrepareProfileDir() {
    const {
      adbUtils,
      selectedAdbDevice,
      selectedFirefoxApk,
      params: {
        firefoxApp
      }
    } = this; // Create the preferences file and the Fennec temporary profile.

    log.debug(`Preparing a temporary profile for ${selectedFirefoxApk}...`);
    const profile = await firefoxApp.createProfile({
      app: 'fennec'
    }); // Choose a artifacts dir name for the assets pushed to the
    // Android device.

    this.selectedArtifactsDir = await adbUtils.getOrCreateArtifactsDir(selectedAdbDevice);
    const deviceProfileDir = this.getDeviceProfileDir();
    await adbUtils.runShellCommand(selectedAdbDevice, ['mkdir', '-p', deviceProfileDir]);
    await adbUtils.pushFile(selectedAdbDevice, path__WEBPACK_IMPORTED_MODULE_2___default.a.join(profile.profileDir, 'user.js'), `${deviceProfileDir}/user.js`);
    log.debug(`Created temporary profile at ${deviceProfileDir}.`);
  }

  async adbStartSelectedPackage() {
    const {
      adbUtils,
      selectedFirefoxApk,
      selectedAdbDevice
    } = this;
    const deviceProfileDir = this.getDeviceProfileDir();
    log.info(`Starting ${selectedFirefoxApk}...`);
    log.debug(`Using profile ${deviceProfileDir}`);
    await adbUtils.startFirefoxAPK(selectedAdbDevice, selectedFirefoxApk, deviceProfileDir);
  }

  async buildAndPushExtension(sourceDir) {
    const {
      adbUtils,
      selectedAdbDevice,
      selectedArtifactsDir,
      params: {
        buildSourceDir
      }
    } = this;
    await Object(_util_temp_dir__WEBPACK_IMPORTED_MODULE_4__["withTempDir"])(async tmpDir => {
      const {
        extensionPath
      } = await buildSourceDir(sourceDir, tmpDir.path());
      const extFileName = path__WEBPACK_IMPORTED_MODULE_2___default.a.basename(extensionPath, '.zip');
      let adbExtensionPath = this.adbExtensionsPathBySourceDir.get(sourceDir);

      if (!adbExtensionPath) {
        adbExtensionPath = `${selectedArtifactsDir}/${extFileName}.xpi`;
      }

      log.debug(`Uploading ${extFileName} on the android device`);
      await adbUtils.pushFile(selectedAdbDevice, extensionPath, adbExtensionPath);
      log.debug(`Upload completed: ${adbExtensionPath}`);
      this.adbExtensionsPathBySourceDir.set(sourceDir, adbExtensionPath);
    });
  }

  async buildAndPushExtensions() {
    for (const _ref2 of this.params.extensions) {
      const {
        sourceDir
      } = _ref2;
      await this.buildAndPushExtension(sourceDir);
    }
  }

  async adbDiscoveryAndForwardRDPUnixSocket() {
    const {
      adbUtils,
      selectedAdbDevice,
      selectedFirefoxApk,
      params: {
        firefoxAndroidTimeout
      }
    } = this;
    const stdin = this.params.stdin || process.stdin;
    const {
      unixSocketDiscoveryRetryInterval
    } = FirefoxAndroidExtensionRunner;
    let {
      unixSocketDiscoveryMaxTime
    } = FirefoxAndroidExtensionRunner;

    if (typeof firefoxAndroidTimeout === 'number') {
      unixSocketDiscoveryMaxTime = firefoxAndroidTimeout;
    }

    const handleCtrlC = (str, key) => {
      if (key.ctrl && key.name === 'c') {
        adbUtils.setUserAbortDiscovery(true);
      }
    }; // TODO: use noInput property to decide if we should
    // disable direct keypress handling.


    if (Object(_util_stdin__WEBPACK_IMPORTED_MODULE_11__["isTTY"])(stdin)) {
      readline__WEBPACK_IMPORTED_MODULE_3___default.a.emitKeypressEvents(stdin);
      Object(_util_stdin__WEBPACK_IMPORTED_MODULE_11__["setRawMode"])(stdin, true);
      stdin.on('keypress', handleCtrlC);
    }

    try {
      // Got a debugger socket file to connect.
      this.selectedRDPSocketFile = await adbUtils.discoverRDPUnixSocket(selectedAdbDevice, selectedFirefoxApk, {
        maxDiscoveryTime: unixSocketDiscoveryMaxTime,
        retryInterval: unixSocketDiscoveryRetryInterval
      });
    } finally {
      if (Object(_util_stdin__WEBPACK_IMPORTED_MODULE_11__["isTTY"])(stdin)) {
        stdin.removeListener('keypress', handleCtrlC);
      }
    }

    log.debug(`RDP Socket File selected: ${this.selectedRDPSocketFile}`);
    const tcpPort = await this.chooseLocalTcpPort(); // Log the choosen tcp port at info level (useful to the user to be able
    // to connect the Firefox DevTools to the Firefox for Android instance).

    log.info(`You can connect to this Android device on TCP port ${tcpPort}`);
    const forwardSocketSpec = this.selectedRDPSocketFile.startsWith('@') ? `localabstract:${this.selectedRDPSocketFile.substr(1)}` : `localfilesystem:${this.selectedRDPSocketFile}`;
    await adbUtils.setupForward(selectedAdbDevice, forwardSocketSpec, `tcp:${tcpPort}`);
    this.selectedTCPPort = tcpPort;
  }

  chooseLocalTcpPort() {
    return new Promise(resolve => {
      const srv = net__WEBPACK_IMPORTED_MODULE_1___default.a.createServer(); // $FLOW_FIXME: flow has his own opinions on this method signature.

      srv.listen(0, () => {
        const freeTcpPort = srv.address().port;
        srv.close();
        resolve(freeTcpPort);
      });
    });
  }

  async rdpInstallExtensions() {
    const {
      selectedTCPPort,
      params: {
        extensions,
        firefoxClient
      }
    } = this;
    const remoteFirefox = this.remoteFirefox = await firefoxClient({
      port: selectedTCPPort
    }); // Exit and cleanup the extension runner if the connection to the
    // remote Firefox for Android instance has been closed.

    remoteFirefox.client.on('end', () => {
      if (!this.exiting) {
        log.info('Exiting the device because Firefox for Android disconnected');
        this.exit();
      }
    }); // Install all the temporary addons.

    for (const extension of extensions) {
      const {
        sourceDir
      } = extension;
      const adbExtensionPath = this.adbExtensionsPathBySourceDir.get(sourceDir);

      if (!adbExtensionPath) {
        throw new _errors__WEBPACK_IMPORTED_MODULE_7__["WebExtError"](`ADB extension path for "${sourceDir}" was unexpectedly empty`);
      }

      const addonId = await remoteFirefox.installTemporaryAddon(adbExtensionPath).then(installResult => {
        return installResult.addon.id;
      });

      if (!addonId) {
        throw new _errors__WEBPACK_IMPORTED_MODULE_7__["WebExtError"]('Received an empty addonId from ' + `remoteFirefox.installTemporaryAddon("${adbExtensionPath}")`);
      }

      this.reloadableExtensions.set(extension.sourceDir, addonId);
    }
  }

}

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(FirefoxAndroidExtensionRunner, "unixSocketDiscoveryRetryInterval", 3 * 1000);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(FirefoxAndroidExtensionRunner, "unixSocketDiscoveryMaxTime", 3 * 60 * 1000);
/* WEBPACK VAR INJECTION */}.call(this, "src/extension-runners/firefox-android.js"))

/***/ }),

/***/ "./src/extension-runners/firefox-desktop.js":
/*!**************************************************!*\
  !*** ./src/extension-runners/firefox-desktop.js ***!
  \**************************************************/
/*! exports provided: FirefoxDesktopExtensionRunner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__filename) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirefoxDesktopExtensionRunner", function() { return FirefoxDesktopExtensionRunner; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../errors */ "./src/errors.js");
/* harmony import */ var _firefox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firefox */ "./src/firefox/index.js");
/* harmony import */ var _firefox_remote__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firefox/remote */ "./src/firefox/remote.js");
/* harmony import */ var _util_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/logger */ "./src/util/logger.js");


/**
 * This module provide an ExtensionRunner subclass that manage an extension executed
 * in a Firefox for Desktop instance.
 */
// Import flow types from npm dependencies.



 // Import flow types from project files.

const log = Object(_util_logger__WEBPACK_IMPORTED_MODULE_4__["createLogger"])(__filename);
/**
 * Implements an IExtensionRunner which manages a Firefox Desktop instance.
 */

class FirefoxDesktopExtensionRunner {
  // Map extensions sourceDir to their related addon ids.
  constructor(params) {
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "cleanupCallbacks", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "params", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "profile", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "reloadableExtensions", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "remoteFirefox", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "runningInfo", void 0);

    this.params = params;
    this.reloadableExtensions = new Map();
    this.cleanupCallbacks = new Set();
  } // Method exported from the IExtensionRunner interface.

  /**
   * Returns the runner name.
   */


  getName() {
    return 'Firefox Desktop';
  }
  /**
   * Setup the Firefox Profile and run a Firefox Desktop instance.
   */


  async run() {
    // Get a firefox profile with the custom Prefs set (a new or a cloned one).
    // Pre-install extensions as proxy if needed (and disable auto-reload if you do)
    await this.setupProfileDir(); // (if reload is enabled):
    // - Connect to the firefox instance on RDP
    // - Install any extension if needed (if not installed as proxy)
    // - Keep track of the extension id assigned in a map with the sourceDir as a key

    await this.startFirefoxInstance();
  }
  /**
   * Reloads all the extensions, collect any reload error and resolves to
   * an array composed by a single ExtensionRunnerReloadResult object.
   */


  async reloadAllExtensions() {
    const runnerName = this.getName();
    const reloadErrors = new Map();

    for (const _ref of this.params.extensions) {
      const {
        sourceDir
      } = _ref;
      const [res] = await this.reloadExtensionBySourceDir(sourceDir);

      if (res.reloadError instanceof Error) {
        reloadErrors.set(sourceDir, res.reloadError);
      }
    }

    if (reloadErrors.size > 0) {
      return [{
        runnerName,
        reloadError: new _errors__WEBPACK_IMPORTED_MODULE_1__["MultiExtensionsReloadError"](reloadErrors)
      }];
    }

    return [{
      runnerName
    }];
  }
  /**
   * Reloads a single extension, collect any reload error and resolves to
   * an array composed by a single ExtensionRunnerReloadResult object.
   */


  async reloadExtensionBySourceDir(extensionSourceDir) {
    const runnerName = this.getName();
    const addonId = this.reloadableExtensions.get(extensionSourceDir);

    if (!addonId) {
      return [{
        sourceDir: extensionSourceDir,
        reloadError: new _errors__WEBPACK_IMPORTED_MODULE_1__["WebExtError"]('Extension not reloadable: ' + `no addonId has been mapped to "${extensionSourceDir}"`),
        runnerName
      }];
    }

    try {
      await this.remoteFirefox.reloadAddon(addonId);
    } catch (error) {
      return [{
        sourceDir: extensionSourceDir,
        reloadError: error,
        runnerName
      }];
    }

    return [{
      runnerName,
      sourceDir: extensionSourceDir
    }];
  }
  /**
   * Register a callback to be called when the runner has been exited
   * (e.g. the Firefox instance exits or the user has requested web-ext
   * to exit).
   */


  registerCleanup(fn) {
    this.cleanupCallbacks.add(fn);
  }
  /**
   * Exits the runner, by closing the managed Firefox instance.
   */


  async exit() {
    if (!this.runningInfo || !this.runningInfo.firefox) {
      throw new _errors__WEBPACK_IMPORTED_MODULE_1__["WebExtError"]('No firefox instance is currently running');
    }

    this.runningInfo.firefox.kill();
  } // Private helper methods.


  async setupProfileDir() {
    const {
      customPrefs,
      extensions,
      keepProfileChanges,
      preInstall,
      profilePath,
      firefoxApp
    } = this.params;

    if (profilePath) {
      if (keepProfileChanges) {
        log.debug(`Using Firefox profile from ${profilePath}`);
        this.profile = await firefoxApp.useProfile(profilePath, {
          customPrefs
        });
      } else {
        log.debug(`Copying Firefox profile from ${profilePath}`);
        this.profile = await firefoxApp.copyProfile(profilePath, {
          customPrefs
        });
      }
    } else {
      log.debug('Creating new Firefox profile');
      this.profile = await firefoxApp.createProfile({
        customPrefs
      });
    } // preInstall the extensions if needed.


    if (preInstall) {
      for (const extension of extensions) {
        await firefoxApp.installExtension({
          asProxy: true,
          extensionPath: extension.sourceDir,
          manifestData: extension.manifestData,
          profile: this.profile
        });
      }
    }
  }

  async startFirefoxInstance() {
    const {
      browserConsole,
      extensions,
      firefoxBinary,
      preInstall,
      startUrl,
      firefoxApp,
      firefoxClient,
      args
    } = this.params;
    const binaryArgs = [];

    if (browserConsole) {
      binaryArgs.push('-jsconsole');
    }

    if (startUrl) {
      const urls = Array.isArray(startUrl) ? startUrl : [startUrl];

      for (const url of urls) {
        binaryArgs.push('--url', url);
      }
    }

    if (args) {
      binaryArgs.push(...args);
    }

    this.runningInfo = await firefoxApp.run(this.profile, {
      firefoxBinary,
      binaryArgs
    });
    this.runningInfo.firefox.on('close', () => {
      for (const cleanupCb of this.cleanupCallbacks) {
        try {
          cleanupCb();
        } catch (error) {
          log.error(`Exception on executing cleanup callback: ${error}`);
        }
      }
    });

    if (!preInstall) {
      const remoteFirefox = this.remoteFirefox = await firefoxClient({
        port: this.runningInfo.debuggerPort
      }); // Install all the temporary addons.

      for (const extension of extensions) {
        try {
          const addonId = await remoteFirefox.installTemporaryAddon(extension.sourceDir).then(installResult => {
            return installResult.addon.id;
          });

          if (!addonId) {
            throw new _errors__WEBPACK_IMPORTED_MODULE_1__["WebExtError"]('Unexpected missing addonId in the installAsTemporaryAddon result');
          }

          this.reloadableExtensions.set(extension.sourceDir, addonId);
        } catch (error) {
          if (error instanceof _errors__WEBPACK_IMPORTED_MODULE_1__["RemoteTempInstallNotSupported"]) {
            log.debug(`Caught: ${error}`);
            throw new _errors__WEBPACK_IMPORTED_MODULE_1__["WebExtError"]('Temporary add-on installation is not supported in this version' + ' of Firefox (you need Firefox 49 or higher). For older Firefox' + ' versions, use --pre-install');
          } else {
            throw error;
          }
        }
      }
    }
  }

}
/* WEBPACK VAR INJECTION */}.call(this, "src/extension-runners/firefox-desktop.js"))

/***/ }),

/***/ "./src/extension-runners/index.js":
/*!****************************************!*\
  !*** ./src/extension-runners/index.js ***!
  \****************************************/
/*! exports provided: createExtensionRunner, MultiExtensionRunner, defaultWatcherCreator, defaultReloadStrategy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__filename) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createExtensionRunner", function() { return createExtensionRunner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiExtensionRunner", function() { return MultiExtensionRunner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultWatcherCreator", function() { return defaultWatcherCreator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultReloadStrategy", function() { return defaultReloadStrategy; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var readline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! readline */ "readline");
/* harmony import */ var readline__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(readline__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../errors */ "./src/errors.js");
/* harmony import */ var _util_desktop_notifier__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/desktop-notifier */ "./src/util/desktop-notifier.js");
/* harmony import */ var _util_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/logger */ "./src/util/logger.js");
/* harmony import */ var _util_file_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/file-filter */ "./src/util/file-filter.js");
/* harmony import */ var _util_stdin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/stdin */ "./src/util/stdin.js");
/* harmony import */ var _watcher__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../watcher */ "./src/watcher.js");








const log = Object(_util_logger__WEBPACK_IMPORTED_MODULE_4__["createLogger"])(__filename);
async function createExtensionRunner(config) {
  switch (config.target) {
    case 'firefox-desktop':
      {
        // TODO: use async import instead of require - https://github.com/mozilla/web-ext/issues/1306
        const {
          FirefoxDesktopExtensionRunner
        } = __webpack_require__(/*! ./firefox-desktop */ "./src/extension-runners/firefox-desktop.js");

        return new FirefoxDesktopExtensionRunner(config.params);
      }

    case 'firefox-android':
      {
        // TODO: use async import instead of require - https://github.com/mozilla/web-ext/issues/1306
        const {
          FirefoxAndroidExtensionRunner
        } = __webpack_require__(/*! ./firefox-android */ "./src/extension-runners/firefox-android.js");

        return new FirefoxAndroidExtensionRunner(config.params);
      }

    default:
      throw new _errors__WEBPACK_IMPORTED_MODULE_2__["WebExtError"](`Unknown target: "${config.target}"`);
  }
}
/**
 * Implements an IExtensionRunner which allow the caller to
 * manage multiple extension runners at the same time (e.g. by running
 * a Firefox Desktop instance alongside to a Firefox for Android instance).
 */

class MultiExtensionRunner {
  constructor(params) {
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "extensionRunners", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "desktopNotifications", void 0);

    this.extensionRunners = params.runners;
    this.desktopNotifications = params.desktopNotifications;
  } // Method exported from the IExtensionRunner interface.

  /**
   * Returns the runner name.
   */


  getName() {
    return 'Multi Extension Runner';
  }
  /**
   * Call the `run` method on all the managed extension runners,
   * and awaits that all the runners has been successfully started.
   */


  async run() {
    const promises = [];

    for (const runner of this.extensionRunners) {
      promises.push(runner.run());
    }

    await Promise.all(promises);
  }
  /**
   * Reloads all the extensions on all the managed extension runners,
   * collect any reload error, and resolves to an array composed by
   * a ExtensionRunnerReloadResult object per managed runner.
   *
   * Any detected reload error is also logged on the terminal and shows as a
   * desktop notification.
   */


  async reloadAllExtensions() {
    log.debug('Reloading all reloadable add-ons');
    const promises = [];

    for (const runner of this.extensionRunners) {
      const reloadPromise = runner.reloadAllExtensions().then(() => {
        return {
          runnerName: runner.getName()
        };
      }, error => {
        return {
          runnerName: runner.getName(),
          reloadError: error
        };
      });
      promises.push(reloadPromise);
    }

    return await Promise.all(promises).then(results => {
      this.handleReloadResults(results);
      return results;
    });
  }
  /**
   * Reloads a single extension on all the managed extension runners,
   * collect any reload error and resolves to an array composed by
   * a ExtensionRunnerReloadResult object per managed runner.
   *
   * Any detected reload error is also logged on the terminal and shows as a
   * desktop notification.
   */


  async reloadExtensionBySourceDir(sourceDir) {
    log.debug(`Reloading add-on at ${sourceDir}`);
    const promises = [];

    for (const runner of this.extensionRunners) {
      const reloadPromise = runner.reloadExtensionBySourceDir(sourceDir).then(() => {
        return {
          runnerName: runner.getName(),
          sourceDir
        };
      }, error => {
        return {
          runnerName: runner.getName(),
          reloadError: error,
          sourceDir
        };
      });
      promises.push(reloadPromise);
    } // $FLOW_FIXME: When upgrading to Flow 0.61.0, it could not follow the type of sourceDir in the array of promises.


    return await Promise.all(promises).then(results => {
      this.handleReloadResults(results);
      return results;
    });
  }
  /**
   * Register a callback to be called when all the managed runners has been exited.
   */


  registerCleanup(cleanupCallback) {
    const promises = []; // Create a promise for every extension runner managed by this instance,
    // the promise will be resolved when the particular runner calls its
    // registered cleanup callbacks.

    for (const runner of this.extensionRunners) {
      promises.push(new Promise(resolve => {
        runner.registerCleanup(resolve);
      }));
    } // Wait for all the created promises to be resolved or rejected
    // (once each one of the runners has cleaned up) and then call
    // the cleanup callback registered to this runner.


    Promise.all(promises).then(cleanupCallback, cleanupCallback);
  }
  /**
   * Exits all the managed runner has been exited.
   */


  async exit() {
    const promises = [];

    for (const runner of this.extensionRunners) {
      promises.push(runner.exit());
    }

    await Promise.all(promises);
  } // Private helper methods.


  handleReloadResults(results) {
    for (const _ref of results) {
      const {
        runnerName,
        reloadError,
        sourceDir
      } = _ref;

      if (reloadError instanceof Error) {
        let message = 'Error occurred while reloading';

        if (sourceDir) {
          message += ` "${sourceDir}" `;
        }

        message += `on "${runnerName}" - ${reloadError.message}`;
        log.error(`\n${message}`);
        log.debug(reloadError.stack);
        this.desktopNotifications({
          title: 'web-ext run: extension reload error',
          message
        });
      }
    }
  }

} // defaultWatcherCreator types and implementation.

function defaultWatcherCreator({
  reloadExtension,
  sourceDir,
  artifactsDir,
  ignoreFiles,
  onSourceChange = _watcher__WEBPACK_IMPORTED_MODULE_7__["default"],
  createFileFilter = _util_file_filter__WEBPACK_IMPORTED_MODULE_5__["createFileFilter"]
}) {
  const fileFilter = createFileFilter({
    sourceDir,
    artifactsDir,
    ignoreFiles
  });
  return onSourceChange({
    sourceDir,
    artifactsDir,
    onChange: () => reloadExtension(sourceDir),
    shouldWatchFile: file => fileFilter.wantFile(file)
  });
} // defaultReloadStrategy types and implementation.

function defaultReloadStrategy({
  artifactsDir,
  extensionRunner,
  ignoreFiles,
  noInput = false,
  sourceDir
}, {
  createWatcher = defaultWatcherCreator,
  stdin = process.stdin,
  kill = process.kill
} = {}) {
  const allowInput = !noInput;

  if (!allowInput) {
    log.debug('Input has been disabled because of noInput==true');
  }

  const watcher = createWatcher({
    reloadExtension: watchedSourceDir => {
      extensionRunner.reloadExtensionBySourceDir(watchedSourceDir);
    },
    sourceDir,
    artifactsDir,
    ignoreFiles
  });
  extensionRunner.registerCleanup(() => {
    watcher.close();

    if (allowInput) {
      stdin.pause();
    }
  });

  if (allowInput && Object(_util_stdin__WEBPACK_IMPORTED_MODULE_6__["isTTY"])(stdin)) {
    readline__WEBPACK_IMPORTED_MODULE_1___default.a.emitKeypressEvents(stdin);
    Object(_util_stdin__WEBPACK_IMPORTED_MODULE_6__["setRawMode"])(stdin, true);
    const keypressUsageInfo = 'Press R to reload (and Ctrl-C to quit)'; // NOTE: this `Promise.resolve().then(...)` is basically used to spawn a "co-routine"
    // that is executed before the callback attached to the Promise returned by this function
    // (and it allows the `run` function to not be stuck in the while loop).

    Promise.resolve().then(async function () {
      log.info(keypressUsageInfo);
      let userExit = false;

      while (!userExit) {
        const keyPressed = await new Promise(resolve => {
          stdin.once('keypress', (str, key) => resolve(key));
        });

        if (keyPressed.ctrl && keyPressed.name === 'c') {
          userExit = true;
        } else if (keyPressed.name === 'z') {
          // Prepare to suspend.
          // NOTE: Switch the raw mode off before suspending (needed to make the keypress event
          // to work correctly when the nodejs process is resumed).
          Object(_util_stdin__WEBPACK_IMPORTED_MODULE_6__["setRawMode"])(stdin, false);
          log.info('\nweb-ext has been suspended on user request');
          kill(process.pid, 'SIGTSTP'); // Prepare to resume.

          log.info(`\nweb-ext has been resumed. ${keypressUsageInfo}`); // Switch the raw mode on on resume.

          Object(_util_stdin__WEBPACK_IMPORTED_MODULE_6__["setRawMode"])(stdin, true);
        } else if (keyPressed.name === 'r') {
          log.debug('Reloading installed extensions on user request');
          extensionRunner.reloadAllExtensions();
        }
      }

      log.info('\nExiting web-ext on user request');
      extensionRunner.exit();
    });
  }
}
/* WEBPACK VAR INJECTION */}.call(this, "src/extension-runners/index.js"))

/***/ }),

/***/ "./src/firefox/index.js":
/*!******************************!*\
  !*** ./src/firefox/index.js ***!
  \******************************/
/*! exports provided: defaultFirefoxEnv, defaultRemotePortFinder, run, isDefaultProfile, configureProfile, defaultCreateProfileFinder, useProfile, createProfile, copyProfile, installExtension */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__filename) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultFirefoxEnv", function() { return defaultFirefoxEnv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultRemotePortFinder", function() { return defaultRemotePortFinder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "run", function() { return run; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDefaultProfile", function() { return isDefaultProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configureProfile", function() { return configureProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultCreateProfileFinder", function() { return defaultCreateProfileFinder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useProfile", function() { return useProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createProfile", function() { return createProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyProfile", function() { return copyProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "installExtension", function() { return installExtension; });
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! util */ "util");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var fx_runner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! fx-runner */ "fx-runner");
/* harmony import */ var fx_runner__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(fx_runner__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var firefox_profile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firefox-profile */ "firefox-profile");
/* harmony import */ var firefox_profile__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firefox_profile__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var mz__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mz */ "mz");
/* harmony import */ var mz__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(mz__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var event_to_promise__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! event-to-promise */ "event-to-promise");
/* harmony import */ var event_to_promise__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(event_to_promise__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _util_is_directory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../util/is-directory */ "./src/util/is-directory.js");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../errors */ "./src/errors.js");
/* harmony import */ var _preferences__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./preferences */ "./src/firefox/preferences.js");
/* harmony import */ var _util_manifest__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../util/manifest */ "./src/util/manifest.js");
/* harmony import */ var _util_logger__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../util/logger */ "./src/util/logger.js");
/* harmony import */ var _remote__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./remote */ "./src/firefox/remote.js");













 // Import flow types

const log = Object(_util_logger__WEBPACK_IMPORTED_MODULE_12__["createLogger"])(__filename);
const defaultAsyncFsStat = mz__WEBPACK_IMPORTED_MODULE_6__["fs"].stat.bind(mz__WEBPACK_IMPORTED_MODULE_6__["fs"]);
const defaultFirefoxEnv = {
  XPCOM_DEBUG_BREAK: 'stack',
  NS_TRACE_MALLOC_DISABLE_STACKS: '1'
}; // defaultRemotePortFinder types and implementation.

async function defaultRemotePortFinder({
  portToTry = _remote__WEBPACK_IMPORTED_MODULE_13__["REMOTE_PORT"],
  retriesLeft = 10,
  connectToFirefox = _remote__WEBPACK_IMPORTED_MODULE_13__["connect"]
} = {}) {
  log.debug(`Checking if remote Firefox port ${portToTry} is available`);
  let client;

  while (retriesLeft >= 0) {
    try {
      client = await connectToFirefox(portToTry);
      log.debug(`Remote Firefox port ${portToTry} is in use ` + `(retries remaining: ${retriesLeft})`);
    } catch (error) {
      if (Object(_errors__WEBPACK_IMPORTED_MODULE_9__["isErrorWithCode"])('ECONNREFUSED', error)) {
        // The connection was refused so this port is good to use.
        return portToTry;
      }

      throw error;
    }

    client.disconnect();
    portToTry++;
    retriesLeft--;
  }

  throw new _errors__WEBPACK_IMPORTED_MODULE_9__["WebExtError"]('Too many retries on port search');
} // Declare the needed 'fx-runner' module flow types.

/*
 * Runs Firefox with the given profile object and resolves a promise on exit.
 */
async function run(profile, {
  fxRunner = fx_runner__WEBPACK_IMPORTED_MODULE_4___default.a,
  findRemotePort = defaultRemotePortFinder,
  firefoxBinary,
  binaryArgs
} = {}) {
  log.debug(`Running Firefox with profile at ${profile.path()}`);
  const remotePort = await findRemotePort();
  const results = await fxRunner({
    // if this is falsey, fxRunner tries to find the default one.
    'binary': firefoxBinary,
    'binary-args': binaryArgs,
    // This ensures a new instance of Firefox is created. It has nothing
    // to do with the devtools remote debugger.
    'no-remote': true,
    'listen': remotePort,
    'foreground': true,
    'profile': profile.path(),
    'env': _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, process.env, defaultFirefoxEnv),
    'verbose': true
  });
  const firefox = results.process;
  log.debug(`Executing Firefox binary: ${results.binary}`);
  log.debug(`Firefox args: ${results.args.join(' ')}`);
  firefox.on('error', error => {
    // TODO: show a nice error when it can't find Firefox.
    // if (/No such file/.test(err) || err.code === 'ENOENT') {
    log.error(`Firefox error: ${error}`);
    throw error;
  });
  log.info('Use --verbose or open Tools > Web Developer > Browser Console ' + 'to see logging');
  firefox.stderr.on('data', data => {
    log.debug(`Firefox stderr: ${data.toString().trim()}`);
  });
  firefox.stdout.on('data', data => {
    log.debug(`Firefox stdout: ${data.toString().trim()}`);
  });
  firefox.on('close', () => {
    log.debug('Firefox closed');
  });
  return {
    firefox,
    debuggerPort: remotePort
  };
} // isDefaultProfile types and implementation.

const DEFAULT_PROFILES_NAMES = ['default', 'dev-edition-default'];

/*
 * Tests if a profile is a default Firefox profile (both as a profile name or
 * profile path).
 *
 * Returns a promise that resolves to true if the profile is one of default Firefox profile.
 */
async function isDefaultProfile(profilePathOrName, ProfileFinder = firefox_profile__WEBPACK_IMPORTED_MODULE_5___default.a.Finder, fsStat = mz__WEBPACK_IMPORTED_MODULE_6__["fs"].stat) {
  if (DEFAULT_PROFILES_NAMES.includes(profilePathOrName)) {
    return true;
  }

  const baseProfileDir = ProfileFinder.locateUserDirectory();
  const profilesIniPath = path__WEBPACK_IMPORTED_MODULE_2___default.a.join(baseProfileDir, 'profiles.ini');

  try {
    await fsStat(profilesIniPath);
  } catch (error) {
    if (Object(_errors__WEBPACK_IMPORTED_MODULE_9__["isErrorWithCode"])('ENOENT', error)) {
      log.debug(`profiles.ini not found: ${error}`); // No profiles exist yet, default to false (the default profile name contains a
      // random generated component).

      return false;
    } // Re-throw any unexpected exception.


    throw error;
  } // Check for profile dir path.


  const finder = new ProfileFinder(baseProfileDir);
  const readProfiles = Object(util__WEBPACK_IMPORTED_MODULE_3__["promisify"])(finder.readProfiles.bind(finder));
  await readProfiles();
  const normalizedProfileDirPath = path__WEBPACK_IMPORTED_MODULE_2___default.a.normalize(path__WEBPACK_IMPORTED_MODULE_2___default.a.join(path__WEBPACK_IMPORTED_MODULE_2___default.a.resolve(profilePathOrName), path__WEBPACK_IMPORTED_MODULE_2___default.a.sep));

  for (const profile of finder.profiles) {
    // Check if the profile dir path or name is one of the default profiles
    // defined in the profiles.ini file.
    if (DEFAULT_PROFILES_NAMES.includes(profile.Name) || profile.Default === '1') {
      let profileFullPath; // Check for profile name.

      if (profile.Name === profilePathOrName) {
        return true;
      } // Check for profile path.


      if (profile.IsRelative === '1') {
        profileFullPath = path__WEBPACK_IMPORTED_MODULE_2___default.a.join(baseProfileDir, profile.Path, path__WEBPACK_IMPORTED_MODULE_2___default.a.sep);
      } else {
        profileFullPath = path__WEBPACK_IMPORTED_MODULE_2___default.a.join(profile.Path, path__WEBPACK_IMPORTED_MODULE_2___default.a.sep);
      }

      if (path__WEBPACK_IMPORTED_MODULE_2___default.a.normalize(profileFullPath) === normalizedProfileDirPath) {
        return true;
      }
    }
  } // Profile directory not found.


  return false;
} // configureProfile types and implementation.

/*
 * Configures a profile with common preferences that are required to
 * activate extension development.
 *
 * Returns a promise that resolves with the original profile object.
 */
function configureProfile(profile, {
  app = 'firefox',
  getPrefs = _preferences__WEBPACK_IMPORTED_MODULE_10__["getPrefs"],
  customPrefs = {}
} = {}) {
  // Set default preferences. Some of these are required for the add-on to
  // operate, such as disabling signatures.
  const prefs = getPrefs(app);
  Object.keys(prefs).forEach(pref => {
    profile.setPreference(pref, prefs[pref]);
  });

  if (Object.keys(customPrefs).length > 0) {
    const customPrefsStr = JSON.stringify(customPrefs, null, 2);
    log.info(`Setting custom Firefox preferences: ${customPrefsStr}`);
    Object.keys(customPrefs).forEach(custom => {
      profile.setPreference(custom, customPrefs[custom]);
    });
  }

  profile.updatePreferences();
  return Promise.resolve(profile);
}
function defaultCreateProfileFinder({
  userDirectoryPath,
  FxProfile = firefox_profile__WEBPACK_IMPORTED_MODULE_5___default.a
} = {}) {
  const finder = new FxProfile.Finder(userDirectoryPath);
  const readProfiles = Object(util__WEBPACK_IMPORTED_MODULE_3__["promisify"])(finder.readProfiles.bind(finder));
  const getPath = Object(util__WEBPACK_IMPORTED_MODULE_3__["promisify"])(finder.getPath.bind(finder));
  return async profileName => {
    try {
      await readProfiles();
      const hasProfileName = finder.profiles.filter(profileDef => profileDef.Name === profileName).length !== 0;

      if (hasProfileName) {
        return await getPath(profileName);
      }
    } catch (error) {
      if (!Object(_errors__WEBPACK_IMPORTED_MODULE_9__["isErrorWithCode"])('ENOENT', error)) {
        throw error;
      }

      log.warn('Unable to find Firefox profiles.ini');
    }
  };
} // useProfile types and implementation.

// Use the target path as a Firefox profile without cloning it
async function useProfile(profilePath, {
  app,
  configureThisProfile = configureProfile,
  isFirefoxDefaultProfile = isDefaultProfile,
  customPrefs = {},
  createProfileFinder = defaultCreateProfileFinder
} = {}) {
  const isForbiddenProfile = await isFirefoxDefaultProfile(profilePath);

  if (isForbiddenProfile) {
    throw new _errors__WEBPACK_IMPORTED_MODULE_9__["UsageError"]('Cannot use --keep-profile-changes on a default profile' + ` ("${profilePath}")` + ' because web-ext will make it insecure and unsuitable for daily use.' + '\nSee https://github.com/mozilla/web-ext/issues/1005');
  }

  let destinationDirectory;
  const getProfilePath = createProfileFinder();
  const profileIsDirPath = await Object(_util_is_directory__WEBPACK_IMPORTED_MODULE_8__["default"])(profilePath);

  if (profileIsDirPath) {
    log.debug(`Using profile directory "${profilePath}"`);
    destinationDirectory = profilePath;
  } else {
    log.debug(`Assuming ${profilePath} is a named profile`);
    destinationDirectory = await getProfilePath(profilePath);

    if (!destinationDirectory) {
      throw new _errors__WEBPACK_IMPORTED_MODULE_9__["UsageError"](`The request "${profilePath}" profile name ` + 'cannot be resolved to a profile path');
    }
  }

  const profile = new firefox_profile__WEBPACK_IMPORTED_MODULE_5___default.a({
    destinationDirectory
  });
  return await configureThisProfile(profile, {
    app,
    customPrefs
  });
} // createProfile types and implementation.

/*
 * Creates a new temporary profile and resolves with the profile object.
 *
 * The profile will be deleted when the system process exits.
 */
async function createProfile({
  app,
  configureThisProfile = configureProfile,
  customPrefs = {}
} = {}) {
  const profile = new firefox_profile__WEBPACK_IMPORTED_MODULE_5___default.a();
  return await configureThisProfile(profile, {
    app,
    customPrefs
  });
} // copyProfile types and implementation.

/*
 * Copies an existing Firefox profile and creates a new temporary profile.
 * The new profile will be configured with some preferences required to
 * activate extension development.
 *
 * It resolves with the new profile object.
 *
 * The temporary profile will be deleted when the system process exits.
 *
 * The existing profile can be specified as a directory path or a name of
 * one that exists in the current user's Firefox directory.
 */
async function copyProfile(profileDirectory, {
  app,
  configureThisProfile = configureProfile,
  copyFromUserProfile = firefox_profile__WEBPACK_IMPORTED_MODULE_5__["copyFromUserProfile"],
  customPrefs = {}
} = {}) {
  const copy = Object(util__WEBPACK_IMPORTED_MODULE_3__["promisify"])(firefox_profile__WEBPACK_IMPORTED_MODULE_5___default.a.copy);
  const copyByName = Object(util__WEBPACK_IMPORTED_MODULE_3__["promisify"])(copyFromUserProfile);

  try {
    const dirExists = await Object(_util_is_directory__WEBPACK_IMPORTED_MODULE_8__["default"])(profileDirectory);
    let profile;

    if (dirExists) {
      log.debug(`Copying profile directory from "${profileDirectory}"`);
      profile = await copy({
        profileDirectory
      });
    } else {
      log.debug(`Assuming ${profileDirectory} is a named profile`);
      profile = await copyByName({
        name: profileDirectory
      });
    }

    return configureThisProfile(profile, {
      app,
      customPrefs
    });
  } catch (error) {
    throw new _errors__WEBPACK_IMPORTED_MODULE_9__["WebExtError"](`Could not copy Firefox profile from ${profileDirectory}: ${error}`);
  }
} // installExtension types and implementation.

/*
 * Installs an extension into the given Firefox profile object.
 * Resolves when complete.
 *
 * The extension is copied into a special location and you need to turn
 * on some preferences to allow this. See extensions.autoDisableScopes in
 * ./preferences.js.
 *
 * When asProxy is true, a special proxy file will be installed. This is a
 * text file that contains the path to the extension source.
 */
async function installExtension({
  asProxy = false,
  manifestData,
  profile,
  extensionPath,
  asyncFsStat = defaultAsyncFsStat
}) {
  // This more or less follows
  // https://github.com/saadtazi/firefox-profile-js/blob/master/lib/firefox_profile.js#L531
  // (which is broken for web extensions).
  // TODO: maybe uplift a patch that supports web extensions instead?
  if (!profile.extensionsDir) {
    throw new _errors__WEBPACK_IMPORTED_MODULE_9__["WebExtError"]('profile.extensionsDir was unexpectedly empty');
  }

  try {
    await asyncFsStat(profile.extensionsDir);
  } catch (error) {
    if (Object(_errors__WEBPACK_IMPORTED_MODULE_9__["isErrorWithCode"])('ENOENT', error)) {
      log.debug(`Creating extensions directory: ${profile.extensionsDir}`);
      await mz__WEBPACK_IMPORTED_MODULE_6__["fs"].mkdir(profile.extensionsDir);
    } else {
      throw error;
    }
  }

  const id = Object(_util_manifest__WEBPACK_IMPORTED_MODULE_11__["getManifestId"])(manifestData);

  if (!id) {
    throw new _errors__WEBPACK_IMPORTED_MODULE_9__["UsageError"]('An explicit extension ID is required when installing to ' + 'a profile (applications.gecko.id not found in manifest.json)');
  }

  if (asProxy) {
    log.debug(`Installing as an extension proxy; source: ${extensionPath}`);
    const isDir = await Object(_util_is_directory__WEBPACK_IMPORTED_MODULE_8__["default"])(extensionPath);

    if (!isDir) {
      throw new _errors__WEBPACK_IMPORTED_MODULE_9__["WebExtError"]('proxy install: extensionPath must be the extension source ' + `directory; got: ${extensionPath}`);
    } // Write a special extension proxy file containing the source
    // directory. See:
    // https://developer.mozilla.org/en-US/Add-ons/Setting_up_extension_development_environment#Firefox_extension_proxy_file


    const destPath = path__WEBPACK_IMPORTED_MODULE_2___default.a.join(profile.extensionsDir, `${id}`);
    const writeStream = fs__WEBPACK_IMPORTED_MODULE_1___default.a.createWriteStream(destPath);
    writeStream.write(extensionPath);
    writeStream.end();
    return await event_to_promise__WEBPACK_IMPORTED_MODULE_7___default()(writeStream, 'close');
  } else {
    // Write the XPI file to the profile.
    const readStream = fs__WEBPACK_IMPORTED_MODULE_1___default.a.createReadStream(extensionPath);
    const destPath = path__WEBPACK_IMPORTED_MODULE_2___default.a.join(profile.extensionsDir, `${id}.xpi`);
    const writeStream = fs__WEBPACK_IMPORTED_MODULE_1___default.a.createWriteStream(destPath);
    log.debug(`Installing extension from ${extensionPath} to ${destPath}`);
    readStream.pipe(writeStream);
    return await Promise.all([event_to_promise__WEBPACK_IMPORTED_MODULE_7___default()(readStream, 'close'), event_to_promise__WEBPACK_IMPORTED_MODULE_7___default()(writeStream, 'close')]);
  }
}
/* WEBPACK VAR INJECTION */}.call(this, "src/firefox/index.js"))

/***/ }),

/***/ "./src/firefox/preferences.js":
/*!************************************!*\
  !*** ./src/firefox/preferences.js ***!
  \************************************/
/*! exports provided: nonOverridablePreferences, getPrefs, coerceCLICustomPreference */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__filename) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nonOverridablePreferences", function() { return nonOverridablePreferences; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPrefs", function() { return getPrefs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coerceCLICustomPreference", function() { return coerceCLICustomPreference; });
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../errors */ "./src/errors.js");
/* harmony import */ var _util_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/logger */ "./src/util/logger.js");



const log = Object(_util_logger__WEBPACK_IMPORTED_MODULE_2__["createLogger"])(__filename);
const nonOverridablePreferences = ['devtools.debugger.remote-enabled', 'devtools.debugger.prompt-connection', 'xpinstall.signatures.required']; // Flow Types

// Preferences Maps
const prefsCommon = {
  // Allow debug output via dump to be printed to the system console
  'browser.dom.window.dump.enabled': true,
  // Allow remote connections to the debugger.
  'devtools.debugger.remote-enabled': true,
  // Disable the prompt for allowing connections.
  'devtools.debugger.prompt-connection': false,
  // Turn off platform logging because it is a lot of info.
  'extensions.logging.enabled': false,
  // Disable extension updates and notifications.
  'extensions.checkCompatibility.nightly': false,
  'extensions.update.enabled': false,
  'extensions.update.notifyUser': false,
  // From:
  // http://hg.mozilla.org/mozilla-central/file/1dd81c324ac7/build/automation.py.in//l372
  // Only load extensions from the application and user profile.
  // AddonManager.SCOPE_PROFILE + AddonManager.SCOPE_APPLICATION
  'extensions.enabledScopes': 5,
  // Disable metadata caching for installed add-ons by default.
  'extensions.getAddons.cache.enabled': false,
  // Disable intalling any distribution add-ons.
  'extensions.installDistroAddons': false,
  // Allow installing extensions dropped into the profile folder.
  'extensions.autoDisableScopes': 10,
  // Disable app update.
  'app.update.enabled': false,
  // Allow unsigned add-ons.
  'xpinstall.signatures.required': false
}; // Prefs specific to Firefox for Android.

const prefsFennec = {
  'browser.console.showInPanel': true,
  'browser.firstrun.show.uidiscovery': false,
  'devtools.remote.usb.enabled': true
}; // Prefs specific to Firefox for desktop.

const prefsFirefox = {
  'browser.startup.homepage': 'about:blank',
  'startup.homepage_welcome_url': 'about:blank',
  'startup.homepage_welcome_url.additional': '',
  'devtools.errorconsole.enabled': true,
  'devtools.chrome.enabled': true,
  // From:
  // http://hg.mozilla.org/mozilla-central/file/1dd81c324ac7/build/automation.py.in//l388
  // Make url-classifier updates so rare that they won't affect tests.
  'urlclassifier.updateinterval': 172800,
  // Point the url-classifier to a nonexistent local URL for fast failures.
  'browser.safebrowsing.provider.0.gethashURL': 'http://localhost/safebrowsing-dummy/gethash',
  'browser.safebrowsing.provider.0.keyURL': 'http://localhost/safebrowsing-dummy/newkey',
  'browser.safebrowsing.provider.0.updateURL': 'http://localhost/safebrowsing-dummy/update',
  // Disable self repair/SHIELD
  'browser.selfsupport.url': 'https://localhost/selfrepair',
  // Disable Reader Mode UI tour
  'browser.reader.detectedFirstArticle': true,
  // Set the policy firstURL to an empty string to prevent
  // the privacy info page to be opened on every "web-ext run".
  // (See #1114 for rationale)
  'datareporting.policy.firstRunURL': ''
};
const prefs = {
  common: prefsCommon,
  fennec: prefsFennec,
  firefox: prefsFirefox
}; // Module exports

function getPrefs(app = 'firefox') {
  const appPrefs = prefs[app];

  if (!appPrefs) {
    throw new _errors__WEBPACK_IMPORTED_MODULE_1__["WebExtError"](`Unsupported application: ${app}`);
  }

  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, prefsCommon, appPrefs);
}
function coerceCLICustomPreference(cliPrefs) {
  const customPrefs = {};

  for (const pref of cliPrefs) {
    const prefsAry = pref.split('=');

    if (prefsAry.length < 2) {
      throw new _errors__WEBPACK_IMPORTED_MODULE_1__["UsageError"](`Incomplete custom preference: "${pref}". ` + 'Syntax expected: "prefname=prefvalue".');
    }

    const key = prefsAry[0];
    let value = prefsAry.slice(1).join('=');

    if (/[^\w{@}.-]/.test(key)) {
      throw new _errors__WEBPACK_IMPORTED_MODULE_1__["UsageError"](`Invalid custom preference name: ${key}`);
    }

    if (value === `${parseInt(value)}`) {
      value = parseInt(value, 10);
    } else if (value === 'true' || value === 'false') {
      value = value === 'true';
    }

    if (nonOverridablePreferences.includes(key)) {
      log.warn(`'${key}' preference cannot be customized.`);
      continue;
    }

    customPrefs[`${key}`] = value;
  }

  return customPrefs;
}
/* WEBPACK VAR INJECTION */}.call(this, "src/firefox/preferences.js"))

/***/ }),

/***/ "./src/firefox/remote.js":
/*!*******************************!*\
  !*** ./src/firefox/remote.js ***!
  \*******************************/
/*! exports provided: REMOTE_PORT, RemoteFirefox, connect, connectWithMaxRetries */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__filename) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOTE_PORT", function() { return REMOTE_PORT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoteFirefox", function() { return RemoteFirefox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connect", function() { return connect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connectWithMaxRetries", function() { return connectWithMaxRetries; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _cliqz_oss_node_firefox_connect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @cliqz-oss/node-firefox-connect */ "./node_modules/@cliqz-oss/node-firefox-connect/index.js");
/* harmony import */ var _cliqz_oss_node_firefox_connect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_cliqz_oss_node_firefox_connect__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/logger */ "./src/util/logger.js");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../errors */ "./src/errors.js");

 // RemoteFirefox types and implementation



const log = Object(_util_logger__WEBPACK_IMPORTED_MODULE_2__["createLogger"])(__filename); // The default port that Firefox's remote debugger will listen on and the
// client will connect to.

const REMOTE_PORT = 6005;
class RemoteFirefox {
  constructor(client) {
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "client", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "checkedForAddonReloading", void 0);

    this.client = client;
    this.checkedForAddonReloading = false;
    client.client.on('disconnect', () => {
      log.debug('Received "disconnect" from Firefox client');
    });
    client.client.on('end', () => {
      log.debug('Received "end" from Firefox client');
    });
    client.client.on('message', info => {
      // These are arbitrary messages that the client library ignores.
      log.debug(`Received message from client: ${JSON.stringify(info)}`);
    });
  }

  disconnect() {
    this.client.disconnect();
  }

  addonRequest(addon, request) {
    return new Promise((resolve, reject) => {
      this.client.client.makeRequest({
        to: addon.actor,
        type: request
      }, response => {
        if (response.error) {
          const error = `${response.error}: ${response.message}`;
          log.debug(`Client responded to '${request}' request with error:`, error);
          reject(new _errors__WEBPACK_IMPORTED_MODULE_3__["WebExtError"](error));
        } else {
          resolve(response);
        }
      });
    });
  }

  installTemporaryAddon(addonPath) {
    return new Promise((resolve, reject) => {
      this.client.request('listTabs', (error, tabsResponse) => {
        if (error) {
          return reject(new _errors__WEBPACK_IMPORTED_MODULE_3__["WebExtError"](`Remote Firefox: listTabs() error: ${error}`));
        }

        if (!tabsResponse.addonsActor) {
          log.debug('listTabs returned a falsey addonsActor: ' + `${tabsResponse.addonsActor}`);
          return reject(new _errors__WEBPACK_IMPORTED_MODULE_3__["RemoteTempInstallNotSupported"]('This is an older version of Firefox that does not provide an ' + 'add-ons actor for remote installation. Try Firefox 49 or ' + 'higher.'));
        }

        this.client.client.makeRequest({
          to: tabsResponse.addonsActor,
          type: 'installTemporaryAddon',
          addonPath
        }, installResponse => {
          if (installResponse.error) {
            return reject(new _errors__WEBPACK_IMPORTED_MODULE_3__["WebExtError"]('installTemporaryAddon: Error: ' + `${installResponse.error}: ${installResponse.message}`));
          }

          log.debug(`installTemporaryAddon: ${JSON.stringify(installResponse)}`);
          log.info(`Installed ${addonPath} as a temporary add-on`);
          resolve(installResponse);
        });
      });
    });
  }

  getInstalledAddon(addonId) {
    return new Promise((resolve, reject) => {
      this.client.request('listAddons', (error, response) => {
        if (error) {
          reject(new _errors__WEBPACK_IMPORTED_MODULE_3__["WebExtError"](`Remote Firefox: listAddons() error: ${error}`));
        } else {
          resolve(response.addons);
        }
      });
    }).then(addons => {
      for (const addon of addons) {
        if (addon.id === addonId) {
          return addon;
        }
      }

      log.debug(`Remote Firefox has these addons: ${addons.map(a => a.id)}`);
      throw new _errors__WEBPACK_IMPORTED_MODULE_3__["WebExtError"]('The remote Firefox does not have your extension installed');
    });
  }

  async checkForAddonReloading(addon) {
    if (this.checkedForAddonReloading) {
      // We only need to check once if reload() is supported.
      return addon;
    } else {
      const response = await this.addonRequest(addon, 'requestTypes');

      if (response.requestTypes.indexOf('reload') === -1) {
        const supportedRequestTypes = JSON.stringify(response.requestTypes);
        log.debug(`Remote Firefox only supports: ${supportedRequestTypes}`);
        throw new _errors__WEBPACK_IMPORTED_MODULE_3__["UsageError"]('This Firefox version does not support add-on reloading. ' + 'Re-run with --no-reload');
      } else {
        this.checkedForAddonReloading = true;
        return addon;
      }
    }
  }

  async reloadAddon(addonId) {
    const addon = await this.getInstalledAddon(addonId);
    await this.checkForAddonReloading(addon);
    await this.addonRequest(addon, 'reload');
    process.stdout.write(`\rLast extension reload: ${new Date().toTimeString()}`);
    log.debug('\n');
  }

} // Connect types and implementation

async function connect(port = REMOTE_PORT, {
  connectToFirefox = _cliqz_oss_node_firefox_connect__WEBPACK_IMPORTED_MODULE_1___default.a
} = {}) {
  log.debug(`Connecting to Firefox on port ${port}`);
  const client = await connectToFirefox(port);
  log.debug(`Connected to the remote Firefox debugger on port ${port}`);
  return new RemoteFirefox(client);
} // ConnectWithMaxRetries types and implementation

async function connectWithMaxRetries( // A max of 250 will try connecting for 30 seconds.
{
  maxRetries = 250,
  retryInterval = 120,
  port
}, {
  connectToFirefox = connect
} = {}) {
  async function establishConnection() {
    var lastError;

    for (let retries = 0; retries <= maxRetries; retries++) {
      try {
        return await connectToFirefox(port);
      } catch (error) {
        if (Object(_errors__WEBPACK_IMPORTED_MODULE_3__["isErrorWithCode"])('ECONNREFUSED', error)) {
          // Wait for `retryInterval` ms.
          await new Promise(resolve => {
            setTimeout(resolve, retryInterval);
          });
          lastError = error;
          log.debug(`Retrying Firefox (${retries}); connection error: ${error}`);
        } else {
          log.error(error.stack);
          throw error;
        }
      }
    }

    log.debug('Connect to Firefox debugger: too many retries');
    throw lastError;
  }

  log.debug('Connecting to the remote Firefox debugger');
  return establishConnection();
}
/* WEBPACK VAR INJECTION */}.call(this, "src/firefox/remote.js"))

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _program__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./program */ "./src/program.js");
/* harmony import */ var _cmd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cmd */ "./src/cmd/index.js");
/* harmony import */ var _util_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/logger */ "./src/util/logger.js");


 // This only exposes util/logger so far.
// Do we need anything else?

const util = {
  logger: _util_logger__WEBPACK_IMPORTED_MODULE_2__
};
/* harmony default export */ __webpack_exports__["default"] = ({
  main: _program__WEBPACK_IMPORTED_MODULE_0__["main"],
  cmd: _cmd__WEBPACK_IMPORTED_MODULE_1__["default"],
  util
});

/***/ }),

/***/ "./src/program.js":
/*!************************!*\
  !*** ./src/program.js ***!
  \************************/
/*! exports provided: Program, defaultVersionGetter, main */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__filename) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Program", function() { return Program; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultVersionGetter", function() { return defaultVersionGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "main", function() { return main; });
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! os */ "os");
/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(os__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var camelcase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! camelcase */ "camelcase");
/* harmony import */ var camelcase__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(camelcase__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var git_rev_sync__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! git-rev-sync */ "git-rev-sync");
/* harmony import */ var git_rev_sync__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(git_rev_sync__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var yargs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! yargs */ "yargs");
/* harmony import */ var yargs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(yargs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _cmd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cmd */ "./src/cmd/index.js");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./errors */ "./src/errors.js");
/* harmony import */ var _util_logger__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./util/logger */ "./src/util/logger.js");
/* harmony import */ var _firefox_preferences__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./firefox/preferences */ "./src/firefox/preferences.js");
/* harmony import */ var _util_updates__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./util/updates */ "./src/util/updates.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./config */ "./src/config.js");














const log = Object(_util_logger__WEBPACK_IMPORTED_MODULE_10__["createLogger"])(__filename);
const envPrefix = 'WEB_EXT';

/*
 * The command line program.
 */
class Program {
  constructor(argv, {
    absolutePackageDir = process.cwd()
  } = {}) {
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "absolutePackageDir", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "yargs", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "commands", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "shouldExitProgram", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "verboseEnabled", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "options", void 0);

    // This allows us to override the process argv which is useful for
    // testing.
    // NOTE: process.argv.slice(2) removes the path to node and web-ext
    // executables from the process.argv array.
    argv = argv || process.argv.slice(2); // NOTE: always initialize yargs explicitly with the package dir
    // to avoid side-effects due to yargs looking for its configuration
    // section from a package.json file stored in an arbitrary directory
    // (e.g. in tests yargs would end up loading yargs config from the
    // mocha package.json). web-ext package.json doesn't contain any yargs
    // section as it is deprecated and we configure yargs using
    // yargs.parserConfiguration. See web-ext#469 for rationale.

    const yargsInstance = yargs__WEBPACK_IMPORTED_MODULE_7___default()(argv, absolutePackageDir);
    this.absolutePackageDir = absolutePackageDir;
    this.verboseEnabled = false;
    this.shouldExitProgram = true;
    this.yargs = yargsInstance; // The following yargs configuration option is needed to fix #304.

    this.yargs.parserConfiguration({
      'boolean-negation': false
    });
    this.yargs.strict();
    this.commands = {};
    this.options = {};
  }

  command(name, description, executor, commandOptions = {}) {
    this.options[camelcase__WEBPACK_IMPORTED_MODULE_5___default()(name)] = commandOptions;
    this.yargs.command(name, description, yargsForCmd => {
      if (!commandOptions) {
        return;
      }

      return yargsForCmd // Make sure the user does not add any extra commands. For example,
      // this would be a mistake because lint does not accept arguments:
      // web-ext lint ./src/path/to/file.js
      .demandCommand(0, 0, undefined, 'This command does not take any arguments').strict().exitProcess(this.shouldExitProgram) // Calling env() will be unnecessary after
      // https://github.com/yargs/yargs/issues/486 is fixed
      .env(envPrefix).options(commandOptions);
    });
    this.commands[name] = executor;
    return this;
  }

  setGlobalOptions(options) {
    // This is a convenience for setting global options.
    // An option is only global (i.e. available to all sub commands)
    // with the `global` flag so this makes sure every option has it.
    this.options = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, this.options, options);
    Object.keys(options).forEach(key => {
      options[key].global = true;

      if (options[key].demandOption === undefined) {
        // By default, all options should be "demanded" otherwise
        // yargs.strict() will think they are missing when declared.
        options[key].demandOption = true;
      }
    });
    this.yargs.options(options);
    return this;
  }

  enableVerboseMode(logStream, version) {
    if (this.verboseEnabled) {
      return;
    }

    logStream.makeVerbose();
    log.info('Version:', version);
    this.verboseEnabled = true;
  }

  async execute({
    checkForUpdates = _util_updates__WEBPACK_IMPORTED_MODULE_12__["checkForUpdates"],
    systemProcess = process,
    logStream = _util_logger__WEBPACK_IMPORTED_MODULE_10__["consoleStream"],
    getVersion = defaultVersionGetter,
    applyConfigToArgv = _config__WEBPACK_IMPORTED_MODULE_13__["applyConfigToArgv"],
    discoverConfigFiles = _config__WEBPACK_IMPORTED_MODULE_13__["discoverConfigFiles"],
    loadJSConfigFile = _config__WEBPACK_IMPORTED_MODULE_13__["loadJSConfigFile"],
    shouldExitProgram = true,
    globalEnv = "development"
  } = {}) {
    this.shouldExitProgram = shouldExitProgram;
    this.yargs.exitProcess(this.shouldExitProgram);
    const argv = this.yargs.argv;
    const cmd = argv._[0];
    const version = getVersion(this.absolutePackageDir);
    const runCommand = this.commands[cmd];

    if (argv.verbose) {
      this.enableVerboseMode(logStream, version);
    }

    let adjustedArgv = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, argv);

    try {
      if (cmd === undefined) {
        throw new _errors__WEBPACK_IMPORTED_MODULE_9__["UsageError"]('No sub-command was specified in the args');
      }

      if (!runCommand) {
        throw new _errors__WEBPACK_IMPORTED_MODULE_9__["UsageError"](`Unknown command: ${cmd}`);
      }

      if (globalEnv === 'production') {
        checkForUpdates({
          version
        });
      }

      const configFiles = []; // Because of an issue with yargs special handling for '--no-' option prefix (See #306)
      // we need to look explicitly for the options  --config-discovery and --no-config-discovery
      // (See #1307).

      if (argv.configDiscovery && !argv.noConfigDiscovery) {
        log.debug('Discovering config files. ' + 'Set --no-config-discovery to disable');
        const discoveredConfigs = await discoverConfigFiles();
        configFiles.push(...discoveredConfigs);
      } else {
        log.debug('Not discovering config files');
      }

      if (argv.config) {
        configFiles.push(path__WEBPACK_IMPORTED_MODULE_3___default.a.resolve(argv.config));
      }

      if (configFiles.length) {
        const niceFileList = configFiles.map(f => f.replace(process.cwd(), '.')).map(f => f.replace(os__WEBPACK_IMPORTED_MODULE_2___default.a.homedir(), '~')).join(', ');
        log.info('Applying config file' + `${configFiles.length !== 1 ? 's' : ''}: ` + `${niceFileList}`);
      }

      configFiles.forEach(configFileName => {
        const configObject = loadJSConfigFile(configFileName);
        adjustedArgv = applyConfigToArgv({
          argv: adjustedArgv,
          argvFromCLI: argv,
          configFileName,
          configObject,
          options: this.options
        });
      });

      if (adjustedArgv.verbose) {
        // Ensure that the verbose is enabled when specified in a config file.
        this.enableVerboseMode(logStream, version);
      }

      await runCommand(adjustedArgv, {
        shouldExitProgram
      });
    } catch (error) {
      if (!(error instanceof _errors__WEBPACK_IMPORTED_MODULE_9__["UsageError"]) || adjustedArgv.verbose) {
        log.error(`\n${error.stack}\n`);
      } else {
        log.error(`\n${error}\n`);
      }

      if (error.code) {
        log.error(`Error code: ${error.code}\n`);
      }

      log.debug(`Command executed: ${cmd}`);

      if (this.shouldExitProgram) {
        systemProcess.exit(1);
      } else {
        throw error;
      }
    }
  }

} // A global variable generated by DefinePlugin, generated in webpack.config.js

function defaultVersionGetter(absolutePackageDir, {
  globalEnv = "development"
} = {}) {
  if (globalEnv === 'production') {
    log.debug('Getting the version from package.json');
    const packageData = Object(fs__WEBPACK_IMPORTED_MODULE_4__["readFileSync"])(path__WEBPACK_IMPORTED_MODULE_3___default.a.join(absolutePackageDir, 'package.json'));
    return JSON.parse(packageData).version;
  } else {
    log.debug('Getting version from the git revision');
    return `${git_rev_sync__WEBPACK_IMPORTED_MODULE_6___default.a.branch(absolutePackageDir)}-${git_rev_sync__WEBPACK_IMPORTED_MODULE_6___default.a.long(absolutePackageDir)}`;
  }
} // TODO: add pipes to Flow type after https://github.com/facebook/flow/issues/2405 is fixed

function main(absolutePackageDir, {
  getVersion = defaultVersionGetter,
  commands = _cmd__WEBPACK_IMPORTED_MODULE_8__["default"],
  argv,
  runOptions = {}
} = {}) {
  const program = new Program(argv, {
    absolutePackageDir
  });
  const version = getVersion(absolutePackageDir); // yargs uses magic camel case expansion to expose options on the
  // final argv object. For example, the 'artifacts-dir' option is alternatively
  // available as argv.artifactsDir.

  program.yargs.usage(`Usage: $0 [options] command

Option values can also be set by declaring an environment variable prefixed
with $${envPrefix}_. For example: $${envPrefix}_SOURCE_DIR=/path is the same as
--source-dir=/path.

To view specific help for any given command, add the command name.
Example: $0 --help run.
`).help('help').alias('h', 'help').env(envPrefix).version(version).demandCommand(1, 'You must specify a command').strict();
  program.setGlobalOptions({
    'source-dir': {
      alias: 's',
      describe: 'Web extension source directory.',
      default: process.cwd(),
      requiresArg: true,
      type: 'string',
      coerce: path__WEBPACK_IMPORTED_MODULE_3___default.a.resolve
    },
    'artifacts-dir': {
      alias: 'a',
      describe: 'Directory where artifacts will be saved.',
      default: path__WEBPACK_IMPORTED_MODULE_3___default.a.join(process.cwd(), 'web-ext-artifacts'),
      normalize: true,
      requiresArg: true,
      type: 'string'
    },
    'verbose': {
      alias: 'v',
      describe: 'Show verbose output',
      type: 'boolean',
      demandOption: false
    },
    'ignore-files': {
      alias: 'i',
      describe: 'A list of glob patterns to define which files should be ' + 'ignored. (Example: --ignore-files=path/to/first.js ' + 'path/to/second.js "**/*.log")',
      demandOption: false,
      requiresArg: true,
      type: 'array'
    },
    'no-input': {
      describe: 'Disable all features that require standard input',
      type: 'boolean',
      demandOption: false
    },
    'config': {
      alias: 'c',
      describe: 'Path to a CommonJS config file to set ' + 'option defaults',
      default: undefined,
      demandOption: false,
      requiresArg: true,
      type: 'string'
    },
    'config-discovery': {
      describe: 'Discover config files in home directory and ' + 'working directory. Disable with --no-config-discovery.',
      demandOption: false,
      default: true,
      type: 'boolean'
    }
  });
  program.command('build', 'Create an extension package from source', commands.build, {
    'as-needed': {
      describe: 'Watch for file changes and re-build as needed',
      type: 'boolean'
    },
    'overwrite-dest': {
      alias: 'o',
      describe: 'Overwrite destination package if it exists.',
      type: 'boolean'
    }
  }).command('sign', 'Sign the extension so it can be installed in Firefox', commands.sign, {
    'api-key': {
      describe: 'API key (JWT issuer) from addons.mozilla.org',
      demandOption: true,
      type: 'string'
    },
    'api-secret': {
      describe: 'API secret (JWT secret) from addons.mozilla.org',
      demandOption: true,
      type: 'string'
    },
    'api-url-prefix': {
      describe: 'Signing API URL prefix',
      default: 'https://addons.mozilla.org/api/v3',
      demandOption: true,
      type: 'string'
    },
    'api-proxy': {
      describe: 'Use a proxy to access the signing API. ' + 'Example: https://yourproxy:6000 ',
      demandOption: false,
      type: 'string'
    },
    'id': {
      describe: 'A custom ID for the extension. This has no effect if the ' + 'extension already declares an explicit ID in its manifest.',
      demandOption: false,
      type: 'string'
    },
    'timeout': {
      describe: 'Number of milliseconds to wait before giving up',
      type: 'number'
    },
    'channel': {
      describe: 'The channel for which to sign the addon. Either ' + '\'listed\' or \'unlisted\'',
      type: 'string'
    }
  }).command('run', 'Run the extension', commands.run, {
    'target': {
      alias: 't',
      describe: 'The extensions runners to enable (e.g. firefox-desktop, ' + 'firefox-android). Specify this option multiple times to ' + 'run against multiple targets.',
      default: 'firefox-desktop',
      demandOption: false,
      type: 'array'
    },
    'firefox': {
      alias: ['f', 'firefox-binary'],
      describe: 'Path or alias to a Firefox executable such as firefox-bin ' + 'or firefox.exe. ' + 'If not specified, the default Firefox will be used. ' + 'You can specify the following aliases in lieu of a path: ' + 'firefox, beta, nightly, firefoxdeveloperedition.',
      demandOption: false,
      type: 'string'
    },
    'firefox-profile': {
      alias: 'p',
      describe: 'Run Firefox using a copy of this profile. The profile ' + 'can be specified as a directory or a name, such as one ' + 'you would see in the Profile Manager. If not specified, ' + 'a new temporary profile will be created.',
      demandOption: false,
      type: 'string'
    },
    'keep-profile-changes': {
      describe: 'Run Firefox directly in custom profile. Any changes to ' + 'the profile will be saved.',
      demandOption: false,
      type: 'boolean'
    },
    'no-reload': {
      describe: 'Do not reload the extension when source files change',
      demandOption: false,
      type: 'boolean'
    },
    'pre-install': {
      describe: 'Pre-install the extension into the profile before ' + 'startup. This is only needed to support older versions ' + 'of Firefox.',
      demandOption: false,
      type: 'boolean'
    },
    'pref': {
      describe: 'Launch firefox with a custom preference ' + '(example: --pref=general.useragent.locale=fr-FR). ' + 'You can repeat this option to set more than one ' + 'preference.',
      demandOption: false,
      requiresArg: true,
      type: 'array',
      coerce: _firefox_preferences__WEBPACK_IMPORTED_MODULE_11__["coerceCLICustomPreference"]
    },
    'start-url': {
      alias: ['u', 'url'],
      describe: 'Launch firefox at specified page',
      demandOption: false,
      requiresArg: true,
      type: 'array'
    },
    'browser-console': {
      alias: ['bc'],
      describe: 'Open the DevTools Browser Console.',
      demandOption: false,
      type: 'boolean'
    },
    'args': {
      alias: ['arg'],
      describe: 'Additional CLI options passed to the Browser binary',
      demandOption: false,
      type: 'array'
    },
    // Firefox for Android CLI options.
    'adb-bin': {
      describe: 'Specify a custom path to the adb binary',
      demandOption: false,
      type: 'string',
      requiresArg: true
    },
    'adb-host': {
      describe: 'Connect to adb on the specified host',
      demandOption: false,
      type: 'string',
      requiresArg: true
    },
    'adb-port': {
      describe: 'Connect to adb on the specified port',
      demandOption: false,
      type: 'string',
      requiresArg: true
    },
    'adb-device': {
      alias: ['android-device'],
      describe: 'Connect to the specified adb device name',
      demandOption: false,
      type: 'string',
      requiresArg: true
    },
    'firefox-apk': {
      describe: 'Run a specific Firefox for Android APK. ' + 'Example: org.mozilla.fennec_aurora',
      demandOption: false,
      type: 'string',
      requiresArg: true
    }
  }).command('lint', 'Validate the extension source', commands.lint, {
    'output': {
      alias: 'o',
      describe: 'The type of output to generate',
      type: 'string',
      default: 'text',
      choices: ['json', 'text']
    },
    'metadata': {
      describe: 'Output only metadata as JSON',
      type: 'boolean',
      default: false
    },
    'warnings-as-errors': {
      describe: 'Treat warnings as errors by exiting non-zero for warnings',
      alias: 'w',
      type: 'boolean',
      default: false
    },
    'pretty': {
      describe: 'Prettify JSON output',
      type: 'boolean',
      default: false
    },
    'self-hosted': {
      describe: 'Your extension will be self-hosted. This disables messages ' + 'related to hosting on addons.mozilla.org.',
      type: 'boolean',
      default: false
    },
    'boring': {
      describe: 'Disables colorful shell output',
      type: 'boolean',
      default: false
    }
  }).command('docs', 'Open the web-ext documentation in a browser', commands.docs, {});
  return program.execute(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({
    getVersion
  }, runOptions));
}
/* WEBPACK VAR INJECTION */}.call(this, "src/program.js"))

/***/ }),

/***/ "./src/util/adb.js":
/*!*************************!*\
  !*** ./src/util/adb.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__filename) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ADBUtils; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var adbkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! adbkit */ "adbkit");
/* harmony import */ var adbkit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(adbkit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../errors */ "./src/errors.js");
/* harmony import */ var _util_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/logger */ "./src/util/logger.js");




const log = Object(_util_logger__WEBPACK_IMPORTED_MODULE_3__["createLogger"])(__filename);

// Helper function used to raise an UsageError when the adb binary has not been found.
async function wrapADBCall(asyncFn) {
  try {
    return await asyncFn();
  } catch (error) {
    if (Object(_errors__WEBPACK_IMPORTED_MODULE_2__["isErrorWithCode"])('ENOENT', error) && error.message.includes('spawn adb')) {
      throw new _errors__WEBPACK_IMPORTED_MODULE_2__["UsageError"]('No adb executable has been found. ' + 'You can Use --adb-bin, --adb-host/--adb-port ' + 'to configure it manually if needed.');
    }

    throw error;
  }
}

class ADBUtils {
  // TODO: better flow typing here.
  // Map<deviceId -> artifactsDir>
  // Toggled when the user wants to abort the RDP Unix Socket discovery loop
  // while it is still executing.
  constructor(params) {
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "params", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "adb", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "adbClient", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "artifactsDirMap", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "userAbortDiscovery", void 0);

    this.params = params;
    const {
      adb,
      adbBin,
      adbHost,
      adbPort
    } = params;
    this.adb = adb || adbkit__WEBPACK_IMPORTED_MODULE_1___default.a;
    this.adbClient = this.adb.createClient({
      bin: adbBin,
      host: adbHost,
      port: adbPort
    });
    this.artifactsDirMap = new Map();
    this.userAbortDiscovery = false;
  }

  runShellCommand(deviceId, cmd) {
    const {
      adb,
      adbClient
    } = this;
    log.debug(`Run adb shell command on ${deviceId}: ${JSON.stringify(cmd)}`);
    return wrapADBCall(async () => {
      return await adbClient.shell(deviceId, cmd).then(adb.util.readAll);
    }).then(res => res.toString());
  }

  async discoverDevices() {
    const {
      adbClient
    } = this;
    let devices = [];
    log.debug('Listing android devices');
    devices = await wrapADBCall(async () => adbClient.listDevices());
    return devices.map(dev => dev.id);
  }

  async discoverInstalledFirefoxAPKs(deviceId, firefoxApk) {
    log.debug(`Listing installed Firefox APKs on ${deviceId}`);
    const pmList = await this.runShellCommand(deviceId, ['pm', 'list', 'packages']);
    return pmList.split('\n').map(line => line.replace('package:', '').trim()).filter(line => {
      // Look for an exact match if firefoxApk is defined.
      if (firefoxApk) {
        return line === firefoxApk;
      } // Match any package name that starts with the package name of a Firefox for Android browser.


      return line.startsWith('org.mozilla.fennec') || line.startsWith('org.mozilla.firefox');
    });
  }

  async getAndroidVersionNumber(deviceId) {
    const androidVersion = (await this.runShellCommand(deviceId, ['getprop', 'ro.build.version.sdk'])).trim();
    const androidVersionNumber = parseInt(androidVersion); // No need to check the granted runtime permissions on Android versions < Lollypop.

    if (isNaN(androidVersionNumber)) {
      throw new _errors__WEBPACK_IMPORTED_MODULE_2__["WebExtError"]('Unable to discovery android version on ' + `${deviceId}: ${androidVersion}`);
    }

    return androidVersionNumber;
  } // Raise an UsageError when the given APK does not have the required runtime permissions.


  async ensureRequiredAPKRuntimePermissions(deviceId, apk, permissions) {
    const permissionsMap = {}; // Initialize every permission to false in the permissions map.

    for (const perm of permissions) {
      permissionsMap[perm] = false;
    } // Retrieve the permissions information for the given apk.


    const pmDumpLogs = (await this.runShellCommand(deviceId, ['pm', 'dump', apk])).split('\n'); // Set to true the required permissions that have been granted.

    for (const line of pmDumpLogs) {
      for (const perm of permissions) {
        if (line.includes(`${perm}: granted=true`)) {
          permissionsMap[perm] = true;
        }
      }
    }

    for (const perm of permissions) {
      if (!permissionsMap[perm]) {
        throw new _errors__WEBPACK_IMPORTED_MODULE_2__["UsageError"](`Required ${perm} has not be granted for ${apk}. ` + 'Please grant them using the Android Settings ' + 'or using the following adb command:\n' + `\t adb shell pm grant ${apk} ${perm}\n`);
      }
    }
  }

  async amForceStopAPK(deviceId, apk) {
    await this.runShellCommand(deviceId, ['am', 'force-stop', apk]);
  }

  async getOrCreateArtifactsDir(deviceId) {
    let artifactsDir = this.artifactsDirMap.get(deviceId);

    if (artifactsDir) {
      return artifactsDir;
    }

    artifactsDir = `/sdcard/web-ext-artifacts-${Date.now()}`;
    const testDirOut = (await this.runShellCommand(deviceId, `test -d ${artifactsDir} ; echo $?`)).trim();

    if (testDirOut !== '1') {
      throw new _errors__WEBPACK_IMPORTED_MODULE_2__["WebExtError"](`Cannot create artifacts directory ${artifactsDir} ` + `because it exists on ${deviceId}.`);
    }

    await this.runShellCommand(deviceId, ['mkdir', '-p', artifactsDir]);
    this.artifactsDirMap.set(deviceId, artifactsDir);
    return artifactsDir;
  }

  async clearArtifactsDir(deviceId) {
    const artifactsDir = this.artifactsDirMap.get(deviceId);

    if (!artifactsDir) {
      // nothing to do here.
      return;
    }

    this.artifactsDirMap.delete(deviceId);
    log.debug(`Removing ${artifactsDir} artifacts directory on ${deviceId} device`);
    await this.runShellCommand(deviceId, ['rm', '-rf', artifactsDir]);
  }

  async pushFile(deviceId, localPath, devicePath) {
    const {
      adbClient
    } = this;
    log.debug(`Pushing ${localPath} to ${devicePath} on ${deviceId}`);
    await wrapADBCall(async () => {
      await adbClient.push(deviceId, localPath, devicePath).then(function (transfer) {
        return new Promise(resolve => {
          transfer.on('end', resolve);
        });
      });
    });
  }

  async startFirefoxAPK(deviceId, apk, deviceProfileDir) {
    const {
      adbClient
    } = this;
    log.debug(`Starting ${apk} with profile ${deviceProfileDir} on ${deviceId}`);
    await wrapADBCall(async () => {
      await adbClient.startActivity(deviceId, {
        wait: true,
        action: 'android.activity.MAIN',
        component: `${apk}/.App`,
        extras: [{
          key: 'args',
          value: `-profile ${deviceProfileDir}`
        }]
      });
    });
  }

  setUserAbortDiscovery(value) {
    this.userAbortDiscovery = value;
  }

  async discoverRDPUnixSocket(deviceId, apk, {
    maxDiscoveryTime,
    retryInterval
  } = {}) {
    let rdpUnixSockets = [];
    const discoveryStartedAt = Date.now();

    while (rdpUnixSockets.length === 0) {
      if (this.userAbortDiscovery) {
        throw new _errors__WEBPACK_IMPORTED_MODULE_2__["UsageError"]('Exiting Firefox Remote Debugging socket discovery on user request');
      }

      if (Date.now() - discoveryStartedAt > maxDiscoveryTime) {
        throw new _errors__WEBPACK_IMPORTED_MODULE_2__["WebExtError"]('Timeout while waiting for the Android Firefox Debugger Socket');
      }

      rdpUnixSockets = (await this.runShellCommand(deviceId, ['cat', '/proc/net/unix'])).split('\n').filter(line => {
        // The RDP unix socket is expected to be a path in the form:
        //   /data/data/org.mozilla.fennec_rpl/firefox-debugger-socket
        return line.trim().endsWith(`${apk}/firefox-debugger-socket`);
      });

      if (rdpUnixSockets.length === 0) {
        await new Promise(resolve => setTimeout(resolve, retryInterval));
      }
    } // Convert into an array of unix socket filenames.


    rdpUnixSockets = rdpUnixSockets.map(line => {
      return line.trim().split(/\s/).pop();
    });

    if (rdpUnixSockets.length > 1) {
      throw new _errors__WEBPACK_IMPORTED_MODULE_2__["WebExtError"]('Unexpected multiple RDP sockets: ' + `${JSON.stringify(rdpUnixSockets)}`);
    }

    return rdpUnixSockets[0];
  }

  async setupForward(deviceId, remote, local) {
    const {
      adbClient
    } = this; // TODO(rpl): we should use adb.listForwards and reuse the existing one if any (especially
    // because adbkit doesn't seem to support `adb forward --remote` yet).

    log.debug(`Configuring ADB forward for ${deviceId}: ${remote} -> ${local}`);
    await wrapADBCall(async () => {
      await adbClient.forward(deviceId, local, remote);
    });
  }

}
/* WEBPACK VAR INJECTION */}.call(this, "src/util/adb.js"))

/***/ }),

/***/ "./src/util/artifacts.js":
/*!*******************************!*\
  !*** ./src/util/artifacts.js ***!
  \*******************************/
/*! exports provided: prepareArtifactsDir */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__filename) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prepareArtifactsDir", function() { return prepareArtifactsDir; });
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! util */ "util");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mz__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mz */ "mz");
/* harmony import */ var mz__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mz__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mkdirp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mkdirp */ "mkdirp");
/* harmony import */ var mkdirp__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mkdirp__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../errors */ "./src/errors.js");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./logger */ "./src/util/logger.js");





const log = Object(_logger__WEBPACK_IMPORTED_MODULE_4__["createLogger"])(__filename);
const defaultAsyncMkdirp = Object(util__WEBPACK_IMPORTED_MODULE_0__["promisify"])(mkdirp__WEBPACK_IMPORTED_MODULE_2___default.a);
const defaultAsyncFsAccess = mz__WEBPACK_IMPORTED_MODULE_1__["fs"].access.bind(mz__WEBPACK_IMPORTED_MODULE_1__["fs"]);
async function prepareArtifactsDir(artifactsDir, {
  asyncMkdirp = defaultAsyncMkdirp,
  asyncFsAccess = defaultAsyncFsAccess
} = {}) {
  try {
    const stats = await mz__WEBPACK_IMPORTED_MODULE_1__["fs"].stat(artifactsDir);

    if (!stats.isDirectory()) {
      throw new _errors__WEBPACK_IMPORTED_MODULE_3__["UsageError"](`--artifacts-dir="${artifactsDir}" exists but it is not a directory.`);
    } // If the artifactsDir already exists, check that we have the write permissions on it.


    try {
      await asyncFsAccess(artifactsDir, mz__WEBPACK_IMPORTED_MODULE_1__["fs"].W_OK);
    } catch (accessErr) {
      if (Object(_errors__WEBPACK_IMPORTED_MODULE_3__["isErrorWithCode"])('EACCES', accessErr)) {
        throw new _errors__WEBPACK_IMPORTED_MODULE_3__["UsageError"](`--artifacts-dir="${artifactsDir}" exists but the user lacks ` + 'permissions on it.');
      } else {
        throw accessErr;
      }
    }
  } catch (error) {
    if (Object(_errors__WEBPACK_IMPORTED_MODULE_3__["isErrorWithCode"])('EACCES', error)) {
      // Handle errors when the artifactsDir cannot be accessed.
      throw new _errors__WEBPACK_IMPORTED_MODULE_3__["UsageError"](`Cannot access --artifacts-dir="${artifactsDir}" because the user ` + `lacks permissions: ${error}`);
    } else if (Object(_errors__WEBPACK_IMPORTED_MODULE_3__["isErrorWithCode"])('ENOENT', error)) {
      // Create the artifact dir if it doesn't exist yet.
      try {
        log.debug(`Creating artifacts directory: ${artifactsDir}`);
        await asyncMkdirp(artifactsDir);
      } catch (mkdirErr) {
        if (Object(_errors__WEBPACK_IMPORTED_MODULE_3__["isErrorWithCode"])('EACCES', mkdirErr)) {
          // Handle errors when the artifactsDir cannot be created for lack of permissions.
          throw new _errors__WEBPACK_IMPORTED_MODULE_3__["UsageError"](`Cannot create --artifacts-dir="${artifactsDir}" because the ` + `user lacks permissions: ${mkdirErr}`);
        } else {
          throw mkdirErr;
        }
      }
    } else {
      throw error;
    }
  }

  return artifactsDir;
}
/* WEBPACK VAR INJECTION */}.call(this, "src/util/artifacts.js"))

/***/ }),

/***/ "./src/util/desktop-notifier.js":
/*!**************************************!*\
  !*** ./src/util/desktop-notifier.js ***!
  \**************************************/
/*! exports provided: showDesktopNotification */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__filename) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showDesktopNotification", function() { return showDesktopNotification; });
/* harmony import */ var node_notifier__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node-notifier */ "node-notifier");
/* harmony import */ var node_notifier__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(node_notifier__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logger */ "./src/util/logger.js");


const defaultLog = Object(_logger__WEBPACK_IMPORTED_MODULE_1__["createLogger"])(__filename);
function showDesktopNotification({
  title,
  message,
  icon
}, {
  notifier = node_notifier__WEBPACK_IMPORTED_MODULE_0___default.a,
  log = defaultLog
} = {}) {
  return new Promise((resolve, reject) => {
    notifier.notify({
      title,
      message,
      icon
    }, (err, res) => {
      if (err) {
        log.debug(`Desktop notifier error: ${err.message},` + ` response: ${res}`);
        reject(err);
      } else {
        resolve();
      }
    });
  });
}
/* WEBPACK VAR INJECTION */}.call(this, "src/util/desktop-notifier.js"))

/***/ }),

/***/ "./src/util/file-exists.js":
/*!*********************************!*\
  !*** ./src/util/file-exists.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return fileExists; });
/* harmony import */ var mz__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mz */ "mz");
/* harmony import */ var mz__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mz__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../errors */ "./src/errors.js");



/*
 * Resolves true if the path is a readable file.
 *
 * Usage:
 *
 * const exists = await fileExists(filePath);
 * if (exists) {
 *   // ...
 * }
 *
 * */
async function fileExists(path, {
  fileIsReadable = f => mz__WEBPACK_IMPORTED_MODULE_0__["fs"].access(f, mz__WEBPACK_IMPORTED_MODULE_0__["fs"].constants.R_OK)
} = {}) {
  try {
    await fileIsReadable(path);
    const stat = await mz__WEBPACK_IMPORTED_MODULE_0__["fs"].stat(path);
    return stat.isFile();
  } catch (error) {
    if (Object(_errors__WEBPACK_IMPORTED_MODULE_1__["isErrorWithCode"])(['EACCES', 'ENOENT'], error)) {
      return false;
    }

    throw error;
  }
}

/***/ }),

/***/ "./src/util/file-filter.js":
/*!*********************************!*\
  !*** ./src/util/file-filter.js ***!
  \*********************************/
/*! exports provided: isSubPath, FileFilter, createFileFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__filename) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSubPath", function() { return isSubPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileFilter", function() { return FileFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFileFilter", function() { return createFileFilter; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var multimatch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! multimatch */ "multimatch");
/* harmony import */ var multimatch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(multimatch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logger */ "./src/util/logger.js");




const log = Object(_logger__WEBPACK_IMPORTED_MODULE_3__["createLogger"])(__filename); // check if target is a sub directory of src

const isSubPath = (src, target) => {
  const relate = path__WEBPACK_IMPORTED_MODULE_1___default.a.relative(src, target); // same dir

  if (!relate) {
    return false;
  }

  if (relate === '..') {
    return false;
  }

  return !relate.startsWith(`..${path__WEBPACK_IMPORTED_MODULE_1___default.a.sep}`);
}; // FileFilter types and implementation.

/*
 * Allows or ignores files.
 */
class FileFilter {
  constructor({
    baseIgnoredPatterns = ['**/*.xpi', '**/*.zip', '**/.*', // any hidden file and folder
    '**/.*/**/*', // and the content inside hidden folder
    '**/node_modules', '**/node_modules/**/*'],
    ignoreFiles = [],
    sourceDir,
    artifactsDir
  } = {}) {
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "filesToIgnore", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "sourceDir", void 0);

    sourceDir = path__WEBPACK_IMPORTED_MODULE_1___default.a.resolve(sourceDir);
    this.filesToIgnore = [];
    this.sourceDir = sourceDir;
    this.addToIgnoreList(baseIgnoredPatterns);

    if (ignoreFiles) {
      this.addToIgnoreList(ignoreFiles);
    }

    if (artifactsDir && isSubPath(sourceDir, artifactsDir)) {
      artifactsDir = path__WEBPACK_IMPORTED_MODULE_1___default.a.resolve(artifactsDir);
      log.debug(`Ignoring artifacts directory "${artifactsDir}" ` + 'and all its subdirectories');
      this.addToIgnoreList([artifactsDir, path__WEBPACK_IMPORTED_MODULE_1___default.a.join(artifactsDir, '**', '*')]);
    }
  }
  /**
   *  Resolve relative path to absolute path with sourceDir.
   */


  resolveWithSourceDir(file) {
    const resolvedPath = path__WEBPACK_IMPORTED_MODULE_1___default.a.resolve(this.sourceDir, file);
    log.debug(`Resolved path ${file} with sourceDir ${this.sourceDir} ` + `to ${resolvedPath}`);
    return resolvedPath;
  }
  /**
   *  Insert more files into filesToIgnore array.
   */


  addToIgnoreList(files) {
    for (const file of files) {
      if (file.charAt(0) === '!') {
        const resolvedFile = this.resolveWithSourceDir(file.substr(1));
        this.filesToIgnore.push(`!${resolvedFile}`);
      } else {
        this.filesToIgnore.push(this.resolveWithSourceDir(file));
      }
    }
  }
  /*
   * Returns true if the file is wanted.
   *
   * If filePath does not start with a slash, it will be treated as a path
   * relative to sourceDir when matching it against all configured
   * ignore-patterns.
   *
   * Example: this is called by zipdir as wantFile(filePath) for each
   * file in the folder that is being archived.
   */


  wantFile(filePath) {
    const resolvedPath = this.resolveWithSourceDir(filePath);
    const matches = multimatch__WEBPACK_IMPORTED_MODULE_2___default()(resolvedPath, this.filesToIgnore);

    if (matches.length > 0) {
      log.debug(`FileFilter: ignoring file ${resolvedPath}`);
      return false;
    }

    return true;
  }

} // a helper function to make mocking easier

const createFileFilter = params => new FileFilter(params);
/* WEBPACK VAR INJECTION */}.call(this, "src/util/file-filter.js"))

/***/ }),

/***/ "./src/util/is-directory.js":
/*!**********************************!*\
  !*** ./src/util/is-directory.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isDirectory; });
/* harmony import */ var mz__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mz */ "mz");
/* harmony import */ var mz__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mz__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../errors */ "./src/errors.js");


/*
 * Resolves true if the path is a readable directory.
 *
 * Usage:
 *
 * isDirectory('/some/path')
 *  .then((dirExists) => {
 *    // dirExists will be true or false.
 *  });
 *
 * */

function isDirectory(path) {
  return mz__WEBPACK_IMPORTED_MODULE_0__["fs"].stat(path).then(stats => stats.isDirectory()).catch(Object(_errors__WEBPACK_IMPORTED_MODULE_1__["onlyErrorsWithCode"])(['ENOENT', 'ENOTDIR'], () => {
    return false;
  }));
}

/***/ }),

/***/ "./src/util/logger.js":
/*!****************************!*\
  !*** ./src/util/logger.js ***!
  \****************************/
/*! exports provided: ConsoleStream, consoleStream, createLogger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsoleStream", function() { return ConsoleStream; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "consoleStream", function() { return consoleStream; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLogger", function() { return createLogger; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bunyan__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bunyan */ "bunyan");
/* harmony import */ var bunyan__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bunyan__WEBPACK_IMPORTED_MODULE_1__);

 // Bunyan-related Flow types

class ConsoleStream {
  constructor({
    verbose = false
  } = {}) {
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "verbose", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "isCapturing", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "capturedMessages", void 0);

    this.verbose = verbose;
    this.isCapturing = false;
    this.capturedMessages = [];
  }

  format({
    name,
    msg,
    level
  }) {
    const prefix = this.verbose ? `[${name}][${bunyan__WEBPACK_IMPORTED_MODULE_1__["nameFromLevel"][level]}] ` : '';
    return `${prefix}${msg}\n`;
  }

  makeVerbose() {
    this.verbose = true;
  }

  write(packet, {
    localProcess = process
  } = {}) {
    const thisLevel = this.verbose ? bunyan__WEBPACK_IMPORTED_MODULE_1___default.a.TRACE : bunyan__WEBPACK_IMPORTED_MODULE_1___default.a.INFO;

    if (packet.level >= thisLevel) {
      const msg = this.format(packet);

      if (this.isCapturing) {
        this.capturedMessages.push(msg);
      } else {
        localProcess.stdout.write(msg);
      }
    }
  }

  startCapturing() {
    this.isCapturing = true;
  }

  stopCapturing() {
    this.isCapturing = false;
    this.capturedMessages = [];
  }

  flushCapturedLogs({
    localProcess = process
  } = {}) {
    for (const msg of this.capturedMessages) {
      localProcess.stdout.write(msg);
    }

    this.capturedMessages = [];
  }

}
const consoleStream = new ConsoleStream(); // createLogger types and implementation.

function createLogger(filename, {
  createBunyanLog = bunyan__WEBPACK_IMPORTED_MODULE_1__["createLogger"]
} = {}) {
  return createBunyanLog({
    // Strip the leading src/ from file names (which is in all file names) to
    // make the name less redundant.
    name: filename.replace(/^src\//, ''),
    // Capture all log levels and let the stream filter them.
    level: bunyan__WEBPACK_IMPORTED_MODULE_1___default.a.TRACE,
    streams: [{
      type: 'raw',
      stream: consoleStream
    }]
  });
}

/***/ }),

/***/ "./src/util/manifest.js":
/*!******************************!*\
  !*** ./src/util/manifest.js ***!
  \******************************/
/*! exports provided: default, getManifestId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__filename) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getValidatedManifest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getManifestId", function() { return getManifestId; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mz__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mz */ "mz");
/* harmony import */ var mz__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mz__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var parse_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! parse-json */ "parse-json");
/* harmony import */ var parse_json__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(parse_json__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var strip_json_comments__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! strip-json-comments */ "strip-json-comments");
/* harmony import */ var strip_json_comments__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(strip_json_comments__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../errors */ "./src/errors.js");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./logger */ "./src/util/logger.js");






const log = Object(_logger__WEBPACK_IMPORTED_MODULE_5__["createLogger"])(__filename); // getValidatedManifest helper types and implementation

async function getValidatedManifest(sourceDir) {
  const manifestFile = path__WEBPACK_IMPORTED_MODULE_0___default.a.join(sourceDir, 'manifest.json');
  log.debug(`Validating manifest at ${manifestFile}`);
  let manifestContents;

  try {
    manifestContents = await mz__WEBPACK_IMPORTED_MODULE_1__["fs"].readFile(manifestFile, {
      encoding: 'utf-8'
    });
  } catch (error) {
    throw new _errors__WEBPACK_IMPORTED_MODULE_4__["InvalidManifest"](`Could not read manifest.json file at ${manifestFile}: ${error}`);
  }

  let manifestData;

  try {
    manifestData = parse_json__WEBPACK_IMPORTED_MODULE_2___default()(strip_json_comments__WEBPACK_IMPORTED_MODULE_3___default()(manifestContents), manifestFile);
  } catch (error) {
    throw new _errors__WEBPACK_IMPORTED_MODULE_4__["InvalidManifest"](`Error parsing manifest.json at ${manifestFile}: ${error}`);
  }

  const errors = []; // This is just some basic validation of what web-ext needs, not
  // what Firefox will need to run the extension.
  // TODO: integrate with the addons-linter for actual validation.

  if (!manifestData.name) {
    errors.push('missing "name" property');
  }

  if (!manifestData.version) {
    errors.push('missing "version" property');
  }

  if (manifestData.applications && !manifestData.applications.gecko) {
    // Since the applications property only applies to gecko, make
    // sure 'gecko' exists when 'applications' is defined. This should
    // make introspection of gecko properties easier.
    errors.push('missing "applications.gecko" property');
  }

  if (errors.length) {
    throw new _errors__WEBPACK_IMPORTED_MODULE_4__["InvalidManifest"](`Manifest at ${manifestFile} is invalid: ${errors.join('; ')}`);
  }

  return manifestData;
}
function getManifestId(manifestData) {
  return manifestData.applications ? manifestData.applications.gecko.id : undefined;
}
/* WEBPACK VAR INJECTION */}.call(this, "src/util/manifest.js"))

/***/ }),

/***/ "./src/util/promisify.js":
/*!*******************************!*\
  !*** ./src/util/promisify.js ***!
  \*******************************/
/*! exports provided: multiArgsPromisedFn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiArgsPromisedFn", function() { return multiArgsPromisedFn; });
/*
 * A small promisify helper to make it easier to customize a
 * function promisified (using the 'util' module available in
 * nodejs >= 8) to resolve to an array of results:
 *
 *    import {promisify} from 'util';
 *    import {multiArgsPromisedFn} from '../util/promisify';
 *
 *    aCallbackBasedFn[promisify.custom] = multiArgsPromisedFn(tmp.dir);
 *    ...
 */
function multiArgsPromisedFn(fn) {
  return (...callerArgs) => {
    return new Promise((resolve, reject) => {
      fn(...callerArgs, (err, ...rest) => {
        if (err) {
          reject(err);
        } else {
          resolve(rest);
        }
      });
    });
  };
}

/***/ }),

/***/ "./src/util/stdin.js":
/*!***************************!*\
  !*** ./src/util/stdin.js ***!
  \***************************/
/*! exports provided: isTTY, setRawMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTTY", function() { return isTTY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setRawMode", function() { return setRawMode; });
function isTTY(stream) {
  // $FLOW_FIXME: flow complains that stream may not provide isTTY as a property.
  return stream.isTTY;
}
function setRawMode(stream, rawMode) {
  // $FLOW_FIXME: flow complains that stdin may not provide setRawMode.
  stream.setRawMode(rawMode);
}

/***/ }),

/***/ "./src/util/temp-dir.js":
/*!******************************!*\
  !*** ./src/util/temp-dir.js ***!
  \******************************/
/*! exports provided: withTempDir, TempDir */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__filename) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withTempDir", function() { return withTempDir; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TempDir", function() { return TempDir; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! util */ "util");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tmp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tmp */ "tmp");
/* harmony import */ var tmp__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tmp__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logger */ "./src/util/logger.js");
/* harmony import */ var _promisify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./promisify */ "./src/util/promisify.js");





const log = Object(_logger__WEBPACK_IMPORTED_MODULE_3__["createLogger"])(__filename);
tmp__WEBPACK_IMPORTED_MODULE_2___default.a.dir[util__WEBPACK_IMPORTED_MODULE_1__["promisify"].custom] = Object(_promisify__WEBPACK_IMPORTED_MODULE_4__["multiArgsPromisedFn"])(tmp__WEBPACK_IMPORTED_MODULE_2___default.a.dir);
const createTempDir = Object(util__WEBPACK_IMPORTED_MODULE_1__["promisify"])(tmp__WEBPACK_IMPORTED_MODULE_2___default.a.dir);
/*
 * Work with a self-destructing temporary directory in a promise chain.
 *
 * The directory will be destroyed when the promise chain is finished
 * (whether there was an error or not).
 *
 * Usage:
 *
 * withTempDir(
 *   (tmpDir) =>
 *     doSomething(tmpDir.path())
 *     .then(...)
 * );
 *
 */

function withTempDir(makePromise) {
  const tmpDir = new TempDir();
  return tmpDir.create().then(() => {
    return makePromise(tmpDir);
  }).catch(tmpDir.errorHandler()).then(tmpDir.successHandler());
}
/*
 * Work with a self-destructing temporary directory object.
 *
 * It is safer to use withTempDir() instead but if you know
 * what you're doing you can use it directly like:
 *
 * let tmpDir = new TempDir();
 * tmpDir.create()
 *   .then(() => {
 *     // work with tmpDir.path()
 *   })
 *   .catch(tmpDir.errorHandler())
 *   .then(tmpDir.successHandler());
 *
 */

class TempDir {
  constructor() {
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "_path", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "_removeTempDir", void 0);

    this._path = undefined;
    this._removeTempDir = undefined;
  }
  /*
   * Returns a promise that is fulfilled when the temp directory has
   * been created.
   */


  create() {
    return createTempDir({
      prefix: 'tmp-web-ext-',
      // This allows us to remove a non-empty tmp dir.
      unsafeCleanup: true
    }).then(([tmpPath, removeTempDir]) => {
      this._path = tmpPath;
      this._removeTempDir = removeTempDir;
      log.debug(`Created temporary directory: ${this.path()}`);
      return this;
    });
  }
  /*
   * Get the absolute path of the temp directory.
   */


  path() {
    if (!this._path) {
      throw new Error('You cannot access path() before calling create()');
    }

    return this._path;
  }
  /*
   * Returns a callback that will catch an error, remove
   * the temporary directory, and throw the error.
   *
   * This is intended for use in a promise like
   * Promise().catch(tmp.errorHandler())
   */


  errorHandler() {
    return error => {
      this.remove();
      throw error;
    };
  }
  /*
   * Returns a callback that will remove the temporary direcotry.
   *
   * This is intended for use in a promise like
   * Promise().then(tmp.successHandler())
   */


  successHandler() {
    return promiseResult => {
      this.remove();
      return promiseResult;
    };
  }
  /*
   * Remove the temp directory.
   */


  remove() {
    if (!this._removeTempDir) {
      return;
    }

    log.debug(`Removing temporary directory: ${this.path()}`);
    this._removeTempDir && this._removeTempDir();
  }

}
/* WEBPACK VAR INJECTION */}.call(this, "src/util/temp-dir.js"))

/***/ }),

/***/ "./src/util/updates.js":
/*!*****************************!*\
  !*** ./src/util/updates.js ***!
  \*****************************/
/*! exports provided: checkForUpdates */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkForUpdates", function() { return checkForUpdates; });
/* harmony import */ var update_notifier__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! update-notifier */ "update-notifier");
/* harmony import */ var update_notifier__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(update_notifier__WEBPACK_IMPORTED_MODULE_0__);

function checkForUpdates({
  version,
  updateNotifier = update_notifier__WEBPACK_IMPORTED_MODULE_0___default.a
}) {
  const pkg = {
    name: 'web-ext',
    version
  };
  updateNotifier({
    pkg,
    updateCheckInterval: 1000 * 60 * 60 * 24 * 3 // 3 days,

  }).notify();
}

/***/ }),

/***/ "./src/util/zip-dir.js":
/*!*****************************!*\
  !*** ./src/util/zip-dir.js ***!
  \*****************************/
/*! exports provided: zipDir */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zipDir", function() { return zipDir; });
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! util */ "util");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var zip_dir__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! zip-dir */ "zip-dir");
/* harmony import */ var zip_dir__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(zip_dir__WEBPACK_IMPORTED_MODULE_1__);


const zipDir = Object(util__WEBPACK_IMPORTED_MODULE_0__["promisify"])(zip_dir__WEBPACK_IMPORTED_MODULE_1___default.a);

/***/ }),

/***/ "./src/watcher.js":
/*!************************!*\
  !*** ./src/watcher.js ***!
  \************************/
/*! exports provided: default, proxyFileChanges */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__filename) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return onSourceChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "proxyFileChanges", function() { return proxyFileChanges; });
/* harmony import */ var watchpack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! watchpack */ "watchpack");
/* harmony import */ var watchpack__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(watchpack__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! debounce */ "debounce");
/* harmony import */ var debounce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(debounce__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/logger */ "./src/util/logger.js");



const log = Object(_util_logger__WEBPACK_IMPORTED_MODULE_2__["createLogger"])(__filename); // onSourceChange types and implementation

function onSourceChange({
  sourceDir,
  artifactsDir,
  onChange,
  shouldWatchFile
}) {
  // TODO: For network disks, we would need to add {poll: true}.
  const watcher = new watchpack__WEBPACK_IMPORTED_MODULE_0___default.a();
  const executeImmediately = true;
  onChange = debounce__WEBPACK_IMPORTED_MODULE_1___default()(onChange, 1000, executeImmediately);
  watcher.on('change', filePath => {
    proxyFileChanges({
      artifactsDir,
      onChange,
      filePath,
      shouldWatchFile
    });
  });
  log.debug(`Watching for file changes in ${sourceDir}`);
  watcher.watch([], [sourceDir], Date.now()); // TODO: support interrupting the watcher on Windows.
  // https://github.com/mozilla/web-ext/issues/225

  process.on('SIGINT', () => watcher.close());
  return watcher;
} // proxyFileChanges types and implementation.

function proxyFileChanges({
  artifactsDir,
  onChange,
  filePath,
  shouldWatchFile
}) {
  if (filePath.indexOf(artifactsDir) === 0 || !shouldWatchFile(filePath)) {
    log.debug(`Ignoring change to: ${filePath}`);
  } else {
    log.debug(`Changed: ${filePath}`);
    log.debug(`Last change detection: ${new Date().toTimeString()}`);
    onChange();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, "src/watcher.js"))

/***/ }),

/***/ "adbkit":
/*!*************************!*\
  !*** external "adbkit" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("adbkit");

/***/ }),

/***/ "addons-linter":
/*!********************************!*\
  !*** external "addons-linter" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("addons-linter");

/***/ }),

/***/ "bunyan":
/*!*************************!*\
  !*** external "bunyan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("bunyan");

/***/ }),

/***/ "camelcase":
/*!****************************!*\
  !*** external "camelcase" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("camelcase");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("child_process");

/***/ }),

/***/ "colors":
/*!*************************!*\
  !*** external "colors" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("colors");

/***/ }),

/***/ "debounce":
/*!***************************!*\
  !*** external "debounce" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("debounce");

/***/ }),

/***/ "decamelize":
/*!*****************************!*\
  !*** external "decamelize" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("decamelize");

/***/ }),

/***/ "es6-error":
/*!****************************!*\
  !*** external "es6-error" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("es6-error");

/***/ }),

/***/ "es6-promise":
/*!******************************!*\
  !*** external "es6-promise" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("es6-promise");

/***/ }),

/***/ "event-to-promise":
/*!***********************************!*\
  !*** external "event-to-promise" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("event-to-promise");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("events");

/***/ }),

/***/ "firefox-profile":
/*!**********************************!*\
  !*** external "firefox-profile" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firefox-profile");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "fx-runner":
/*!****************************!*\
  !*** external "fx-runner" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fx-runner");

/***/ }),

/***/ "git-rev-sync":
/*!*******************************!*\
  !*** external "git-rev-sync" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("git-rev-sync");

/***/ }),

/***/ "js-select":
/*!****************************!*\
  !*** external "js-select" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-select");

/***/ }),

/***/ "mkdirp":
/*!*************************!*\
  !*** external "mkdirp" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mkdirp");

/***/ }),

/***/ "multimatch":
/*!*****************************!*\
  !*** external "multimatch" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("multimatch");

/***/ }),

/***/ "mz":
/*!*********************!*\
  !*** external "mz" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mz");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("net");

/***/ }),

/***/ "node-notifier":
/*!********************************!*\
  !*** external "node-notifier" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("node-notifier");

/***/ }),

/***/ "opn":
/*!**********************!*\
  !*** external "opn" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("opn");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("os");

/***/ }),

/***/ "parse-json":
/*!*****************************!*\
  !*** external "parse-json" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("parse-json");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "readline":
/*!***************************!*\
  !*** external "readline" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("readline");

/***/ }),

/***/ "require-uncached":
/*!***********************************!*\
  !*** external "require-uncached" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("require-uncached");

/***/ }),

/***/ "sign-addon":
/*!*****************************!*\
  !*** external "sign-addon" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sign-addon");

/***/ }),

/***/ "strip-json-comments":
/*!**************************************!*\
  !*** external "strip-json-comments" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("strip-json-comments");

/***/ }),

/***/ "tmp":
/*!**********************!*\
  !*** external "tmp" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("tmp");

/***/ }),

/***/ "update-notifier":
/*!**********************************!*\
  !*** external "update-notifier" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("update-notifier");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),

/***/ "watchpack":
/*!****************************!*\
  !*** external "watchpack" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("watchpack");

/***/ }),

/***/ "yargs":
/*!************************!*\
  !*** external "yargs" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("yargs");

/***/ }),

/***/ "zip-dir":
/*!**************************!*\
  !*** external "zip-dir" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("zip-dir");

/***/ })

/******/ });
//# sourceMappingURL=web-ext.js.map