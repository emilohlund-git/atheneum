import inquirer from 'inquirer';

import type { Options, RawOptions } from '../types';

// default values for unspecified args
const defaultOptions: Omit<Options, 'component'> = {
  template: 'component'
};

export async function promptForMissingOptions(
  options: RawOptions
): Promise<Options> {
  const questions = [];

  if (!options.component) {
    questions.push({
      type: 'input',
      name: 'component',
      message: "Please type component's name (cannot be empty)",
      validate: (value: string) => value.length > 0
    });
  }

  if (!options.template) {
    questions.push({
      type: 'list',
      name: 'template',
      message: 'Please choose which component template to use',
      choices: [
        { name: 'Component', value: 'component' }
      ],
      default: defaultOptions.template
    });
  }

  const answers = await inquirer.prompt(questions);

  return {
    component: options.component || answers.component,
    template: options.template || answers.template
  };
}
