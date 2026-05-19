import { auth } from "@/auth"
import { listOpenPRs } from "@/lib/github"

export async function GET() {
  const session = await auth()
  if (!session) return Response.json({ error: "Unauthorized" }, { status: 401 })
  const prs = await listOpenPRs(session.user.accessToken)
  return Response.json(prs)
}
