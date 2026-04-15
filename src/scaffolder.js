import {promises as fs} from 'node:fs';

export default async function scaffold({projectRoot}) {
  await fs.mkdir(`${projectRoot}/.gitea`);
  await fs.writeFile(`${projectRoot}/.gitea/.gitkeep`, '');

  return {vcs: {}};
}
