import React, { useState } from 'react';
import Modal from '../Modal';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const ProgramExecutive = () => {
    const [activeDay, setActiveDay] = useState(1);
    const [selectedTopic, setSelectedTopic] = useState<any>(null);

    const titleAnimation = useScrollAnimation();
    const tabsAnimation = useScrollAnimation({ threshold: 0.3 });

    const days = [
        {
            day: 1,
            title: "Claude для руководителя - быстрые победы",
            description: "Научитесь использовать Claude для ежедневных задач и увидите первые результаты",
            topics: [
                {
                    time: "09:00 - 10:00",
                    title: "AI-революция и Claude",
                    items: [
                        "Почему AI - это не хайп, а реальность бизнеса",
                        "Что такое Claude и чем он отличается от ChatGPT",
                        "Первое знакомство с Claude.ai"
                    ],
                    details: {
                        keyPoints: [
                            "Примеры компаний, трансформировавших бизнес с AI",
                            "10x рост выручки Replit после внедрения Claude",
                            "Что изменилось за последний год в AI"
                        ],
                        outcomes: [
                            "Понимание текущего состояния AI в бизнесе",
                            "Знание ключевых отличий Claude от конкурентов",
                            "Первый практический опыт работы с Claude"
                        ],
                        practicalWork: [
                            "Создание аккаунта Claude.ai",
                            "Выбор подходящего плана подписки",
                            "Первый диалог с Claude: решение простой бизнес-задачи"
                        ]
                    }
                },
                {
                    time: "10:00 - 10:45",
                    title: "Практика - решаем задачи руководителя",
                    items: [
                        "Работа с документами и данными",
                        "Создание презентаций и отчётов",
                        "Коммуникация и деловые письма"
                    ],
                    details: {
                        keyPoints: [
                            "Загрузка и анализ отчётов (PDF, Excel, Word)",
                            "Извлечение ключевых инсайтов из больших документов",
                            "Генерация презентаций и отчётов с форматированием"
                        ],
                        outcomes: [
                            "Экономия 2-3 часов на подготовке отчётов",
                            "Быстрый анализ больших объёмов данных",
                            "Профессиональные деловые письма за минуты"
                        ],
                        practicalWork: [
                            "Анализ вашего реального финансового отчёта",
                            "Создание executive summary из длинного документа",
                            "Написание делового письма с помощью Claude"
                        ]
                    }
                },
                {
                    time: "11:00 - 12:00",
                    title: "Расширенное мышление для стратегических решений",
                    items: [
                        "Режим расширенного мышления (Extended Thinking)",
                        "Практический кейс: стратегическое решение",
                        "Поиск информации через Claude"
                    ],
                    details: {
                        keyPoints: [
                            "Когда использовать Extended Thinking",
                            "Глубокий анализ сложных бизнес-ситуаций",
                            "Многошаговое стратегическое планирование"
                        ],
                        outcomes: [
                            "Принятие более обоснованных стратегических решений",
                            "Учёт большего количества факторов и рисков",
                            "Разработка нескольких сценариев развития событий"
                        ],
                        practicalWork: [
                            "Кейс: анализ возможности выхода на новый рынок",
                            "Оценка рисков и возможностей",
                            "Разработка плана действий с учётом различных сценариев"
                        ]
                    }
                },
                {
                    time: "12:00 - 13:00",
                    title: "Финансовый анализ и визуализация",
                    items: [
                        "Работа с финансовыми данными",
                        "Создание дашбордов и визуализаций",
                        "Практика с вашими данными"
                    ],
                    details: {
                        keyPoints: [
                            "Анализ трендов и выявление аномалий",
                            "Сравнение с предыдущими периодами",
                            "Прогнозирование на основе исторических данных"
                        ],
                        outcomes: [
                            "Быстрый финансовый анализ без специалистов",
                            "Визуализация данных для презентаций",
                            "Раннее выявление проблем и возможностей"
                        ],
                        practicalWork: [
                            "Загрузка ваших финансовых отчётов",
                            "Анализ с помощью Claude",
                            "Создание презентации для совета директоров"
                        ]
                    }
                }
            ]
        },
        {
            day: 2,
            title: "AI в бизнес-процессах компании",
            description: "Узнайте, как автоматизировать процессы и получить конкурентное преимущество",
            topics: [
                {
                    time: "09:00 - 10:00",
                    title: "Автоматизация задач руководителя",
                    items: [
                        "Проекты Claude: ваша персональная база знаний",
                        "Автоматизация рутины",
                        "Эффективная коммуникация"
                    ],
                    details: {
                        keyPoints: [
                            "Создание проекта для вашей компании",
                            "Загрузка корпоративных документов и политик",
                            "Настраиваемые инструкции для специфических задач"
                        ],
                        outcomes: [
                            "5-10 часов экономии времени в неделю",
                            "Единая база знаний о компании",
                            "Быстрые ответы на типовые вопросы"
                        ],
                        practicalWork: [
                            "Создание проекта с документами вашей компании",
                            "Автоматизация обработки email",
                            "Подготовка к встречам и протоколы совещаний"
                        ]
                    }
                },
                {
                    time: "10:00 - 10:45",
                    title: "Анализ рынка и конкурентная разведка",
                    items: [
                        "Исследование рынка с помощью Claude",
                        "Анализ конкурентов и SWOT-анализ",
                        "Практика: анализ вашего рынка"
                    ],
                    details: {
                        keyPoints: [
                            "Поиск и анализ актуальной информации о рынке",
                            "Тренды и прогнозы развития отрасли",
                            "SWOT-анализ конкурентов"
                        ],
                        outcomes: [
                            "Актуальная картина рынка за 30 минут",
                            "Выявление незанятых ниш",
                            "Понимание стратегий конкурентов"
                        ],
                        practicalWork: [
                            "Анализ вашего рынка в реальном времени",
                            "Сравнение продуктов и цен конкурентов",
                            "Создание отчёта с рекомендациями"
                        ]
                    }
                },
                {
                    time: "11:00 - 12:00",
                    title: "Разработка бизнес-стратегий с AI",
                    items: [
                        "Стратегическое планирование с Claude",
                        "Анализ возможностей роста",
                        "Управление рисками"
                    ],
                    details: {
                        keyPoints: [
                            "Постановка целей и декомпозиция на инициативы",
                            "Оценка ресурсов и сроков",
                            "Сценарное планирование"
                        ],
                        outcomes: [
                            "Структурированная стратегия с конкретными шагами",
                            "Оценка рисков и планы реагирования",
                            "Несколько сценариев развития"
                        ],
                        practicalWork: [
                            "Разработка стратегии для вашей компании",
                            "Анализ новых продуктов и рынков",
                            "План управления рисками"
                        ]
                    }
                },
                {
                    time: "12:00 - 13:00",
                    title: "Реальные кейсы успеха",
                    items: [
                        "Кейс: Replit - 10x рост выручки",
                        "Примеры из вашей отрасли",
                        "Групповая дискуссия и возможности"
                    ],
                    details: {
                        keyPoints: [
                            "Как интеграция Claude увеличила выручку Replit в 10 раз",
                            "Делегирование часов работы вместо минут",
                            "Изменение роли человека в процессе"
                        ],
                        outcomes: [
                            "Понимание возможностей AI в вашей отрасли",
                            "Идеи для быстрых побед в вашем бизнесе",
                            "План первых шагов внедрения"
                        ],
                        practicalWork: [
                            "Групповое обсуждение кейсов",
                            "Определение возможностей для вашего бизнеса",
                            "Обсуждение препятствий и путей их преодоления"
                        ]
                    }
                }
            ]
        },
        {
            day: 3,
            title: "Стратегия внедрения AI в организации",
            description: "Создайте план внедрения и начните трансформацию вашего бизнеса",
            topics: [
                {
                    time: "09:00 - 10:00",
                    title: "Выбор пилотных проектов и масштабирование",
                    items: [
                        "Как выбрать правильный пилотный проект",
                        "Стратегия масштабирования",
                        "Практика: ваш пилотный проект"
                    ],
                    details: {
                        keyPoints: [
                            "Критерии выбора: impact vs effort",
                            "Быстрые победы для демонстрации ценности",
                            "Создание центра компетенций AI"
                        ],
                        outcomes: [
                            "Выбранный пилотный проект для вашей компании",
                            "План с метриками и timeline",
                            "Определена команда и ресурсы"
                        ],
                        practicalWork: [
                            "Выбор пилота для вашей компании",
                            "Планирование метрик успеха",
                            "Определение команды и бюджета"
                        ]
                    }
                },
                {
                    time: "10:00 - 10:45",
                    title: "Управление изменениями",
                    items: [
                        "Преодоление сопротивления",
                        "Вовлечение команды",
                        "Работа с советом директоров и инвесторами"
                    ],
                    details: {
                        keyPoints: [
                            "Типичные страхи: AI заберёт работу",
                            "Поиск чемпионов и early adopters",
                            "Коммуникационная стратегия"
                        ],
                        outcomes: [
                            "План коммуникации с командой",
                            "Стратегия работы с возражениями",
                            "Презентация для совета директоров"
                        ],
                        practicalWork: [
                            "Разработка коммуникационной стратегии",
                            "Создание презентации для стейкхолдеров",
                            "План вовлечения команды"
                        ]
                    }
                },
                {
                    time: "11:00 - 12:00",
                    title: "Безопасность, этика и соответствие",
                    items: [
                        "Безопасность данных",
                        "Соответствие требованиям (GDPR, отраслевые)",
                        "Этические вопросы и риск-менеджмент"
                    ],
                    details: {
                        keyPoints: [
                            "Что происходит с вашими данными в Claude",
                            "Enterprise план и дополнительная защита",
                            "Отраслевые требования (финансы, медицина)"
                        ],
                        outcomes: [
                            "Понимание безопасности и compliance",
                            "План управления рисками",
                            "Политики использования AI"
                        ],
                        practicalWork: [
                            "Аудит требований безопасности",
                            "Разработка политик использования AI",
                            "План управления рисками"
                        ]
                    }
                },
                {
                    time: "12:00 - 13:00",
                    title: "ROI, KPI и ваш план действий",
                    items: [
                        "Расчёт ROI от внедрения AI",
                        "KPI и метрики успеха",
                        "Ваш персональный план действий"
                    ],
                    details: {
                        keyPoints: [
                            "Модель расчёта ROI",
                            "Прямая экономия vs косвенная ценность",
                            "Метрики для отслеживания adoption"
                        ],
                        outcomes: [
                            "Калькулятор ROI для вашего проекта",
                            "Список KPI для отслеживания",
                            "План на 30-60-90 дней"
                        ],
                        practicalWork: [
                            "Расчёт ROI вашего пилота",
                            "Определение KPI",
                            "Создание персонального плана действий",
                            "План первой недели после курса"
                        ]
                    }
                }
            ]
        }
    ];

    return (
        <div id="program" className="py-12 sm:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div
                    ref={titleAnimation.ref}
                    className={`max-w-3xl mx-auto text-center mb-12 sm:mb-16 ${
                        titleAnimation.isVisible ? 'animate-fade-in' : 'animate-on-scroll'
                    }`}
                >
                    <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-3 sm:mb-4">
                        Программа обучения
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-600">
                        Три дня от быстрых побед до стратегии внедрения
                    </p>
                </div>

                <div
                    ref={tabsAnimation.ref}
                    className={`grid grid-cols-3 gap-2 sm:flex sm:justify-center sm:gap-4 mb-8 sm:mb-12 mx-auto ${
                        tabsAnimation.isVisible ? 'animate-slide-up-fade' : 'animate-on-scroll'
                    }`}
                >
                    {days.map((item) => (
                        <button
                            key={item.day}
                            onClick={() => setActiveDay(item.day)}
                            className={`px-2 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium transition-all text-xs sm:text-base ${
                                activeDay === item.day
                                    ? 'bg-gray-900 text-white shadow-lg'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                        >
                            День {item.day}
                        </button>
                    ))}
                </div>

                <div className="max-w-5xl mx-auto">
                    {days.map((item) => (
                        <div
                            key={item.day}
                            className={`${activeDay === item.day ? 'block' : 'hidden'}`}
                        >
                            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 mb-6 sm:mb-8 border border-gray-200">
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-2 sm:mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-base sm:text-lg text-gray-600">
                                    {item.description}
                                </p>
                            </div>

                            <div className="space-y-4 sm:space-y-6">
                                {item.topics.map((topic, index) => (
                                    <div
                                        key={index}
                                        onClick={() => setSelectedTopic(topic)}
                                        className="bg-white rounded-xl p-4 sm:p-6 border border-gray-200 hover:border-blue-300 transition-all cursor-pointer hover:shadow-md animate-slide-up-fade"
                                        style={{ animationDelay: `${index * 0.1}s` }}
                                    >
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 sm:mb-4 gap-2">
                                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                                                <div className="px-3 py-1 bg-blue-100 text-blue-700 rounded-lg text-xs sm:text-sm font-medium w-fit">
                                                    {topic.time}
                                                </div>
                                                <h4 className="text-lg sm:text-xl font-semibold text-gray-900">
                                                    {topic.title}
                                                </h4>
                                            </div>
                                            <span className="text-blue-600 text-sm font-medium">
                        Подробнее →
                      </span>
                                        </div>
                                        <ul className="space-y-2">
                                            {topic.items.map((item, i) => (
                                                <li key={i} className="flex items-start gap-2 text-sm sm:text-base text-gray-700">
                                                    <span className="text-blue-500 mt-1">•</span>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Modal
                isOpen={!!selectedTopic}
                onClose={() => setSelectedTopic(null)}
                title={selectedTopic?.title || ''}
            >
                {selectedTopic && (
                    <div className="space-y-6">
                        <div className="bg-blue-50 rounded-xl p-6">
                            <div className="text-sm text-blue-700 font-medium mb-3">
                                {selectedTopic.time}
                            </div>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-3">
                                Ключевые темы
                            </h4>
                            <ul className="space-y-2">
                                {selectedTopic.details.keyPoints.map((point: string, i: number) => (
                                    <li key={i} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                                        <span className="text-blue-500 font-bold">{i + 1}.</span>
                                        <span className="text-gray-700">{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-3">
                                Что вы получите
                            </h4>
                            <ul className="space-y-2">
                                {selectedTopic.details.outcomes.map((outcome: string, i: number) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-700">
                                        <span className="text-green-500">✓</span>
                                        <span>{outcome}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-3">
                                Практическая работа
                            </h4>
                            <ul className="space-y-2">
                                {selectedTopic.details.practicalWork.map((work: string, i: number) => (
                                    <li key={i} className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg">
                                        <span className="text-orange-500">💼</span>
                                        <span className="text-gray-700">{work}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}
            </Modal>
        </div>
    );
};

export default ProgramExecutive;