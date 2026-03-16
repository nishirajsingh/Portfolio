import { NextRequest, NextResponse } from 'next/server'
import { readData, writeData, generateId } from '@/lib/db'
import { isAuthenticated } from '@/lib/auth'

export async function GET() {
  const data = readData()
  return NextResponse.json(data.badges)
}

export async function POST(req: NextRequest) {
  if (!isAuthenticated()) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const body = await req.json()
  const data = readData()
  const newItem = { ...body, id: generateId('badge') }
  data.badges.push(newItem)
  writeData(data)
  return NextResponse.json(newItem)
}

export async function PUT(req: NextRequest) {
  if (!isAuthenticated()) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const body = await req.json()
  const data = readData()
  data.badges = data.badges.map((b: any) => b.id === body.id ? body : b)
  writeData(data)
  return NextResponse.json(body)
}

export async function DELETE(req: NextRequest) {
  if (!isAuthenticated()) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const { id } = await req.json()
  const data = readData()
  data.badges = data.badges.filter((b: any) => b.id !== id)
  writeData(data)
  return NextResponse.json({ ok: true })
}
