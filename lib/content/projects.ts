import type { Locale } from "../i18n";

export const INSTALL_COMMAND =
  'python -m pip install "mql5-codegraph[reference,mcp] @ https://github.com/junet03/mql5-codegraph/releases/download/v0.3.0/mql5_codegraph-0.3.0-py3-none-any.whl"';

export const PROJECT_LINKS = {
  repository: "https://github.com/junet03/mql5-codegraph",
  release: "https://github.com/junet03/mql5-codegraph/releases/tag/v0.3.0",
  docs: "https://github.com/junet03/mql5-codegraph#readme",
  discussions: "https://github.com/junet03/mql5-codegraph/discussions",
  issues: "https://github.com/junet03/mql5-codegraph/issues",
  contributing: "https://github.com/junet03/mql5-codegraph/blob/main/CONTRIBUTING.md",
  security: "https://github.com/junet03/mql5-codegraph/security/advisories/new",
  contributors: "https://github.com/junet03/mql5-codegraph/graphs/contributors",
  telegram: "https://t.me/interestaimql5",
} as const;

export type Project = {
  id: "mql5-codegraph";
  status: "public-beta";
  license: "MIT";
  release: "v0.3.0";
  python: "3.11+";
  image: string;
  links: typeof PROJECT_LINKS;
  localized: Record<
    Locale,
    {
      name: string;
      summary: string;
      description: string;
      capabilities: string[];
      boundaries: string[];
    }
  >;
};

export const MQL5_CODEGRAPH: Project = {
  id: "mql5-codegraph",
  status: "public-beta",
  license: "MIT",
  release: "v0.3.0",
  python: "3.11+",
  image: "/mql5-codegraph-hero.webp",
  links: PROJECT_LINKS,
  localized: {
    vi: {
      name: "MQL5 CodeGraph",
      summary:
        "Đồ thị mã nguồn tĩnh có bằng chứng cho repository MQL5 — local, xác định và sẵn sàng cho CLI, dashboard cùng AI agents.",
      description:
        "MQL5 CodeGraph đọc tệp .mq5 và .mqh trong repository được người vận hành tin cậy, trích xuất cấu trúc và quan hệ, rồi tạo snapshot JSON có thể truy vấn. Nguồn bằng chứng luôn được giữ rõ để agent không biến suy luận thành sự thật.",
      capabilities: [
        "Trích xuất include, class, struct, enum, hàm, method, event handler và lời gọi.",
        "Truy vấn symbol, context, impact, đường đi có hướng và xuất GraphML.",
        "Dashboard loopback để tìm kiếm, điều hướng graph và xem bằng chứng mã nguồn.",
        "MCP local thử nghiệm với 13 công cụ read-only và năm workflow skills cho Codex.",
      ],
      boundaries: [
        "Dành cho repository local đáng tin cậy và vòng lặp một người dùng.",
        "Không phải compiler MetaEditor, sandbox bảo mật hay bằng chứng runtime/giao dịch.",
        "Snapshot MCP nằm trong RAM và phải index lại sau khi source đổi hoặc process khởi động lại.",
        "Graphify là lớp tùy chọn; xử lý remote chỉ xảy ra khi người vận hành cho phép rõ ràng.",
      ],
    },
    en: {
      name: "MQL5 CodeGraph",
      summary:
        "Evidence-backed static code-graph intelligence for MQL5 repositories — local, deterministic, and usable from a CLI, dashboard, or AI agent.",
      description:
        "MQL5 CodeGraph reads .mq5 and .mqh files in an operator-trusted repository, extracts structure and relationships, and produces a queryable JSON snapshot. Evidence origins stay explicit so an agent cannot quietly promote inference into fact.",
      capabilities: [
        "Extract includes, classes, structs, enums, functions, methods, event handlers, and calls.",
        "Query symbols, context, impact, directed paths, and GraphML exports.",
        "Use a loopback dashboard for search, graph navigation, and source evidence.",
        "Connect an experimental local MCP surface with 13 read-only tools and five Codex workflow skills.",
      ],
      boundaries: [
        "Designed for trusted local repositories and a single-user workflow.",
        "Not a MetaEditor compiler, security sandbox, or proof of runtime/trading behavior.",
        "MCP snapshots live in RAM and require re-indexing after source changes or process restart.",
        "Graphify is optional; remote processing occurs only with explicit operator authorization.",
      ],
    },
  },
};
