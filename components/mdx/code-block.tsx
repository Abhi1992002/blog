"use client";
import SyntaxHighlighter from "react-syntax-highlighter";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";
import { ClipboardCopy } from "lucide-react";
import {atomOneDark, atomOneLight} from "react-syntax-highlighter/dist/cjs/styles/hljs";
import toast from "react-hot-toast";
import {useTheme} from "next-themes";

export const CodeBlock = ({
  codeString,
  language,
}: {
  codeString: string;
  language: string;
}) => {
  const [text, setText] = useState("");
  const {theme} = useTheme();

  const copyHandler = () => {
    toast.success("Copied to clipboard");
    setText(codeString);
  };

  return (
    <div className={"w-[100%]"}>
      <div
        className={
          "w-full p-2 border rounded-t-md flex items-center justify-end bg-white dark:bg-black "
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
          marginTop: "0px", marginBottom: "0px",
          width: "100%",
          fontSize: "1rem",
          borderTopRightRadius: "0px",
            backgroundColor: theme === "light" ? "white" : "black",
          border: theme === "light" ? "1px solid #e5e5e5" :"1px solid #292524",
          borderTopLeftRadius: "0px",
        }}
        showLineNumbers={true}
        language={language}
        style={theme === "light" ? atomOneLight : atomOneDark}
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};
