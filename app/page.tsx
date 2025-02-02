"use client"

// import Editor from "@/components/editor"
import dynamic from "next/dynamic";

import { LayerStore } from "@/lib/layer-store"
import { ImageStore } from "@/lib/store"
const Editor = dynamic(() => import("@/components/editor"), { ssr: false });
const Loading = dynamic(() => import("@/components/loading"), { ssr: false });
export default function Home() {
  return (
    <ImageStore.Provider
      initialValue={{
        activeTag: "all",
        activeColor: "green",
        activeImage: "",
      }}
    >
      <LayerStore.Provider
        initialValue={{
          layerComparisonMode: false,
          layers: [
            {
              id: crypto.randomUUID(),
              url: "",
              height: 0,
              width: 0,
              publicId: "",
            },
          ],
        }}
      >
        <Editor />
      </LayerStore.Provider>
    </ImageStore.Provider>
  )
}
