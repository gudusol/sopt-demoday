"use client";

import { useEffect } from "react";

export default function ScrollRestoration() {
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual"; // 자동 스크롤 복원을 방지
    }
  }, []);

  return null; // UI 요소를 렌더링하지 않음
}
