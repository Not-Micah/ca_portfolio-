"use client";

import { archive } from "@/data";
import { useSearchParams, useRouter } from "next/navigation";

const ArchiveList = () => {
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

  const handleFileClick = (file: string) => {
    if (file) {
      window.open(file, "_blank");
    }
  };

  return (
    <section className="max-w-max w-full mx-auto mt-[50px] mb-[120px] flex flex-col gap-y-6 padding">
      <h3 className="dynamic-heading font-title mb-5">Archive</h3>
      <ul className="flex flex-col gap-y-2">
        {itemsToDisplay.map((item) => (
          <li key={item.title}>
            {item.type === "folder" ? (
              <button
                onClick={() => handleFolderClick(item.title)}
                className="text-blue-500 underline"
              >
                📂 {item.title}
              </button>
            ) : (
              <button
                onClick={() => handleFileClick(item.file)}
                className="text-green-500 underline"
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

export default ArchiveList;
