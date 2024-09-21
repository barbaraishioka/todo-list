import Image from "next/image";
import styles from "./header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <Image
        src="/logo.svg"
        alt="Logo da página FocalPoint"
        width={150}
        height={36}
      />
      <h2>Bem-vindo de volta, Marcus</h2>
      <p>Segunda, 01 de dezembro de 2025</p>
    </header>
  );
}
