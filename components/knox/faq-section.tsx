"use client"

import { FadeIn } from "./fade-in"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Do you travel for events?",
    answer:
      "Yes. Knox Signature is based in Dallas and available worldwide. Travel fees are quoted per event based on location and logistics.",
  },
  {
    question: "What happens if there's an equipment issue?",
    answer:
      "We carry backup systems for every critical component. Redundancy is built into every setup so the evening never stops.",
  },
  {
    question: "How does overtime work?",
    answer:
      "If the night is going well and you'd like to extend, overtime is available at an hourly rate agreed upon in advance.",
  },
  {
    question: "How do you coordinate with our planner and other vendors?",
    answer:
      "We provide a detailed cue sheet and mic plan before the event. We attend the final walkthrough and coordinate load-in, placement, and timing directly with your planner and venue team.",
  },
  {
    question: "What do you need from the venue?",
    answer:
      "Standard power access and a designated setup area. We handle everything else. A site visit or floor plan in advance is always helpful.",
  },
]

export function FaqSection() {
  return (
    <section
      className="px-9 md:px-[72px] py-24 max-w-[1040px] mx-auto"
      style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <FadeIn>
        <p
          className="text-[11px] font-semibold uppercase mb-5"
          style={{ letterSpacing: "0.32em", color: "rgba(255,255,255,0.4)" }}
        >
          FAQ
        </p>
        <h2
          className="font-bold mb-12"
          style={{
            fontSize: "clamp(22px, 2.5vw, 28px)",
            letterSpacing: "-0.02em",
            lineHeight: 1.15,
            color: "#ffffff",
          }}
        >
          Common questions.
        </h2>
      </FadeIn>

      <FadeIn delay={100}>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border-b-0"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
            >
              <AccordionTrigger
                className="py-5 text-[15px] font-medium hover:no-underline"
                style={{ color: "rgba(255,255,255,0.88)" }}
              >
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>
                <p
                  className="font-light pb-2"
                  style={{
                    fontSize: "15px",
                    color: "rgba(255,255,255,0.58)",
                    lineHeight: 1.7,
                  }}
                >
                  {faq.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </FadeIn>
    </section>
  )
}
