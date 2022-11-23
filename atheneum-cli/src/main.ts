import chalk from 'chalk';
import Listr from 'listr';
import path from 'path';

import { getTemplateDirectory } from './utils/get-template-directory';
import { copyTemplateFiles } from './utils/copy-template-files';
import { createProjectDirectory } from './utils/create-project-directory';

import type { Options } from './types';

export async function createProject(options: Options) {
  const templateDirectory = getTemplateDirectory(options.template);
  const targetDirectory = path.resolve(process.cwd(), options.component);

  const tasks = new Listr([
    {
      title: 'Create project directory',
      task: () => createProjectDirectory(options.component, process.cwd())
    },
    {
      title: 'Copy project files',
      task: () => copyTemplateFiles(templateDirectory, targetDirectory, options.component)
    },
  ]);

  try {
    await tasks.run();

    console.log('%s Project ready', chalk.green.bold('DONE'));
  } catch (error) {
    console.log('%s Error occurred', chalk.red.bold('ERROR'));
  }
}
