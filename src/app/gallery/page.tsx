"use client";

import React, { useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const GALLERY_IMAGES = [
  "/assets/gallery/g1.jpg",
  "/assets/gallery/g2.jpg",
  "/assets/gallery/g3.jpg",
  "/assets/gallery/g4.jpg",
  "/assets/gallery/g5.jpg",
  "/assets/gallery/g6.jpg",
  "/assets/gallery/g7.jpg",
  "/assets/gallery/g8.jpg",
  "/assets/gallery/g9.jpeg",
  "/assets/gallery/g10.jpeg",
  "/assets/gallery/g11.jpeg",
  "/assets/gallery/g12.jpeg",
  "/assets/gallery/g13.jpeg",
  "/assets/gallery/g14.jpeg",
];

export default function GalleryPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    document.body.style.overflow = "auto";
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % GALLERY_IMAGES.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
    }
  };

  return (
    <div>
      <PageHeader
        eyebrow="Moments"
        title="Gallery"
        img="/assets/gallery/g2.jpg"
        intro="Scenes from our schools, events and communities — the children and moments at the heart of our work."
      />

      <section className="max-w-[var(--container-max)] mx-auto px-6 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {GALLERY_IMAGES.map((src, idx) => (
            <button
              key={idx}
              onClick={() => openLightbox(idx)}
              aria-label="View photo"
              className="w-full aspect-square rounded-md border-none p-0 cursor-pointer shadow-sm hover:scale-[1.03] hover:shadow-lg transition-all duration-300 bg-cover bg-center"
              style={{
                backgroundImage: `url(${src})`,
              }}
            />
          ))}
        </div>
      </section>

      {/* Lightbox Overlay */}
      {lightboxIndex !== null && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-[200] bg-[rgba(19,26,25,0.92)] flex items-center justify-center p-10"
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-7 w-11 h-11 rounded-full border-none bg-white/14 hover:bg-white/28 text-white cursor-pointer inline-flex items-center justify-center transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-7 top-1/2 -translate-y-1/2 w-13 h-13 rounded-full border-none bg-white/14 hover:bg-white/28 text-white cursor-pointer inline-flex items-center justify-center transition-colors"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <img
            src={GALLERY_IMAGES[lightboxIndex]}
            alt="Gallery photo"
            className="max-w-[min(1000px,90vw)] max-h-[82vh] object-contain rounded-md shadow-[0_24px_60px_rgba(0,0,0,0.5)]"
          />

          <button
            onClick={nextImage}
            className="absolute right-7 top-1/2 -translate-y-1/2 w-13 h-13 rounded-full border-none bg-white/14 hover:bg-white/28 text-white cursor-pointer inline-flex items-center justify-center transition-colors"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
      )}
    </div>
  );
}
