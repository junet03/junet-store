---
id: ai-mql5-review
translationId: ai-mql5-review
locale: vi
slug: ai-doc-kien-truc-va-review-code-mql5
title: Dùng AI đọc kiến trúc, truy vết impact và review code MQL5
summary: Một workflow thực dụng giúp AI bắt đầu từ entry point, thu thập context có giới hạn, kiểm tra blast radius và tách static evidence khỏi compile/runtime truth.
publishedAt: "2026-08-02"
updatedAt: "2026-08-02"
category: Quy trình
tags:
  - Review
  - Impact
  - MQL5
featured: false
seoTitle: Workflow AI review kiến trúc và impact code MQL5
seoDescription: Quy trình dùng code graph để AI đọc entry point, context và blast radius MQL5 trước khi sửa, rồi xác minh bằng compiler và runtime evidence.
---

Review bằng AI thường thất bại không phải vì model thiếu cú pháp, mà vì câu hỏi bắt đầu
quá rộng. “Đọc toàn bộ EA rồi tối ưu” khiến context đầy nhanh và khó phân biệt phần đã
đọc với phần đang suy luận.

## 1. Bắt đầu từ một hành vi

Chọn entry point như `OnInit`, `OnTick`, `OnTradeTransaction` hoặc một hàm risk cụ thể.
Ghi câu hỏi có thể kiểm chứng: “Những caller nào có thể thay đổi lot size trước khi gửi
lệnh?” tốt hơn “Risk management hoạt động thế nào?”.

## 2. Lấy context có giới hạn

Dùng query để xác định symbol, sau đó lấy caller, callee, include và một context package
có ngân sách. Nếu có nhiều symbol trùng tên, giữ ambiguity thay vì chọn đại kết quả đầu.

## 3. Xem impact trước khi sửa

Impact graph cho biết upstream caller, downstream dependency và đường đi có hướng có
thể liên quan. Đây là danh sách cần kiểm tra, không phải khẳng định mọi node đều chạy
trong terminal.

Trước thay đổi, agent nên viết:

- symbol và file dự định chạm;
- hành vi cần giữ;
- callers/callees quan trọng;
- diagnostics hoặc ambiguity còn lại;
- test và compile evidence cần thu thập.

## 4. Thực hiện thay đổi nhỏ nhất

Sửa một nguyên nhân gốc, giữ contract hiện có và tránh refactor khu vực không liên quan.
Sau thay đổi, tạo snapshot mới; graph cũ không tự biết source đã đổi.

## 5. Phân lớp bằng chứng

Static graph chứng minh cấu trúc mà analyzer quan sát. MetaEditor log chứng minh compiler
đã xử lý một entry và source state nhất định. Backtest, forward test và log terminal mới
đưa thêm runtime evidence. Không lớp nào nên giả làm lớp còn lại.

## Checklist review ngắn

1. Câu hỏi có entry point và hành vi cụ thể không?
2. Source location và evidence origin đã được dẫn lại chưa?
3. Impact có được kiểm tra trên cả caller lẫn dependency không?
4. Snapshot có đúng revision source hiện tại không?
5. Compile/test/runtime nào còn chưa chạy?

AI trở nên hữu ích nhất khi nó biết nói “chưa đủ bằng chứng” đúng lúc.
