"use client";
import SyntaxHighlighter from "react-syntax-highlighter";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";
import { ClipboardCopy } from "lucide-react";
import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import toast from "react-hot-toast";

export const CodeBlock = ({
  codeString,
  language,
}: {
  codeString: string;
  language: string;
}) => {
  const [text, setText] = useState("");

  const copyHandler = () => {
    toast.success("Copied to clipboard");
    setText(codeString);
  };

  return (
    <div className={"w-[100%]"}>
      <div
        className={
          "w-full p-2 border rounded-t-md flex items-center justify-end"
        }
      >
        <CopyToClipboard text={text} onCopy={copyHandler}>
          <button>
            <ClipboardCopy className={"w-4 h-4"} />
          </button>
        </CopyToClipboard>
      </div>
      <SyntaxHighlighter
        customStyle={{
          marginTop: "0px",
          width: "100%",
          fontSize: "1rem",
          borderTopRightRadius: "0px",
          border: "1px solid #292524",
          borderTopLeftRadius: "0px",
          backgroundColor: "#000000",
        }}
        showLineNumbers={true}
        language={language}
        style={atomOneDark}
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};
