import { NextResponse,NextRequest } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
// import { cookies } from "next/headers";
// import socket from '@/app/socket';


const locales = ["en", "ar"];

// Get the preferred locale, similar to the above or using a library
function getLocale(request) {
   let lang = request.headers.get("accept-language");
   let headers = { "accept-language": lang };
   let languages = new Negotiator({ headers }).languages();
   let defaultLocale = "en";
   const browserLang = match(languages, locales, defaultLocale);
   return browserLang;
}

function authentication(req) {
   let token = req.cookies.get("token");
   // console.log("tokkk....req",req.cookies.get('token'));
   // console.log("url....req",req.url);
   // console.log("tokkk",req.cookies.get(''));
   // let token = true;
   // if (token) {
   //    return token;
   // }
   return token;
}

function getLanguage(request) {
   // Check if there is any supported locale in the pathname
   const { pathname } = request.nextUrl;
   const pathnameHasLocale = locales.some(
      (locale) =>
         pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
   );

   if (pathnameHasLocale) return false;
   // Redirect if there is no locale
   const locale = getLocale(request);
   request.nextUrl.pathname = `/${locale}${pathname}`;
   // e.g. incoming request is /products
   // The new URL is now /en-US/products
   return true;
   //  return NextResponse.redirect(request.nextUrl);
}

export function middleware(request) {
   request.headers.set('cache-control','no-cache');
   let lang = getLocale(request);
   // console.log(authentication(request));
   // if(request.nextUrl.pathname === `${lang}/login` && request.nextUrl.pathname === `${lang}/login`)
   if (authentication(request)) {
      console.log('a1');
      if (getLanguage(request)) {
         console.log('a2');
         return NextResponse.redirect(request.nextUrl);
         ;
      } else {
         return NextResponse.next();
      }
   } else {
      console.log('a12');
      // request.nextUrl.pathname = `${lang}/login`;
      // return NextResponse.redirect(request.nextUrl);
      return NextResponse.redirect(new URL(`${lang}/login`,request.nextUrl.origin));
      // return;
   }
}

export const config = {
   matcher: [
      // Skip all internal paths (_next)
      // "/((?!_next).*)",
      '/((?!api|en/login|en/register|ar/login|ar/register|favicon.ico|_next/static|_next/image|.*\\.png$).*)',
      // Optional: only run on root (/) URL
      // '/([lang]/*)'
   ],
};
