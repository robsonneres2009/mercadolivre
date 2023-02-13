import Image from "next/image";
import Link from "next/link";

import image from "public/images/logo.png";

export default function Logo() {
  return (
    <Link href={"/"} data-testid="logo">
      <Image src={image} alt="logo mercado livre" width={60} />
    </Link>
  );
}
