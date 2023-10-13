import { useState } from 'react';
import {
  SandpackCodeEditor,
  SandpackLayout,
  SandpackPreview,
  SandpackProvider,
  SandpackProviderProps,
  SandpackLayoutProps
} from '@codesandbox/sandpack-react';
import { atomDark } from '@codesandbox/sandpack-themes';

import { getSandpackData } from './utils';

import styles from './DocsSandpack.module.css';

export interface DocsSandPackProps {
  files: SandpackProviderProps['files'];
  showAllFiles?: boolean;
  showCode?: boolean;
  showPreview?: boolean;
  layoutStyle?: SandpackLayoutProps['style'];
  previewStyle?: SandpackLayoutProps['style'];
  codeStyle?: SandpackLayoutProps['style'];
}

function DocsSandpack({
  files,
  codeStyle,
  layoutStyle,
  previewStyle,
  showAllFiles = false,
  showCode = true,
  showPreview = true
}: DocsSandPackProps) {
  const [isCodeVisible, setIsCodeVisible] = useState(showCode);

  const codeVisibilityHandler = () => {
    setIsCodeVisible(prevState => !prevState);
  };

  const { content, imports, filesUrl } = getSandpackData(files);

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
      <SandpackLayout style={layoutStyle}>
        {showPreview && (
          <SandpackPreview
            actionsChildren={
              <button className={styles.button} onClick={codeVisibilityHandler}>
                {isCodeVisible ? 'Hide' : 'Show'} code
              </button>
            }
            style={previewStyle}
          />
        )}
        {isCodeVisible && <SandpackCodeEditor style={codeStyle} showTabs />}
      </SandpackLayout>
    </SandpackProvider>
  );
}

export default DocsSandpack;
