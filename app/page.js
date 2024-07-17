import ObjectDetection from "@/components/objectDetection";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <h2 className="tracking-tighter text-6xl">Book detection tool📚</h2>
   
    <ObjectDetection />
    </main>
  );
}
