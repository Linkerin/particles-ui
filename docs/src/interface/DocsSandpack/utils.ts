import type { SandpackProviderProps } from '@codesandbox/sandpack-react';

/**
 * Extracts filename from the relative url
 *
 * @returns {string | null} File name or null if no match
 * @example
 * const filename = getFileName('./button.tsx');
 * console.log(filename) // 'button'
 */
export function getFileName(file: string): string | null {
  // matches strings like './button.tsx'
  const matches = file.match(/\/([^\/]+)\.\w+$/);

  return matches ? matches[1] : null;
}

export function capitalise([first, ...rest]: string) {
  return first.toUpperCase() + rest.join('');
}

export function getSandpackData(files: SandpackProviderProps['files']) {
  if (!files) throw new Error('DocsSandPack: files is obligatory');

  const filesUrl = Object.keys(files);
  const fileNames = filesUrl.map(file => {
    const fileName = getFileName(file);
    if (!fileName) throw new Error(`Invalid files key: ${file}`);
    const componentName = capitalise(fileName);

    return [componentName, file];
  });

  let imports = '';
  let content = '';
  fileNames.forEach((name, index) => {
    imports += `import ${name.at(0)} from '.${name.at(1)}';\n`;
    content += `<${name.at(0)} />${index !== fileNames.length - 1 ? '\n' : ''}`;
  });

  return { imports, content, filesUrl };
}
