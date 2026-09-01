import { createFileRoute } from "@tanstack/react-router";
import { SanctuaryApp } from "@/components/sanctuary/SanctuaryApp";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <SanctuaryApp />;
}
