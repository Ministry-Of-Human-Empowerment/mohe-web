import { createClient } from "@supabase/supabase-js"

const url = process.env.NEXT_PUBLIC_SUPABASE_URL!
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(url, key)

export type PRComment = {
  id: string
  pr_number: number
  author_login: string
  author_avatar: string | null
  body: string
  x_pct: number
  y_pct: number
  page_path: string
  resolved: boolean
  created_at: string
}
