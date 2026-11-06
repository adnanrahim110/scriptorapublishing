import { childrenPage } from "@/content/children";
import ChildrenHeading from "./children-heading";
import ChildrenJourneyStep from "./children-journey-step";
import StorybookProgress from "./storybook-progress";

export default function StorybookJourney() {
  return (
    <section
      id="storybook-journey"
      aria-labelledby="storybook-journey-title"
      className="relative overflow-clip bg-[#25223d] py-18 text-white sm:py-24 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_20%_20%,#7067d8_0,transparent_28%),radial-gradient(circle_at_85%_70%,#ff715f_0,transparent_26%)]"
      />
      <div className="container relative">
        <ChildrenHeading
          id="storybook-journey-title"
          {...childrenPage.journeySection}
          inverted
          className="border-b border-white/20 pb-10"
        />
        <div className="mt-10 grid gap-14 lg:grid-cols-[1.08fr_.92fr] lg:gap-18">
          <StorybookProgress />
          <div>
            {childrenPage.journey.map((step, index) => (
              <ChildrenJourneyStep key={step.title} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
