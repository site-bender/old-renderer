import { r as registerInstance, h } from './index-d29ca497.js';
import { c as createCommonjsModule, a as commonjsGlobal, g as getDefaultExportFromCjs, s as state, T as Typography, C as ComponentRenderer } from './index-ca4d34ea.js';

var browserPonyfill = createCommonjsModule(function (module, exports) {
var global = typeof self !== 'undefined' ? self : commonjsGlobal;
var __self__ = (function () {
function F() {
this.fetch = false;
this.DOMException = global.DOMException;
}
F.prototype = global;
return new F();
})();
(function(self) {

var irrelevant = (function (exports) {

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob:
      'FileReader' in self &&
      'Blob' in self &&
      (function() {
        try {
          new Blob();
          return true
        } catch (e) {
          return false
        }
      })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  };

  function isDataView(obj) {
    return obj && DataView.prototype.isPrototypeOf(obj)
  }

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ];

    var isArrayBufferView =
      ArrayBuffer.isView ||
      function(obj) {
        return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
      };
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name);
    }
    if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value);
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift();
        return {done: value === undefined, value: value}
      }
    };

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      };
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {};

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value);
      }, this);
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        this.append(header[0], header[1]);
      }, this);
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name]);
      }, this);
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name);
    value = normalizeValue(value);
    var oldValue = this.map[name];
    this.map[name] = oldValue ? oldValue + ', ' + value : value;
  };

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)];
  };

  Headers.prototype.get = function(name) {
    name = normalizeName(name);
    return this.has(name) ? this.map[name] : null
  };

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  };

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value);
  };

  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this);
      }
    }
  };

  Headers.prototype.keys = function() {
    var items = [];
    this.forEach(function(value, name) {
      items.push(name);
    });
    return iteratorFor(items)
  };

  Headers.prototype.values = function() {
    var items = [];
    this.forEach(function(value) {
      items.push(value);
    });
    return iteratorFor(items)
  };

  Headers.prototype.entries = function() {
    var items = [];
    this.forEach(function(value, name) {
      items.push([name, value]);
    });
    return iteratorFor(items)
  };

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true;
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result);
      };
      reader.onerror = function() {
        reject(reader.error);
      };
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsArrayBuffer(blob);
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsText(blob);
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf);
    var chars = new Array(view.length);

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i]);
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength);
      view.set(new Uint8Array(buf));
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false;

    this._initBody = function(body) {
      this._bodyInit = body;
      if (!body) {
        this._bodyText = '';
      } else if (typeof body === 'string') {
        this._bodyText = body;
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body;
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body;
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString();
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer);
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer]);
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body);
      } else {
        this._bodyText = body = Object.prototype.toString.call(body);
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8');
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type);
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
        }
      }
    };

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this);
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      };

      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      };
    }

    this.text = function() {
      var rejected = consumed(this);
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    };

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      };
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    };

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

  function normalizeMethod(method) {
    var upcased = method.toUpperCase();
    return methods.indexOf(upcased) > -1 ? upcased : method
  }

  function Request(input, options) {
    options = options || {};
    var body = options.body;

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url;
      this.credentials = input.credentials;
      if (!options.headers) {
        this.headers = new Headers(input.headers);
      }
      this.method = input.method;
      this.mode = input.mode;
      this.signal = input.signal;
      if (!body && input._bodyInit != null) {
        body = input._bodyInit;
        input.bodyUsed = true;
      }
    } else {
      this.url = String(input);
    }

    this.credentials = options.credentials || this.credentials || 'same-origin';
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers);
    }
    this.method = normalizeMethod(options.method || this.method || 'GET');
    this.mode = options.mode || this.mode || null;
    this.signal = options.signal || this.signal;
    this.referrer = null;

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body);
  }

  Request.prototype.clone = function() {
    return new Request(this, {body: this._bodyInit})
  };

  function decode(body) {
    var form = new FormData();
    body
      .trim()
      .split('&')
      .forEach(function(bytes) {
        if (bytes) {
          var split = bytes.split('=');
          var name = split.shift().replace(/\+/g, ' ');
          var value = split.join('=').replace(/\+/g, ' ');
          form.append(decodeURIComponent(name), decodeURIComponent(value));
        }
      });
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers();
    // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
    // https://tools.ietf.org/html/rfc7230#section-3.2
    var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ');
    preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
      var parts = line.split(':');
      var key = parts.shift().trim();
      if (key) {
        var value = parts.join(':').trim();
        headers.append(key, value);
      }
    });
    return headers
  }

  Body.call(Request.prototype);

  function Response(bodyInit, options) {
    if (!options) {
      options = {};
    }

    this.type = 'default';
    this.status = options.status === undefined ? 200 : options.status;
    this.ok = this.status >= 200 && this.status < 300;
    this.statusText = 'statusText' in options ? options.statusText : 'OK';
    this.headers = new Headers(options.headers);
    this.url = options.url || '';
    this._initBody(bodyInit);
  }

  Body.call(Response.prototype);

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  };

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''});
    response.type = 'error';
    return response
  };

  var redirectStatuses = [301, 302, 303, 307, 308];

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  };

  exports.DOMException = self.DOMException;
  try {
    new exports.DOMException();
  } catch (err) {
    exports.DOMException = function(message, name) {
      this.message = message;
      this.name = name;
      var error = Error(message);
      this.stack = error.stack;
    };
    exports.DOMException.prototype = Object.create(Error.prototype);
    exports.DOMException.prototype.constructor = exports.DOMException;
  }

  function fetch(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init);

      if (request.signal && request.signal.aborted) {
        return reject(new exports.DOMException('Aborted', 'AbortError'))
      }

      var xhr = new XMLHttpRequest();

      function abortXhr() {
        xhr.abort();
      }

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        };
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
        var body = 'response' in xhr ? xhr.response : xhr.responseText;
        resolve(new Response(body, options));
      };

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'));
      };

      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'));
      };

      xhr.onabort = function() {
        reject(new exports.DOMException('Aborted', 'AbortError'));
      };

      xhr.open(request.method, request.url, true);

      if (request.credentials === 'include') {
        xhr.withCredentials = true;
      } else if (request.credentials === 'omit') {
        xhr.withCredentials = false;
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob';
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value);
      });

      if (request.signal) {
        request.signal.addEventListener('abort', abortXhr);

        xhr.onreadystatechange = function() {
          // DONE (success or failure)
          if (xhr.readyState === 4) {
            request.signal.removeEventListener('abort', abortXhr);
          }
        };
      }

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
    })
  }

  fetch.polyfill = true;

  if (!self.fetch) {
    self.fetch = fetch;
    self.Headers = Headers;
    self.Request = Request;
    self.Response = Response;
  }

  exports.Headers = Headers;
  exports.Request = Request;
  exports.Response = Response;
  exports.fetch = fetch;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

}({}));
})(__self__);
__self__.fetch.ponyfill = true;
// Remove "polyfill" property added by whatwg-fetch
delete __self__.fetch.polyfill;
// Choose between native implementation (global) or custom implementation (__self__)
// var ctx = global.fetch ? global : __self__;
var ctx = __self__; // this line disable service worker support temporarily
exports = ctx.fetch; // To enable: import fetch from 'cross-fetch'
exports.default = ctx.fetch; // For TypeScript consumers without esModuleInterop.
exports.fetch = ctx.fetch; // To enable: import {fetch} from 'cross-fetch'
exports.Headers = ctx.Headers;
exports.Request = ctx.Request;
exports.Response = ctx.Response;
module.exports = exports;
});

const crossFetch = /*@__PURE__*/getDefaultExportFromCjs(browserPonyfill);

const isObject = (val) => !Array.isArray(val) && val !== null && typeof val === 'object';
const hasChildren = ({ vchildren }) => Array.isArray(vchildren);
const hasAttributes = ({ vattrs }, requiredAttrs = []) => isObject(vattrs) && requiredAttrs.every(vattrs.hasOwnProperty.bind(vattrs));
const isTextNode = ({ vtext }) => typeof vtext === 'string';
// Can't use instanceof HTMLElement because MockHTMLElement during pre-rendering isn't
const isElement = (val) => typeof val === 'object' && val.nodeType === 1 && typeof val.ownerDocument === 'object';
const isElementArray = (val) => Array.isArray(val) && val.every(isElement);
const convertToPublic = (node) => ({
    vattrs: node.$attrs$,
    vchildren: node.$children$,
    vkey: node.$key$,
    vname: node.$name$,
    vtag: node.$tag$,
    vtext: node.$text$,
});

const createElement = ({ vtag, vattrs, vchildren, vtext }) => {
    if (vtext != null) {
        return document.createTextNode(vtext);
    }
    const element = document.createElement(vtag);
    if (vattrs != null) {
        for (const key in vattrs) {
            element.setAttribute(key, vattrs[key]);
        }
    }
    if (vchildren != null) {
        for (const child of vchildren) {
            element.appendChild(createElement(convertToPublic(child)));
        }
    }
    return element;
};
const shouldApplyToHead = (val) => isElement(val) || (isElementArray(val) && val.length === 2);
const applyToHead = (element) => {
    if (Array.isArray(element)) {
        return document.head.replaceChild(element[0], element[1]);
    }
    return document.head.appendChild(element);
};

function title(node, head) {
    const firstChild = (node.vchildren || [])[0];
    if (hasChildren(node) && isTextNode(convertToPublic(firstChild))) {
        return [createElement(node), head.querySelector('title')];
    }
}
function meta(node, head) {
    var _a, _b, _c;
    const namePropKey = ((_a = node.vattrs) === null || _a === void 0 ? void 0 : _a.property) ? 'property' : 'name';
    const namePropValue = ((_b = node.vattrs) === null || _b === void 0 ? void 0 : _b.property) || ((_c = node.vattrs) === null || _c === void 0 ? void 0 : _c.name);
    const existingElement = head.querySelector(`meta[${namePropKey}="${namePropValue}"]`);
    if (existingElement !== null) {
        return [createElement(node), existingElement];
    }
    else {
        return createElement(node);
    }
}
function link(node) {
    if (!hasChildren(node)) {
        return createElement(node);
    }
}
function style(node) {
    const firstChild = (node.vchildren || [])[0];
    if (hasChildren(node) && isTextNode(convertToPublic(firstChild))) {
        return createElement(node);
    }
}
function script(node) {
    if (hasChildren(node) || hasAttributes(node)) {
        return createElement(node);
    }
}
function base(node) {
    if (!hasChildren(node) && hasAttributes(node)) {
        return createElement(node);
    }
}
const template = createElement;
const noscript = createElement; // SSR only
const types = {
    title,
    meta,
    link,
    style,
    script,
    base,
    template,
    noscript,
};

const headExists = document && document.head;
const validTagNames = Object.keys(types);
const isValidNode = (node) => validTagNames.indexOf(node.$tag$) > -1;
const renderNode = (node) => types[node.vtag](node, document.head);
const Helmet = (_props, children, utils) => {
    if (!headExists) {
        return null;
    }
    const validChildren = children.filter(isValidNode);
    // Build an HTMLElement for each provided virtual child
    const rendered = [];
    utils.forEach(validChildren, (n) => {
        rendered.push(renderNode(n));
    });
    rendered
        .filter(shouldApplyToHead)
        .forEach(applyToHead);
    return null;
};

let SiteBender = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  componentWillLoad() {
    const data = {
      query: `query GetView($name: String!) {
				Configuration(where: {name: {_eq: $name}}) {
					Site {
						head
						id
						title
						titleSeparator
						titleSiteFirst
					}
					components
					head
					id
					name
					rootId
					title
				}
			}`,
      variables: {
        name: this.page || window.location.pathname,
      },
      operationName: 'GetView',
    };
    return crossFetch('https://sitebender.hasura.app/v1/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'x-hasura-admin-secret': 'vxqJlZIraNka8T4wiefSd7fdQEsmN27xa7W5viCW7RYJ4R8OPFdo8JwNeD4QG2oc',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => {
      var _a, _b;
      state.config = (_b = (_a = data === null || data === void 0 ? void 0 : data.data) === null || _a === void 0 ? void 0 : _a.Configuration) === null || _b === void 0 ? void 0 : _b[0];
    });
  }
  render() {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const title = ((_a = state.config.Site) === null || _a === void 0 ? void 0 : _a.titleSiteFirst)
      ? [state.config.Site.title, state.config.title]
      : [state.config.title, state.config.Site.title];
    const meta = Object.assign(Object.assign({}, (((_b = state.config.Site.head) === null || _b === void 0 ? void 0 : _b.meta) || {})), (((_c = state.config.head) === null || _c === void 0 ? void 0 : _c.meta) || {}));
    const links = Object.assign(Object.assign({}, (((_d = state.config.Site.head) === null || _d === void 0 ? void 0 : _d.link) || {})), (((_e = state.config.head) === null || _e === void 0 ? void 0 : _e.link) || {}));
    const component = state.config.components[state.config.rootId];
    const example = {
      children: 'This is the cool numeric 0123456789 text!',
      componentId: '4j9dHZX6JQsy4TrP4nrp3',
      componentType: 'Typography',
      face: 'serif',
      fontVariantNumeric: [
        'oldstyle-nums',
        'proportional-nums',
        'slashed-zero',
      ],
    };
    return (h("main", null, h(Helmet, null, ((_g = (_f = state.config.Site) === null || _f === void 0 ? void 0 : _f.head) === null || _g === void 0 ? void 0 : _g.base) ? (h("base", Object.assign({}, (_h = state.config.Site.head) === null || _h === void 0 ? void 0 : _h.base))) : undefined, Object.keys(meta).map(key => (h("meta", Object.assign({}, meta[key])))), h("title", null, title.join(state.config.Site.titleSeparator || ' ~ ')), Object.keys(links).map(key => (h("link", Object.assign({}, links[key]))))), h("h1", null, "sitebender"), h("p", null, h(Typography, Object.assign({}, example), "This is the text!")), component ? (h(ComponentRenderer, { componentId: state.config.rootId })) : undefined));
  }
};

export { SiteBender as site_bender };
