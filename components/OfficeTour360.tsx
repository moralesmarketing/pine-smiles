"use client";

import { useEffect, useRef, useState } from "react";
import "@photo-sphere-viewer/core/index.css";

const rooms = [
  { src: "/images/office-tour/entrance.jpg", label: "Entrance" },
  { src: "/images/office-tour/waiting-room.jpg", label: "Waiting Room" },
  { src: "/images/office-tour/hallway.jpg", label: "Hallway" },
  { src: "/images/office-tour/treatment-room.jpg", label: "Treatment Room" },
];

export default function OfficeTour360() {
  const containerRef = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<import("@photo-sphere-viewer/core").Viewer | null>(null);
  const [roomIndex, setRoomIndex] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;

    import("@photo-sphere-viewer/core").then(({ Viewer }) => {
      if (cancelled || !containerRef.current) return;
      viewerRef.current = new Viewer({
        container: containerRef.current,
        panorama: rooms[0].src,
        navbar: ["zoom", "caption", "fullscreen"],
        caption: rooms[0].label,
        loadingImg: undefined,
        defaultZoomLvl: 0,
        rendererParameters: { preserveDrawingBuffer: true },
      });
      setReady(true);
    });

    return () => {
      cancelled = true;
      viewerRef.current?.destroy();
      viewerRef.current = null;
    };
  }, []);

  const goTo = (index: number) => {
    const next = ((index % rooms.length) + rooms.length) % rooms.length;
    setRoomIndex(next);
    viewerRef.current?.setPanorama(rooms[next].src, { caption: rooms[next].label });
  };

  return (
    <div className="relative">
      <div
        ref={containerRef}
        className="w-full rounded-3xl overflow-hidden"
        style={{ height: 420, background: "#111" }}
      />
      {!ready && (
        <div className="absolute inset-0 flex items-center justify-center text-white/70 text-sm">
          Loading tour&hellip;
        </div>
      )}
      <div className="flex items-center justify-center gap-3 mt-4 flex-wrap">
        {rooms.map((room, i) => (
          <button
            key={room.src}
            type="button"
            onClick={() => goTo(i)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
              i === roomIndex
                ? "bg-white text-pine-purple"
                : "bg-white/15 text-white hover:bg-white/25"
            }`}
          >
            {room.label}
          </button>
        ))}
      </div>
      <div className="flex items-center justify-center gap-4 mt-3">
        <button
          type="button"
          onClick={() => goTo(roomIndex - 1)}
          aria-label="Previous room"
          className="w-10 h-10 rounded-full bg-white/15 text-white hover:bg-white/25 flex items-center justify-center"
        >
          ←
        </button>
        <span className="text-white/70 text-sm">Drag to look around</span>
        <button
          type="button"
          onClick={() => goTo(roomIndex + 1)}
          aria-label="Next room"
          className="w-10 h-10 rounded-full bg-white/15 text-white hover:bg-white/25 flex items-center justify-center"
        >
          →
        </button>
      </div>
    </div>
  );
}
