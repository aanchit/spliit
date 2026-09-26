import path from 'node:path'
import { defineConfig } from 'prisma/config'

try {
  require('dotenv').config()
} catch {}

export default defineConfig({
  schema: path.join('prisma', 'schema.prisma'),
  migrations: {
    path: path.join('prisma', 'migrations'),
  },
  datasource: {
    url:
      process.env.DATABASE_URL ??
      process.env.POSTGRES_URL_NON_POOLING ??
      process.env.POSTGRES_PRISMA_URL ??
      'postgresql://postgres.qqhbqnhagnxqzzfcqiay:Rahult876780@aws-0-ap-northeast-2.pooler.supabase.com:5432/postgres',
  },
})
