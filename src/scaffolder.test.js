import {promises as fs} from 'node:fs';

import {describe, vi, it, expect} from 'vitest';
import any from '@travi/any';

import scaffoldGitea from './scaffolder.js';

vi.mock('node:fs');

describe('scaffold', () => {
  it('should create the `.gitea/` directory', async () => {
    const projectRoot = any.string();

    expect(await scaffoldGitea({projectRoot})).toEqual({vcs: {}});

    expect(fs.mkdir).toHaveBeenCalledWith(`${projectRoot}/.gitea`);
    expect(fs.writeFile).toHaveBeenCalledWith(`${projectRoot}/.gitea/.gitkeep`, '');
  });
});
