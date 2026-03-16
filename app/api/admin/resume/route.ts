import { NextRequest, NextResponse } from 'next/server'
import { writeFile, mkdir } from 'fs/promises'
import path from 'path'
import { readData, writeData } from '@/lib/db'
import { isAuthenticated } from '@/lib/auth'

export async function GET() {
  const data = readData()
  return NextResponse.json({ url: (data as any).resume || null })
}

export async function POST(req: NextRequest) {
  if (!isAuthenticated()) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const formData = await req.formData()
  const file = formData.get('file') as File
  if (!file) return NextResponse.json({ error: 'No file' }, { status: 400 })

  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)

  const uploadDir = path.join(process.cwd(), 'public', 'resume')
  await mkdir(uploadDir, { recursive: true })

  const filepath = path.join(uploadDir, 'resume.pdf')
  await writeFile(filepath, buffer)

  const url = '/resume/resume.pdf'
  const data = readData() as any
  data.resume = url
  writeData(data)

  return NextResponse.json({ url })
}
