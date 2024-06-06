import Image from "next/image";
import ButtonFeedback from "./components/animatedbutton/ButtonFeedback";

export default function Home() {
  return (
    <main className="flex flex-col p-14">
      <ButtonFeedback />
    </main>
  );
}
