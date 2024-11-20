/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig
module.exports = {
  env: {
    NEXT_PUBLIC_BASE_URL: "http://localhost",
    SUPABASE_URL: "https://mhakxyeuvlruqysgddft.supabase.co",
    SUPABASE_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1oYWt4eWV1dmxydXF5c2dkZGZ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODAzNDQyMDEsImV4cCI6MTk5NTkyMDIwMX0.KqXaXQJs-5MveWO03t5P4IvucczxWmuhxnuvViGMll8"
  }
}
