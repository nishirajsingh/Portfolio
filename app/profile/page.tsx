'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import {
  Terminal, ExternalLink, Github, Code2, Trophy, Flame,
  Calendar, Star, TrendingUp, BarChart3, Globe, Zap, Activity
} from 'lucide-react'
import nishirajPhoto from '../components/images/nishiraj.png'
import { EnhancedNavbar } from '../components/enhanced-navbar'

/* ─── Types ─── */
interface DSAData {
  leetcode: any
  codeforces: any
  codechef: any
  github: any
  hackerrank: any
  gfg: any
}

/* ─── Helpers ─── */
function StatCard({ label, value, sub, icon: Icon, color = 'text-orange-500' }: any) {
  return (
    <div className="p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50">
      <div className={`${color} mb-3`}><Icon size={20} /></div>
      <p className="text-2xl font-bold dark:text-white">{value ?? '—'}</p>
      <p className="text-xs text-zinc-500 font-mono mt-0.5">{label}</p>
      {sub && <p className="text-[10px] text-zinc-400 mt-1">{sub}</p>}
    </div>
  )
}

function PlatformBadge({ name, rating, rank, url, color }: any) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer"
      className="flex items-center justify-between p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 hover:border-orange-500/40 transition-all group">
      <div>
        <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest">{name}</p>
        {rating && <p className="text-xl font-bold dark:text-white mt-0.5">{rating}</p>}
        {rank && <p className="text-[10px] text-zinc-400 mt-0.5">{rank}</p>}
      </div>
      <ExternalLink size={14} className="text-zinc-400 group-hover:text-orange-500 transition-colors" />
    </a>
  )
}

/* ─── Submission Heatmap ─── */
function Heatmap({ calendar }: { calendar: Record<string, number> }) {
  const now = Date.now() / 1000
  const weeks = 26
  const days: { ts: number; count: number }[] = []

  for (let i = weeks * 7 - 1; i >= 0; i--) {
    const ts = Math.floor((now - i * 86400) / 86400) * 86400
    days.push({ ts, count: calendar[ts] || 0 })
  }

  const max = Math.max(...days.map(d => d.count), 1)

  function getColor(count: number) {
    if (count === 0) return 'bg-zinc-100 dark:bg-zinc-800'
    const intensity = count / max
    if (intensity < 0.25) return 'bg-orange-200 dark:bg-orange-900/60'
    if (intensity < 0.5) return 'bg-orange-300 dark:bg-orange-700/70'
    if (intensity < 0.75) return 'bg-orange-400 dark:bg-orange-600'
    return 'bg-orange-500'
  }

  const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

  return (
    <div className="overflow-x-auto">
      <div className="flex gap-1 min-w-max">
        {Array.from({ length: weeks }).map((_, wi) => (
          <div key={wi} className="flex flex-col gap-1">
            {days.slice(wi * 7, wi * 7 + 7).map((d, di) => (
              <div
                key={di}
                title={`${new Date(d.ts * 1000).toDateString()}: ${d.count} submissions`}
                className={`w-3 h-3 rounded-sm ${getColor(d.count)} transition-colors`}
              />
            ))}
          </div>
        ))}
      </div>
      <div className="flex gap-1 mt-2 items-center">
        <span className="text-[10px] text-zinc-400 font-mono mr-1">Less</span>
        {['bg-zinc-100 dark:bg-zinc-800', 'bg-orange-200 dark:bg-orange-900/60', 'bg-orange-300 dark:bg-orange-700/70', 'bg-orange-400 dark:bg-orange-600', 'bg-orange-500'].map((c, i) => (
          <div key={i} className={`w-3 h-3 rounded-sm ${c}`} />
        ))}
        <span className="text-[10px] text-zinc-400 font-mono ml-1">More</span>
      </div>
    </div>
  )
}

/* ─── Contest History ─── */
function ContestRow({ contest, rating }: any) {
  const date = new Date(contest.contest.startTime * 1000)
  const trend = contest.trendDirection === 'UP'
  return (
    <div className="flex items-center justify-between py-3 border-b border-zinc-100 dark:border-zinc-800 last:border-0">
      <div>
        <p className="text-sm font-medium dark:text-white">{contest.contest.title}</p>
        <p className="text-[10px] text-zinc-400 font-mono mt-0.5">
          {date.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
          {' · '}Rank: <span className="text-orange-500">{contest.ranking.toLocaleString()}</span>
          {' · '}Solved: {contest.problemsSolved}/{contest.totalProblems}
        </p>
      </div>
      <div className={`text-sm font-bold ${trend ? 'text-emerald-500' : 'text-red-400'}`}>
        {trend ? '+' : ''}{Math.round(rating - (contest.rating || rating))}
        <span className="text-[10px] font-mono ml-1">{Math.round(contest.rating)}</span>
      </div>
    </div>
  )
}

/* ─── Language Bar ─── */
function LangBar({ lang, percent, color }: any) {
  const COLORS: Record<string, string> = {
    TypeScript: 'bg-blue-500', JavaScript: 'bg-yellow-400', HTML: 'bg-orange-500',
    CSS: 'bg-purple-500', Python: 'bg-green-500', SCSS: 'bg-pink-500',
    C: 'bg-gray-500', 'C++': 'bg-cyan-500', Java: 'bg-red-500',
  }
  const bg = COLORS[lang] || 'bg-zinc-500'
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-xs">
        <span className="text-zinc-600 dark:text-zinc-300 font-medium">{lang}</span>
        <span className="text-zinc-400 font-mono">{percent}%</span>
      </div>
      <div className="h-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percent}%` }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className={`h-full rounded-full ${bg}`}
        />
      </div>
    </div>
  )
}

/* ─── Main Page ─── */
export default function ProfilePage() {
  const [data, setData] = useState<DSAData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/dsa')
      .then(r => r.json())
      .then(d => { setData(d); setLoading(false) })
      .catch(() => setLoading(false))
  }, [])

  const lc = data?.leetcode
  const cf = data?.codeforces
  const cc = data?.codechef
  const gh = data?.github
  const hr = data?.hackerrank
  const gfg = data?.gfg

  const totalSolved = (lc?.solved || 0) + (gfg?.totalProblemsSolved || 0)+(cc?.totalProblemsSolved || 0) + (hr?.totalProblemsSolved || 0)
  const totalSubmissions = (lc?.totalSubmissions || 0)
  const totalActiveDays = (lc?.totalActiveDays || 0)

  return (
    <div className="min-h-screen bg-white dark:bg-[#030303] relative">
      <EnhancedNavbar />
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.05] dark:opacity-[0.08] pointer-events-none"
        style={{ backgroundImage: `linear-gradient(#ccc 1px, transparent 1px), linear-gradient(90deg, #ccc 1px, transparent 1px)`, backgroundSize: '50px 50px' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-16 relative z-10">

        {/* Header */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 text-orange-500 font-mono text-sm mb-10">
          <Terminal size={16} /><span>./dsa-profile</span>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">

          {/* ── LEFT SIDEBAR ── */}
          <motion.aside initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="lg:w-72 shrink-0 space-y-5">

            {/* Profile Card */}
            <div className="p-6 rounded-[2rem] border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 text-center">
              <div className="relative w-24 h-24 mx-auto mb-4">
                <Image src={nishirajPhoto} alt="Nishiraj Singh Panwar" fill
                  className="object-cover rounded-full border-2 border-orange-500/30" />
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full border-2 border-white dark:border-zinc-900" />
              </div>
              <h1 className="text-lg font-bold dark:text-white tracking-tight">Nishiraj Singh Panwar</h1>
              <p className="text-xs text-zinc-500 font-mono mt-1">@nishirajsingh</p>
              <p className="text-xs text-zinc-400 mt-2">CS Student · Parul University</p>
              <p className="text-xs text-zinc-400">Vadodara, Gujarat 🇮🇳</p>

              <div className="flex justify-center gap-4 mt-4">
                <a href="https://github.com/nishirajsingh" target="_blank" rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-white transition-colors"><Github size={18} /></a>
                <a href="https://codolio.com/profile/nishirajsingh" target="_blank" rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-orange-500 transition-colors"><Globe size={18} /></a>
                <a href="https://leetcode.com/u/nishirajsingh/" target="_blank" rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-yellow-500 transition-colors"><Code2 size={18} /></a>
              </div>

              <a href="https://codolio.com/profile/nishirajsingh" target="_blank" rel="noopener noreferrer"
                className="mt-4 flex items-center justify-center gap-2 w-full py-2 rounded-xl border border-orange-500/30 text-orange-500 text-xs font-mono hover:bg-orange-500/10 transition-colors">
                View on Codolio <ExternalLink size={12} />
              </a>
            </div>

            {/* Platform Ratings */}
            <div className="space-y-3">
              <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest px-1">Platform Ratings</p>
              {loading ? (
                <div className="space-y-3">
                  {[1, 2, 3].map(i => <div key={i} className="h-16 rounded-2xl bg-zinc-100 dark:bg-zinc-800 animate-pulse" />)}
                </div>
              ) : (
                <>
                  <PlatformBadge name="LeetCode" rating={lc?.contestRating} rank={`Top ${lc?.contestTopPercentage?.toFixed(1)}%`} url="https://leetcode.com/u/nishirajsingh/" />
                  <PlatformBadge name="CodeChef" rating={cc?.rating} rank={`Global #${cc?.globalRank?.toLocaleString()}`} url="https://www.codechef.com/users/nishirajsingh" />
                  <PlatformBadge name="Codeforces" rating={cf?.rating || 'Unrated'} rank={cf?.rank || '—'} url="https://codeforces.com/profile/nishirajsinghpanwar" />
                  <PlatformBadge name="HackerRank" rating={`Lvl ${hr?.level || '—'}`} rank={`${hr?.badgeCount || 0} badges`} url="https://www.hackerrank.com/profile/nishirajsingh" />
                  {gfg && <PlatformBadge name="GeeksForGeeks" rating={gfg.totalProblemsSolved} rank={`Score: ${gfg.codingScore}`} url="https://www.geeksforgeeks.org/profile/nishirajsingh" />}
                </>
              )}
            </div>

            {/* Other Platforms */}
            <div className="space-y-2">
              <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest px-1">Also on</p>
              {[
                { name: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/profile/nishirajsingh' },
                { name: 'HackerRank', url: 'https://www.hackerrank.com/profile/nishirajsingh' },
                { name: 'InterviewBit', url: 'https://www.interviewbit.com/profile/nishiraj-singh-panwar' },
              ].map(p => (
                <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-between px-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-orange-500/30 transition-all group">
                  <span className="text-xs text-zinc-600 dark:text-zinc-300">{p.name}</span>
                  <ExternalLink size={12} className="text-zinc-400 group-hover:text-orange-500 transition-colors" />
                </a>
              ))}
            </div>
          </motion.aside>

          {/* ── MAIN CONTENT ── */}
          <div className="flex-1 space-y-6">

            {/* Top Stats Row */}
            {loading ? (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[1, 2, 3, 4].map(i => <div key={i} className="h-28 rounded-2xl bg-zinc-100 dark:bg-zinc-800 animate-pulse" />)}
              </div>
            ) : (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <StatCard label="Total Solved" value={totalSolved} icon={Code2} color="text-orange-500" sub={`LC:${lc?.solved || 0} GFG:${gfg?.totalProblemsSolved || 0} CC:${cc?.totalProblemsSolved || 0} HR:${hr?.totalProblemsSolved || 0}`} />
                <StatCard label="Active Days" value={totalActiveDays} icon={Calendar} color="text-blue-500" sub="LeetCode" />
                <StatCard label="LC Submissions" value={totalSubmissions} icon={BarChart3} color="text-purple-500" />
                <StatCard label="Max Streak" value={lc?.streak ? `${lc.streak}d` : '—'} icon={Flame} color="text-red-500" sub={gfg?.streak ? `GFG: ${gfg.streak}d` : undefined} />
              </motion.div>
            )}

            {/* LeetCode Problems Breakdown */}
            {!loading && lc && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                className="p-6 rounded-[2rem] border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2 text-orange-500 font-mono text-sm">
                    <Code2 size={16} /><span>LeetCode Problems</span>
                  </div>
                  <a href="https://leetcode.com/u/nishirajsingh/" target="_blank" rel="noopener noreferrer"
                    className="text-xs text-zinc-400 hover:text-orange-500 transition-colors flex items-center gap-1">
                    Profile <ExternalLink size={12} />
                  </a>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[
                    { label: 'Easy', count: lc.easy, total: 900, color: 'text-emerald-500', bar: 'bg-emerald-500' },
                    { label: 'Medium', count: lc.medium, total: 1900, color: 'text-yellow-500', bar: 'bg-yellow-500' },
                    { label: 'Hard', count: lc.hard, total: 800, color: 'text-red-500', bar: 'bg-red-500' },
                  ].map(({ label, count, total, color, bar }) => (
                    <div key={label} className="text-center">
                      <div className={`text-2xl font-bold ${color}`}>{count}</div>
                      <div className="text-xs text-zinc-400 font-mono">{label}</div>
                      <div className="mt-2 h-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                        <motion.div initial={{ width: 0 }} whileInView={{ width: `${(count / total) * 100}%` }}
                          transition={{ duration: 0.8 }} className={`h-full rounded-full ${bar}`} />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Heatmap */}
                <div>
                  <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-3">Submission Activity (6 months)</p>
                  <Heatmap calendar={lc.submissionCalendar || {}} />
                </div>
              </motion.div>
            )}

            {/* Contest History */}
            {!loading && lc?.contestParticipation?.length > 0 && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                className="p-6 rounded-[2rem] border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2 text-orange-500 font-mono text-sm">
                    <Trophy size={16} /><span>Contest History</span>
                  </div>
                  <div className="flex items-center gap-4 text-xs font-mono text-zinc-400">
                    <span>LeetCode: <span className="text-orange-500 font-bold">{lc.contestRating}</span></span>
                    <span>CodeChef: <span className="text-orange-500 font-bold">{cc?.rating}</span></span>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                  <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50 text-center">
                    <p className="text-2xl font-bold text-orange-500">{lc.contestAttend + (cc?.contestCount || 0)}</p>
                    <p className="text-xs text-zinc-400 font-mono">Total Contests</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50 text-center">
                    <p className="text-2xl font-bold dark:text-white">{lc.contestAttend}</p>
                    <p className="text-xs text-zinc-400 font-mono">LeetCode</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50 text-center">
                    <p className="text-2xl font-bold dark:text-white">{cc?.contestCount || 0}</p>
                    <p className="text-xs text-zinc-400 font-mono">CodeChef</p>
                  </div>
                </div>

                <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-3">Recent LeetCode Contests</p>
                <div>
                  {[...lc.contestParticipation].reverse().map((c: any, i: number) => (
                    <ContestRow key={i} contest={c} rating={lc.contestRating} />
                  ))}
                </div>
              </motion.div>
            )}

            {/* HackerRank Section */}
            {!loading && hr && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                className="p-6 rounded-[2rem] border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2 text-orange-500 font-mono text-sm">
                    <Code2 size={16} /><span>HackerRank</span>
                  </div>
                  <a href="https://www.hackerrank.com/profile/nishirajsingh" target="_blank" rel="noopener noreferrer"
                    className="text-xs text-zinc-400 hover:text-orange-500 transition-colors flex items-center gap-1">
                    Profile <ExternalLink size={12} />
                  </a>
                </div>

                {/* Badges */}
                {hr.badges?.length > 0 && (
                  <div className="mb-6">
                    <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-3">Badges</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {hr.badges.map((b: any, i: number) => (
                        <div key={i} className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50 text-center">
                          <div className="flex justify-center gap-0.5 mb-2">
                            {Array.from({ length: b.stars }).map((_, s) => (
                              <Star key={s} size={12} className="text-yellow-400 fill-yellow-400" />
                            ))}
                          </div>
                          <p className="text-xs font-bold dark:text-white leading-tight">{b.name}</p>
                          <p className="text-[10px] text-zinc-400 font-mono mt-1">{b.solved} solved</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Active Tracks */}
                {hr.activeTracks?.length > 0 && (
                  <div>
                    <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-3">Active Tracks</p>
                    <div className="space-y-2">
                      {hr.activeTracks.map((t: any, i: number) => (
                        <div key={i} className="flex items-center justify-between py-2 border-b border-zinc-100 dark:border-zinc-800 last:border-0">
                          <span className="text-sm dark:text-zinc-300">{t.name}</span>
                          <div className="flex items-center gap-3 text-xs font-mono">
                            <span className="text-orange-500 font-bold">{t.score} pts</span>
                            <span className="text-zinc-400">#{t.rank?.toLocaleString()}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            )}

            {/* CodeChef Section */}
            {!loading && cc && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                className="p-6 rounded-[2rem] border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2 text-orange-500 font-mono text-sm">
                    <Trophy size={16} /><span>CodeChef</span>
                  </div>
                  <a href={`https://www.codechef.com/users/${cc.username || 'nishirajsingh'}`} target="_blank" rel="noopener noreferrer"
                    className="text-xs text-zinc-400 hover:text-orange-500 transition-colors flex items-center gap-1">
                    Profile <ExternalLink size={12} />
                  </a>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { label: 'Current Rating', value: cc.rating, icon: Trophy, color: 'text-orange-500' },
                    { label: 'Highest Rating', value: cc.highestRating, icon: Star, color: 'text-yellow-500' },
                    { label: 'Problems Solved', value: cc.totalProblemsSolved, icon: Code2, color: 'text-green-500' },
                    { label: 'Total Contests', value: cc.contestCount, icon: Activity, color: 'text-blue-500' },
                  ].map(({ label, value, icon: Icon, color }) => (
                    <div key={label} className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50 text-center">
                      <Icon size={16} className={`${color} mx-auto mb-2`} />
                      <p className="text-xl font-bold dark:text-white">{value ?? '—'}</p>
                      <p className="text-[10px] text-zinc-400 font-mono">{label}</p>
                    </div>
                  ))}
                </div>

                {cc.globalRank && (
                  <div className="mt-4 p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 flex items-center justify-between">
                    <span className="text-xs text-zinc-500 font-mono">Global Rank</span>
                    <span className="text-sm font-bold text-orange-500">#{cc.globalRank.toLocaleString()}</span>
                  </div>
                )}
              </motion.div>
            )}

            {/* GitHub Stats */}
            {!loading && gh && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                className="p-6 rounded-[2rem] border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2 text-orange-500 font-mono text-sm">
                    <Github size={16} /><span>GitHub Stats</span>
                  </div>
                  <a href="https://github.com/nishirajsingh" target="_blank" rel="noopener noreferrer"
                    className="text-xs text-zinc-400 hover:text-orange-500 transition-colors flex items-center gap-1">
                    @nishirajsingh <ExternalLink size={12} />
                  </a>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  {[
                    { label: 'Stars', value: gh.stars, icon: Star },
                    { label: 'Repos', value: gh.publicRepos, icon: Code2 },
                    { label: 'Followers', value: gh.followers, icon: TrendingUp },
                    { label: 'Following', value: gh.following, icon: Zap },
                  ].map(({ label, value, icon: Icon }) => (
                    <div key={label} className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50 text-center">
                      <Icon size={16} className="text-orange-500 mx-auto mb-2" />
                      <p className="text-xl font-bold dark:text-white">{value}</p>
                      <p className="text-[10px] text-zinc-400 font-mono">{label}</p>
                    </div>
                  ))}
                </div>

                {/* Languages */}
                {gh.languages?.length > 0 && (
                  <div>
                    <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4">Languages</p>
                    <div className="space-y-3">
                      {gh.languages.map((l: any) => (
                        <LangBar key={l.lang} lang={l.lang} percent={l.percent} />
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            )}

            {/* Loading skeleton */}
            {loading && (
              <div className="space-y-4">
                {[1, 2, 3].map(i => (
                  <div key={i} className="h-48 rounded-[2rem] bg-zinc-100 dark:bg-zinc-800 animate-pulse" />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
