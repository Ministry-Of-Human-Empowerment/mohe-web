import { auth } from "@/auth"
import { supabase } from "@/lib/supabase"

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const prNumber = searchParams.get("pr_number")
  if (!prNumber) return Response.json({ error: "Missing pr_number" }, { status: 400 })

  const { data, error } = await supabase
    .from("pr_comments")
    .select("*")
    .eq("pr_number", parseInt(prNumber))
    .eq("resolved", false)
    .order("created_at", { ascending: true })

  if (error) return Response.json({ error: error.message }, { status: 500 })
  return Response.json(data)
}

export async function POST(req: Request) {
  const session = await auth()
  if (!session?.user) return Response.json({ error: "Unauthorized" }, { status: 401 })

  const { pr_number, body, x_pct, y_pct, page_path } = await req.json()

  const { data, error } = await supabase
    .from("pr_comments")
    .insert({
      pr_number,
      author_login: session.user.githubLogin,
      author_avatar: session.user.image ?? null,
      body,
      x_pct,
      y_pct,
      page_path: page_path ?? "/",
      resolved: false,
    })
    .select()
    .single()

  if (error) return Response.json({ error: error.message }, { status: 500 })
  return Response.json(data)
}

export async function DELETE(req: Request) {
  const session = await auth()
  if (!session?.user) return Response.json({ error: "Unauthorized" }, { status: 401 })

  const { searchParams } = new URL(req.url)
  const id = searchParams.get("id")
  if (!id) return Response.json({ error: "Missing id" }, { status: 400 })

  const { error } = await supabase
    .from("pr_comments")
    .update({ resolved: true })
    .eq("id", id)
    .eq("author_login", session.user.githubLogin)

  if (error) return Response.json({ error: error.message }, { status: 500 })
  return Response.json({ success: true })
}
