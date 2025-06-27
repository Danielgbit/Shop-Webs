import Hero from "@/sections/Hero/Hero";
import styles from "./page.module.css";
import WhatIncluded from "@/sections/WhatIncluded/WhatIncluded";
import Portafolio from "@/sections/Portafolio/Portafolio";
import Testimonials from "@/sections/Testimonials/Testimonials";
import CallToAction from "@/sections/CallToAction/CallToAction";
import Pricing from "@/sections/Pricing/Pricing";
import ProcessSteps from "@/sections/ProcessSteps/ProcessSteps";
import TargetAudience from "@/sections/TargetAudience/TargetAudience";
import Comparison from "@/sections/Comparison/Comparison";

export default function Home() {
  return (
    <div className={styles.page}>
      <Hero />
      <WhatIncluded />
      <Portafolio />
      <Testimonials />
      <CallToAction />
      <Pricing/>
      <ProcessSteps/>
      <TargetAudience/>
      <Comparison/>
    </div>
  );
}
