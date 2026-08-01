---
id: connect-ai-agents
translationId: connect-ai-agents
locale: vi
slug: ket-noi-mql5-codegraph-mcp-voi-ai-agents
title: Kết nối MQL5 CodeGraph MCP với Codex và các AI agents
summary: Cách hiểu đúng vai trò của MCP local, đăng ký mql5-codegraph-mcp cho từng client, chọn project root riêng và duy trì snapshot RAM trung thực.
publishedAt: "2026-08-02"
updatedAt: "2026-08-02"
category: AI agents
tags:
  - MCP
  - Codex
  - AI agents
featured: true
seoTitle: Kết nối mql5-codegraph-mcp với Codex và AI agents
seoDescription: Thiết lập MCP local cho Codex, Cursor, Claude Code hoặc Antigravity và tránh nhầm URL GitHub với một cài đặt đã hoàn tất.
---

MCP giúp agent gọi công cụ phân tích bằng một contract rõ thay vì tự đoán command và
đọc JSON tùy ý. Nhưng một GitHub URL không tự động biến mọi agent thành môi trường local
đã sẵn sàng.

## Điều kiện tối thiểu

Client cần có terminal và filesystem local, Internet để cài wheel, Python 3.11+, quyền
cài package và khả năng đăng ký stdio MCP server. Sau khi cài v0.3.0, executable cần
trỏ tới là:

```text
mql5-codegraph-mcp
```

Cursor, Claude Code và Antigravity có định dạng cấu hình MCP riêng. Hãy dùng tài liệu
hiện hành của client để đăng ký executable này; không copy mù một file config giữa các
ứng dụng.

## Quy trình cho một phiên làm việc

1. Khởi động một task mới trong repository MQL5 thực tế.
2. Gọi `project_status` để biết server đã có snapshot hay chưa.
3. Chỉ index một project root local được người vận hành chọn và tin cậy.
4. Dùng query, architecture, context hoặc impact trước khi đề xuất sửa code.
5. Re-index sau khi source thay đổi hoặc MCP process khởi động lại.

Plugin Codex thử nghiệm trong repository cung cấp năm workflow skills và 13 MCP tools
read-only. “Read-only” chỉ mô tả bề mặt công cụ này; một agent còn có shell hay editor
vẫn có thể sửa file bằng công cụ khác.

## Khi gặp Transport closed

Snapshot nằm trong RAM của MCP process. Nếu transport chết, server cũ không thể tự hồi
sinh bên trong client. Hãy reload hoặc mở task mới, gọi lại `project_status`, rồi index
lại project đã được chọn.

## Reference corpus là một lane riêng

Tài liệu PDF do người vận hành sở hữu được build và attach riêng. Corpus giữ page
citation, nhưng không tải hay phân phối PDF thay người dùng. Graphify overlay là tùy
chọn discovery; suy luận của overlay không trở thành citation chuẩn.

Một setup tốt không hứa “dán link là chạy”. Nó chỉ rõ prerequisite, xác minh MCP thật,
và luôn hỏi project MQL5 nào được phép phân tích.
