"use client";

import Link from "next/link";
import { LinkProps } from "next/link";
import { useRouter } from "next/navigation";

const sleep = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

interface TransitionLinkProps extends LinkProps {
    children: React.ReactNode;
    href: string;
    className?: string;
}

const TransitionLink: React.FC<TransitionLinkProps> = ({ children, href, className, ...props }) => {
    const router = useRouter();

    const handleTransition = async (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();

        const body = document.querySelector("body");
        body?.classList.add("page-transition");         // Add the transition class!
        await sleep(500);                               // Allow the transition to take place!

        router.push(href);                              // Update the URL :)
        await sleep(350);                               // Allow the new URL to load in!
        body?.classList.remove("page-transition");      // Remove the transition class!
    };

    return (
        <Link
            className={className}
            onClick={handleTransition}
            href={href}
            {...props}
        >
            {children}
        </Link>
    );
};

export default TransitionLink;
