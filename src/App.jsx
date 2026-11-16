import { readChoice, readJSON, writeStorage } from "./storage.js";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  BookOpen,
  Box,
  Check,
  ChevronDown,
  ChevronRight,
  Circle,
  Clock3,
  Code2,
  Cpu,
  Flame,
  LayoutDashboard,
  Maximize2,
  Moon,
  Palette,
  Pause,
  Play,
  Search,
  Sparkles,
  Sun,
  Terminal,
  Trophy,
  Volume2,
  X,
  Zap,
} from "lucide-react";

export const enDictionary = {
  brandName: "NAWAH",
  brandMark: "N",
  profileInitials: "AY",
  academy: "Tech Academy",
  catalogNav: "Learning tracks",
  classroomNav: "Classroom",
  languageButton: "العربية",
  lightTheme: "Use light mode",
  darkTheme: "Use dark mode",
  openMenu: "Open navigation",
  closeMenu: "Close navigation",
  profileMenuLabel: "Open student profile menu",
  closeProfileMenu: "Close student profile menu",
  profileName: "Ayat Yaseen",
  profileEmail: "ayat@nawah.academy",
  profileRole: "Systems architecture learner",
  profileDashboard: "Learning dashboard",
  profileClassroom: "Open classroom",
  profileAppearance: "Switch appearance",
  searchPlaceholder: "Search tracks and skills...",
  studentLevel: "Level 7 · Systems architect",
  syncStatus: "Workspace synced just now",
  welcomeTitle: "Welcome back, Ayat.",
  welcomeAccent: "Continue where you left off.",
  welcomeDescription:
    "Your active learning runtime is ready. Resume a lesson or explore a new engineering path.",
  currentPath: "Current learning path",
  resumeTitle: "Advanced Front-end Systems",
  resumeDescription:
    "Master scalable interfaces, state synchronization, and production performance patterns.",
  resumeLesson: "Module 1 · Lesson 3",
  resumeButton: "Resume lesson",
  overallProgress: "Overall progress",
  completedLessons: "Completed lessons",
  learningStreak: "Learning streak",
  earnedExperience: "Earned experience",
  lessonsUnit: "lessons",
  daysUnit: "days",
  xpUnit: "XP",
  catalogEyebrow: "Cohort learning paths",
  catalogTitle: "Explore academy tracks",
  catalogDescription:
    "Focused, project-led programs designed for the region's next generation of technical builders.",
  allCategory: "All",
  frontendCategory: "Front-end",
  embeddedCategory: "Embedded systems",
  uiuxCategory: "UI/UX",
  filterLabel: "Filter tracks",
  clearSearch: "Clear search",
  trackCount: "available tracks",
  noResultsTitle: "No tracks matched your search",
  noResultsDescription: "Try another keyword or reset the active category.",
  resetFilters: "Reset filters",
  intermediate: "Intermediate",
  advanced: "Advanced",
  professional: "Professional",
  weeksUnit: "weeks",
  modulesUnit: "modules",
  lessonsCountUnit: "lessons",
  progressLabel: "Progress",
  openClassroom: "Open classroom",
  viewCurriculum: "View curriculum",
  frontendTitle: "Advanced Front-end Systems",
  frontendDescription:
    "Build resilient React architectures, accessible design systems, and high-performance interfaces.",
  frontendMentor: "Laila Rostam · Staff UI Architect",
  embeddedTitle: "Embedded Systems & Edge Computing",
  embeddedDescription:
    "Program reliable devices with modern C++, real-time systems, sensors, and edge intelligence.",
  embeddedMentor: "Kareem Zaid · Embedded Lead",
  uiuxTitle: "Product Interface & UX Engineering",
  uiuxDescription:
    "Translate research into precise product systems, prototypes, and developer-ready specifications.",
  uiuxMentor: "Maya Nasser · Product Design Lead",
  performanceTitle: "Web Performance Engineering",
  performanceDescription:
    "Diagnose rendering bottlenecks, optimize delivery pipelines, and engineer fast web experiences.",
  performanceMentor: "Omar Saleh · Performance Engineer",
  classroomBreadcrumb: "Interactive classroom",
  backToDashboard: "Back to dashboard",
  curriculumTitle: "Curriculum flow",
  courseProgress: "Course progress",
  activeLesson: "Active lesson",
  lessonNotes: "Lesson notes",
  lessonObjectives: "Learning objectives",
  lessonRuntime: "Lesson runtime",
  playLesson: "Play lesson",
  pauseLesson: "Pause lesson",
  volumeControl: "Volume control",
  fullscreen: "Fullscreen",
  captions: "Captions",
  showCaptions: "Show captions",
  hideCaptions: "Hide captions",
  muteAudio: "Mute audio",
  unmuteAudio: "Unmute audio",
  enterFullscreen: "Enter fullscreen",
  exitFullscreen: "Exit fullscreen",
  captionPreview: "This interactive lesson connects each concept to a practical engineering decision.",
  videoWorkspace: "Interactive lesson workspace",
  codePreview: "Live concept preview",
  markComplete: "Mark lesson complete",
  markIncomplete: "Mark lesson incomplete",
  completedStatus: "Completed",
  currentStatus: "Now playing",
  lockedStatus: "Available next",
  expandModule: "Expand module",
  collapseModule: "Collapse module",
  previousLesson: "Previous lesson",
  nextLesson: "Next lesson",
  allComplete: "Track completed",
  xpPerLesson: "+120 XP per lesson",
  systemOnline: "Platform status: operational",
  latency: "API latency 18ms",
  rights: "© 2026 NAWAH Academy. All rights reserved.",
  moduleFoundations: "Foundations & runtime mental models",
  moduleArchitecture: "Component architecture & state systems",
  moduleDelivery: "Performance, testing & production delivery",
  moduleHardware: "Hardware foundations & digital signals",
  moduleRealtime: "Real-time firmware architecture",
  moduleEdge: "Connected devices & edge intelligence",
  moduleDiscovery: "Research & product discovery",
  moduleSystems: "Interface systems & interaction design",
  moduleHandoff: "Validation, accessibility & handoff",
  moduleMeasure: "Performance measurement foundations",
  moduleRendering: "Rendering and loading architecture",
  moduleOptimize: "Production optimization workflow",
  lessonBrowserRuntime: "How the browser runtime works",
  lessonModernJavaScript: "Modern JavaScript execution patterns",
  lessonReactRendering: "React rendering and reconciliation",
  lessonComponentBoundaries: "Designing durable component boundaries",
  lessonStateSystems: "State synchronization at scale",
  lessonDataFlows: "Predictable asynchronous data flows",
  lessonProfiling: "Profiling real application workloads",
  lessonTesting: "Testing critical interaction paths",
  lessonDeployment: "Production delivery and observability",
  lessonSignals: "Digital signals and microcontroller basics",
  lessonMemory: "Memory, registers, and safe access",
  lessonSensors: "Reading and calibrating sensors",
  lessonScheduling: "Deterministic task scheduling",
  lessonInterrupts: "Interrupts and concurrency safety",
  lessonDrivers: "Building reusable device drivers",
  lessonConnectivity: "Reliable device connectivity",
  lessonEdgeModels: "Running compact models at the edge",
  lessonDiagnostics: "Telemetry and field diagnostics",
  lessonResearch: "Planning actionable user research",
  lessonInterviews: "Interview synthesis and opportunity mapping",
  lessonJourneys: "Designing product journeys",
  lessonTokens: "Scalable tokens and visual foundations",
  lessonComponents: "Accessible component systems",
  lessonPrototypes: "High-fidelity interaction prototypes",
  lessonAccessibility: "Practical accessibility validation",
  lessonUsability: "Moderated usability testing",
  lessonDocumentation: "Developer-ready design documentation",
  lessonVitals: "Core web metrics and field data",
  lessonTools: "Performance tooling and trace analysis",
  lessonBudgets: "Defining meaningful performance budgets",
  lessonCriticalPath: "Optimizing the critical rendering path",
  lessonImages: "Modern image and font delivery",
  lessonCaching: "Caching and navigation strategies",
  lessonJavascript: "Reducing JavaScript execution cost",
  lessonMonitoring: "Continuous performance monitoring",
  lessonCulture: "Building a performance culture",
  notesFrontend:
    "Trace updates from the event boundary to the rendered interface, then isolate state by ownership and lifecycle.",
  objectiveFrontend:
    "Explain rendering phases, choose stable component boundaries, and verify state updates with measurable evidence.",
  notesEmbedded:
    "Model the device as a deterministic system where timing, memory, and power constraints shape every decision.",
  objectiveEmbedded:
    "Read hardware signals safely, structure firmware tasks, and diagnose failures with lightweight telemetry.",
  notesUiux:
    "Connect each interface decision to a user need, a reusable system rule, and an observable validation method.",
  objectiveUiux:
    "Synthesize research, construct accessible patterns, and communicate implementation details without ambiguity.",
  notesPerformance:
    "Measure before optimizing. Build a traceable link between user-visible delay, browser work, and delivery choices.",
  objectivePerformance:
    "Interpret field metrics, identify bottlenecks, and validate improvements against a defined performance budget.",
};

export const arDictionary = {
  brandName: "نواة",
  brandMark: "ن",
  profileInitials: "آ",
  academy: "أكاديمية التقنية",
  catalogNav: "المسارات التعليمية",
  classroomNav: "الفصل التفاعلي",
  languageButton: "English",
  lightTheme: "استخدام الوضع الفاتح",
  darkTheme: "استخدام الوضع الداكن",
  openMenu: "فتح قائمة التنقل",
  closeMenu: "إغلاق قائمة التنقل",
  profileMenuLabel: "فتح قائمة ملف المتعلمة",
  closeProfileMenu: "إغلاق قائمة ملف المتعلمة",
  profileName: "آيات ياسين",
  profileEmail: "ayat@nawah.academy",
  profileRole: "متعلّمة في هندسة الأنظمة",
  profileDashboard: "لوحة التعلم",
  profileClassroom: "فتح الفصل التفاعلي",
  profileAppearance: "تبديل المظهر",
  searchPlaceholder: "ابحث في المسارات والمهارات...",
  studentLevel: "المستوى السابع · هندسة الأنظمة",
  syncStatus: "تمت مزامنة مساحة العمل الآن",
  welcomeTitle: "مرحباً بعودتك، آيات.",
  welcomeAccent: "تابعي من حيث توقفتِ.",
  welcomeDescription:
    "بيئة التعلم النشطة جاهزة. تابعي الدرس الحالي أو استكشفي مساراً هندسياً جديداً.",
  currentPath: "مسار التعلم الحالي",
  resumeTitle: "أنظمة الواجهات المتقدمة",
  resumeDescription:
    "أتقني الواجهات القابلة للتوسع ومزامنة الحالة وأنماط الأداء المخصصة للإنتاج.",
  resumeLesson: "الوحدة الأولى · الدرس الثالث",
  resumeButton: "متابعة الدرس",
  overallProgress: "التقدم الإجمالي",
  completedLessons: "الدروس المكتملة",
  learningStreak: "سلسلة التعلم",
  earnedExperience: "نقاط الخبرة",
  lessonsUnit: "درساً",
  daysUnit: "يوماً",
  xpUnit: "نقطة",
  catalogEyebrow: "مسارات تعلم جماعية",
  catalogTitle: "استكشفي مسارات الأكاديمية",
  catalogDescription:
    "برامج مركزة قائمة على المشاريع، صُممت للجيل القادم من صُنّاع التقنية في المنطقة.",
  allCategory: "الكل",
  frontendCategory: "تطوير الواجهات",
  embeddedCategory: "الأنظمة المضمنة",
  uiuxCategory: "تجربة المستخدم",
  filterLabel: "تصفية المسارات",
  clearSearch: "مسح البحث",
  trackCount: "مسارات متاحة",
  noResultsTitle: "لا توجد مسارات مطابقة للبحث",
  noResultsDescription: "جرّبي كلمة أخرى أو أعيدي ضبط التصنيف الحالي.",
  resetFilters: "إعادة ضبط التصفية",
  intermediate: "متوسط",
  advanced: "متقدم",
  professional: "احترافي",
  weeksUnit: "أسابيع",
  modulesUnit: "وحدات",
  lessonsCountUnit: "دروس",
  progressLabel: "التقدم",
  openClassroom: "فتح الفصل",
  viewCurriculum: "عرض المنهج",
  frontendTitle: "أنظمة الواجهات المتقدمة",
  frontendDescription:
    "ابني معماريات واجهات متينة وأنظمة تصميم سهلة الوصول وتجارب عالية الأداء.",
  frontendMentor: "ليلى رستم · مهندسة واجهات رئيسية",
  embeddedTitle: "الأنظمة المضمنة وحوسبة الحافة",
  embeddedDescription:
    "برمجي أجهزة موثوقة باستخدام الأنظمة الفورية والحساسات والذكاء المحلي.",
  embeddedMentor: "كريم زيد · قائد الأنظمة المضمنة",
  uiuxTitle: "هندسة واجهات المنتجات وتجربة المستخدم",
  uiuxDescription:
    "حوّلي البحث إلى أنظمة منتجات دقيقة ونماذج تفاعلية ومواصفات جاهزة للتطوير.",
  uiuxMentor: "مايا ناصر · قائدة تصميم المنتجات",
  performanceTitle: "هندسة أداء الويب",
  performanceDescription:
    "شخّصي اختناقات العرض وحسّني مسارات التحميل وابني تجارب ويب سريعة.",
  performanceMentor: "عمر صالح · مهندس أداء",
  classroomBreadcrumb: "الفصل التفاعلي",
  backToDashboard: "العودة إلى لوحة التعلم",
  curriculumTitle: "تسلسل المنهج",
  courseProgress: "تقدم المسار",
  activeLesson: "الدرس الحالي",
  lessonNotes: "ملاحظات الدرس",
  lessonObjectives: "أهداف التعلم",
  lessonRuntime: "مدة الدرس",
  playLesson: "تشغيل الدرس",
  pauseLesson: "إيقاف الدرس مؤقتاً",
  volumeControl: "التحكم بمستوى الصوت",
  fullscreen: "ملء الشاشة",
  captions: "النص المصاحب",
  showCaptions: "إظهار النص المصاحب",
  hideCaptions: "إخفاء النص المصاحب",
  muteAudio: "كتم الصوت",
  unmuteAudio: "تشغيل الصوت",
  enterFullscreen: "عرض بملء الشاشة",
  exitFullscreen: "الخروج من ملء الشاشة",
  captionPreview: "يربط هذا الدرس التفاعلي كل مفهوم بقرار هندسي عملي.",
  videoWorkspace: "مساحة الدرس التفاعلية",
  codePreview: "معاينة المفهوم مباشرة",
  markComplete: "تحديد الدرس كمكتمل",
  markIncomplete: "إلغاء اكتمال الدرس",
  completedStatus: "مكتمل",
  currentStatus: "يُعرض الآن",
  lockedStatus: "متاح تالياً",
  expandModule: "توسيع الوحدة",
  collapseModule: "طي الوحدة",
  previousLesson: "الدرس السابق",
  nextLesson: "الدرس التالي",
  allComplete: "اكتمل المسار",
  xpPerLesson: "١٢٠ نقطة لكل درس",
  systemOnline: "حالة المنصة: تعمل بكفاءة",
  latency: "زمن الاستجابة ١٨ مللي ثانية",
  rights: "© 2026 أكاديمية نواة. جميع الحقوق محفوظة.",
  moduleFoundations: "الأساسيات والنماذج الذهنية لبيئة التشغيل",
  moduleArchitecture: "معمارية المكونات وأنظمة الحالة",
  moduleDelivery: "الأداء والاختبار والإطلاق",
  moduleHardware: "أساسيات العتاد والإشارات الرقمية",
  moduleRealtime: "معمارية البرمجيات الفورية",
  moduleEdge: "الأجهزة المتصلة والذكاء المحلي",
  moduleDiscovery: "البحث واكتشاف المنتج",
  moduleSystems: "أنظمة الواجهات وتصميم التفاعل",
  moduleHandoff: "التحقق وسهولة الوصول والتسليم",
  moduleMeasure: "أساسيات قياس الأداء",
  moduleRendering: "معمارية العرض والتحميل",
  moduleOptimize: "منهجية التحسين للإنتاج",
  lessonBrowserRuntime: "كيف تعمل بيئة المتصفح",
  lessonModernJavaScript: "أنماط تنفيذ جافاسكربت الحديثة",
  lessonReactRendering: "عرض ريأكت والمطابقة",
  lessonComponentBoundaries: "تصميم حدود مكونات متينة",
  lessonStateSystems: "مزامنة الحالة على نطاق واسع",
  lessonDataFlows: "تدفقات بيانات غير متزامنة قابلة للتوقع",
  lessonProfiling: "تحليل أعباء التطبيقات الحقيقية",
  lessonTesting: "اختبار مسارات التفاعل الحرجة",
  lessonDeployment: "الإطلاق والمراقبة في بيئة الإنتاج",
  lessonSignals: "الإشارات الرقمية وأساسيات المتحكمات",
  lessonMemory: "الذاكرة والمسجلات والوصول الآمن",
  lessonSensors: "قراءة الحساسات ومعايرتها",
  lessonScheduling: "جدولة المهام بصورة حتمية",
  lessonInterrupts: "المقاطعات وسلامة التزامن",
  lessonDrivers: "بناء مشغلات أجهزة قابلة لإعادة الاستخدام",
  lessonConnectivity: "اتصال الأجهزة الموثوق",
  lessonEdgeModels: "تشغيل نماذج مصغرة محلياً",
  lessonDiagnostics: "القياس عن بعد وتشخيص الأعطال",
  lessonResearch: "تخطيط بحث مستخدم قابل للتطبيق",
  lessonInterviews: "تحليل المقابلات ورسم الفرص",
  lessonJourneys: "تصميم رحلات المنتج",
  lessonTokens: "رموز تصميم قابلة للتوسع",
  lessonComponents: "أنظمة مكونات سهلة الوصول",
  lessonPrototypes: "نماذج تفاعلية عالية الدقة",
  lessonAccessibility: "التحقق العملي من سهولة الوصول",
  lessonUsability: "اختبار قابلية الاستخدام الموجّه",
  lessonDocumentation: "توثيق تصميم جاهز للمطورين",
  lessonVitals: "مقاييس الويب الأساسية وبيانات المستخدمين",
  lessonTools: "أدوات الأداء وتحليل مسارات التنفيذ",
  lessonBudgets: "تحديد ميزانيات أداء واقعية",
  lessonCriticalPath: "تحسين مسار العرض الحرج",
  lessonImages: "توصيل الصور والخطوط الحديثة",
  lessonCaching: "استراتيجيات التخزين المؤقت والتنقل",
  lessonJavascript: "تقليل كلفة تنفيذ جافاسكربت",
  lessonMonitoring: "مراقبة الأداء بصورة مستمرة",
  lessonCulture: "بناء ثقافة تهتم بالأداء",
  notesFrontend:
    "تتبعي التحديثات من لحظة التفاعل حتى ظهور الواجهة، ثم افصلي الحالة وفق الملكية ودورة الحياة.",
  objectiveFrontend:
    "اشرحي مراحل العرض، واختاري حدود مكونات مستقرة، وتحققي من التحديثات بأدلة قابلة للقياس.",
  notesEmbedded:
    "عاملي الجهاز كنظام حتمي تشكّل فيه قيود الوقت والذاكرة والطاقة كل قرار هندسي.",
  objectiveEmbedded:
    "اقرئي إشارات العتاد بأمان، ونظمي مهام البرمجيات، وشخّصي الأعطال بقياسات خفيفة.",
  notesUiux:
    "اربطي كل قرار في الواجهة بحاجة مستخدم وقاعدة نظام قابلة لإعادة الاستخدام وطريقة تحقق واضحة.",
  objectiveUiux:
    "حللي البحث، وابني أنماطاً سهلة الوصول، وانقلي تفاصيل التنفيذ دون غموض.",
  notesPerformance:
    "قيسي قبل التحسين، وابني رابطاً واضحاً بين التأخير المرئي وعمل المتصفح وخيارات التوصيل.",
  objectivePerformance:
    "فسّري المقاييس الحقيقية، وحددي الاختناقات، وتحققي من التحسينات وفق ميزانية أداء واضحة.",
};

export const i18nTranslations = {
  en: enDictionary,
  ar: arDictionary,
};

const STORAGE_KEYS = {
  language: "nawah_language_v1",
  theme: "nawah_theme_v1",
  completedLessons: "nawah_completed_lessons_v1",
};

const CATEGORY_CONFIG = ["all", "frontend", "embedded", "uiux"];
const EXPERIENCE_BASE = 1250;
const EXPERIENCE_PER_LESSON = 120;

const TRACKS_CONFIG = [
  {
    id: "frontend-systems",
    titleKey: "frontendTitle",
    descriptionKey: "frontendDescription",
    mentorKey: "frontendMentor",
    category: "frontend",
    difficultyKey: "advanced",
    durationWeeks: 12,
    accent: "violet",
    icon: Code2,
    notesKey: "notesFrontend",
    objectiveKey: "objectiveFrontend",
    modules: [
      {
        id: "frontend-foundations",
        titleKey: "moduleFoundations",
        lessons: [
          { id: "fe-1", titleKey: "lessonBrowserRuntime", duration: "18:12" },
          { id: "fe-2", titleKey: "lessonModernJavaScript", duration: "21:05" },
          { id: "fe-3", titleKey: "lessonReactRendering", duration: "22:45" },
        ],
      },
      {
        id: "frontend-architecture",
        titleKey: "moduleArchitecture",
        lessons: [
          { id: "fe-4", titleKey: "lessonComponentBoundaries", duration: "19:30" },
          { id: "fe-5", titleKey: "lessonStateSystems", duration: "26:40" },
          { id: "fe-6", titleKey: "lessonDataFlows", duration: "24:18" },
        ],
      },
      {
        id: "frontend-delivery",
        titleKey: "moduleDelivery",
        lessons: [
          { id: "fe-7", titleKey: "lessonProfiling", duration: "20:16" },
          { id: "fe-8", titleKey: "lessonTesting", duration: "23:34" },
          { id: "fe-9", titleKey: "lessonDeployment", duration: "17:52" },
        ],
      },
    ],
  },
  {
    id: "embedded-edge",
    titleKey: "embeddedTitle",
    descriptionKey: "embeddedDescription",
    mentorKey: "embeddedMentor",
    category: "embedded",
    difficultyKey: "professional",
    durationWeeks: 16,
    accent: "mint",
    icon: Cpu,
    notesKey: "notesEmbedded",
    objectiveKey: "objectiveEmbedded",
    modules: [
      {
        id: "embedded-hardware",
        titleKey: "moduleHardware",
        lessons: [
          { id: "em-1", titleKey: "lessonSignals", duration: "17:40" },
          { id: "em-2", titleKey: "lessonMemory", duration: "24:10" },
          { id: "em-3", titleKey: "lessonSensors", duration: "20:32" },
        ],
      },
      {
        id: "embedded-realtime",
        titleKey: "moduleRealtime",
        lessons: [
          { id: "em-4", titleKey: "lessonScheduling", duration: "25:04" },
          { id: "em-5", titleKey: "lessonInterrupts", duration: "22:28" },
          { id: "em-6", titleKey: "lessonDrivers", duration: "27:15" },
        ],
      },
      {
        id: "embedded-edge-module",
        titleKey: "moduleEdge",
        lessons: [
          { id: "em-7", titleKey: "lessonConnectivity", duration: "19:42" },
          { id: "em-8", titleKey: "lessonEdgeModels", duration: "28:06" },
          { id: "em-9", titleKey: "lessonDiagnostics", duration: "21:35" },
        ],
      },
    ],
  },
  {
    id: "product-ux",
    titleKey: "uiuxTitle",
    descriptionKey: "uiuxDescription",
    mentorKey: "uiuxMentor",
    category: "uiux",
    difficultyKey: "intermediate",
    durationWeeks: 10,
    accent: "cyan",
    icon: Palette,
    notesKey: "notesUiux",
    objectiveKey: "objectiveUiux",
    modules: [
      {
        id: "ux-discovery",
        titleKey: "moduleDiscovery",
        lessons: [
          { id: "ux-1", titleKey: "lessonResearch", duration: "18:24" },
          { id: "ux-2", titleKey: "lessonInterviews", duration: "23:10" },
          { id: "ux-3", titleKey: "lessonJourneys", duration: "19:55" },
        ],
      },
      {
        id: "ux-systems",
        titleKey: "moduleSystems",
        lessons: [
          { id: "ux-4", titleKey: "lessonTokens", duration: "20:08" },
          { id: "ux-5", titleKey: "lessonComponents", duration: "25:44" },
          { id: "ux-6", titleKey: "lessonPrototypes", duration: "22:16" },
        ],
      },
      {
        id: "ux-handoff",
        titleKey: "moduleHandoff",
        lessons: [
          { id: "ux-7", titleKey: "lessonAccessibility", duration: "24:20" },
          { id: "ux-8", titleKey: "lessonUsability", duration: "21:48" },
          { id: "ux-9", titleKey: "lessonDocumentation", duration: "18:36" },
        ],
      },
    ],
  },
  {
    id: "web-performance",
    titleKey: "performanceTitle",
    descriptionKey: "performanceDescription",
    mentorKey: "performanceMentor",
    category: "frontend",
    difficultyKey: "professional",
    durationWeeks: 8,
    accent: "amber",
    icon: Zap,
    notesKey: "notesPerformance",
    objectiveKey: "objectivePerformance",
    modules: [
      {
        id: "performance-measure",
        titleKey: "moduleMeasure",
        lessons: [
          { id: "pe-1", titleKey: "lessonVitals", duration: "17:18" },
          { id: "pe-2", titleKey: "lessonTools", duration: "22:52" },
          { id: "pe-3", titleKey: "lessonBudgets", duration: "16:40" },
        ],
      },
      {
        id: "performance-rendering",
        titleKey: "moduleRendering",
        lessons: [
          { id: "pe-4", titleKey: "lessonCriticalPath", duration: "24:38" },
          { id: "pe-5", titleKey: "lessonImages", duration: "19:26" },
          { id: "pe-6", titleKey: "lessonCaching", duration: "21:14" },
        ],
      },
      {
        id: "performance-optimize",
        titleKey: "moduleOptimize",
        lessons: [
          { id: "pe-7", titleKey: "lessonJavascript", duration: "26:02" },
          { id: "pe-8", titleKey: "lessonMonitoring", duration: "18:58" },
          { id: "pe-9", titleKey: "lessonCulture", duration: "15:44" },
        ],
      },
    ],
  },
];

const getTrackLessons = (track) =>
  track.modules.flatMap((courseModule) => courseModule.lessons);

const readStoredArray = (key, fallback) =>
  readJSON(key, fallback, (value) => Array.isArray(value) && value.every((id) => typeof id === "string"));

function HeaderNavBar({
  activeView,
  currentLanguage,
  themeMode,
  handleViewSwitch,
  handleLanguageToggle,
  handleThemeToggle,
  t,
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const profileMenuRef = useRef(null);

  useEffect(() => {
    if (!isProfileMenuOpen) return undefined;

    const handlePointerDown = (event) => {
      if (!profileMenuRef.current?.contains(event.target)) {
        setIsProfileMenuOpen(false);
      }
    };
    const handleEscapeKey = (event) => {
      if (event.key === "Escape") setIsProfileMenuOpen(false);
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleEscapeKey);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isProfileMenuOpen]);

  const navigateToView = (viewName) => {
    handleViewSwitch(viewName);
    setIsMobileMenuOpen(false);
    setIsProfileMenuOpen(false);
  };

  return (
    <header className="topbar">
      <button className="brand" onClick={() => navigateToView("catalog")}>
        <span className="brand-mark">{t("brandMark")}</span>
        <span className="brand-name">{t("brandName")}</span>
        <span className="brand-subtitle">{t("academy")}</span>
      </button>

      <nav className={`primary-nav ${isMobileMenuOpen ? "open" : ""}`}>
        <button
          className={activeView === "catalog" ? "active" : ""}
          onClick={() => navigateToView("catalog")}
        >
          <LayoutDashboard size={16} />
          {t("catalogNav")}
        </button>
        <button
          className={activeView === "classroom" ? "active" : ""}
          onClick={() => navigateToView("classroom")}
        >
          <Terminal size={16} />
          {t("classroomNav")}
        </button>
      </nav>

      <div className="header-actions">
        <div className="streak-chip">
          <Flame size={15} />
          <span>12</span>
        </div>
        <button
          className="icon-button"
          onClick={handleThemeToggle}
          aria-label={themeMode === "dark" ? t("lightTheme") : t("darkTheme")}
          title={themeMode === "dark" ? t("lightTheme") : t("darkTheme")}
        >
          {themeMode === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        <button className="language-button" onClick={handleLanguageToggle}>
          {t("languageButton")}
        </button>
        <div className="profile-menu-container" ref={profileMenuRef}>
          <button
            className={`avatar ${isProfileMenuOpen ? "active" : ""}`}
            onClick={() => setIsProfileMenuOpen((menuState) => !menuState)}
            aria-label={isProfileMenuOpen ? t("closeProfileMenu") : t("profileMenuLabel")}
            aria-haspopup="menu"
            aria-expanded={isProfileMenuOpen}
          >
            {t("profileInitials")}
            <span className="avatar-status" />
          </button>
          {isProfileMenuOpen && (
            <div className="profile-dropdown" role="menu">
              <div className="profile-summary">
                <span className="profile-summary-avatar">{t("profileInitials")}</span>
                <div>
                  <strong>{t("profileName")}</strong>
                  <small>{t("profileEmail")}</small>
                  <span>{t("profileRole")}</span>
                </div>
              </div>
              <div className="profile-menu-actions">
                <button role="menuitem" onClick={() => navigateToView("catalog")}>
                  <LayoutDashboard size={16} />
                  {t("profileDashboard")}
                </button>
                <button role="menuitem" onClick={() => navigateToView("classroom")}>
                  <Terminal size={16} />
                  {t("profileClassroom")}
                </button>
                <button
                  role="menuitem"
                  onClick={() => {
                    handleThemeToggle();
                    setIsProfileMenuOpen(false);
                  }}
                >
                  {themeMode === "dark" ? <Sun size={16} /> : <Moon size={16} />}
                  {t("profileAppearance")}
                </button>
              </div>
            </div>
          )}
        </div>
        <button
          className="mobile-menu-button"
          onClick={() => setIsMobileMenuOpen((menuState) => !menuState)}
          aria-label={isMobileMenuOpen ? t("closeMenu") : t("openMenu")}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Terminal size={20} />}
        </button>
      </div>
    </header>
  );
}

function ProgressBar({ value, label }) {
  return (
    <div className="progress-track" role="progressbar" aria-label={label} aria-valuenow={value} aria-valuemin="0" aria-valuemax="100">
      <span style={{ width: `${value}%` }} />
    </div>
  );
}

function StudentOverviewBanner({
  currentTrack,
  completedCount,
  totalLessons,
  overallProgress,
  experiencePoints,
  onResume,
  t,
  formatNumber,
}) {
  const CurrentTrackIcon = currentTrack.icon;

  return (
    <section className="overview-section">
      <div className="status-line">
        <span>{t("studentLevel")}</span>
        <span className="status-online">
          <i /> {t("syncStatus")}
        </span>
      </div>
      <div className="welcome-row">
        <div>
          <h1>{t("welcomeTitle")}</h1>
          <strong>{t("welcomeAccent")}</strong>
          <p>{t("welcomeDescription")}</p>
        </div>
        <div className="target-discipline">
          <CurrentTrackIcon size={21} />
          <span>{t("currentPath")}</span>
          <strong>{t(currentTrack.titleKey)}</strong>
        </div>
      </div>

      <div className="overview-grid">
        <article className="resume-card">
          <div className="terminal-card-header">
            <span><Play size={13} /> {t("resumeLesson")}</span>
            <span>{formatNumber(overallProgress)}%</span>
          </div>
          <div className="resume-card-body">
            <div>
              <span className="eyebrow">{t("currentPath")}</span>
              <h2>{t(currentTrack.titleKey)}</h2>
              <p>{t(currentTrack.descriptionKey)}</p>
            </div>
            <div className="resume-progress">
              <div className="progress-ring" style={{ "--progress": `${overallProgress * 3.6}deg` }}>
                <span>{formatNumber(overallProgress)}%</span>
              </div>
              <button className="primary-button" onClick={onResume}>
                <Play size={16} />
                {t("resumeButton")}
              </button>
            </div>
          </div>
        </article>

        <div className="metrics-grid">
          <article className="metric-card">
            <BookOpen size={19} />
            <span>{t("completedLessons")}</span>
            <strong>{formatNumber(completedCount)}</strong>
            <small>{formatNumber(totalLessons)} {t("lessonsUnit")}</small>
          </article>
          <article className="metric-card">
            <Flame size={19} />
            <span>{t("learningStreak")}</span>
            <strong>{formatNumber(12)}</strong>
            <small>{t("daysUnit")}</small>
          </article>
          <article className="metric-card wide">
            <Trophy size={19} />
            <span>{t("earnedExperience")}</span>
            <strong>{formatNumber(experiencePoints)}</strong>
            <small>{t("xpUnit")}</small>
          </article>
        </div>
      </div>
    </section>
  );
}

function CatalogFilters({
  activeCategory,
  searchQuery,
  resultCount,
  handleCategoryChange,
  setSearchQuery,
  t,
  formatNumber,
}) {
  const categoryLabels = {
    all: "allCategory",
    frontend: "frontendCategory",
    embedded: "embeddedCategory",
    uiux: "uiuxCategory",
  };

  return (
    <div className="catalog-controls">
      <div className="search-field">
        <Search size={17} />
        <input
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          placeholder={t("searchPlaceholder")}
        />
        {searchQuery && (
          <button onClick={() => setSearchQuery("")} aria-label={t("clearSearch")}>
            <X size={16} />
          </button>
        )}
      </div>
      <div className="filter-row" aria-label={t("filterLabel")}>
        {CATEGORY_CONFIG.map((categoryName) => (
          <button
            key={categoryName}
            className={activeCategory === categoryName ? "active" : ""}
            onClick={() => handleCategoryChange(categoryName)}
          >
            {t(categoryLabels[categoryName])}
          </button>
        ))}
      </div>
      <span className="result-count">
        {formatNumber(resultCount)} {t("trackCount")}
      </span>
    </div>
  );
}

function CourseCard({ track, completedLessons, onOpen, t, formatNumber }) {
  const TrackIcon = track.icon;
  const trackLessons = getTrackLessons(track);
  const completedTrackLessons = trackLessons.filter((lesson) => completedLessons.includes(lesson.id)).length;
  const trackProgress = Math.round((completedTrackLessons / trackLessons.length) * 100);

  return (
    <article className={`course-card accent-${track.accent}`}>
      <div className="course-visual">
        <div className="code-grid" />
        <TrackIcon size={46} />
        <span className="difficulty-badge">{t(track.difficultyKey)}</span>
      </div>
      <div className="course-body">
        <div className="course-meta">
          <span><Clock3 size={14} /> {formatNumber(track.durationWeeks)} {t("weeksUnit")}</span>
          <span><Box size={14} /> {formatNumber(track.modules.length)} {t("modulesUnit")}</span>
        </div>
        <h3>{t(track.titleKey)}</h3>
        <p>{t(track.descriptionKey)}</p>
        <div className="mentor-line">
          <span>{t(track.mentorKey).slice(0, 1)}</span>
          <strong>{t(track.mentorKey)}</strong>
        </div>
        <div className="card-progress-row">
          <span>{t("progressLabel")}</span>
          <strong>{formatNumber(trackProgress)}%</strong>
        </div>
        <ProgressBar value={trackProgress} label={t("courseProgress")} />
        <div className="course-actions">
          <button className="ghost-button" onClick={() => onOpen(track)}>
            <BookOpen size={15} /> {t("viewCurriculum")}
          </button>
          <button className="primary-button" onClick={() => onOpen(track)}>
            {t("openClassroom")} <ArrowRight className="directional-icon" size={16} />
          </button>
        </div>
      </div>
    </article>
  );
}

function CatalogView({
  tracks,
  currentTrack,
  completedLessons,
  activeCategory,
  searchQuery,
  handleCategoryChange,
  setSearchQuery,
  handleOpenTrack,
  experiencePoints,
  t,
  formatNumber,
}) {
  const currentTrackLessons = getTrackLessons(currentTrack);
  const completedCurrentTrackLessons = currentTrackLessons.filter((lesson) =>
    completedLessons.includes(lesson.id),
  );
  const overallProgress = Math.round(
    (completedCurrentTrackLessons.length / currentTrackLessons.length) * 100,
  );

  return (
    <main>
      <StudentOverviewBanner
        currentTrack={currentTrack}
        completedCount={completedCurrentTrackLessons.length}
        totalLessons={currentTrackLessons.length}
        overallProgress={overallProgress}
        experiencePoints={experiencePoints}
        onResume={() => handleOpenTrack(currentTrack)}
        t={t}
        formatNumber={formatNumber}
      />

      <section className="catalog-section">
        <div className="section-heading">
          <span className="eyebrow">{t("catalogEyebrow")}</span>
          <h2>{t("catalogTitle")}</h2>
          <p>{t("catalogDescription")}</p>
        </div>
        <CatalogFilters
          activeCategory={activeCategory}
          searchQuery={searchQuery}
          resultCount={tracks.length}
          handleCategoryChange={handleCategoryChange}
          setSearchQuery={setSearchQuery}
          t={t}
          formatNumber={formatNumber}
        />
        {tracks.length ? (
          <div className="course-grid">
            {tracks.map((track) => (
              <CourseCard
                key={track.id}
                track={track}
                completedLessons={completedLessons}
                onOpen={handleOpenTrack}
                t={t}
                formatNumber={formatNumber}
              />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <Search size={34} />
            <h3>{t("noResultsTitle")}</h3>
            <p>{t("noResultsDescription")}</p>
            <button className="primary-button" onClick={() => { handleCategoryChange("all"); setSearchQuery(""); }}>
              {t("resetFilters")}
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

function VideoPlayerMock({ activeLesson, track, t }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackProgress, setPlaybackProgress] = useState(42);
  const [isMuted, setIsMuted] = useState(false);
  const [areCaptionsVisible, setAreCaptionsVisible] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const playerRef = useRef(null);
  const TrackIcon = track.icon;

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(document.fullscreenElement === playerRef.current);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  const handleFullscreenToggle = async () => {
    if (document.fullscreenElement) {
      await document.exitFullscreen?.();
    } else {
      await playerRef.current?.requestFullscreen?.();
    }
  };

  return (
    <section className="video-player-panel" ref={playerRef}>
      <div className="player-statusbar">
        <span><i /> {t("videoWorkspace")}</span>
        <span>{activeLesson.duration}</span>
      </div>
      <div className="player-stage">
        <div className="code-watermark" aria-hidden="true">
          <span>const learningRuntime = createWorkspace();</span>
          <span>await learningRuntime.connect();</span>
          <span>progress.observe(activeLesson);</span>
          <span>knowledge.commit();</span>
        </div>
        <div className="lesson-spotlight">
          <TrackIcon size={27} />
          <span>{t("activeLesson")}</span>
          <h1>{t(activeLesson.titleKey)}</h1>
          <p>{t(track.descriptionKey)}</p>
        </div>
        {areCaptionsVisible && (
          <p className="player-captions" aria-live="polite">{t("captionPreview")}</p>
        )}
        <div className="signal-bars" aria-hidden="true">
          {Array.from({ length: 28 }, (_, barIndex) => (
            <i key={barIndex} style={{ height: `${12 + ((barIndex * 11) % 38)}px` }} />
          ))}
        </div>
      </div>
      <div className="scrubber-wrap">
        <input
          type="range"
          min="0"
          max="100"
          value={playbackProgress}
          onChange={(event) => setPlaybackProgress(Number(event.target.value))}
          aria-label={t("lessonRuntime")}
          aria-valuetext={`${playbackProgress}%`}
          dir="ltr"
          style={{ "--player-progress": `${playbackProgress}%` }}
        />
      </div>
      <div className="player-controls">
        <div>
          <button
            className="play-button"
            onClick={() => setIsPlaying((playingState) => !playingState)}
            aria-label={isPlaying ? t("pauseLesson") : t("playLesson")}
          >
            {isPlaying ? <Pause size={19} /> : <Play size={19} />}
          </button>
          <span className="player-time" dir="ltr">
            {Math.round((playbackProgress / 100) * 22)}:{playbackProgress % 2 ? "18" : "42"} / {activeLesson.duration}
          </span>
        </div>
        <div>
          <button
            className={`icon-button ${isMuted ? "active" : ""}`}
            onClick={() => setIsMuted((mutedState) => !mutedState)}
            aria-label={isMuted ? t("unmuteAudio") : t("muteAudio")}
            aria-pressed={isMuted}
          >
            <Volume2 size={17} />
          </button>
          <button
            className={`icon-button ${areCaptionsVisible ? "active" : ""}`}
            onClick={() => setAreCaptionsVisible((captionState) => !captionState)}
            aria-label={areCaptionsVisible ? t("hideCaptions") : t("showCaptions")}
            aria-pressed={areCaptionsVisible}
          >
            <BookOpen size={17} />
          </button>
          <button
            className={`icon-button ${isFullscreen ? "active" : ""}`}
            onClick={handleFullscreenToggle}
            aria-label={isFullscreen ? t("exitFullscreen") : t("enterFullscreen")}
            aria-pressed={isFullscreen}
          >
            <Maximize2 size={17} />
          </button>
        </div>
      </div>
    </section>
  );
}

function LessonItemRow({ lesson, isActive, isCompleted, onSelect, onToggleComplete, t }) {
  return (
    <div className={`lesson-row ${isActive ? "active" : ""} ${isCompleted ? "completed" : ""}`}>
      <button className="lesson-select" onClick={onSelect}>
        {isActive ? <Play size={14} /> : <Circle size={13} />}
        <span>{t(lesson.titleKey)}</span>
        <small>{lesson.duration}</small>
      </button>
      <button
        className="lesson-check"
        onClick={onToggleComplete}
        aria-label={isCompleted ? t("markIncomplete") : t("markComplete")}
        title={isCompleted ? t("markIncomplete") : t("markComplete")}
      >
        {isCompleted && <Check size={14} />}
      </button>
    </div>
  );
}

function CurriculumAccordion({
  track,
  activeLessonId,
  completedLessons,
  handleSelectLesson,
  handleToggleLessonComplete,
  t,
  formatNumber,
}) {
  const [expandedModules, setExpandedModules] = useState(() => [track.modules[0].id]);

  const toggleModule = (moduleId) => {
    setExpandedModules((currentModules) =>
      currentModules.includes(moduleId)
        ? currentModules.filter((currentModuleId) => currentModuleId !== moduleId)
        : [...currentModules, moduleId],
    );
  };

  return (
    <aside className="curriculum-panel">
      <div className="curriculum-heading">
        <div>
          <BookOpen size={18} />
          <h2>{t("curriculumTitle")}</h2>
        </div>
        <span>{formatNumber(track.modules.length)} {t("modulesUnit")}</span>
      </div>
      <div className="module-list">
        {track.modules.map((courseModule, moduleIndex) => {
          const isExpanded = expandedModules.includes(courseModule.id);
          const completedModuleLessons = courseModule.lessons.filter((lesson) => completedLessons.includes(lesson.id)).length;
          return (
            <section className="curriculum-module" key={courseModule.id}>
              <button
                className="module-toggle"
                onClick={() => toggleModule(courseModule.id)}
                aria-label={isExpanded ? t("collapseModule") : t("expandModule")}
                aria-expanded={isExpanded}
              >
                <span className="module-index">{String(moduleIndex + 1).padStart(2, "0")}</span>
                <span>
                  <small>{t("modulesUnit")}</small>
                  <strong>{t(courseModule.titleKey)}</strong>
                </span>
                <em>{formatNumber(completedModuleLessons)}/{formatNumber(courseModule.lessons.length)}</em>
                <ChevronDown size={16} />
              </button>
              {isExpanded && (
                <div className="module-lessons">
                  {courseModule.lessons.map((lesson) => (
                    <LessonItemRow
                      key={lesson.id}
                      lesson={lesson}
                      isActive={lesson.id === activeLessonId}
                      isCompleted={completedLessons.includes(lesson.id)}
                      onSelect={() => handleSelectLesson(lesson.id)}
                      onToggleComplete={() => handleToggleLessonComplete(lesson.id)}
                      t={t}
                    />
                  ))}
                </div>
              )}
            </section>
          );
        })}
      </div>
    </aside>
  );
}

function ClassroomView({
  selectedTrack,
  activeLessonId,
  completedLessons,
  handleSelectLesson,
  handleToggleLessonComplete,
  handleViewSwitch,
  t,
  formatNumber,
}) {
  const trackLessons = getTrackLessons(selectedTrack);
  const activeLesson = trackLessons.find((lesson) => lesson.id === activeLessonId) ?? trackLessons[0];
  const activeLessonIndex = trackLessons.findIndex((lesson) => lesson.id === activeLesson.id);
  const completedTrackLessons = trackLessons.filter((lesson) => completedLessons.includes(lesson.id)).length;
  const trackProgress = Math.round((completedTrackLessons / trackLessons.length) * 100);

  const selectAdjacentLesson = (direction) => {
    const nextIndex = Math.min(Math.max(activeLessonIndex + direction, 0), trackLessons.length - 1);
    handleSelectLesson(trackLessons[nextIndex].id);
  };

  return (
    <main className="classroom-page">
      <div className="classroom-toolbar">
        <div>
          <Terminal size={15} />
          <span>{t("classroomBreadcrumb")}</span>
          <ChevronRight className="directional-icon" size={14} />
          <strong>{t(selectedTrack.titleKey)}</strong>
        </div>
        <button className="ghost-button" onClick={() => handleViewSwitch("catalog")}>
          <ArrowLeft className="directional-icon" size={16} /> {t("backToDashboard")}
        </button>
      </div>

      <div className="classroom-layout">
        <div className="classroom-main">
          <VideoPlayerMock activeLesson={activeLesson} track={selectedTrack} t={t} />

          <div className="lesson-navigation">
            <button
              className="ghost-button"
              onClick={() => selectAdjacentLesson(-1)}
              disabled={activeLessonIndex === 0}
            >
              <ArrowLeft className="directional-icon" size={16} /> {t("previousLesson")}
            </button>
            <div>
              <span>{t("courseProgress")}</span>
              <ProgressBar value={trackProgress} label={t("courseProgress")} />
              <strong>{formatNumber(trackProgress)}%</strong>
            </div>
            <button
              className="primary-button"
              onClick={() => selectAdjacentLesson(1)}
              disabled={activeLessonIndex === trackLessons.length - 1}
            >
              {activeLessonIndex === trackLessons.length - 1 ? t("allComplete") : t("nextLesson")}
              <ArrowRight className="directional-icon" size={16} />
            </button>
          </div>

          <section className="lesson-notes-panel">
            <div className="notes-header">
              <div><BookOpen size={17} /> {t("lessonNotes")}</div>
              <span>{t("xpPerLesson")}</span>
            </div>
            <h2>{t(activeLesson.titleKey)}</h2>
            <p>{t(selectedTrack.notesKey)}</p>
            <div className="objective-card">
              <Sparkles size={18} />
              <div>
                <strong>{t("lessonObjectives")}</strong>
                <p>{t(selectedTrack.objectiveKey)}</p>
              </div>
            </div>
            <div className="code-concept-card">
              <div><Code2 size={16} /> {t("codePreview")}</div>
              <pre><code>{`function commitLearning(progress) {\n  return progress.map(validate).filter(Boolean);\n}`}</code></pre>
            </div>
          </section>
        </div>

        <CurriculumAccordion
          track={selectedTrack}
          activeLessonId={activeLesson.id}
          completedLessons={completedLessons}
          handleSelectLesson={handleSelectLesson}
          handleToggleLessonComplete={handleToggleLessonComplete}
          t={t}
          formatNumber={formatNumber}
        />
      </div>
    </main>
  );
}

function FooterBar({ t }) {
  return (
    <footer>
      <span><i /> {t("systemOnline")}</span>
      <span>{t("latency")}</span>
      <span>{t("rights")}</span>
    </footer>
  );
}

export default function App() {
  const [currentLanguage, setCurrentLanguage] = useState(
    () => readChoice(STORAGE_KEYS.language, ["en", "ar"], "en"),
  );
  const [themeMode, setThemeMode] = useState(
    () => readChoice(STORAGE_KEYS.theme, ["light", "dark"], "dark"),
  );
  const [activeView, setActiveView] = useState("catalog");
  const [selectedTrack, setSelectedTrack] = useState(TRACKS_CONFIG[0]);
  const [activeLessonId, setActiveLessonId] = useState(TRACKS_CONFIG[0].modules[0].lessons[0].id);
  const [completedLessons, setCompletedLessons] = useState(() =>
    readStoredArray(STORAGE_KEYS.completedLessons, ["fe-1", "fe-2"]),
  );
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const activeDictionary = i18nTranslations[currentLanguage];
  const t = (translationKey) => activeDictionary[translationKey] ?? translationKey;
  const formatNumber = (value) =>
    new Intl.NumberFormat(currentLanguage === "ar" ? "ar-SA" : "en-US").format(value);

  useEffect(() => {
    document.documentElement.lang = currentLanguage;
    document.documentElement.dir = currentLanguage === "ar" ? "rtl" : "ltr";
    writeStorage(STORAGE_KEYS.language, currentLanguage);
  }, [currentLanguage]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", themeMode === "dark");
    document.documentElement.style.colorScheme = themeMode;
    writeStorage(STORAGE_KEYS.theme, themeMode);
  }, [themeMode]);

  useEffect(() => {
    writeStorage(STORAGE_KEYS.completedLessons, JSON.stringify(completedLessons));
  }, [completedLessons]);

  const filteredTracks = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLocaleLowerCase(currentLanguage);
    return TRACKS_CONFIG.filter((track) => {
      const matchesCategory = activeCategory === "all" || track.category === activeCategory;
      const searchableCopy = `${t(track.titleKey)} ${t(track.descriptionKey)}`.toLocaleLowerCase(currentLanguage);
      return matchesCategory && (!normalizedQuery || searchableCopy.includes(normalizedQuery));
    });
  }, [activeCategory, searchQuery, currentLanguage]);

  const experiencePoints = EXPERIENCE_BASE + completedLessons.length * EXPERIENCE_PER_LESSON;

  const handleSelectLesson = (lessonId) => {
    setActiveLessonId(lessonId);
  };

  const handleToggleLessonComplete = (lessonId) => {
    setCompletedLessons((currentCompletedLessons) =>
      currentCompletedLessons.includes(lessonId)
        ? currentCompletedLessons.filter((completedLessonId) => completedLessonId !== lessonId)
        : [...currentCompletedLessons, lessonId],
    );
  };

  const handleCategoryChange = (categoryName) => {
    setActiveCategory(categoryName);
  };

  const handleViewSwitch = (viewName) => {
    setActiveView(viewName);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleOpenTrack = (track) => {
    setSelectedTrack(track);
    setActiveLessonId(getTrackLessons(track)[0].id);
    handleViewSwitch("classroom");
  };

  const handleLanguageToggle = () => {
    setCurrentLanguage((language) => (language === "en" ? "ar" : "en"));
  };

  const handleThemeToggle = () => {
    setThemeMode((theme) => (theme === "dark" ? "light" : "dark"));
  };

  return (
    <div className="app-shell">
      <HeaderNavBar
        activeView={activeView}
        currentLanguage={currentLanguage}
        themeMode={themeMode}
        handleViewSwitch={handleViewSwitch}
        handleLanguageToggle={handleLanguageToggle}
        handleThemeToggle={handleThemeToggle}
        t={t}
      />

      {activeView === "catalog" ? (
        <CatalogView
          tracks={filteredTracks}
          currentTrack={selectedTrack}
          completedLessons={completedLessons}
          activeCategory={activeCategory}
          searchQuery={searchQuery}
          handleCategoryChange={handleCategoryChange}
          setSearchQuery={setSearchQuery}
          handleOpenTrack={handleOpenTrack}
          experiencePoints={experiencePoints}
          t={t}
          formatNumber={formatNumber}
        />
      ) : (
        <ClassroomView
          key={selectedTrack.id}
          selectedTrack={selectedTrack}
          activeLessonId={activeLessonId}
          completedLessons={completedLessons}
          handleSelectLesson={handleSelectLesson}
          handleToggleLessonComplete={handleToggleLessonComplete}
          handleViewSwitch={handleViewSwitch}
          t={t}
          formatNumber={formatNumber}
        />
      )}

      <FooterBar t={t} />
    </div>
  );
}

