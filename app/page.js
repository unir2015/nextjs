import Image from "next/image";
import styles from "./page.module.css";
import TableData from "@/components/table";
import DragColumnSorting from "@/DragColumnSorting/DragColumnSorting";

export default function Home() {
  return (
    <DragColumnSorting />
  );
}
