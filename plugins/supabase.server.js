import { createClient } from '@supabase/supabase-js'
export default (_, inject) => {
  const supabase = createClient(
    process.env.supabaseUrl,
    process.env.supabaseKey
  )

  inject('supabase', supabase)
}
