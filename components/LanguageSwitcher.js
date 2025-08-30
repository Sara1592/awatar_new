import Link from 'next/link';

export default function LanguageSwitcher({ currentLocale }) {
  return (
    <div >
      <Link href="/">
        <button disabled={currentLocale === 'en'} style={{ marginRight: '1rem' }}>English</button>
      </Link>
      <Link href="/ar">
        <button disabled={currentLocale === 'ar'}>العربية</button>
      </Link>
    </div>
  );
}