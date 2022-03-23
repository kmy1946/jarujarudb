import Link from "next/link";
import React from "react";
import styles from './TopGrid.module.css';

export default function TopGrid(){
  return (
    <div>
      <Link href='/category' className={styles.topgrid_link_text}>
        Category
      </Link>
    </div>
  )
}