import { createClient } from "@supabase/supabase-js"

// Check if Supabase environment variables are available
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export const isSupabaseConfigured = !!(supabaseUrl && supabaseAnonKey)

// Create client function that returns null if not configured
export const getSupabaseClient = () => {
  if (!supabaseUrl || !supabaseAnonKey) {
    return null
  }
  return createClient(supabaseUrl, supabaseAnonKey)
}

export type Shoe = {
  id: number
  name: string
  price: number
  features: string[]
  image_url: string
  pair_id: number
}

export type UserPreference = {
  id: number
  user_id: string
  shoe_id: number
  pair_id: number
  created_at: string
}
