import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  request.headers.set('authentication', 'true');
  console.log(request.headers.get('cookie'));

    if (request.headers.get('authentication') === 'true') {
      return NextResponse.next();
    }

  const loginUrl = new URL('/login', request.url)
  loginUrl.searchParams.set('from', request.nextUrl.pathname.replace('/', ''))

  return NextResponse.redirect(loginUrl)
}