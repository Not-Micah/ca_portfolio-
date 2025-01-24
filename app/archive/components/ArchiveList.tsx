"use client";

import { archive } from "@/data";
import { useSearchParams, useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { Suspense } from "react";
import { FiFolder, FiFile, FiStar } from "react-icons/fi";

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
  

const boxStyles = `p-4 border-[1px] border-black/10 
                    w-full rounded-lg backdrop-blur-[2px] 
                    bg-white/30 hover:bg-white/70 
                    transition-all duration-200 ease-in-out 
                    shadow-sm
                    flex items-center gap-3`

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
                className={twMerge(boxStyles, `dynamic-text text-left hover:text-blue-600 group`)}
              >
                <FiFolder className="w-5 h-5 text-blue-500 group-hover:text-blue-600" />
                <span className="hover:underline">{item.title}</span>
              </button>
            ) : (
              <button
                onClick={() => router.push(item.file)}
                className={twMerge(boxStyles, `
                  dynamic-text text-left group
                  ${item.file === "" ? 'text-gray-400 cursor-not-allowed' : 'hover:text-green-600'}`)}
              >
                {item?.star ? 
                  <FiStar className="w-5 h-5 text-yellow-500 group-hover:text-yellow-600" /> : 
                  <FiFile className="w-5 h-5 text-green-500 group-hover:text-green-600" />
                }
                <span className="hover:underline">{item.title}</span>
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