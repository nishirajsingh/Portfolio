import { NextResponse } from 'next/server'

export async function GET() {
  try {
    let allBadges: any[] = []
    let page = 1
    let totalPages = 1

    // Fetch all pages
    while (page <= totalPages) {
      const res = await fetch(
        `https://www.credly.com/users/nishiraj/badges.json?page=${page}`,
        {
          headers: { 'Accept': 'application/json', 'User-Agent': 'Mozilla/5.0' },
          next: { revalidate: 3600 },
        }
      )
      if (!res.ok) break
      const data = await res.json()
      totalPages = data.metadata?.total_pages || 1

      const badges = (data.data || []).map((b: any) => ({
        id: b.id,
        name: b.badge_template?.name || '',
        description: b.badge_template?.description || '',
        image: b.image_url || b.badge_template?.image_url || '',
        issuer: b.issuer?.entities?.[0]?.entity?.name || '',
        issuedAt: b.issued_at_date || '',
        expiresAt: b.expires_at_date || null,
        level: b.badge_template?.level || '',
        type: b.badge_template?.type_category || '',
        skills: (b.badge_template?.skills || []).map((s: any) => s.name),
        credlyUrl: `https://www.credly.com/badges/${b.id}`,
      }))

      allBadges = [...allBadges, ...badges]
      page++
    }

    return NextResponse.json({ badges: allBadges, total: allBadges.length }, {
      headers: { 'Cache-Control': 's-maxage=3600, stale-while-revalidate=86400' }
    })
  } catch {
    return NextResponse.json({ badges: [], total: 0 }, { status: 500 })
  }
}
