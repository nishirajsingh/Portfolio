import { NextRequest, NextResponse } from 'next/server'
import { writeFile, mkdir } from 'fs/promises'
import path from 'path'
import { isAuthenticated } from '@/lib/auth'

export async function POST(req: NextRequest) {
  if (!isAuthenticated()) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const formData = await req.formData()
  const file = formData.get('file') as File
  const type = formData.get('type') as string   // 'certs' | 'events/devfest-2025' etc.

  if (!file) return NextResponse.json({ error: 'No file' }, { status: 400 })

  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)

  const uploadDir = path.join(process.cwd(), 'public', 'images', type)
  await mkdir(uploadDir, { recursive: true })

  const filename = `${Date.now()}-${file.name.replace(/\s+/g, '-')}`
  const filepath = path.join(uploadDir, filename)
  await writeFile(filepath, buffer)

  const url = `/images/${type}/${filename}`
  return NextResponse.json({ url })
}
