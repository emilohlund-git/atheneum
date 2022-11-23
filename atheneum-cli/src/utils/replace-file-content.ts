import fs from 'fs';

export const replaceContentOfFile = (file: string, data: string, componentName: string): void => {
  var result = data.replace(/Component/g, componentName);
  fs.writeFile(file, result, 'utf8', function (err) {
    if (err) return Promise.reject(new Error('Failed to replace file content'));
  });
}