import React, { useState, useEffect } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { Alert, Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../stylesheet/OCR.css'
import MultiLevelNavbar from '../components/Navbar.js';
import jsPDF from 'jspdf'; 

const genAI = new GoogleGenerativeAI("AIzaSyBFQPRDlpG9bXs3-_To8j8M2X9FnEDLe4E");

const ethnicData = {
  ethnicities: ["Êđê", "Khmer", "Thái", "H'Mông", "Hrê", "Co"],
  metadata: {
    "Êđê": {
      alphabet: ["A, Ă, Â, B, C, Ƀ, Č, D, Đ, E, Ê, Ĕ, Ê̆, G, H, I, Ĭ, J, K, L, M, N, Ñ, O, Ô, Ŏ, Ơ, Ơ̆, P, R, S, T, U, Ŭ, Ư, Ư̆, W, Y, a, â, ă, b, ƀ, č, d, đ, e, ê, ê̆, g, h, i, ĭ, j, k , l, m, n, ñ, o, ô, ŏ, ô̆, ơ, ơ̆, p, r, s, t, u, ŭ, ư, ư̆, w, y"],
      examples: ["Mlŏng gŭ, anăn mlŏng gŭ, anăn mlŏng gŭ! Mlŏng gŭ, anăn mlŏng gŭ, anăn mlŏng gŭ! Mlŏng gŭ, anăn mlŏng gŭ, anăn mlŏng gŭ! Bản dịch (Trái tim tôi, ôi trái tim tôi, ôi trái tim tôi! Trái tim tôi, ôi trái tim tôi, ôi trái tim tôi! Trái tim tôi, ôi trái tim tôi, ôi trái tim tôi!)"],
      font: "Inter",
    },
    "Khmer": {
      alphabet: ["ក, ខ, គ, ឃ, ង, ច, ឆ, ជ, ឈ, ញ, ដ, ឋ, ឌ, ឍ, ណ, ត, ថ, ទ, ធ, ន, ប, ផ, ព, ភ, ម, យ, រ, ល, វ, ស, ហ, ឡ, អ, អ, អា, ឥ, ឦ, ឧ, ឩ, ឪ, ឳ, ឨ, ឰ, ឱ, ឲ, ឬ, ឮ, ឯ, ឤ, ឭ"],
      examples: "ក្នុងឋានៈជាសមាជិកនៃសង្គម មនុស្សគ្រប់រូប មានសិទ្ធិទទួលបានសន្ដិសុខសង្គម និងមានបុព្វ សិទ្ធិសម្រេចបានសិទ្ធិខាងសេដ្ឋកិច្ច សង្គមកិច្ច និងវប្បធម៌ ដែលចាំបាច់សម្រាប់សេចក្ដីថ្លៃថ្នូរ និងការ រីកចំរើនដោយសេរីនៃបុគ្គលិកលក្ខណៈរបស់ខ្លួន តាមរយៈការខិតខំរបស់ជាតិ និងសហប្រតិបត្ដិការអន្ដរ ជាតិ និងដោយយោងទៅតាមការរៀបចំ និងធនធានរបស់ប្រទេសនីមួយៗ។ មនុស្សគ្រប់រូប មានសិទ្ធិឈប់សម្រាក និងលំហែកំសាន្ដ រួមបញ្ចូលទាំងកម្រិតម៉ោងការងារ សមហេតុផល និងការឈប់សម្រាក ដោយបានប្រាក់បៀវត្សតាមពេលកំណត់ទៀងទាត់។ មនុស្សគ្រប់រូប មានសិទ្ធិទទួលបាននូវសណ្ដាប់ធ្នាប់សង្គមនិងអន្ដរជាតិ ដែលធ្វើឱ្យសិទ្ធិ និង សេរីភាព ចែងក្នុងសេចក្ដីប្រកាសនេះ អាចសម្រេចបានដោយពេញលេញ។ គ្មានបទបញ្ញត្ដិណាមួយនៃសេចក្ដីប្រកាសនេះ អាចត្រូវបានបកស្រាយ តម្រូវថា រដ្ឋណាមួយ ក្រុមណាមួយ ឬបុគ្គលណាម្នាក់ មានសិទ្ធិបែបណាមួយ ក្នុងការធ្វើសកម្មភាព ឬការប្រព្រឹត្ដអំពើអ្វ្វីមួយ ដែលសំដៅទៅបំផ្លិចបំផ្លាញនូវសិទ្ធិ និងសេរីភាពទាំងឡាយ ដែលមានចែងនៅក្នុងសេចក្ដីប្រកាសនេះ ឡើយ។",
      font: "Khmer",
    },
    "Thái": {
      font: "Noto Sans Tai Viet",
    },
    "H'Mông": {
      alphabet: ["nh, n, m, ml, p, pl, t, đ, b, bl, nt, hnh, hn, hm, hml, ph, fl, th, đh, mf, mfl, nth, v,	x,	s,	j,	z,	sh,	h, i,	ê,	a,	o, ao,	u,	ư,	ênh,	ang,	ông,	ai,	ơư,	âu,	iê,	uô"],
      examples: "Tiamsis, kev khaws cia peb haiv neeg txoj kev coj noj coj ua yog ib qho tseem ceeb heev. Nws pab peb kom peb txawj ntse txog peb keeb kwm, kab lis kev cai, thiab lus Hmoob, uas yog peb cov cuab yeej muaj nqis. Yog peb tsis khaws cia thiab txhawb nqa, tej no yuav ploj mus, thiab peb cov tub ntxhais yuav tsis paub txog lawv cov cag. Yog li ntawd, peb yuav tsum sib zog ua ke kom peb haiv neeg txoj kev coj noj coj ua nyob ruaj khov mus ib txhis. Bản phiên dịch: (Tuy nhiên, việc bảo tồn văn hóa dân tộc của chúng ta rất quan trọng. Nó giúp chúng ta hiểu biết về lịch sử, văn hóa, và ngôn ngữ H'Mông — những giá trị quý báu của dân tộc. Nếu chúng ta không gìn giữ và phát huy, những điều này có thể mai một, và thế hệ trẻ sẽ không biết về cội nguồn của mình. Vì vậy, chúng ta cần đoàn kết cùng nhau để bảo tồn và giữ gìn văn hóa dân tộc mãi mãi.)",
      font: "Inter",
    },
    "Hrê": {
      alphabet: ["a, à, â, b, 'b, c, d, đ, e, è, ê, f, g, h, i, ì, j, k, l, m,' m, n, ' n, o, ò, ô, ŏ, p, q, r, 'r, s, t, u, ù, v, w,' w, x, y, 'y, z"],
      examples: "Nghĩa kơu Hrê, nglôih kơu Hrê, mưng tơlaih kơu Hrê, mưng chơlaih kơu Hrê, mưng tơlaih kơu Hrê. bản dịch: (Người Hrê chúng ta, tiếng nói của người Hrê, văn hóa của người Hrê, phong tục của người Hrê, truyền thống của người Hrê.)",
      font: "Inter",
    },
    "Co": {
      alphabet: ["a, á, â, ă, b, 'b, c, d, đ, e, é, è, ê, f, g, h, i, ì, j, k, l, m,' m, n, ' n, o, ò, ô, ŏ, p, q, r, 'r, s, t, u, ù, v, w,' w, x, y, 'y, z"],
      examples: "Al đhi mnih Duat lang mnih Kool? Kool e al?. Bản dịch (Anh cũng là người Co đúng không?)",
      font: "Inter",
    }
  }
};

const semanticRouter = {
  validateLanguage: async (image, selectedEthnic, metadata) => {
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });
      // Prompt để kiểm tra ngôn ngữ và nội dung
      const prompt = `
        Phân tích hình ảnh này và xác định:
        1. Văn bản này có phải là ngôn ngữ ${selectedEthnic} không? Chỉ trả lời CÓ hoặc KHÔNG.
        2. Nội dung có chứa yếu tố nhạy cảm hoặc không phù hợp không? Chỉ trả lời CÓ hoặc KHÔNG.
        3. Nội dung có chính xác về mặt lịch sử và tôn trọng văn hóa ${selectedEthnic} không? Chỉ trả lời CÓ hoặc KHÔNG.
        
        Hãy định dạng câu trả lời chính xác như sau:
        LANGUAGE_MATCH: CÓ/KHÔNG
        SENSITIVE_CONTENT: CÓ/KHÔNG
        CULTURALLY_APPROPRIATE: CÓ/KHÔNG
      `;

      const result = await model.generateContent([
        {
          inlineData: {
            data: image,
            mimeType: "image/jpeg"
          }
        },
        prompt
      ]);

      const response = result.response.text();
      const lines = response.split('\n');
      
      return {
        languageMatch: lines[0].includes('CÓ'),
        hasSensitiveContent: lines[1].includes('CÓ'),
        isCulturallyAppropriate: lines[2].includes('CÓ')
      };
    } catch (error) {
      console.error('Lỗi semantic routing:', error);
      throw new Error('Không thể xác thực ngôn ngữ và nội dung');
    }
  }
};

function cleanupText(str) {
  if (!str) return "";
  // Xóa dấu ** (Markdown bold)
  str = str.replace(/\*\*/g, "");
  // Xóa chuỗi "VĂN BẢN GỐC ĐƯỢC TRÍCH XUẤT:"
  str = str.replace(/VĂN BẢN GỐC ĐƯỢC TRÍCH XUẤT:/gi, "");
  // Xóa chuỗi "PHIÊN ÂM:"
  str = str.replace(/PHIÊN ÂM:/gi, "");
  // Xóa chuỗi "GIẢI THÍCH:"
  str = str.replace(/GIẢI THÍCH:/gi, "");
  // Có thể thêm các .replace(...) khác nếu cần loại bỏ cụm khác
  return str.trim();
}

// Hàm tạo prompt cho Gemini (lấy từ GeminiOCR.js)
const generatePrompt = (ethnicName) => {
  const metadata = ethnicData.metadata[ethnicName] || {};
  const mockLocation = metadata.locations ? metadata.locations[0] : '';
  const mockDocType = metadata.document_types ? metadata.document_types[0] : '';

  const basePrompt = `
Bạn là chuyên gia ngôn ngữ dân tộc thiểu số Việt Nam, với kiến thức sâu rộng về lịch sử, văn hóa và các đặc trưng ngôn ngữ của từng cộng đồng.
Nhiệm vụ của bạn là trích xuất và giải mã văn bản từ hình ảnh được cung cấp, tập trung chủ yếu vào các ký tự và từ ngữ thuộc nhóm ngôn ngữ ${ethnicName}.

Hướng dẫn cụ thể:

1. Nhận dạng chuyên sâu:
   - Ưu tiên nhận dạng các font chữ cổ, nét viết tay đặc trưng và các dấu hiệu văn hóa đặc biệt của cộng đồng dân tộc này.
   - Sử dụng kiến thức nền tảng và dữ liệu văn hóa để tăng cường độ chính xác trong việc nhận diện ký tự.
   - LƯU Ý: Kiểm tra văn bản ảnh đầu vào có chứa từ ngữ nhạy cảm, chống phá, sai lệch lịch sử hoặc trái với văn hóa truyền thống không. Nếu có không phản hồi gì thêm.

2. Xử lý ký tự không rõ ràng:
   - Nếu gặp ký tự hoặc từ ngữ không rõ do chất lượng ảnh hoặc đặc điểm viết tay, hãy đề xuất 3 lựa chọn thay thế.
   - Các lựa chọn phải được căn cứ theo ngữ cảnh văn hóa (ví dụ: liên quan đến lễ hội, danh từ riêng đặc trưng, hay các yếu tố truyền thống khác).

3. Phiên âm và giải nghĩa:
   - Kèm theo mỗi ký tự hoặc cụm từ trích xuất, hãy cung cấp phiên âm tiếng Việt.
   - Giải nghĩa ngắn gọn để làm rõ ý nghĩa và bối cảnh sử dụng, đảm bảo tính trung thực với giá trị văn hóa của ngôn ngữ.

4. Quy trình từng bước (Step-by-Step):
   - Thực hiện quá trình trích xuất theo từng bước với khả năng kiểm tra và xác nhận giữa các giai đoạn.
    `;

  const cotPrompt = `
Bạn là chuyên gia ngôn ngữ dân tộc thiểu số Việt Nam, với kiến thức sâu rộng về lịch sử, văn hóa và các đặc trưng chữ viết của cộng đồng ${ethnicName}.
Hãy sử dụng quy trình Chain-of-thought sau để xử lý hình ảnh và trích xuất văn bản:

Bước 1: Mô tả chi tiết hình ảnh đầu vào:
- Mô tả màu sắc, độ phân giải của ảnh.
- Xác định vị trí xuất hiện của văn bản (ví dụ: góc trên, giữa, dưới,...).
- Ghi nhận các đặc điểm ảnh hưởng đến nhận dạng (ánh sáng, độ tương phản, chất lượng ảnh).

Bước 2: Liệt kê các ký tự/nghi ngờ thuộc ngôn ngữ ${ethnicName}:
- Trích xuất các ký tự có khả năng thuộc về ngôn ngữ dân tộc này.
- Đánh giá độ tin cậy của từng ký tự (theo tỷ lệ phần trăm, ví dụ: 85% tin cậy).

Bước 3: So sánh với cơ sở dữ liệu chữ viết ${ethnicName}:
- Đối chiếu các ký tự/nghi ngờ đã trích xuất với dữ liệu chuẩn.
- Loại trừ các phương án sai dựa trên kiến thức về chữ viết và văn hóa của ${ethnicName}.

Bước 4: Trả kết quả cuối cùng:
- Trình bày văn bản được nhận dạng chính xác nhất.
- Kèm theo lý do chi tiết: giải thích các bước so sánh, đánh giá độ tin cậy và loại trừ các phương án không phù hợp.

Lưu ý: Hãy sử dụng logic và phân tích chi tiết trong từng bước để đảm bảo kết quả phản ánh đúng giá trị văn hóa và đặc trưng ngôn ngữ của ${ethnicName}.
    `;

  let context = `Ảnh chụp tại làng người ${ethnicName}`;
  if (mockLocation) {
    context += `, ${mockLocation}`;
  }
  if (mockDocType) {
    context += ` - loại văn bản: ${mockDocType}`;
  }

  const dynamicContextPrompt = `
    Dựa vào bối cảnh: ${context}, hãy trích xuất văn bản từ hình ảnh và giải thích ý nghĩa văn hóa của nội dung đó.
    - Xác định và trích xuất các phần văn bản liên quan.
    - Phân tích và giải thích các yếu tố văn hóa xuất hiện trong văn bản.
    - Giải thích mối liên hệ giữa nội dung văn bản và bối cảnh được cung cấp.
    - Đảm bảo kết quả phản ánh đúng giá trị văn hóa và ý nghĩa lịch sử của tài liệu.
    `;

  let fewShotPrompt = '';

  if (ethnicName === 'Êđê' && metadata.keywords) {
    fewShotPrompt = `
        Gợi ý: Các từ khóa thường xuất hiện trong văn bản Êđê gồm ${metadata.alphabet.join(', ')}...
        Gợi ý: Các từ khóa thường xuất hiện trong văn bản Êđê gồm ${metadata.examples.join(', ')}...
      `;
  } else if (ethnicName === 'Khmer' && metadata.keywords) {
    fewShotPrompt = `
        Gợi ý: Chữ Khmer cổ thường có đặc điểm: ký tự có chấm tròn ở giữa, nét ngang dài, và các biểu tượng tôn giáo như ${metadata.alphabet.join(', ')}...
        Gợi ý: Chữ Khmer cổ thường có đặc điểm: ký tự có chấm tròn ở giữa, nét ngang dài, và các biểu tượng tôn giáo như ${metadata.examples.join(', ')}...
        Gợi ý: Chữ Khmer cổ thường có đặc điểm: ký tự có dấu phụ, các nét mảnh như ${metadata.font}...
      `;
  } else if (ethnicName === "H'Mông" && metadata.keywords) {
    fewShotPrompt = `
        Gợi ý: Văn bản H'Mông thường sử dụng chữ Latinh cải tiến (RPA) hoặc Pahawh Hmong, với các từ khóa như ${metadata.alphabet.join(', ')}. 
        Gợi ý: Văn bản H'Mông thường sử dụng chữ Latinh cải tiến (RPA) hoặc Pahawh Hmong, với các từ khóa như ${metadata.examples.join(', ')}. 
      `;
  } else if (ethnicName === 'Hrê' && metadata.keywords) {
    fewShotPrompt = `
        Gợi ý: Chữ Hrê dựa trên chữ cái latin ghép lại với nhau, thường gặp các ký tự như ${metadata.alphabet.join(', ')}.
        Gợi ý: Chữ Hrê dựa trên chữ cái latin ghép lại với nhau, thường gặp các ký tự như ${metadata.examples.join(', ')}.
      `;
  } else if (ethnicName === 'Co' && metadata.keywords) {
    fewShotPrompt = `
        Gợi ý: Chữ Hrê dựa trên chữ cái latin ghép lại với nhau, thường gặp các ký tự như ${metadata.alphabet.join(', ')}.
        Gợi ý: Chữ Hrê dựa trên chữ cái latin ghép lại với nhau, thường gặp các ký tự như ${metadata.examples.join(', ')}.
      `;
  } else if (ethnicName === 'Thái' && metadata.keywords) {
    fewShotPrompt = `
        Gợi ý: Chữ Thái dựa trên các nét chữ mảnh tượng hình hãy luôn sử dụng font chữ, thường gặp các ký tự như ${metadata.font}.
      `;
  }

  const ruleBasedPrompt = `
    Sau khi trích xuất văn bản, hãy tiến hành kiểm tra lỗi chính tả cho tiếng ${ethnicName} theo các bước sau:

    1. Đối chiếu các từ được trích xuất với từ điển địa phương của ${ethnicName}.
    2. Áp dụng quy tắc ghép vần đặc trưng của ${ethnicName} để xác định các lỗi về cấu trúc từ và dấu câu.
    3. Nếu phát hiện từ sai chính tả hoặc không phù hợp với cấu trúc ghép vần, liệt kê từ đó kèm theo mức độ sai lệch.
    4. Đề xuất các lựa chọn sửa lỗi dựa trên từ điển và quy tắc ghép vần, kèm giải thích ngắn gọn cho mỗi đề xuất.
    5. Báo cáo kết quả cuối cùng bao gồm danh sách các từ có lỗi và các đề xuất sửa chữa cụ thể.

    Lưu ý: Hãy đảm bảo rằng kết quả phản ánh đúng đặc trưng ngôn ngữ và văn hóa của ${ethnicName}.
    `;

  const outputFormatPrompt = `
    HÃY TRẢ VỀ KẾT QUẢ THEO ĐỊNH DẠNG SAU (THEO CHUẨN VĂN BẢN TÀI LIỆU WORD):

    1.VĂN BẢN GỐC ĐƯỢC TRÍCH XUẤT:
    - Văn bản gốc được trích xuất đầy đủ, giữ nguyên định dạng và nội dung của tài liệu gốc (đảm bảo về mặt ngữ nghĩa), không bịa thông tin. Nếu từ nào không nhận diện được thì bỏ qua và nhận diện các từ khác, không giải thích gì thêm.
    Lưu ý:
    - Sử dụng dấu câu và định dạng dòng chuẩn theo tiêu chuẩn của tài liệu Word.
    - Các tiêu đề và nội dung quan trọng cần được in đậm và viết hoa.
    `;

  return `${basePrompt}\n\n${cotPrompt}\n\n${dynamicContextPrompt}\n\n${fewShotPrompt}\n\n${ruleBasedPrompt}\n\n${outputFormatPrompt}`;
};

// Hàm phân tích phản hồi từ Gemini (lấy từ GeminiOCR.js)
const parseGeminiResponse = (responseText) => {
  const sections = responseText.split(/\d+\.\s+/).filter(Boolean);
  
  const result = {
    originalText: "",
    translation: "",
    pronunciation: "",
    culturalContext: ""
  };
  
  if (sections.length >= 1) result.originalText = cleanupText(sections[0].trim());
  if (sections.length >= 2) result.translation = cleanupText(sections[1].trim());
  if (sections.length >= 3) result.pronunciation = cleanupText(sections[2].trim());
  if (sections.length >= 4) result.culturalContext = cleanupText(sections[3].trim());
  
  // Giữ nguyên phần gán culturalContext từ metadata nếu rỗng
  if (!result.culturalContext && ethnicData.metadata) {
    const meta = ethnicData.metadata;
    if (meta && meta[result.ethnicity]) {
      result.culturalContext = meta[result.ethnicity].cultural_notes;
    }
  }
  
  return result;
};

// Hàm tạo Speech Synthesis cho văn bản Êđê (lấy từ GeminiOCR.js)
const generateAudioForEde = (text, ethnicity) => {
  if (!text || ethnicity !== 'Êđê') return;
  
  try {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'vi-VN'; // Dùng tiếng Việt vì không có tiếng Êđê
    // Phát âm trực tiếp
    window.speechSynthesis.speak(utterance);
  } catch (e) {
    console.error('Error generating audio:', e);
  }
};

function CombinedOCR() {
  // State variables
  const [file, setFile] = useState(null);
  const [filePreview, setFilePreview] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [ethnicity, setEthnicity] = useState('Êđê');
  const [base64Image, setBase64Image] = useState(null);
  const [processingTime, setProcessingTime] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('info');


  const [showPreviewModal, setShowPreviewModal] = useState(false);

  // Mở pop-up
  const handleShowPreview = () => {
    setShowPreviewModal(true);
  };

  // Đóng pop-up
  const handleClosePreview = () => {
    setShowPreviewModal(false);
  };

  // Xuất file PDF
  const handleExportPDF = () => {
    if (!result) return;

    // Tạo instance jsPDF
    const doc = new jsPDF({
      unit: 'pt', // tính bằng point, 72pt = 1 inch
      format: 'a4'
    });

    let yPos = 40;
    doc.setFontSize(14);
    doc.text("Kết quả phân tích OCR", 50, yPos);
    yPos += 30;

    doc.setFontSize(12);

    // 1) Văn bản gốc
    if (result.originalText) {
      const lines = doc.splitTextToSize(`Văn bản gốc:\n${result.originalText}`, 500);
      doc.text(lines, 50, yPos);
      yPos += lines.length * 14 + 10;
    }


    // Lưu file
    doc.save("ocr-result.pdf");

    // Đóng pop-up sau khi lưu
    setShowPreviewModal(false);
  };


  // Xử lý kéo thả file
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && droppedFile.type.startsWith('image/')) {
      handleFileSelection(droppedFile);
    }
  };

  // Xử lý chọn file qua input hoặc drag-drop
  const handleFileSelection = (selectedFile) => {
    if (selectedFile) {
      setFile(selectedFile);
      const previewURL = URL.createObjectURL(selectedFile);
      setFilePreview(previewURL);
      
      const reader = new FileReader();
      reader.readAsDataURL(selectedFile);
      reader.onloadend = () => {
        // Lưu phần base64 của ảnh (loại bỏ tiền tố)
        setBase64Image(reader.result.split(',')[1]);
      };
      
      setResult(null);
      setError(null);
    }
  };

  // Hiển thị thông báo popup
  const showPopupAlert = (message, type = 'warning') => {
    setAlertMessage(message);
    setAlertType(type);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 5000);
  };

  // Xử lý ảnh với Gemini API (kết hợp semantic routing và OCR)
  const processImage = async () => {
    if (!file || !base64Image) return;
    setLoading(true);
    setError(null);
    const startTime = performance.now();

    try {
      // Kiểm tra semantic routing
      const validationResult = await semanticRouter.validateLanguage(
        base64Image,
        ethnicity,
        ethnicData.metadata[ethnicity]
      );
  
      if (!validationResult.languageMatch) {
        showPopupAlert(`Hình ảnh này dường như không chứa văn bản ${ethnicity}. Vui lòng kiểm tra lại nội dung.`, 'warning');
        return;
      }
      if (validationResult.hasSensitiveContent) {
        showPopupAlert('Nội dung này chứa yếu tố nhạy cảm và không thể xử lý.', 'danger');
        return;
      }
      if (!validationResult.isCulturallyAppropriate) {
        showPopupAlert('Nội dung này có thể không phù hợp về mặt văn hóa hoặc không chính xác về mặt lịch sử.', 'danger');
        return;
      }
  
      // Gọi Gemini API để trích xuất văn bản
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });
      const prompt = generatePrompt(ethnicity);
  
      const ocrResult = await model.generateContent([
        {
          inlineData: {
            data: base64Image,
            mimeType: "image/jpeg"
          }
        },
        prompt
      ]);
  
      const responseText = ocrResult.response.text();
      
      if (responseText) {
        const parsedResult = parseGeminiResponse(responseText);
        setResult(parsedResult);
  
        // Nếu văn bản là Êđê thì thực hiện phát âm
        if (ethnicity === 'Êđê' && parsedResult.originalText) {
          generateAudioForEde(parsedResult.originalText, ethnicity);
        }
      } else {
        throw new Error('Không nhận được phản hồi từ Gemini API');
      }
    } catch (err) {
      console.error('Lỗi xử lý ảnh:', err);
      setError(err.message || 'Không thể xử lý ảnh. Vui lòng thử lại.');
    } finally {
      setLoading(false);
      const endTime = performance.now();
      setProcessingTime(((endTime - startTime) / 1000).toFixed(2));
    }
  };

  const getFontByEthnicity = (ethnicity) => {
    return ethnicData.metadata[ethnicity]?.font || 'Inter';
  };
  
  const resultStyle = {
    fontFamily: getFontByEthnicity(ethnicity),
    fontSize: '1rem',
    lineHeight: '1.5',
    whiteSpace: 'pre-wrap',
  };
  // Cleanup khi component unmount
  useEffect(() => {
    return () => {
      if (filePreview) URL.revokeObjectURL(filePreview);
    };
  }, [filePreview]);

  return (
    <div className="container-fluid mt-4">
      <MultiLevelNavbar />
      <div className="box-text">
        <div className="tagline">
          <p>Powered by <strong>gemini-1.5-pro</strong></p>
        </div>
      <div className="X-box">
        <h1>OCR Advanced: Image to text</h1>
      </div>
      </div>
      <div className="row">
      {/* Cột trái: Khu vực tải file và chọn dân tộc */}
      <div className="col-md-6">
        {/* Vùng drop-zone */}
        <div
          className="drop-zone position-relative d-flex flex-column justify-content-center align-items-center"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          style={{
            minHeight: '220px',
            border: '2px dashed #ccc',
            borderRadius: '6px',
            backgroundColor: '#f8f9fa',
            cursor: 'pointer',
            textAlign: 'center',
            marginBottom: '1rem'
          }}
          onClick={() => {
            // Khi click vào vùng này, ta sẽ click hộ input file ẩn
            document.getElementById('fileInput').click();
          }}
        >
          {/* Input file ẩn */}
          <input
            id="fileInput"
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={(e) => handleFileSelection(e.target.files[0])}
          />

          {/* Dòng chữ hướng dẫn */}
          <p style={{ margin: 0, padding: '1rem', color: '#666' }}>
            Kéo và thả ảnh vào đây hoặc nhấn để chọn tệp
          </p>
        </div>

        {/* Xem trước ảnh (nếu có) */}
        {filePreview && (
          <div className="mb-3 text-center">
            <img
              src={filePreview}
              alt="Xem trước"
              className="img-fluid border rounded"
              style={{ maxHeight: '200px' }}
            />
          </div>
        )}

        {/* Dropdown chọn dân tộc */}
        <div className="mb-3">
          <select
            value={ethnicity}
            onChange={(e) => setEthnicity(e.target.value)}
            className="form-select"
          >
            {ethnicData.ethnicities.map((e) => (
              <option key={e} value={e}>
                {e}
              </option>
            ))}
          </select>
        </div>

        {/* Nút phân tích */}
        <button
          onClick={processImage}
          disabled={!file || loading}
          className="btn btn-primary w-100"
        >
          {loading ? 'Đang xử lý...' : 'Phân tích Văn bản'}
        </button>
      </div>

      {/* Cột phải: Kết quả và thông báo */}
      <div className="col-md-6">
        {showAlert && (
          <Alert variant={alertType} onClose={() => setShowAlert(false)} dismissible>
            {alertMessage}
          </Alert>
        )}

        {error && (
          <Alert variant="danger">
            {error}
          </Alert>
        )}

        {result && (
          <div className="results-container mt-3">
            {processingTime && (
              <div className="alert alert-info">
                Thời gian xử lý: {processingTime} giây
              </div>
            )}

            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Kết quả Phân tích</h5>

                {result.translation && (
                  <div className="mb-3">
                    <h6>Kết quả OCR:</h6>
                    <p className="text-break" style={resultStyle}>{result.translation}</p>
                  </div>
                )}



                {/* Nếu cần phát lại, ví dụ cho văn bản Êđê */}
                {ethnicity === 'Êđê' && result.originalText && (
                  <button 
                    onClick={() => generateAudioForEde(result.originalText, ethnicity)}
                    className="btn btn-success me-2"
                  >
                    Phát âm
                  </button>
                )}

                {/* Nút xuất file - MỚI THÊM */}
                <button 
                  onClick={handleShowPreview}
                  className="btn btn-outline-primary"
                >
                  Xuất file
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Pop-up xem trước file (Modal) */}
      <Modal show={showPreviewModal} onHide={handleClosePreview} centered>
        <Modal.Header closeButton>
          <Modal.Title>Xem trước file</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {result ? (
            <>
              <h5>Kết quả OCR:</h5>
              {result.translation && (
                <div>
                  <strong>Bản dịch:</strong>
                  <p>{result.translation}</p>
                </div>
              )}
            </>
          ) : (
            <p>Không có dữ liệu để xem trước.</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClosePreview}>
            Đóng
          </Button>
          <Button variant="primary" onClick={handleExportPDF}>
            Xuất file
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    </div>
  );
}

export default CombinedOCR;
