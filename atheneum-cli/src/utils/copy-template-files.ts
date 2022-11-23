import fs from 'fs';
import path from 'path';
import { getParsedFileName } from './parse-file-name';
import { replaceContentOfFile } from './replace-file-content';

export async function copyTemplateFiles(
  templateDir: string,
  targetDir: string,
  componentName: string
) {
  const files = fs.readdirSync(templateDir);

  try {
    files.forEach((file, _) => {
      let fullPath = path.join(templateDir, file);
      let fileExtension = path.extname(file);
      const newFileName = getParsedFileName(file, componentName, fileExtension);
      newFileName && fs.copyFileSync(fullPath, path.join(targetDir, newFileName));
      const data = fs.readFileSync(path.join(targetDir, newFileName), 'utf8');
      replaceContentOfFile(path.join(targetDir, newFileName), data, componentName);
    });
  } catch (err) {
    return Promise.reject(new Error('Failed to copy files'));
  }

  return true;
}
