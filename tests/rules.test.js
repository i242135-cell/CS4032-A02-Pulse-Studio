import test from 'node:test';import assert from 'node:assert/strict';import {checkCapacity} from '../src/rules.js';
test('ordinary valid booking',()=>assert.equal(checkCapacity(2,8),true));
test('exact maximum of four',()=>assert.equal(checkCapacity(4,8),true));
test('above maximum',()=>assert.equal(checkCapacity(5,8),false));
test('above remaining seats',()=>assert.equal(checkCapacity(3,2),false));
