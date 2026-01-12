import { createClient } from '@supabase/supabase-js'

// WE ARE PASTING THE KEYS DIRECTLY HERE TO FORCE IT TO WORK
const supabaseUrl = "https://lyxngvtdreuwsgdmgeoi.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx5eG5ndnRkcmV1d3NnZG1nZW9pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgxNDQ1NTYsImV4cCI6MjA4MzcyMDU1Nn0.LL9PBOhVD7HSc89Eyel72p49PN6RjJ__ByiyQP8UIvQ"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)