import {directoryExists} from '@form8ion/core';

export default function sourceHostedOnGitea({projectRoot}) {
  return directoryExists(`${projectRoot}/.gitea`);
}
