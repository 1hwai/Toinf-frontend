import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './styles/page.module.scss'
import Link from "next/link";
import Calculator from "@/*app/graph/page";

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
      <div>
        <div>Main page</div>
        <Link href="/graph">Graph</Link>
        <Link href="/calculus">Calculus</Link>
      </div>
  );
}
