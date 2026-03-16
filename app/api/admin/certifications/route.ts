import { NextRequest, NextResponse } from 'next/server'
import { readData, writeData, generateId } from '@/lib/db'
import { isAuthenticated } from '@/lib/auth'

export async function GET() {
  const data = readData()
  return NextResponse.json(data.certifications)
}

export async function POST(req: NextRequest) {
  if (!isAuthenticated()) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const body = await req.json()
  const data = readData()
  const newItem = { ...body, id: generateId('cert') }
  data.certifications.push(newItem)
  writeData(data)
  return NextResponse.json(newItem)
}

export async function PUT(req: NextRequest) {
  if (!isAuthenticated()) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const body = await req.json()
  const data = readData()
  data.certifications = data.certifications.map((c: any) => c.id === body.id ? body : c)
  writeData(data)
  return NextResponse.json(body)
}

export async function DELETE(req: NextRequest) {
  if (!isAuthenticated()) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const { id } = await req.json()
  const data = readData()
  data.certifications = data.certifications.filter((c: any) => c.id !== id)
  writeData(data)
  return NextResponse.json({ ok: true })
}

export async function PATCH(req: NextRequest) {
  if (!isAuthenticated()) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const { ids } = await req.json()
  const data = readData()
  data.certifications = ids.map((id: string) => data.certifications.find((c: any) => c.id === id)).filter(Boolean)
  writeData(data)
  return NextResponse.json({ ok: true })
}
