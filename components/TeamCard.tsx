import { ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import Balancer from "react-wrap-balancer";
import {
  InstagramLogoIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon
} from "@radix-ui/react-icons";

export default function TeamCard({
  title,
  description,
  demo,
  large,
}: {
  title: string;
  description: string;
  demo: ReactNode;
  large?: boolean;
}) {
  return (
    <div
      className={`min-h-96 relative col-span-1  overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md ${
        large ? "md:col-span-2" : ""
      }`}
    >
      <div className="flex h-60 items-center justify-center">{demo}</div>
      <div className="mx-auto w-full text-center">
        <h2 className="mt-4 bg-gradient-to-br from-black to-stone-500 bg-clip-text font-display text-xl font-bold text-transparent md:text-3xl md:font-normal">
          <Balancer>{title}</Balancer>
        </h2>
        <div className="prose-sm w-full -mt-2 px-4 leading-normal text-gray-500 md:prose">
          <div className='px-8'>
            <ReactMarkdown
              components={{
                a: ({ node, ...props }) => (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    {...props}
                    className="font-medium text-gray-800 w-full underline transition-colors"
                  />
                ),
                code: ({ node, ...props }) => (
                  <code
                    {...props}
                    // @ts-ignore (to fix "Received `true` for a non-boolean attribute `inline`." warning)
                    inline="true"
                    className="rounded-sm bg-gray-100 px-1 py-0.5 font-mono font-medium text-gray-800"
                  />
                ),
              }}
            >
              {description}
            </ReactMarkdown>
            <div className="flex items-center w-full shrink-0 justify-between py-4">
              <InstagramLogoIcon className="h-6 w-6" />
              <GitHubLogoIcon className="h-6 w-6" />
              <LinkedInLogoIcon className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
