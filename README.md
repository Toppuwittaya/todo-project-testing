# Todo Project

โปรเจค Todo List สำหรับแบบทดสอบตําแหน่ง Front-End Developer

## คุณสมบัติ

-   สร้างรายการ Todo ใหม่
-   แก้ไขรายการที่มีอยู่
-   ลบรายการ
-   แสดงรายการทั้งหมด
-   มีการ Validation form ตาม Requirement

## เทคโนโลยีที่ใช้

-   React 19
-   Vite 7
-   TailwindCSS 4
-   React Hook Form
-   Lucide React (สำหรับไอคอน)
-   ESLint (สำหรับ code linting)

## การติดตั้ง

1. Clone โปรเจค:

```bash
git clone https://github.com/Toppuwittaya/todo-project-testing
cd  todo-project-testing
```

2. ติดตั้ง dependencies:

```bash
npm install
```

3. รันโปรเจคในโหมด development เพื่อทดสอบการทำงาน:

```bash
npm run dev
```

4. เปิดเบราว์เซอร์และเข้าไปที่ `http://localhost:5173`

## การใช้งาน

1. เพิ่ม Todo ใหม่:

    - คลิกปุ่ม "Add Task"
    - กรอกรายละเอียดของ task
    - กด Add Task เพื่อบันทึกการแก้ไข

2. แก้ไข Todo:

    - คลิกที่ Icon Pencil รายการที่ต้องการแก้ไข
    - แก้ไขข้อมูลในฟอร์ม
    - กด Edit Task เพื่อบันทึกการแก้ไข

3. ลบ Todo:
    - คลิกปุ่มลบที่รายการที่ต้องการ
    - ยืนยันการลบในกล่องยืนยัน

## โครงสร้างโปรเจค

```
src/
├── components/         # React components
│   ├── ui/            # UI components (Button, Input, etc.)
│   ├── LayoutTask     # Layout component
│   ├── TaskForm      # Form สำหรับสร้าง/แก้ไข task
│   └── TaskOverview   # Component แสดงภาพรวมของ tasks
├── context/           # React Context providers
├── hooks/            # React custom hooks
├── pages/            # หน้าต่างๆ ของแอพ
└── utils/            # Utility functions
```

## คำสั่งที่ใช้งานได้

-   `npm run dev` - รันโปรเจคในโหมด development (ใช้งานทดสอบการทำงานบน localhost ได้เลย)
-   `npm run build` - build โปรเจคสำหรับ production
-   `npm run preview` - preview เวอร์ชัน production locally (npm run build ก่อนใช้งาน)
-   `npm run lint` - ตรวจสอบ code ด้วย ESLint
