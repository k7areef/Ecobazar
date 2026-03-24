
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const publishableKey = import.meta.env.PUBLISHABLE_DEFAULT_KEY

export const supabase = createClient(supabaseUrl, publishableKey)