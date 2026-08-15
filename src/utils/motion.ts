import type { Transition, Variants } from 'framer-motion';

/* ==========================================================================
   MOTION TIMING & EASING PRESETS
   Precision, editorial discipline, restraint
   ========================================================================== */

export const EASINGS = {
  editorial: [0.22, 1, 0.36, 1] as const, // Dennis Snellenberg / high-end smooth deceleration
  snappy: [0.16, 1, 0.3, 1] as const,
  smooth: [0.25, 0.1, 0.25, 1] as const,
  gentle: [0.4, 0.0, 0.2, 1] as const,
};

export const TRANSITIONS = {
  standard: {
    duration: 0.6,
    ease: EASINGS.editorial,
  } satisfies Transition,
  slow: {
    duration: 0.9,
    ease: EASINGS.editorial,
  } satisfies Transition,
  snappy: {
    duration: 0.4,
    ease: EASINGS.snappy,
  } satisfies Transition,
  micro: {
    duration: 0.2,
    ease: EASINGS.snappy,
  } satisfies Transition,
};

/* ==========================================================================
   REUSABLE ANIMATION VARIANTS
   ========================================================================== */

export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: TRANSITIONS.standard,
  },
};

export const slideUpVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: TRANSITIONS.standard,
  },
};

export const slideDownVariants: Variants = {
  hidden: { opacity: 0, y: -24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: TRANSITIONS.standard,
  },
};

export const scaleUpVariants: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: TRANSITIONS.standard,
  },
};

export const staggerContainerVariants = (staggerChildren = 0.08, delayChildren = 0): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: TRANSITIONS.standard,
  },
};
