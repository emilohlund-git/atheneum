import arg from 'arg';

import { getTemplate } from './get-template';

import type { Args, RawOptions } from '../types';

export async function parseArgumentsIntoOptions(
    rawArgs: Args
): Promise<RawOptions> {
    const args = arg(
        {
            '--template': String,
            '-t': '--template',
        },
        {
            argv: rawArgs.slice(2)
        }
    );

    const rawTemplate = args['--template'];
    const template = await getTemplate(rawTemplate);

    const component = args._[0];

    return {
        component,
        template
    };
}
