import {directoryExists} from '@form8ion/core';

import any from '@travi/any';
import {when} from 'vitest-when';
import {describe, expect, it, vi} from 'vitest';

import projectIsVersionedOnGitea from './tester.js';

vi.mock('@form8ion/core');

describe('gitea predicate', () => {
  const projectRoot = any.string();

  it('should return `true` when the `.gitea` directory is present', async () => {
    when(directoryExists).calledWith(`${projectRoot}/.gitea`).thenResolve(true);

    expect(await projectIsVersionedOnGitea({projectRoot})).toBe(true);
  });

  it('should return `false` when the `.gitea` directory is not present', async () => {
    when(directoryExists).calledWith(`${projectRoot}/.gitea`).thenResolve(false);

    expect(await projectIsVersionedOnGitea({projectRoot})).toBe(false);
  });
});
