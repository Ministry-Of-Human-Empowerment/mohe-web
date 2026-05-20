import { auth } from "@/auth"
import { proposeEdit } from "@/lib/github"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const session = await auth()
  if (!session?.user?.accessToken) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { page, fields, prTitle, prBody } = await req.json()

  if (!page || !fields || !prTitle) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
  }

  const filePath = `content/pages/${page}.json`
  const slug = prTitle.toLowerCase().replace(/[^a-z0-9]+/g, "-").slice(0, 40)
  const branchName = `edit/${page}-${slug}-${Date.now()}`
  const commitMessage = `content(${page}): ${prTitle}`

  const newContent = JSON.stringify(fields, null, 2) + "\n"

  try {
    const pr = await proposeEdit({
      token: session.user.accessToken,
      filePath,
      newContent,
      branchName,
      commitMessage,
      prTitle: `content(${page}): ${prTitle}`,
      prBody: prBody ?? `Content edit proposed via MOHE admin editor.\n\n**Page:** ${page}\n**Author:** ${session.user.githubLogin}`,
    })

    return NextResponse.json({ pr: { number: pr.number, url: pr.html_url, title: pr.title } })
  } catch (e) {
    const message = e instanceof Error ? e.message : "GitHub API error"
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
