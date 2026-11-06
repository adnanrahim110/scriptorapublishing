import Button from "@/components/ui/button";
import { childrenPage } from "@/content/children";
import ChildrenHeading from "./children-heading";
import ChildrenContentCard from "./children-content-card";

export default function ChildrenDeliverables() {
  return (
    <section
      aria-labelledby="children-deliverables-title"
      className="bg-[#eaf7f5] pb-18 sm:pb-24 lg:pb-32"
    >
      <div className="container">
        <div className="rounded-3xl border border-[#d9ccb8] bg-[#fff9ec] p-6 shadow-[0_20px_60px_rgba(42,36,66,.1)] sm:p-8 lg:p-12">
          <ChildrenHeading
            id="children-deliverables-title"
            {...childrenPage.deliverablesSection}
          />
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4">
            {childrenPage.deliverables.map((item) => (
              <ChildrenContentCard
                key={item.title}
                {...item}
                className="border-b border-[#d9ccb8]"
              />
            ))}
          </div>
          <Button
            href="/contact-us"
            size="lg"
            className="mt-8 max-w-full border-[#25223d] bg-[#25223d] text-white [&_[data-slot=button-label]]:whitespace-normal"
          >
            {childrenPage.deliverablesAction}
          </Button>
        </div>
      </div>
    </section>
  );
}
