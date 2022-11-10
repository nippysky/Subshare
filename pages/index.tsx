import Head from "next/head";
import Faqs from "../components/Faqs";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Services from "../components/Services";

export default function Home() {
  return (
    <section className="w-full min-h-screen">
      <Head>
        <title>Subshare - Share Your Subscriptions</title>
        <meta
          name="description"
          content="Management tool for group subscription plans, connect and split costs with your family, friends and co-workers!"
        />
      </Head>

      <Hero />
      <Services />
      <HowItWorks />
      <Faqs />
      <Footer />
    </section>
  );
}
