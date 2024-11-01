"use client"

import { allDocs } from "@/.contentlayer/generated"
import { useMDXComponent } from "next-contentlayer/hooks"

import { mdxComponents } from "@/components/mdx-components"

export default function SlugPage({ params }: { params: { slug: string } }) {
  const doc = allDocs.find(
    (doc) => doc._raw.flattenedPath === `docs/${params.slug}`
  )

  if (!doc) {
    return <div>Document not found</div>
  }

  const MDXContent = useMDXComponent(doc.body.code)

  return (
    <div className="bg-layer-01 p-6 md:p-10">
      <div className="max-w-2xl">
        <h1 className="mb-1 heading-04">{doc.title}</h1>
        <p className="body-compact-02">{doc.description}</p>
        <div className="pt-3">
          <MDXContent components={mdxComponents} />
        </div>
      </div>
    </div>
  )
}
