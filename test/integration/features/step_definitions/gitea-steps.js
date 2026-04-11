import {fileExists} from '@form8ion/core';

import assert from 'node:assert';
import {Then} from '@cucumber/cucumber';

Then('the .gitea directory exists', async function () {
  assert.equal(await fileExists(`${this.projectRoot}/.gitea/.gitkeep`), true);
});
