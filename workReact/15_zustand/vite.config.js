import { defineConfig } from "vite";
// defineConfig는 vite에서 내보낸 함수. 프로젝트 설정 객체를 정의하는데 사용된다.
import react from "@vitejs/plugin-react";

// Vite 설정 객체를 정의하고, 모듈의 기본 내보내기로 내보내기
export default defineConfig({
  plugins: [react()],
  resolve: {
    //resolve는 Vite가 모듈 가져오기 및 프로젝트 내비게이션을 위한 별칭을 어떻게 처리하는지 구성하는데 사용된다.
    alias: [
      // 프로젝트 내 짧은 경로를 긴 경로에 매핑하는 별칭 목록 정의.
      { find: "@", replacement: "/src" },
      { find: "@components", replacement: "/src/components" },
      { find: "@pages", replacement: "/src/pages" },
      { find: "@hooks", replacement: "/src/hooks" },
      { find: "@zustand", replacement: "/src/zustand" },
    ],
  },
});
