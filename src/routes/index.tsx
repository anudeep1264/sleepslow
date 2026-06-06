import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Project Event Horizon" },
      {
        name: "description",
        content:
          "An interactive audio-visual art project. A cybernetic cosmic anomaly to calm a racing mind before sleep.",
      },
      { name: "viewport", content: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover" },
      { name: "theme-color", content: "#000000" },
      { property: "og:title", content: "Project Event Horizon" },
      {
        property: "og:description",
        content: "An interactive audio-visual art project for relaxation.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    window.location.replace("/event-horizon.html");
  }, []);
  return <div style={{ background: "#000", width: "100vw", height: "100vh" }} />;
}
