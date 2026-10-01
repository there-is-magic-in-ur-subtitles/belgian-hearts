import { createFileRoute } from "@tanstack/react-router";

// No head() here: the home route inherits title/description/og/twitter from
// __root.tsx, and ships no og:image so serve-time hosting can inject the
// project's social preview (explicit og:image or latest screenshot).
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Flamme — Brussels Profile Discovery" },
      {
        name: "description",
        content: "A compact, touch-friendly Brussels profile discovery experience.",
      },
      { property: "og:title", content: "Flamme — Brussels Profile Discovery" },
      {
        property: "og:description",
        content: "A compact, touch-friendly Brussels profile discovery experience.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

// IMPORTANT: Replace this placeholder. See ./README.md for routing conventions.
function Index() {
  return (
    <main className="grid min-h-screen place-items-center bg-background">
      <iframe
        src="/app.html"
        title="Flamme Brussels profile discovery"
        className="h-[568px] w-[325px] border-0 shadow-2xl"
      />
    </main>
  );
}
