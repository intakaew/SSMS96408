/* ════════════════════════════════════════════════════════════
   catalog.js — รายการหนังสือในห้องสมุด
   วิธีเพิ่มเล่มใหม่:
     1. วางไฟล์ .html ของหนังสือไว้ในโฟลเดอร์ books/
     2. คัดลอกบล็อก { ... } ด้านล่างมา 1 อัน แล้วแก้ค่าให้ตรงเล่มใหม่
   ฟิลด์ที่ใช้:
     id        : รหัสไม่ซ้ำ (ใช้ภายใน)
     code      : รหัสวิชา/ป้ายมุมปก
     title     : ชื่อหนังสือ
     subtitle  : คำโปรย/หัวข้อย่อย
     author    : ผู้เขียน/วิชา
     emoji     : ไอคอนหน้าปก
     gradient  : สีหน้าปก (CSS gradient)
     tags      : ป้ายหมวดหมู่ (array)
     file      : พาธไฟล์ใน books/
     updated   : วันที่อัปเดต (YYYY-MM-DD)
   ════════════════════════════════════════════════════════════ */
const BOOKS = [
  {
    id: 'sql-96408',
    code: '96408',
    title: 'ฐานข้อมูลคลังสินค้า บริษัท ABC',
    subtitle: 'คู่มือ SQL ฉบับสมบูรณ์ · DDL · DML · SELECT',
    author: 'วิชา 96408 — ระบบฐานข้อมูล (ภาคปฏิบัติ)',
    emoji: '🗄️',
    gradient: 'linear-gradient(135deg,#1F6FEB 0%,#388BFD 55%,#56D364 100%)',
    tags: ['SQL', 'T-SQL', 'ภาคปฏิบัติ'],
    file: 'books/sql-96408.html',
    updated: '2026-06-30',
  },
  {
    id: 'db-96408',
    code: '96408',
    title: 'การจัดการระบบฐานข้อมูล',
    subtitle: 'ความรู้พื้นฐาน · ER · นอร์มัลไลเซชัน · ฐานข้อมูลเชิงสัมพันธ์',
    author: 'วิชา 96408 — การจัดการระบบฐานข้อมูล',
    emoji: '📚',
    gradient: 'linear-gradient(135deg,#7C3AED 0%,#A855F7 55%,#EC4899 100%)',
    tags: ['ฐานข้อมูล', 'ER', 'Normalization'],
    file: 'books/db-96408.html',
    updated: '2026-06-30',
  },
  {
    id: 'network-96304',
    code: '96304',
    title: 'การสื่อสารข้อมูลและระบบเครือข่ายคอมพิวเตอร์',
    subtitle: 'สัญญาณ · ตัวกลาง · โพรโทคอล · การควบคุมการไหลของข้อมูล',
    author: 'วิชา 96304 — เครือข่ายคอมพิวเตอร์',
    emoji: '🌐',
    gradient: 'linear-gradient(135deg,#0EA5E9 0%,#22D3EE 55%,#2DD4BF 100%)',
    tags: ['เครือข่าย', 'Data Communication', 'Protocol'],
    file: 'books/network-96304.html',
    updated: '2026-06-30',
  },
  {
    id: 'audit-96404',
    code: '96404',
    title: 'การตรวจสอบระบบงานคอมพิวเตอร์และการควบคุมภายใน',
    subtitle: 'การควบคุม IT · บริหารความเสี่ยง · COBIT · การตรวจสอบ',
    author: 'วิชา 96404 — IT Audit & Internal Control',
    emoji: '🛡️',
    gradient: 'linear-gradient(135deg,#F59E0B 0%,#F97316 55%,#EF4444 100%)',
    tags: ['IT Audit', 'ความเสี่ยง', 'การควบคุม'],
    file: 'books/audit-96404.html',
    updated: '2026-06-30',
  },
  // ── เพิ่มหนังสือเล่มต่อไปด้านล่างนี้ ──
];
