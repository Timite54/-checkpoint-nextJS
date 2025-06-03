"use client"

// This is a simple client-side wrapper around framer-motion to prevent SSR issues
// Import this instead of framer-motion directly

import { 
  motion as framerMotion,
  AnimatePresence as FramerAnimatePresence
} from "framer-motion";

export const motion = framerMotion;
export const AnimatePresence = FramerAnimatePresence;