import { useState } from 'react';
import {
  SandpackCodeEditor,
  SandpackLayout,
  SandpackPreview,
  SandpackProvider,
  SandpackProviderProps
} from '@codesandbox/sandpack-react';
import { atomDark } from '@codesandbox/sandpack-themes';

import styles from './DocsSandpack.module.css';

/**
 * Extracts filename from the relative url
 *
 * @returns {string | null} File name or null if no match
 * @example
 * const filename = getFileName('./button.tsx');
 * console.log(filename) // 'button'
 */
function getFileName(file: string): string | null {
  // matches strings like './button.tsx'
  const matches = file.match(/\/([^\/]+)\.\w+$/);

  return matches ? matches[1] : null;
}

function capitalise([first, ...rest]: string) {
  return first.toUpperCase() + rest.join('');
}

export interface DocsSandPackProps {
  files: SandpackProviderProps['files'];
  showAllFiles?: boolean;
  showCode?: boolean;
  showPreview?: boolean;
}

function DocsSandpack({
  files,
  showAllFiles = false,
  showCode = true,
  showPreview = true
}: DocsSandPackProps) {
  if (files === undefined) throw new Error('DocsSandPack: files is obligatory');

  const [isCodeVisible, setIsCodeVisible] = useState(showCode);

  const codeVisibilityHandler = () => {
    setIsCodeVisible(prevState => !prevState);
  };

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

  return (
    <SandpackProvider
      customSetup={{
        dependencies: { '@snipshot/particles': 'latest', classnames: 'latest' }
      }}
      template="react"
      theme={atomDark}
      options={{
        visibleFiles: !showAllFiles ? filesUrl : undefined,
        activeFile: filesUrl.at(0)
      }}
      files={{
        'index.js': `import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@snipshot/particles/style.css";

import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);`,
        '/App.js': `import { PuiTheme } from '@snipshot/particles';
${imports}
export default function App() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        height: "100vh",
        width: "100vw",
        padding: '0.75rem'
      }}
    >
      <PuiTheme />
      ${content}
    </div>
  );
}
`,
        ...files
      }}
    >
      <SandpackLayout>
        {showPreview && (
          <SandpackPreview
            actionsChildren={
              <button className={styles.button} onClick={codeVisibilityHandler}>
                {isCodeVisible ? 'Hide' : 'Show'} code
              </button>
            }
          />
        )}
        {isCodeVisible && <SandpackCodeEditor showTabs />}
      </SandpackLayout>
    </SandpackProvider>
  );
}

export default DocsSandpack;
