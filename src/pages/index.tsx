import Section1 from "@/components/Section1/section1";
import Section2 from "@/components/Section2/section2";
import useIsMobile from "@/hooks/useIsMobile";

export default function Home() {
  const a = useIsMobile();
  return (
    <main>
      <Section1 />
      <Section2 />
      <div className="color-black font-black">{a ? "a" : "b"}</div>
    </main>
  );
}
