/**
 * This is an implementation of the abstract equality algorithm defined in
 * 7.2.13 (http://www.ecma-international.org/ecma-262/7.0/#sec-abstract-equality-comparison)
 * to demonstrate the behavior of loose equality comparison.
 */
export default function abstractEqualityComparison(x, y) {
  const iteration = `Performing ${str(x)}\ == ${str(y)}`;
  const steps = [];
  const step = s => steps.push(s);
  const resolve = result => [[iteration, steps, result]];
  const delegate = iterations => [[iteration, steps], ...iterations];

  step(1);
  if (Type(x) === Type(y)) {
    step('1.a');
    return resolve(x === y);
  }

  step(2);
  if (x === null && y === undefined) {
    return resolve(true);
  }

  step(3);
  if (x === undefined && y === null) {
    return resolve(true);
  }

  step(4);
  if (Type(x) === 'number' && Type(y) === 'string') {
    return delegate(abstractEqualityComparison(x, ToNumber(y)));
  }

  step(5);
  if (Type(x) === 'string' && Type(y) === 'number') {
    return delegate(abstractEqualityComparison(ToNumber(x), y));
  }

  step(6);
  if (Type(x) === 'boolean') {
    return delegate(abstractEqualityComparison(ToNumber(x), y));
  }

  step(7);
  if (Type(y) === 'boolean') {
    return delegate(abstractEqualityComparison(x, ToNumber(y)));
  }

  step(8);
  const types = new Set(['string', 'number', 'symbol']);
  if (types.has(Type(x)) && Type(y) === 'object') {
    return delegate(abstractEqualityComparison(x, ToPrimitive(y)));
  }

  step(9);
  if (types.has(Type(y)) && Type(x) === 'object') {
    return delegate(abstractEqualityComparison(ToPrimitive(x), y));
  }

  step(10);
  return resolve(false);

}

function Type(value) {
  const type = typeof value;
  switch (type) {
    case 'string':
    case 'number':
    case 'boolean':
    case 'symbol':
      return type;
    case 'object':
    case 'function':
      if (!value) {
        return 'null';
      }
      return 'object';
  }
}

function ToPrimitive(obj) {
  let result = obj.valueOf();
  if (Type(result) !== 'object') {
    return result;
  }
  result = obj.toString();
  if (Type(result) !== 'object') {
    return result;
  }
  throw new TypeError();
}

function ToNumber(value) {
  return Number(value);
}

function str(value) {
  if (typeof value === 'number' && isNaN(value)) {
    return 'NaN';
  }
  if (value === undefined) {
    return 'undefined';
  }
  if (typeof value === 'function') {
    return '<function>';
  }

  const prefix = '__' + Date.now();
  return JSON.stringify(value, (k, v) => {
    switch(typeof v) {
      case 'undefined':
        return prefix + 'undefined';
      case 'function':
        return prefix + '<function>';
      case 'number':
        return isNaN(v) ? prefix + 'NaN' : v;
      case 'object':
        return !v ? prefix + 'null' : v;
      default:
        return v;
    }
  })
    .replace(new RegExp(`"${prefix}(<function>|undefined|NaN|null)"`, 'g'), '$1');
}
