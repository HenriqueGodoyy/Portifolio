import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
  h2: (props) => <h2 className="mt-12 mb-4 font-display text-3xl first:mt-0 sm:text-4xl" {...props} />,
  h3: (props) => <h3 className="mt-8 mb-3 font-display text-2xl" {...props} />,
  p: (props) => <p className="my-4 text-[17px] leading-relaxed text-ink/80" {...props} />,
  ul: (props) => <ul className="my-4 border-t border-line" {...props} />,
  li: (props) => (
    <li className="border-b border-line py-3 text-[17px] leading-relaxed text-ink/80" {...props} />
  ),
  a: (props) => <a className="underline underline-offset-4 hover:opacity-60" {...props} />,
  strong: (props) => <strong className="font-semibold text-ink" {...props} />,
  code: (props) => (
    <code className="rounded bg-ink/8 px-1.5 py-0.5 font-mono text-[0.85em]" {...props} />
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
