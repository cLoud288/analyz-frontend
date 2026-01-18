import dynamic from "next/dynamic";

const NicheForm = dynamic(
  () => import("@/components/NicheForm"),
  { ssr: false }
);

export default function Home() {
  return <NicheForm />;
}