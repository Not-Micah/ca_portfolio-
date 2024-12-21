"use client";

import { archive } from "@/data";
import { useSearchParams, useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { Suspense } from "react";

const ArchiveListPath = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
  
    const path = searchParams.get("path") || "";
  
    const handleBreadcrumbClick = (index: number) => {
      const parts = path.split("/").filter(Boolean);
      const newPath = parts.slice(0, index + 1).join("/");
      router.push(`?path=${newPath}`);
    };
  
    const breadcrumbs = ["Home", ...path.split("/").filter(Boolean)];
  
    return (
      <div className="flex items-center gap-2 text-sm text-gray-600">
        {breadcrumbs.map((breadcrumb, index) => (
          <span key={index} className="flex items-center">
            {index > 0 && <span className="mx-1">/</span>}
            <button
              onClick={() => handleBreadcrumbClick(index - 1)}
              className={`
                dynamic-text
                ${
                index === breadcrumbs.length - 1
                  ? "text-black font-semibold"
                  : "text-black/50 hover:underline"
              }`}
            >
              {breadcrumb}
            </button>
          </span>
        ))}
      </div>
    );
  };
  

const boxStyles = `p-4 border-[1px] border-black/40
                    w-full rounded-lg backdrop-blur-[1px] bg-black/[5%]`

const ArchiveListContent = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const path = searchParams.get("path") || "";

  const getCurrentItems = (path: string) => {
    const parts = path.split("/").filter(Boolean);
    let currentItems = archive;

    for (const part of parts) {
      const nextItem = currentItems.find((item) => item.title === part);
      if (nextItem?.type === "folder") {
        currentItems = nextItem.items;
      } else {
        break;
      }
    }

    return currentItems;
  };

  const itemsToDisplay = getCurrentItems(path);

  const handleFolderClick = (title: string) => {
    const newPath = path ? `${path}/${title}` : title;
    router.push(`?path=${newPath}`);
  };

  return (
    <section className="max-w-max w-full mx-auto mt-[50px] mb-[120px] flex flex-col gap-y-6 padding">
      <h3 className="dynamic-heading font-title mb-5">Archive</h3>
      <ArchiveListPath />
      <ul className="flex flex-col gap-y-2">
        {itemsToDisplay.map((item) => (
          <li key={item.title}>
            {item.type === "folder" ? (
              <button
                onClick={() => handleFolderClick(item.title)}
                className={twMerge(boxStyles, `dynamic-text text-left text-blue-500 underline`)}
              >
                📂 {item.title}
              </button>
            ) : (
              <button
                onClick={() => router.push(item.file)}
                className={twMerge(boxStyles, `
                  dynamic-text text-left underline 
                  ${item.file === "" ? 'text-gray-400' : 'text-green-500'}`)}
              >
                📄 {item.title}
              </button>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

const ArchiveList = () => {
    return (
        <Suspense>
            <ArchiveListContent />
        </Suspense>
    )
}

export default ArchiveList;