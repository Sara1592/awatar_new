import React from 'react'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { useTranslations } from "next-intl";

export default function AbtBreadcrumbBanner({
  banner = "/assets/images/breadcrumb_about.png", // default banner
  title = "About",
}) {
  const pathname = usePathname();
 const t = useTranslations("home");
  const items = useMemo(() => {
    if (!pathname) return [];
    const clean = pathname.split(/[?#]/)[0];
    const segments = clean.split("/").filter(Boolean);

    const acc = [];
    let pathSoFar = "";
    segments.forEach((seg, idx) => {
      pathSoFar += `/${seg}`;
      acc.push({
        label: decodeURIComponent(seg)
          .replace(/[-_]/g, " ")
          .replace(/\b\w/g, (c) => c.toUpperCase()),
        href: idx < segments.length - 1 ? pathSoFar : undefined,
      });
    });

    return [{ label: t('home'), href: "/" }, ...acc];
  }, [pathname]);

  return (
    <div className="banner mt-42">
      <div className="overlay">
        <h1>{title}</h1>
        <nav aria-label="Breadcrumb">
          <ol>
            {items.map((item, i) => {
              const isLast = i === items.length - 1;
              return (
                <li key={i}>
                  {/* {item.href && !isLast ? (
                    <Link href={item.href}>{item.label}</Link>
                  ) : (
                    <span className="current">{item.label}</span>
                  )}
                  {!isLast && <span className="sep">/</span>} */}
                </li>
              );
            })}
          </ol>
        </nav>
      </div>

      <style jsx>{`
        .banner {
          position: relative;
          background: url(${banner}) center/cover no-repeat;
          height: 320px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          text-align: center;
        }
        .overlay {
        
          padding: 20px 30px;
          border-radius: 8px;
        }
        h1 {
          margin: 0 0 10px;
          font-size: 40px;
          font-weight: 600;
        }
        ol {
          list-style: none;
          display: flex;
          justify-content: center;
          gap: 6px;
          padding: 0;
          margin: 0;
        }
        li {
          color: #fff;
          font-size: 14px;
        }
        .sep {
          opacity: 0.7;
          margin: 0 4px;
        }
        a {
          color: #fff;
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
        .current {
          font-weight: bold;
        }
      `}</style>
    </div>
  );
}

