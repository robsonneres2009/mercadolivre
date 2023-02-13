import { Roboto } from "@next/font/google";
import "@/styles/globals.scss";
import Context from "@/components/hooks/context";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <Context>
      <main className={roboto.className}>
        <Component {...pageProps} />
      </main>
    </Context>
  );
}
