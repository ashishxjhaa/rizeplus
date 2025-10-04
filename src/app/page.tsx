import { FileUpload } from "@/components/ui/file-upload";


export default function Home() {
  return (
    <div className="min-h-screen w-full bg-neutral-900 flex items-center justify-center">
      <div className="w-2xl">
        <FileUpload />
      </div>
    </div>
  );
}
