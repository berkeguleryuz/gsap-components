import clsx from "clsx";
import Link from "next/link";

export default function Home() {
  const components = [
    {
      id: 1,
      name: "ImageHover",
      description: "Image gallery with mouse hover effect",
      route: "/image-hover",
      tech: "GSAP [InertiaPlugin]",
      status: "Active",
    },
    {
      id: 2,
      name: "StackedCards",
      description: "Stacked cards animation with scroll",
      route: "/stacked-cards",
      tech: "GSAP [ScrollTrigger + ScrollSmoother]",
      status: "Active",
    },
    {
      id: 3,
      name: "HorizontalScroll",
      description: "Horizontal scroll animation with scroll",
      route: "/horizontal-scroll",
      tech: "GSAP [ScrollTrigger + ScrollSmoother]",
      status: "Active",
    },
    {
      id: 4,
      name: "MagicalText",
      description: "Magical text animation with GSAP",
      route: "/magical-text",
      tech: "GSAP [SplitText + ScrambleTextPlugin]",
      status: "Active",
    },
    {
      id: 5,
      name: "TopStackedCards",
      description: "Top stacked cards animation with scroll",
      route: "/top-stacked-cards",
      tech: "GSAP [ScrollTrigger]",
      status: "Active",
    },
    {
      id: 6,
      name: "AccordionImages",
      description: "Accordion images animation with scroll",
      route: "/accordion-images",
      tech: "GSAP [ScrollTrigger]",
      status: "Not Active",
    },
  ];

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-slate-50 mb-4">
            GSAP Component Library
          </h1>
          <p className="text-slate-100 text-lg">
            Modern animation components collection
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {components.map((component) => (
            <Link
              key={component.id}
              href={component.route}
              className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200">
              <div className="flex flex-col h-full">
                <div className="inline-flex items-center justify-center w-8 h-8 bg-slate-900 text-white rounded-full text-sm font-semibold mb-4">
                  {component.id}
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-slate-900 transition-colors">
                  {component.name}
                </h3>

                <p className="text-gray-600 text-sm mb-4 flex-grow">
                  {component.description}
                </p>

                <div className="mb-4">
                  <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                    {component.tech}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className={clsx("inline-flex items-center px-2 py-1 gap-1 rounded-full text-xs font-medium", component.status === "Active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800")}>
                    <span
                      className={clsx(
                        `w-2 h-2 rounded-full mr-1`,
                        component.status === "Active"
                          ? "bg-green-500"
                          : "bg-red-500",
                      )}></span>
                    {component.status}
                  </span>
                  <svg
                    className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center text-gray-500">
          <p>New components coming soon...</p>
        </div>
      </div>
    </main>
  );
}
