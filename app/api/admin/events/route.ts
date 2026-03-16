import { NextRequest, NextResponse } from 'next/server'
import { readData, writeData, generateId } from '@/lib/db'
import { isAuthenticated } from '@/lib/auth'

export async function GET() {
  const data = readData()
  return NextResponse.json(data.events)
}

export async function POST(req: NextRequest) {
  if (!isAuthenticated()) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const body = await req.json()
  const data = readData()
  const newItem = { ...body, id: generateId('event') }
  data.events.push(newItem)
  writeData(data)
  return NextResponse.json(newItem)
}

export async function PUT(req: NextRequest) {
  if (!isAuthenticated()) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const body = await req.json()
  const data = readData()
  data.events = data.events.map((e: any) => e.id === body.id ? body : e)
  writeData(data)
  return NextResponse.json(body)
}

export async function DELETE(req: NextRequest) {
  if (!isAuthenticated()) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const { id } = await req.json()
  const data = readData()
  data.events = data.events.filter((e: any) => e.id !== id)
  writeData(data)
  return NextResponse.json({ ok: true })
}

export async function PATCH(req: NextRequest) {
  if (!isAuthenticated()) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const { ids } = await req.json()
  const data = readData()
  data.events = ids.map((id: string) => data.events.find((e: any) => e.id === id)).filter(Boolean)
  writeData(data)
  return NextResponse.json({ ok: true })
}
