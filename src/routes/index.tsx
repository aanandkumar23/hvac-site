import { createFileRoute } from "@tanstack/react-router";
import {
  Navbar,
  Hero,
  Marquee,
  Emergency,
  Services,
  Trust,
  BookingForm,
  ServiceArea,
  Testimonials,
  Footer,
  StickyCallButton,
} from "@/components/sections";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Northwind HVAC — 24/7 AC Repair & Heating | Tri-State Area" },
      {
        name: "description",
        content:
          "Same-day AC repair, heating service & installation. 60-minute emergency response, 4.9★ from 2,300+ reviews. Call (800) 555-1234.",
      },
      { property: "og:title", content: "Northwind HVAC — 24/7 AC Repair & Heating" },
      {
        property: "og:description",
        content: "Family-owned HVAC experts. 60-min emergency response. Free quotes.",
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Emergency />
        <Services />
        <Trust />
        <BookingForm />
        <ServiceArea />
        <Testimonials />
      </main>
      <Footer />
      <StickyCallButton />
    </div>
  );
}
