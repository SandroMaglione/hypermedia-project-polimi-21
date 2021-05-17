import { createClient } from '@supabase/supabase-js'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic2VydmljZV9yb2xlIiwiaWF0IjoxNjIxMjYxODA2LCJleHAiOjE5MzY4Mzc4MDZ9.jFt9LKNeIeJ5DZEtKIHWe71neRbSxL9TC-FmyB-0Sc8'
export default ({ app }, inject) => {
  const supabaseUrl = 'https://wemtonqwokryfponsnhm.supabase.co'
  const supabaseKey = SUPABASE_KEY
  const supabase = createClient(supabaseUrl, supabaseKey)

  inject('supabase', supabase)
}