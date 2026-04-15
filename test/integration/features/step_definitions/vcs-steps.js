import assert from 'node:assert';
import {Then} from '@cucumber/cucumber';

Then('the details are returned as results', async function () {
  assert.deepEqual(this.results, {vcs: {}});
});
