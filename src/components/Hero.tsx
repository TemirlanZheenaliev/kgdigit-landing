import React from 'react';
import { Calendar, Clock, Users, Check, ArrowRight, Code, Briefcase, Zap, Bot } from 'lucide-react';
import { useCourse } from '../context/CourseContext';

// Импортируем SVG
import version0 from '../assets/version 0-2.png';
import version02 from '../assets/version 0.png';
import VersionRObot from '../assets/VersionRObot.png';
import vadSvg from '../assets/vad.svg';

const Hero = () => {
    const { courseType, setCourseType } = useCourse();

    return (
        <div className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-blue-50 min-h-screen flex items-center">
            {/* SVG справа вверху - скрыт на мобилке */}
            <div className="absolute right-0 top-32 w-1/2 pointer-events-none z-0 hidden lg:block">
                {courseType === 'developer' ? (
                    <img
                        src={version0}
                        alt="Claude Interface"
                        className="w-full h-auto"
                    />
                ) : courseType === 'executive' ? (
                    <img
                        src={version02}
                        alt="Claude for Business"
                        className="w-full h-auto"
                    />
                ) : courseType === 'claude-code' ? (
                    <img
                        src={VersionRObot}
                        alt="Claude Code Robot"
                        className="w-full h-auto"
                    />
                ) : (
                    <img
                        src={vadSvg}
                        alt="Claude Code Automation"
                        className="w-full h-auto"
                    />
                )}
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-32 w-full z-10">
                {/* Переключатель курсов */}
                <div className="mb-12 sm:mb-16">
                    <div className="inline-flex bg-white rounded-xl sm:rounded-2xl p-1 sm:p-2 shadow-lg border border-gray-200 w-full sm:w-auto">
                        {/* Сетка фиксированной ширины для стабильного положения */}
                        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-1">
                            {/* Разработчикам */}
                            <button
                                onClick={() => setCourseType('developer')}
                                className={`flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 px-2 sm:px-5 py-2 sm:py-3 rounded-lg sm:rounded-xl font-medium transition-all text-[10px] sm:text-sm ${
                                    courseType === 'developer'
                                        ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-md scale-[1.02]'
                                        : 'bg-transparent text-gray-600 hover:text-gray-900'
                                }`}
                            >
                                <Code className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                                <div className="flex flex-col sm:flex-row sm:items-center sm:gap-1">
                                    <span className="hidden sm:inline">Разработчикам</span>
                                    <span className="sm:hidden">Dev</span>
                                    <span className="text-[9px] sm:text-[11px] opacity-70">(3-4д)</span>
                                </div>
                            </button>

                            {/* Руководителям */}
                            <button
                                onClick={() => setCourseType('executive')}
                                className={`flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 px-2 sm:px-5 py-2 sm:py-3 rounded-lg sm:rounded-xl font-medium transition-all text-[10px] sm:text-sm ${
                                    courseType === 'executive'
                                        ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-md scale-[1.02]'
                                        : 'bg-transparent text-gray-600 hover:text-gray-900'
                                }`}
                            >
                                <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                                <div className="flex flex-col sm:flex-row sm:items-center sm:gap-1">
                                    <span className="hidden sm:inline">Руководителям</span>
                                    <span className="sm:hidden">Exec</span>
                                    <span className="text-[9px] sm:text-[11px] opacity-70">(3д)</span>
                                </div>
                            </button>

                            {/* Claude Code */}
                            <button
                                onClick={() => setCourseType('claude-code')}
                                className={`flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 px-2 sm:px-5 py-2 sm:py-3 rounded-lg sm:rounded-xl font-medium transition-all text-[10px] sm:text-sm ${
                                    courseType === 'claude-code'
                                        ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-md scale-[1.02]'
                                        : 'bg-transparent text-gray-600 hover:text-gray-900'
                                }`}
                            >
                                <Zap className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                                <div className="flex flex-col sm:flex-row sm:items-center sm:gap-1">
                                    <span className="hidden sm:inline">Claude Code</span>
                                    <span className="sm:hidden">Code</span>
                                    <span className="text-[9px] sm:text-[11px] opacity-70">(1д)</span>
                                </div>
                            </button>

                            {/* Агентная автоматизация */}
                            <button
                                onClick={() => setCourseType('claude-code-automation')}
                                className={`flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 px-2 sm:px-5 py-2 sm:py-3 rounded-lg sm:rounded-xl font-medium transition-all text-[10px] sm:text-sm ${
                                    courseType === 'claude-code-automation'
                                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-md scale-[1.02]'
                                        : 'bg-transparent text-gray-600 hover:text-gray-900'
                                }`}
                            >
                                <Bot className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                                <div className="flex flex-col sm:flex-row sm:items-center sm:gap-1">
                                    <span className="hidden sm:inline">Автоматизация</span>
                                    <span className="sm:hidden">Auto</span>
                                    <span className="text-[9px] sm:text-[11px] opacity-70">(2д)</span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Контент Hero с фиксированной минимальной высотой */}
                <div className="max-w-3xl min-h-[580px] sm:min-h-[640px]">
                    {courseType === 'developer' ? (
                        <>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 mb-6 sm:mb-8 leading-tight tracking-tight">
                                Anthropic Claude и Claude Code для технических специалистов
                            </h1>

                            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-12 leading-relaxed">
                                Освойте весь стек инструментов Anthropic: от веб-интерфейса claude.ai до создания enterprise MCP серверов
                            </p>

                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12">
                                <a
                                    href="#register"
                                    className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gray-900 text-white rounded-lg sm:rounded-xl hover:bg-gray-800 transition-all text-sm sm:text-base font-medium"
                                >
                                    Записаться на курс
                                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                                </a>
                                <a
                                    href="#program"
                                    className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-gray-900 rounded-lg sm:rounded-xl hover:bg-gray-50 transition-all text-sm sm:text-base font-medium border border-gray-300"
                                >
                                    Программа курса
                                </a>
                            </div>

                            <div className="flex flex-wrap gap-4 sm:gap-6 text-sm sm:text-base text-gray-600">
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                                    <span>3-4 дня</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                                    <span>24 акад. часа</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Users className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                                    <span>15-20 человек</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Check className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                                    <span>Сертификат</span>
                                </div>
                            </div>
                        </>
                    ) : courseType === 'executive' ? (
                        <>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 mb-6 sm:mb-8 leading-tight tracking-tight">
                                Anthropic Claude: AI для стратегических решений и роста бизнеса
                            </h1>

                            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-12 leading-relaxed">
                                Узнайте, как искусственный интеллект может трансформировать ваш бизнес. Получите практические навыки и стратегическое видение для внедрения AI
                            </p>

                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12">
                                <a
                                    href="#register"
                                    className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gray-900 text-white rounded-lg sm:rounded-xl hover:bg-gray-800 transition-all text-sm sm:text-base font-medium"
                                >
                                    Записаться на курс
                                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                                </a>
                                <a
                                    href="#program"
                                    className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-gray-900 rounded-lg sm:rounded-xl hover:bg-gray-50 transition-all text-sm sm:text-base font-medium border border-gray-300"
                                >
                                    Программа курса
                                </a>
                            </div>

                            <div className="flex flex-wrap gap-4 sm:gap-6 text-sm sm:text-base text-gray-600">
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                                    <span>3 дня</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                                    <span>09:00 - 13:00</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Users className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                                    <span>Малые группы</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Check className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                                    <span>Реальные кейсы</span>
                                </div>
                            </div>
                        </>
                    ) : courseType === 'claude-code' ? (
                        <>
                            <div className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full mb-4 text-sm font-semibold">
                                ⚡ Интенсивный однодневный курс
                            </div>

                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 mb-6 sm:mb-8 leading-tight tracking-tight">
                                Claude Code: Однодневнный интенсив
                            </h1>

                            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-12 leading-relaxed">
                                Освойте агентное программирование за один день. Делегируйте часы работы AI-агенту и автоматизируйте разработку от установки до CI/CD
                            </p>

                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12">
                                <a
                                    href="#register"
                                    className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg sm:rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all text-sm sm:text-base font-medium shadow-lg"
                                >
                                    Записаться на интенсив
                                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                                </a>
                                <a
                                    href="#program"
                                    className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-gray-900 rounded-lg sm:rounded-xl hover:bg-gray-50 transition-all text-sm sm:text-base font-medium border border-gray-300"
                                >
                                    Программа 6 часов
                                </a>
                            </div>

                            <div className="flex flex-wrap gap-4 sm:gap-6 text-sm sm:text-base text-gray-600">
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 text-orange-500" />
                                    <span className="font-medium">1 день</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 text-orange-500" />
                                    <span className="font-medium">6 акад. часов</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Users className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 text-orange-500" />
                                    <span className="font-medium">15-20 человек</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Check className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 text-orange-500" />
                                    <span className="font-medium">Сертификат</span>
                                </div>
                            </div>

                            {/* Дополнительный блок для Claude Code */}
                            <div className="mt-8 sm:mt-12 p-6 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl border border-orange-200">
                                <div className="grid grid-cols-3 gap-4 text-center">
                                    <div>
                                        <div className="text-2xl sm:text-3xl font-bold text-orange-700 mb-1">4</div>
                                        <div className="text-xs sm:text-sm text-gray-600">блока практики</div>
                                    </div>
                                    <div>
                                        <div className="text-2xl sm:text-3xl font-bold text-orange-700 mb-1">10x</div>
                                        <div className="text-xs sm:text-sm text-gray-600">ускорение</div>
                                    </div>
                                    <div>
                                        <div className="text-2xl sm:text-3xl font-bold text-orange-700 mb-1">CI/CD</div>
                                        <div className="text-xs sm:text-sm text-gray-600">автоматизация</div>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 rounded-full mb-4 text-sm font-semibold">
                                🤖 Интенсивный двухдневный курс
                            </div>

                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 mb-6 sm:mb-8 leading-tight tracking-tight">
                                Claude Code: Агентная автоматизация разработки
                            </h1>

                            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-12 leading-relaxed">
                                Глубокое погружение в агентную разработку за 2 дня. Полный цикл: от установки до production CI/CD, с финальным комплексным проектом
                            </p>

                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12">
                                <a
                                    href="#register"
                                    className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg sm:rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all text-sm sm:text-base font-medium shadow-lg"
                                >
                                    Записаться на курс
                                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                                </a>
                                <a
                                    href="#program"
                                    className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-gray-900 rounded-lg sm:rounded-xl hover:bg-gray-50 transition-all text-sm sm:text-base font-medium border border-gray-300"
                                >
                                    Программа 12 часов
                                </a>
                            </div>

                            <div className="flex flex-wrap gap-4 sm:gap-6 text-sm sm:text-base text-gray-600">
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 text-purple-600" />
                                    <span className="font-medium">2 дня</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 text-purple-600" />
                                    <span className="font-medium">12 акад. часов</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Users className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 text-purple-600" />
                                    <span className="font-medium">15-20 человек</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Check className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 text-purple-600" />
                                    <span className="font-medium">Сертификат</span>
                                </div>
                            </div>

                            {/* Дополнительный блок для Агентной автоматизации */}
                            <div className="mt-8 sm:mt-12 p-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl border border-purple-200">
                                <div className="grid grid-cols-3 gap-4 text-center">
                                    <div>
                                        <div className="text-2xl sm:text-3xl font-bold text-purple-700 mb-1">6</div>
                                        <div className="text-xs sm:text-sm text-gray-600">модулей обучения</div>
                                    </div>
                                    <div>
                                        <div className="text-2xl sm:text-3xl font-bold text-purple-700 mb-1">CI/CD</div>
                                        <div className="text-xs sm:text-sm text-gray-600">интеграция</div>
                                    </div>
                                    <div>
                                        <div className="text-2xl sm:text-3xl font-bold text-purple-700 mb-1">Проект</div>
                                        <div className="text-xs sm:text-sm text-gray-600">полный цикл</div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Hero;
