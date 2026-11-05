import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { youtubeId } from "@/data/projects";
import { useLanguage } from "@/i18n/language";
export interface VideoSelection { title: string; videoUrl: string; format: "horizontal" | "vertical" }
export function VideoViewer({ video, onClose }: { video: VideoSelection | null; onClose: () => void }) {
  const { t } = useLanguage();
  const id = youtubeId(video?.videoUrl ?? "");
  return <Dialog.Root open={Boolean(video && id)} onOpenChange={(open) => { if (!open) onClose(); }}>
    <Dialog.Portal>
      <Dialog.Overlay className="viewer-overlay" />
      <Dialog.Content className={`viewer-content ${video?.format ?? "horizontal"}`} aria-describedby={undefined}>
        <Dialog.Title className="sr-only">{video?.title ?? t.projects.viewer}</Dialog.Title>
        {id && <iframe title={video?.title ?? t.projects.viewer} src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&playsinline=1&vq=hd1080`} allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowFullScreen />}
        <Dialog.Close asChild><Button variant="ghost" size="icon" className="viewer-close" aria-label={t.projects.close} title={t.projects.close}><X /></Button></Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>;
}
