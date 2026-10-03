"use client";
import {ReactLenis} from "lenis/react";import {MotionConfig,useReducedMotion} from "motion/react";import type{ReactNode}from"react";
export function Providers({children}:{children:ReactNode}){const reduce=useReducedMotion();return <MotionConfig reducedMotion="user">{reduce?children:<ReactLenis root options={{lerp:.1,smoothWheel:true}}>{children}</ReactLenis>}</MotionConfig>}
