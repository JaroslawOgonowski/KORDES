import React, { useEffect, useState, useCallback, useRef } from "react";
import styled, { css } from "styled-components";

export default function GoToTopButton({
  showAt = 200,
  smooth = true,
  size = 48,
  bottom = "1.25rem",
  right = "1.25rem",
  ariaLabel = "Scroll to top",
  icon,
  zIndex = 999,
  shape = "circle",
  className,
}) {
  const [visible, setVisible] = useState(false);
  const ticking = useRef(false);

  // Determine if we should prefer reduced motion
  const prefersReducedMotion = usePrefersReducedMotion();

  const onScroll = useCallback(() => {
    if (!ticking.current) {
      window.requestAnimationFrame(() => {
        const y = window.scrollY || window.pageYOffset;
        setVisible(y >= showAt);
        ticking.current = false;
      });
      ticking.current = true;
    }
  }, [showAt]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  const handleClick = useCallback(() => {
    if (typeof window === "undefined") return;

    const behavior = smooth && !prefersReducedMotion ? "smooth" : "auto";
    window.scrollTo({ top: 0, left: 0, behavior });
  }, [smooth, prefersReducedMotion]);

  return (
    <Wrapper
      className={className}
      $visible={visible}
      $size={size}
      $bottom={bottom}
      $right={right}
      $zIndex={zIndex}
      $shape={shape}
      aria-label={ariaLabel}
      title={ariaLabel}
      onClick={handleClick}
    >
      {icon ?? <DefaultIcon aria-hidden="true" />}
      <VisuallyHidden>Go to top</VisuallyHidden>
    </Wrapper>
  );
}

/** Styled Components **/

const shapes = {
  circle: css`
    border-radius: 9999px;
  `,
  rounded: css`
    border-radius: 12px;
  `,
  square: css`
    border-radius: 6px;
  `,
};

const Wrapper = styled.button`
  position: fixed;
  inset: auto ${(p) => p.$right} ${(p) => p.$bottom} auto;
  width: ${(p) => p.$size}px;
  height: ${(p) => p.$size}px;
  display: grid;
  place-items: center;
  background: #111827; /* neutral-900 */
  color: #ffffff;
  border: none;
  box-shadow: 0 10px 15px rgba(0,0,0,0.15), 0 4px 6px rgba(0,0,0,0.1);
  cursor: pointer;
  z-index: ${(p) => p.$zIndex};
  opacity: ${(p) => (p.$visible ? 1 : 0)};
  transform: translateY(${(p) => (p.$visible ? 0 : 8)}px) scale(${(p) => (p.$visible ? 1 : 0.95)});
  pointer-events: ${(p) => (p.$visible ? "auto" : "none")};
  transition: opacity 180ms ease, transform 220ms ease, box-shadow 160ms ease;

  ${(p) => shapes[p.$shape]};

  &:hover {
    box-shadow: 0 14px 24px rgba(0,0,0,0.18), 0 6px 10px rgba(0,0,0,0.12);
    transform: translateY(-1px) scale(1.02);
  }

  &:active {
    transform: translateY(0) scale(0.98);
  }

  &:focus-visible {
    outline: 3px solid #60a5fa; /* sky-400 */
    outline-offset: 2px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    transform: none;
  }
`;

const DefaultIcon = (props) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <polyline points="18 15 12 9 6 15" />
  </svg>
);

const VisuallyHidden = styled.span`
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
  white-space: nowrap;
`;

/** Hook: prefers-reduced-motion **/
function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined" || typeof window.matchMedia !== "function") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(!!mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);
  return reduced;
}
