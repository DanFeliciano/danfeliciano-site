import { Fragment, type ReactNode } from "react";

export type MarkdownBlock =
  | { type: "heading1"; text: string }
  | { type: "heading2"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "thematicBreak" };

export function parseMarkdownBlocks(markdown: string): MarkdownBlock[] {
  const lines = markdown.trim().split(/\r?\n/);
  const blocks: MarkdownBlock[] = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index].trim();

    if (line.length === 0) {
      index += 1;
      continue;
    }
    if (line === "---") {
      blocks.push({ type: "thematicBreak" });
      index += 1;
      continue;
    }
    if (line.startsWith("# ")) {
      blocks.push({ type: "heading1", text: line.slice(2) });
      index += 1;
      continue;
    }
    if (line.startsWith("## ")) {
      blocks.push({ type: "heading2", text: line.slice(3) });
      index += 1;
      continue;
    }
    if (line.startsWith("- ")) {
      const items: string[] = [];

      while (index < lines.length && lines[index].trim().startsWith("- ")) {
        items.push(lines[index].trim().slice(2));
        index += 1;
      }
      blocks.push({ type: "list", items });
      continue;
    }

    const paragraphLines = [line];
    index += 1;
    while (
      index < lines.length &&
      lines[index].trim().length > 0 &&
      !/^(# |## |- |---$)/.test(lines[index].trim())
    ) {
      paragraphLines.push(lines[index].trim());
      index += 1;
    }
    blocks.push({ type: "paragraph", text: paragraphLines.join(" ") });
  }

  return blocks;
}

function renderInlineMarkdown(text: string): ReactNode[] {
  return text
    .split(/(\*\*[^*]+\*\*|\*[^*]+\*)/)
    .filter(Boolean)
    .map((part, index) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return <strong key={`${part}-${index}`}>{part.slice(2, -2)}</strong>;
      }
      if (part.startsWith("*") && part.endsWith("*")) {
        return <em key={`${part}-${index}`}>{part.slice(1, -1)}</em>;
      }

      return <Fragment key={`${part}-${index}`}>{part}</Fragment>;
    });
}

export function splitArticleBody(
  markdown: string,
  title: string,
  subtitle: string,
) {
  const blocks = parseMarkdownBlocks(markdown);
  const contentStart =
    blocks[0]?.type === "heading1" &&
    blocks[0].text === title &&
    blocks[1]?.type === "heading2" &&
    blocks[1].text === subtitle
      ? 2
      : 0;
  const ctaIndex = blocks.findLastIndex(
    (block) =>
      block.type === "heading2" &&
      block.text === "Can you clearly see the system producing your results?",
  );
  const bodyBlocks = blocks.slice(
    contentStart,
    ctaIndex === -1 ? blocks.length : ctaIndex,
  );

  if (bodyBlocks.at(-1)?.type === "thematicBreak") {
    bodyBlocks.pop();
  }

  const ctaBlocks = ctaIndex === -1 ? [] : blocks.slice(ctaIndex);
  const ctaHeading = ctaBlocks[0]?.type === "heading2" ? ctaBlocks[0].text : "";
  const ctaBody = ctaBlocks[1]?.type === "paragraph" ? ctaBlocks[1].text : "";
  const ctaLabel =
    ctaBlocks[2]?.type === "paragraph"
      ? ctaBlocks[2].text.replace(/^\*\*|\*\*$/g, "")
      : "";

  return { bodyBlocks, ctaHeading, ctaBody, ctaLabel };
}

export function ArticleBody({ blocks }: { blocks: readonly MarkdownBlock[] }) {
  return (
    <>
      {blocks.map((block, index) => {
        if (block.type === "heading1" || block.type === "heading2") {
          return (
            <h2
              className="mt-12 text-balance text-2xl font-black leading-8 text-charcoal sm:text-3xl sm:leading-9"
              key={`${block.text}-${index}`}
            >
              {renderInlineMarkdown(block.text)}
            </h2>
          );
        }
        if (block.type === "paragraph") {
          return (
            <p
              className="mt-6 text-[1.0625rem] leading-8 text-slate-700"
              key={`${block.text}-${index}`}
            >
              {renderInlineMarkdown(block.text)}
            </p>
          );
        }
        if (block.type === "list") {
          return (
            <ul
              className="mt-6 grid gap-3 pl-6 text-[1.0625rem] leading-8 text-slate-700"
              key={`list-${index}`}
            >
              {block.items.map((item) => (
                <li className="list-disc pl-1" key={item}>
                  {renderInlineMarkdown(item)}
                </li>
              ))}
            </ul>
          );
        }

        return (
          <hr
            aria-hidden="true"
            className="my-10 border-0 border-t border-slate-200"
            key={`break-${index}`}
          />
        );
      })}
    </>
  );
}

export function InlineMarkdown({ text }: { text: string }) {
  return <>{renderInlineMarkdown(text)}</>;
}
