"use client"

import { useEffect, useState, useRef, useCallback } from "react"

export default function MouseCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const cursorRef = useRef(null)
  const requestRef = useRef(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  

  
  const updateCursorPosition = useCallback(() => {
    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate3d(${mouseRef.current.x - 6}px, ${mouseRef.current.y - 6}px, 0)`
    }
    requestRef.current = requestAnimationFrame(updateCursorPosition)
  }, [])

  useEffect(() => {
    let isMoving = false

    const updateMousePosition = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }

      if (!isMoving) {
        isMoving = true
        requestAnimationFrame(() => {
          setMousePosition({ x: e.clientX, y: e.clientY })
          isMoving = false
        })
      }
    }

    const handleMouseEnter = (e) => {
      const target = e.target
      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest('[role="button"]') ||
        target.closest(".cursor-pointer") ||
        target.tagName === "A" ||
        target.tagName === "BUTTON"
      ) {
        setIsHovering(true)
      }
    }

    const handleMouseLeave = (e) => {
      const target = e.target
      const relatedTarget = e.relatedTarget

      if (
        !relatedTarget ||
        (!relatedTarget.closest("a") &&
          !relatedTarget.closest("button") &&
          !relatedTarget.closest('[role="button"]') &&
          !relatedTarget.closest(".cursor-pointer") &&
          relatedTarget.tagName !== "A" &&
          relatedTarget.tagName !== "BUTTON")
      ) {
        setIsHovering(false)
      }
    }

   
    requestRef.current = requestAnimationFrame(updateCursorPosition)

    
    document.addEventListener("mousemove", updateMousePosition, { passive: true })
    document.addEventListener("mouseover", handleMouseEnter, { passive: true })
    document.addEventListener("mouseout", handleMouseLeave, { passive: true })

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current)
      }
      document.removeEventListener("mousemove", updateMousePosition)
      document.removeEventListener("mouseover", handleMouseEnter)
      document.removeEventListener("mouseout", handleMouseLeave)
    }
  }, [updateCursorPosition])

  return (
    <div
  ref={cursorRef}
  className={`fixed pointer-events-none z-[100000] transition-transform duration-100 ease-out ${
    isHovering ? "scale-150" : "scale-100"
  }`}
  style={{
    left: 0,
    top: 0,
    willChange: "transform",
  }}
>
  <div className="w-3 h-3 bg-blue-400 rounded-full shadow-lg"></div>
</div>

  )
}
