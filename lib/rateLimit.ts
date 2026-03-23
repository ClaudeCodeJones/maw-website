import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'

const redis = Redis.fromEnv()

export const contactLimiter = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(5, '60 s'),
  analytics: true,
  prefix: 'rl:contact',
})

export const careersLimiter = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(3, '60 s'),
  analytics: true,
  prefix: 'rl:careers',
})

export const quoteLimiter = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(3, '60 s'),
  analytics: true,
  prefix: 'rl:quote',
})

export function getClientIp(req: Request): string {
  return (
    req.headers.get('x-forwarded-for')?.split(',')[0].trim() ??
    req.headers.get('x-real-ip') ??
    'unknown'
  )
}

export async function checkRateLimit(
  limiter: Ratelimit,
  req: Request,
): Promise<boolean> {
  const ip = getClientIp(req)
  let email: string | undefined
  try {
    const body = await req.clone().json()
    if (typeof body.email === 'string') email = body.email
  } catch {
    // body unreadable — fall back to IP only
  }
  const key = email ? `${ip}:${email}` : ip
  const { success } = await limiter.limit(key)
  return success
}
