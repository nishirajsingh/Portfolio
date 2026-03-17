import { NextResponse } from 'next/server'

async function fetchLeetCodeGraphQL(query: string, variables: object) {
  try {
    const res = await fetch('https://leetcode.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
        'Referer': 'https://leetcode.com/'
      },
      body: JSON.stringify({ query, variables }),
      next: { revalidate: 3600 } // Cache for 1 hour
    });
    if (!res.ok) return null;
    return await res.json();
  } catch (error) {
    console.error("LeetCode GraphQL Error:", error);
    return null;
  }
}

async function fetchLeetCode(username = 'nishirajsingh') {
  const queryProfile = `
    query getUserProfile($username: String!) {
      matchedUser(username: $username) {
        profile { realName, userAvatar, ranking }
        submitStats { acSubmissionNum { difficulty, count, submissions } }
        badges { id, name }
      }
      userContestRanking(username: $username) {
        attendedContestsCount, rating, topPercentage
      }
    }
  `;
  const queryCalendar = `
    query userProfileCalendar($username: String!) {
      matchedUser(username: $username) {
        userCalendar { streak, totalActiveDays, submissionCalendar }
      }
    }
  `;

  const queryContests = `
    query userContestRankingInfo($username: String!) {
      userContestRankingHistory(username: $username) {
        attended, rating, trendDirection, problemsSolved, totalProblems
        contest { title, startTime }
      }
    }
  `;

  try {
    // Fetch all three directly from LeetCode simultaneously
    const [profileData, calendarData, contestsData] = await Promise.all([
      fetchLeetCodeGraphQL(queryProfile, { username }),
      fetchLeetCodeGraphQL(queryCalendar, { username }),
      fetchLeetCodeGraphQL(queryContests, { username })
    ]);

    const user = profileData?.data?.matchedUser;
    const contest = profileData?.data?.userContestRanking;
    const calendar = calendarData?.data?.matchedUser?.userCalendar;
    const contestHistory = contestsData?.data?.userContestRankingHistory || [];

    if (!user) return null; // Fallback if user doesn't exist

    // Parse difficulty stats safely
    const stats = user.submitStats?.acSubmissionNum || [];
    const getStat = (diff: string) => stats.find((s: any) => s.difficulty === diff);

    return {
      username: username,
      name: user.profile?.realName || 'Nishiraj Singh Panwar',
      avatar: user.profile?.userAvatar || '',
      ranking: user.profile?.ranking || 0,
      solved: getStat('All')?.count || 0,
      easy: getStat('Easy')?.count || 0,
      medium: getStat('Medium')?.count || 0,
      hard: getStat('Hard')?.count || 0,
      totalSubmissions: getStat('All')?.submissions || 0,
      
      contestRating: contest?.rating ? Math.round(contest.rating) : 0,
      contestAttend: contest?.attendedContestsCount || 0,
      contestTopPercentage: contest?.topPercentage || null,
      
      // Filter out unattended contests to match the format your frontend expects
      contestParticipation: contestHistory.filter((c: any) => c.attended) || [],
      
      streak: calendar?.streak || 0,
      totalActiveDays: calendar?.totalActiveDays || 0,
      submissionCalendar: calendar?.submissionCalendar ? JSON.parse(calendar.submissionCalendar) : {},
      
      badges: user.badges || [],
      badgesCount: user.badges?.length || 0,
      profileUrl: `https://leetcode.com/u/${username}/`,
    };
  } catch (error) {
    console.error("LeetCode Aggregation Error:", error);
    return null;
  }
}

async function fetchCodeForces() {
  try {
    const info = await fetch('https://codeforces.com/api/user.info?handles=nishirajsinghpanwar', { next: { revalidate: 3600 } }).then(r => r.json())
    const user = info.result?.[0]
    return {
      handle: user.handle,
      avatar: user.avatar,
      rating: user.rating || 0,
      maxRating: user.maxRating || 0,
      rank: user.rank || 'unrated',
      maxRank: user.maxRank || 'unrated',
      contribution: user.contribution,
      friendOfCount: user.friendOfCount,
      profileUrl: 'https://codeforces.com/profile/nishirajsinghpanwar',
    }
  } catch { return null }
}

async function fetchCodeChef(username: string = 'nishirajsingh') {
  try {
    const html = await fetch(`https://www.codechef.com/users/${username}`, {
      headers: { 'User-Agent': 'Mozilla/5.0' },
      next: { revalidate: 3600 }
    }).then(r => r.text());

    // 1. Rating Extractions (Added TS types back to fix the error)
    const allRatings: any[] = [];
    const ratingsMatch = html.match(/var all_rating = (\[.*?\]);/);
    if (ratingsMatch) {
      try {
        const parsed = JSON.parse(ratingsMatch[1]);
        parsed.forEach((c: any) => allRatings.push(c));
      } catch {}
    }
    
    const lastContest = allRatings[allRatings.length - 1];
    const currentRating = lastContest ? parseInt(lastContest.rating) : 1179;
    const globalRankMatch = html.match(/href="\/ratings\/all"><strong>(\d+)<\/strong>/);

    // 2. Extract Total Problems Solved
    let totalProblemsSolved = 0;
    const solvedMatch = html.match(/Fully Solved\s*[^0-9]*(\d+)/i) || 
                        html.match(/Total Problems Solved[^0-9]*(\d+)/i);
    if (solvedMatch) {
      totalProblemsSolved = parseInt(solvedMatch[1], 10);
    }

    // 3. Extract Active Days from Heatmap Data
    let activeDays = 0;
    const heatmapMatch = html.match(/var\s+(heatMap|userDailySubmissions)\s*=\s*(\[.*?\]|\{.*?\});/);
    if (heatmapMatch) {
      try {
        const heatmapData = JSON.parse(heatmapMatch[2]);
        activeDays = Array.isArray(heatmapData) 
          ? heatmapData.length 
          : Object.keys(heatmapData).length;
      } catch {}
    }

    // Safely calculate highest rating to avoid -Infinity errors if array is empty
    const highestRating = allRatings.length > 0 
      ? Math.max(...allRatings.map((c: any) => parseInt(c.rating)), currentRating)
      : currentRating;

    return {
      username: username,
      rating: currentRating,
      highestRating: highestRating,
      globalRank: globalRankMatch ? parseInt(globalRankMatch[1]) : null,
      contestCount: allRatings.length,
      contests: allRatings,
      totalProblemsSolved, 
      activeDays,          
      profileUrl: `https://www.codechef.com/users/${username}`,
    };
  } catch (error) { 
    console.error("CodeChef Fetch Error:", error);
    return null; 
  }
}

async function fetchGitHub() {
  try {
    const headers: Record<string, string> = { 'Accept': 'application/vnd.github.v3+json' }
    const [user, repos] = await Promise.all([
      fetch('https://api.github.com/users/nishirajsingh', { headers, next: { revalidate: 3600 } }).then(r => r.json()),
      fetch('https://api.github.com/users/nishirajsingh/repos?per_page=100&sort=updated', { headers, next: { revalidate: 3600 } }).then(r => r.json()),
    ])

    // Aggregate language bytes
    const langBytes: Record<string, number> = {}
    let totalStars = 0
    for (const repo of repos) {
      if (repo.fork) continue
      totalStars += repo.stargazers_count || 0
      if (repo.language) langBytes[repo.language] = (langBytes[repo.language] || 0) + 1
    }
    const totalLangCount = Object.values(langBytes).reduce((a, b) => a + b, 0)
    const languages = Object.entries(langBytes)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 6)
      .map(([lang, count]) => ({ lang, percent: Math.round((count / totalLangCount) * 100) }))

    return {
      username: 'nishirajsingh',
      name: user.name,
      avatar: user.avatar_url,
      bio: user.bio,
      publicRepos: user.public_repos,
      followers: user.followers,
      following: user.following,
      stars: totalStars,
      languages,
      profileUrl: 'https://github.com/nishirajsingh',
    }
  } catch { return null }
}

async function fetchHackerRank() {
  try {
    const [profile, scores, badges] = await Promise.all([
      fetch('https://www.hackerrank.com/rest/contests/master/hackers/nishirajsingh/profile', { next: { revalidate: 3600 } }).then(r => r.json()),
      fetch('https://www.hackerrank.com/rest/hackers/nishirajsingh/scores_elo', { next: { revalidate: 3600 } }).then(r => r.json()),
      fetch('https://www.hackerrank.com/rest/hackers/nishirajsingh/badges', { next: { revalidate: 3600 } }).then(r => r.json()),
    ])
    const m = profile.model
    // Only tracks with score > 0
    const activeTracks = (scores as any[]).filter(s => s.practice?.score > 0).map(s => ({
      name: s.name,
      score: s.practice.score,
      rank: s.practice.rank,
    }))
    const badgeModels = badges.models || []
    const totalProblemsSolved = badgeModels.reduce((sum: number, b: any) => sum + (b.solved || 0), 0)
    return {
      username: 'nishirajsingh',
      name: m.name,
      avatar: m.avatar,
      level: m.level,
      totalProblemsSolved,
      badges: (badges.models || []).map((b: any) => ({
        name: b.badge_name,
        stars: b.stars,
        solved: b.solved,
      })),
      badgeCount: (badges.models || []).length,
      activeTracks,
      profileUrl: 'https://www.hackerrank.com/profile/nishirajsingh',
    }
  } catch { return null }
}

async function fetchGFG(username = 'nishirajsingh') {
  try {
    // Using the working API you found
    const url = `https://gfgstatscard.vercel.app/${username}?raw=true`;
    
    const response = await fetch(url, {
      next: { revalidate: 3600 }, // Caches the fetch for 1 hour
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
        'Accept': 'application/json'
      }
    });

    if (!response.ok) {
      console.warn(`API responded with status: ${response.status}`);
      return null;
    }

    const data = await response.json();
    
    return {
      username: username,
      totalProblemsSolved: data.totalProblemsSolved || data.total_problems_solved || 0,
      easy: data.easy || data.easy_questions_solved || 0,
      medium: data.medium || data.medium_questions_solved || 0,
      hard: data.hard || data.hard_questions_solved || 0,
      codingScore: data.total_score || data.codingScore || data.score || 0,
      streak: data.streak || data.current_streak || 0,
      maxStreak: data.maxStreak || data.max_streak || data.longest_streak || 0,
      instituteRank: data.instituteRank || data.institute_rank || data.rank || null,
      monthlySolved: data.monthlySolved || data.monthly_solved || 0,
      profileUrl: `https://www.geeksforgeeks.org/user/${username}/`,
    };
  } catch (error) {
    console.error('Error fetching from GFG Stats Card API:', error);
    return null;
  }
}

export async function GET() {
  const [leetcode, codeforces, codechef, github, hackerrank, gfg] = await Promise.all([
    fetchLeetCode(),
    fetchCodeForces(),
    fetchCodeChef(),
    fetchGitHub(),
    fetchHackerRank(),
    fetchGFG(),
  ])

  return NextResponse.json({ leetcode, codeforces, codechef, github, hackerrank, gfg }, {
    headers: { 'Cache-Control': 's-maxage=3600, stale-while-revalidate=86400' }
  })
}
