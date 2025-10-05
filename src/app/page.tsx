import { FileUpload } from "@/components/ui/file-upload";


export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden w-full bg-neutral-900 flex flex-col items-center justify-center py-20">
      <div className="mx-2 sm:w-2xl">
        <FileUpload />
      </div>
      <div className="mt-10 flex flex-col mb-4">
        <button className="border bg-[#E6E6E6] hover:bg-[#F6F6F6] h-9 px-8 text-black tracking-wide rounded-lg font-medium text-sm cursor-pointer">
          Roast Me
        </button>
      </div>
    </div>
  );
}
