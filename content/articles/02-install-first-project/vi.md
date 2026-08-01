---
id: install-first-project
translationId: install-first-project
locale: vi
slug: cai-mql5-codegraph-va-phan-tich-du-an-dau-tien
title: Cài MQL5 CodeGraph v0.3.0 và phân tích dự án đầu tiên
summary: Hướng dẫn Windows từ Python 3.11+, cài wheel public, chọn repository MQL5 đáng tin cậy đến snapshot JSON đầu tiên và cách kiểm tra kết quả.
publishedAt: "2026-08-02"
updatedAt: "2026-08-02"
category: Hướng dẫn
tags:
  - Cài đặt
  - Windows
  - MQL5 CodeGraph
featured: true
seoTitle: Cài MQL5 CodeGraph v0.3.0 trên Windows
seoDescription: Cài wheel MQL5 CodeGraph v0.3.0, xác minh CLI và tạo snapshot phân tích đầu tiên từ một repository MQL5 local đáng tin cậy.
---

V0.3.0 là public beta dành cho Python 3.11 trở lên. Core analyzer không yêu cầu tài
khoản cloud hay model API key.

## 1. Cài public wheel

Mở PowerShell và chạy:

```powershell
python -m pip install "mql5-codegraph[reference,mcp] @ https://github.com/junet03/mql5-codegraph/releases/download/v0.3.0/mql5_codegraph-0.3.0-py3-none-any.whl"
```

Sau đó xác minh entry point:

```powershell
mql5-codegraph --help
mql5-codegraph-mcp
```

Lệnh thứ hai khởi động stdio server cho một MCP client; nó không phải ứng dụng tương
tác để gõ lệnh trực tiếp. Có thể dừng bằng `Ctrl+C` sau khi xác minh process khởi động.

## 2. Chọn đúng project root

Hãy chọn repository chứa EA, indicator hoặc library MQL5 mà bạn tin cậy. Đừng dùng
chính repository công cụ `mql5-codegraph` làm project mục tiêu. Không phân tích source
không tin cậy chỉ vì nó có URL công khai.

Ví dụ tạo snapshot:

```powershell
mql5-codegraph analyze C:\work\Example-MQL5 --output build/example.codegraph.json --max-work 2000000 --json
```

`--max-work` là ngân sách phân tích có giới hạn. Khi hết ngân sách, công cụ báo phase
và counters thay vì xuất một graph dở dang như thể đã hoàn chỉnh.

## 3. Đọc snapshot trước khi hỏi AI

Bắt đầu bằng status và một symbol bạn biết:

```powershell
mql5-codegraph status build/example.codegraph.json --json
mql5-codegraph intelligence query build/example.codegraph.json OnTick --json
mql5-codegraph intelligence context-package build/example.codegraph.json OnTick --context-units 40 --json
```

Luôn đọc diagnostics và evidence origin. Vị trí đã lưu là tham chiếu tại thời điểm
phân tích; nếu source đổi, hãy tạo snapshot mới.

## 4. Bước xác minh còn thiếu

Static graph không chứng minh code compile. Hãy chạy quy trình MetaEditor của dự án,
giữ compile log, test và backtest riêng. CodeGraph giúp định hướng và liên kết bằng
chứng; quyết định phát hành vẫn cần compiler và runtime evidence.
