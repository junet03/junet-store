---
id: sustainable-vibe-code
translationId: sustainable-vibe-code
locale: vi
slug: vibe-coding-ben-vung-cho-du-an-ma-nguon-mo
title: Vibe coding bền vững cho dự án MQL5 mã nguồn mở
summary: Giữ tốc độ sáng tạo của AI nhưng thêm spec, thay đổi nhỏ, impact review, test và nhật ký để dự án vẫn hiểu được sau nhiều tháng nâng cấp.
publishedAt: "2026-08-02"
updatedAt: "2026-08-02"
category: Vibe code
tags:
  - Vibe coding
  - Open source
  - Spec-driven
featured: false
seoTitle: Vibe coding bền vững cho MQL5 và mã nguồn mở
seoDescription: Một nhịp làm việc giữ tốc độ AI nhưng dùng spec, graph impact, test, ADR và nhật ký nối đuôi để dự án MQL5 còn bảo trì được.
---

Vibe coding tốt nhất khi nó mở rộng khả năng thử nghiệm, không phải khi nó xóa trí nhớ
của dự án. Một thay đổi chạy được hôm nay nhưng không ai giải thích được sau ba tháng là
món nợ, không phải tốc độ.

## 1. Viết ý định trước code

Một spec ngắn cần trả lời: ai cần gì, hành vi thành công là gì, điều gì nằm ngoài phạm
vi và bằng chứng nào sẽ chứng minh hoàn thành. Với thay đổi kiến trúc hoặc bảo mật, ghi
ADR để người sau biết cả phương án đã từ chối.

## 2. Giữ patch nhỏ và có ranh giới

Yêu cầu AI nêu file dự định chạm, contract cần giữ và test cần chạy. Nếu câu trả lời kéo
theo nhiều abstraction mới, hãy hỏi vấn đề nào thật sự cần chúng.

## 3. Dùng graph để tìm blast radius

CodeGraph hoặc GitNexus giúp mở rộng danh sách cần kiểm tra: caller, callee, include,
process và route liên quan. Graphify nối thêm code với docs và quyết định. Những graph
này là bản đồ; source, test và runtime vẫn là địa hình thật.

## 4. Chứng minh bằng nhiều lớp

- lint và typecheck bắt lỗi cơ học;
- test xác minh contract đã biết;
- build chứng minh artifact có thể tạo;
- compiler/runtime evidence xác minh lane MQL5;
- browser hoặc HTTP probe xác minh sản phẩm người dùng thật sự nhận được.

Không thay “test xanh” bằng câu “agent nói đã xong”.

## 5. Ghi nhật ký nối đuôi

Mỗi milestone nên ghi mục tiêu, spec/ADR, thay đổi, bằng chứng, commit, rủi ro và bước
tiếp theo. Khi phát hiện ghi chép cũ sai, thêm correction mới; đừng sửa lịch sử để nó
trông sạch hơn thực tế.

## 6. Chia sẻ có trách nhiệm

Open source không chỉ là đẩy code. Cần README dùng được, license rõ, hướng dẫn đóng góp,
security channel và lời cảm ơn. Đừng quảng bá số người dùng, độ chính xác hay hiệu năng
khi chưa có số đo.

Vibe là năng lượng khởi đầu. Spec, graph, test và nhật ký biến năng lượng đó thành một
dự án cộng đồng có thể tiếp tục sống.
