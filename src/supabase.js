import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://wriuucwvtpjdajhzgcqx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndyaXV1Y3d2dHBqZGFqaHpnY3F4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA3MTQ0ODEsImV4cCI6MTk5NjI5MDQ4MX0.BC6mm2EcJbA9qksXeHtm0aajMO7m0HySkKC0BpVNxmc";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
