function isObj(x) {
  var type = typeof x;
  return x !== null && (type === 'object' || type === 'function');
}

function toObject(val) {
 if (val === null || val === undefined) {
  throw new TypeError('Sources cannot be null or undefined');
}

 return Object(val);
}

function assignKey(to, from, key) {
 var val = from[key];

 if (val === undefined || val === null) {
  return;
 }

 if (Object.prototype.hasOwnProperty.call(to, key)) {
  if (to[key] === undefined || to[key] === null) {
   throw new TypeError('Cannot convert undefined or null to object (' + key + ')');
  }
 }

 if (!Object.prototype.hasOwnProperty.call(to, key) || !isObj(val)) {
  to[key] = val;
 } else {
  to[key] = assign(Object(to[key]), from[key]);
 }
}

function assign(to, from) {
 if (to === from) {
  return to;
 }

 from = Object(from);

 for (var key in from) {
  if (Object.prototype.hasOwnProperty.call(from, key)) {
   assignKey(to, from, key);
  }
 }

 if (Object.getOwnPropertySymbols) {
  var symbols = Object.getOwnPropertySymbols(from);

  for (var i = 0; i < symbols.length; i++) {
   if (Object.prototype.propertyIsEnumerable.call(from, symbols[i])) {
    assignKey(to, from, symbols[i]);
   }
  }
 }

 return to;
}

export default function deepAssign(target) {
 target = toObject(target);

 for (var s = 1; s < arguments.length; s++) {
  assign(target, arguments[s]);
 }

 return target;
}
