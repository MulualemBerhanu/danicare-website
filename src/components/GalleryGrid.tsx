'use client'

import { useState, useCallback, useEffect } from 'react'
import Image from 'next/image'
import { GalleryImage } from '@/data/site'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

interface GalleryGridProps {
  images: GalleryImage[]
  title?: string
}

export function GalleryGrid({ images, title }: GalleryGridProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)
  const [isOpen, setIsOpen] = useState(false)

  const selectedImage = selectedImageIndex !== null ? images[selectedImageIndex] : null

  const goToNext = useCallback(() => {
    if (selectedImageIndex !== null && selectedImageIndex < images.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1)
    }
  }, [selectedImageIndex, images.length])

  const goToPrevious = useCallback(() => {
    if (selectedImageIndex !== null && selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1)
    }
  }, [selectedImageIndex])

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (!isOpen) return
    
    switch (event.key) {
      case 'ArrowRight':
        goToNext()
        break
      case 'ArrowLeft':
        goToPrevious()
        break
      case 'Escape':
        setIsOpen(false)
        setSelectedImageIndex(null)
        break
    }
  }, [isOpen, goToNext, goToPrevious])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  const openImage = (index: number) => {
    setSelectedImageIndex(index)
    setIsOpen(true)
  }

  const closeImage = () => {
    setIsOpen(false)
    setSelectedImageIndex(null)
  }

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <div className="space-y-6">
      {title && (
        <h3 className="text-2xl font-serif font-bold text-gray-900 text-center">
          {title}
        </h3>
      )}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {images.map((image, index) => (
          <div
            key={image.src}
            className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <button
              onClick={() => openImage(index)}
              className="w-full h-48 sm:h-56 lg:h-64 relative overflow-hidden cursor-pointer focus:outline-none focus:ring-2 focus:ring-dani-500 focus:ring-offset-2"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                priority={index < 4}
                quality={75}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                  <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </button>
          </div>
        ))}
      </div>

      {/* Custom Lightbox Modal */}
      {isOpen && selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            onClick={closeImage}
          />
          
          {/* Modal Content */}
          <div className="relative z-10 w-full h-full max-w-[95vw] max-h-[95vh] flex items-center justify-center p-4">
            {/* Close button */}
            <button
              onClick={closeImage}
              className="absolute top-4 right-4 z-20 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors duration-200"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Previous button */}
            {selectedImageIndex! > 0 && (
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-colors duration-200"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            {/* Next button */}
            {selectedImageIndex! < images.length - 1 && (
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-colors duration-200"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}

            {/* Image Container */}
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
                priority
                quality={90}
                sizes="95vw"
              />
            </div>

            {/* Image info */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-sm rounded-lg p-4 z-20">
              <div className="flex items-center justify-between">
                <p className="text-white text-sm font-medium flex-1">
                  {selectedImage.alt}
                </p>
                <p className="text-white/80 text-xs ml-4">
                  {selectedImageIndex! + 1} of {images.length}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
