---
id: codegraph-evidence
translationId: codegraph-evidence
locale: vi
slug: mql5-codegraph-la-gi-ai-can-do-thi-bang-chung
title: MQL5 CodeGraph là gì và vì sao AI cần đồ thị có bằng chứng?
summary: AI đọc được nhiều dòng code nhưng dễ mất phương hướng. Code graph giúp nối symbol, lời gọi và event handler với nguồn bằng chứng rõ ràng.
publishedAt: "2026-08-02"
updatedAt: "2026-08-02"
category: AI × MQL5
tags:
  - MQL5
  - CodeGraph
  - AI agents
featured: true
seoTitle: "MQL5 CodeGraph: đồ thị bằng chứng cho AI và MQL5"
seoDescription: Hiểu cách MQL5 CodeGraph biến repository MQL5 thành đồ thị có nguồn bằng chứng để AI truy vết kiến trúc, context và impact trung thực hơn.
---

Một AI agent có thể đọc nhanh vài tệp MQL5. Khó khăn bắt đầu khi repository có nhiều
include, class, event handler và lời gọi chéo: context quan trọng dễ bị cắt rời, còn một
suy luận hợp lý rất dễ bị kể lại như sự thật.

MQL5 CodeGraph giải quyết phần định hướng này bằng một snapshot đồ thị tĩnh. Nó đọc
`.mq5` và `.mqh`, ghi nhận declaration, include, lời gọi và các quan hệ runtime chuẩn
của MetaTrader. Mỗi quan hệ giữ lại loại, hướng, nguồn và vị trí để người đọc biết vì
sao nó xuất hiện.

## Bốn câu hỏi một graph tốt phải trả lời

- Symbol này được khai báo ở đâu và ai đang gọi nó?
- Từ `OnTick` có đường đi nào đến logic quản trị rủi ro?
- Nếu đổi một hàm dùng chung, module nào có thể bị ảnh hưởng?
- Kết quả nào lấy trực tiếp từ source và kết quả nào chỉ là suy luận?

Điểm cuối cùng quan trọng nhất. “Có đường nối” không có nghĩa là code chắc chắn chạy
theo đường đó trong terminal. Static analysis cũng không thay thế MetaEditor, backtest
hay quan sát runtime.

## Intelligence Kernel và các bề mặt sử dụng

Snapshot chuẩn được diễn giải qua Intelligence Kernel. CLI, dashboard local và MCP
chỉ là các bề mặt trình bày chung một ý nghĩa query, context, impact và đường đi có
hướng. Nhờ vậy, agent và người vận hành có thể đối chiếu kết quả thay vì tin một câu
trả lời không có dấu vết.

## Giới hạn cần nói thẳng

Tokenizer chịu lỗi không phải compiler MQL5 hoàn chỉnh. Macro phức tạp, dynamic
dispatch, tên sinh ở runtime hoặc source chưa đầy đủ có thể tạo kết quả một phần.
Diagnostics là một phần của kết quả, không phải phần cần giấu đi.

MQL5 CodeGraph phù hợp nhất với repository local đáng tin cậy và vòng lặp một người
dùng. Nó không chứng minh EA an toàn, đúng chiến lược hay có lợi nhuận.

Nếu chấp nhận ranh giới đó, code graph trở thành một chiếc bản đồ rất thực dụng: không
lái thay người phát triển, nhưng giúp cả người và AI biết mình đang đứng ở đâu.
