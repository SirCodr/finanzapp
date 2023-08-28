import { createClient } from '@supabase/supabase-js'
import { SUPABASE_ANON_KEY, SUPABASE_URL } from './consts/supabase'
import type { Database } from './types/supabase'

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_ANON_KEY)
