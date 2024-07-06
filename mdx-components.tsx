import type { MDXComponents } from "mdx/types";
import { CodeBlock } from "@/components/mdx/code-block";
import React from "react";
import { cn } from "@/lib/utils";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    code: (props) => {
      const codeString = props.children;

      const language = props.className
        ? props.className.replace("language-", "")
        : "plaintext";

      return (
        <CodeBlock language={language} codeString={codeString as string} />
      );
    },
    pre: (props) => (
      <pre className={cn("w-full p-0", props.className)}>{props.children} </pre>
    ),
    ...components,
  };
}
