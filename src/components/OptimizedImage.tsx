'use client'
import Image from 'next/image'
import { useState } from 'react'

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  style?: React.CSSProperties
  priority?: boolean
  fill?: boolean
  sizes?: string
  loading?: 'lazy' | 'eager'
  placeholder?: 'blur' | 'empty'
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = '',
  style = {},
  priority = false,
  fill = false,
  sizes,
  loading = 'lazy',
  placeholder = 'empty',
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  const imageProps = {
    src,
    alt,
    className: `${className} ${isLoading ? 'blur-sm' : 'blur-0'} transition-all duration-300`,
    style: {
      ...style,
      width: width && height ? 'auto' : style.width,
      height: width && height ? 'auto' : style.height,
    },
    onLoad: () => setIsLoading(false),
    onError: () => {
      setHasError(true)
      setIsLoading(false)
    },
    loading: priority ? 'eager' : loading,
    priority,
    sizes,
    placeholder,
    ...props,
  }

  if (hasError) {
    return (
      <div 
        className={`${className} bg-gray-200 flex items-center justify-center text-gray-500 text-sm`}
        style={{ width, height, ...style }}
      >
        Error al cargar imagen
      </div>
    )
  }

  if (fill) {
    return <Image {...imageProps} fill />
  }

  if (width && height) {
    return <Image {...imageProps} width={width} height={height} />
  }

  return <Image {...imageProps} width={width || 100} height={height || 100} />
}
