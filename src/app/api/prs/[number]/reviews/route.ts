import { auth } from "@/auth"
import { submitReview } from "@/lib/github"

export async function POST(
  req: Request,
  { params }: { params: Promise<{ number: string }> }
) {
  const session = await auth()
  if (!session?.user?.accessToken) {
    return Response.json({ error: "Unauthorized" }, { status: 401 })
  }
  const { number } = await params
  const { event, body } = await req.json()
  const result = await submitReview(parseInt(number), event, body, session.user.accessToken)
  return Response.json(result)
}
