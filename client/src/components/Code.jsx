import { useEffect } from "react";
import Prism from "prismjs";

import "prismjs/components/prism-python";
import "prismjs/components/prism-java";
import "prismjs/components/prism-c";
import "prismjs/components/prism-cpp";
import "prismjs/components/prism-csharp";
import "prismjs/components/prism-aspnet";
import "prismjs/components/prism-sass";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-solidity";
import "prismjs/components/prism-json";
import "prismjs/components/prism-dart"
import "prismjs/components/prism-ruby"
import "prismjs/components/prism-rust"
import "prismjs/components/prism-r"
import "prismjs/components/prism-kotlin"
import "prismjs/components/prism-go"
import "prismjs/components/prism-bash"
import "prismjs/components/prism-sql"
import "prismjs/components/prism-mongodb"

import "../prism.css";

const Code = ({ language, code }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className="w-full h-max max-h-80 no-scrollbar overflow-scroll bg-black200 px-2 sm:px-6 py-1 rounded-md">
      <pre>
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
};

export default Code;
