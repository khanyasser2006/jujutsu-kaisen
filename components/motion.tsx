'use client'

import {
  motion,
  useInView,
  useScroll,
  useTransform,
  useSpring,
  type Variants,
} from 'motion/react'
import {
  useRef,
  type ReactNode,
  type ElementType,
  type CSSProperties,
} from 'react'

/* ------------------------------------------------------------------ */
/* Reveal — fades/slides children in when they enter the viewport      */
/* ------------------------------------------------------------------ */
export function Reveal({
  children,
  delay = 0,
  y = 34,
  once = true,
  className,
  as = 'div',
}: {
  children: ReactNode
  delay?: number
  y?: number
  once?: boolean
  className?: string
  as?: ElementType
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once, margin: '-12% 0px -12% 0px' })
  const MotionTag = motion[as as keyof typeof motion] as typeof motion.div

  return (
    <MotionTag
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionTag>
  )
}

/* ------------------------------------------------------------------ */
/* Stagger container + item                                            */
/* ------------------------------------------------------------------ */
const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
}
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
}

export function StaggerGroup({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })
  return (
    <motion.div
      ref={ref}
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  )
}

/* ------------------------------------------------------------------ */
/* Parallax — translates on scroll                                     */
/* ------------------------------------------------------------------ */
export function Parallax({
  children,
  speed = 60,
  className,
  style,
}: {
  children: ReactNode
  speed?: number
  className?: string
  style?: CSSProperties
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const yRaw = useTransform(scrollYProgress, [0, 1], [speed, -speed])
  const y = useSpring(yRaw, { stiffness: 120, damping: 30, mass: 0.4 })
  return (
    <motion.div ref={ref} style={{ y, ...style }} className={className}>
      {children}
    </motion.div>
  )
}

/* ------------------------------------------------------------------ */
/* Magnetic — element drifts toward cursor                             */
/* ------------------------------------------------------------------ */
export function Magnetic({
  children,
  strength = 0.4,
  className,
}: {
  children: ReactNode
  strength?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useSpring(0, { stiffness: 200, damping: 15 })
  const y = useSpring(0, { stiffness: 200, damping: 15 })

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const relX = e.clientX - (rect.left + rect.width / 2)
    const relY = e.clientY - (rect.top + rect.height / 2)
    x.set(relX * strength)
    y.set(relY * strength)
  }
  function reset() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x, y }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* ------------------------------------------------------------------ */
/* Marquee — infinite horizontal ticker                                */
/* ------------------------------------------------------------------ */
export function Marquee({
  children,
  duration = 40,
  reverse = false,
  className,
}: {
  children: ReactNode
  duration?: number
  reverse?: boolean
  className?: string
}) {
  return (
    <div className={`flex overflow-hidden ${className ?? ''}`}>
      <div
        className="flex min-w-full shrink-0 animate-marquee items-center"
        style={
          {
            '--marquee-duration': `${duration}s`,
            animationDirection: reverse ? 'reverse' : 'normal',
          } as CSSProperties
        }
      >
        {children}
        {children}
      </div>
    </div>
  )
}
